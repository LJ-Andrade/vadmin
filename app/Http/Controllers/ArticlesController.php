<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Category;
use App\Tag;
use App\Article;
use App\Image;
use App\Color;
use File;


class ArticlesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $articles = Article::search($request->title)->orderBy('id', 'DESCC')->paginate(12);
        $articles->each(function($articles){
            $articles->category;
            $articles->user;
            $articles->images;
            $articles->tags;
        });

        return view('vadmin.articles.index')->with('articles', $articles);

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $categories = Category::orderBy('name', 'ASC')->pluck('name', 'id');
        $tags       = Tag::orderBy('name', 'ASC')->pluck('name', 'id');
        $status     = Article::search($request->status)->get();

        return view('vadmin.articles.create')
            ->with('categories', $categories)
            ->with('tags', $tags)
            ->with('status', $status);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $this->validate($request,[
            // 'title'       => 'required|min:4|max:250|unique:articles',
            'category_id' => 'required',
            'slug'        => 'required|alpha_dash|min:5|max:255|unique:articles,slug',
            // 'content'     => 'required',
            'tags'        => 'required',
            'image'       => 'image',
            'code'        => 'required|unique:articles,code'
        ],[
            'title.required'       => 'Debe ingresar un nombre',
            'title.min'            => 'El título debe tener al menos 4 caracteres',
            'title.max'            => 'El título debe tener como máximo 120 caracteres',
            // 'title.unique'         => 'El título ya existe en otro artículo',
            'tags.required'        => 'Debe seleccionar al menos un talle',
            'category_id.required' => 'Debe ingresar una categoría',
            'slug.required'        => 'Se requiere un slug',
            'slug.min'             => 'El slug debe tener 5 caracteres como mínimo',
            'slug.max'             => 'El slug debe tener 255 caracteres como máximo',
            'slug.max'             => 'El slug debe tener guiones bajos en vez de espacios',
            'slug.unique'          => 'El slug debe ser único, algún otro artículo lo está usando',
            // 'content.min'          => 'El contenido debe contener al menos 60 caracteres',
            // 'content.required'     => 'Debe ingresar contenido',
            'image'                => 'El archivo adjuntado no es soportado',
            'code.required'        => 'El código de producto es requerido',
            'code.unique'          => 'El código de producto ya existe'
        ]);
       
        $path             = public_path("webimages/content/products/"); 
        $article          = new Article($request->all());

        // Store Article
        $article->user_id = \Auth::user()->id;
        $article->save();

        // Sync() fills pivote table. Gets un array.
        $article->tags()->sync($request->tags);

        $images           = $request->file('images');

        // Store Images 
        if ($article->save() && $images)
        {
            foreach($images as $phisic_image)
            {
                $name     = md5($phisic_image->getFilename().time()).'.'.$phisic_image->getClientOriginalExtension();
                $img      = \Image::make($phisic_image->path());
                
                $img->fit(400, 600)->save($path.'/'.$name);

                $image            = new Image();
                $image->name      = $name;
                $image->article()->associate($article);
                $image->save();
            }
        } 
        
        // Store Colors
        if($article->save() && $request->color) {

            $colors = $request->color;
            foreach($colors as $color){
                $name        = $color;
                $color       = new Color();
                $color->name = $name;
                $color->article()->associate($article);
                            
                $color->save();
            }
        }
        return redirect()->route('articles.index')->with('message','Artículo creado');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $article = Article::find($id);
        return view('vadmin.articles.show')->with('article', $article);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {   
        if($id) {
            
            $tags       = Tag::orderBy('name', 'DESC')->pluck('name', 'id');
            $article    = Article::find($id);
            $colors     = Color::orderBy('name', 'DESC')->pluck('name', 'id');
            $article->category;
            $categories = Category::orderBy('name', 'DESC')->pluck('name', 'id');
            $article->each(function($article){
                $article->images;
            });

            // Acá se llaman los id de los tags y se los convierte de objeto a array
            $actual_tags = $article->tags->pluck('id')->ToArray();
            $status      = $article->status;

            return view('vadmin.articles.edit')
                ->with('categories', $categories)
                ->with('article', $article)
                ->with('tags', $tags)
                ->with('actual_tags', $actual_tags)
                ->with('status', $status)
                ->with('colors', $colors);

        } else {
            return back()->with('message', 'El artículo ha sido eliminado recientemente');         
        }
    }
    

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {

        $path      = public_path("webimages/content/products/"); 

        $article   = Article::find($id);
        
        $article->fill($request->all());
        $article->save();

        if ($article->save() && $request->color) {
            foreach($request->color as $name) {
            
            $color        = new Color();
            $color->name  = $name;
            $color->article()->associate($article);
            $color->save();
            }
        }

        // Sync() fills pivote table. Gets un array.
        $article->tags()->sync($request->tags);

        $images    = $request->file('images');

        if ($article->save() && $images)
        {
            foreach($images as $phisic_image)
            {
                $name         = md5($phisic_image->getFilename().time()).'.'.$phisic_image->getClientOriginalExtension();
                $img          = \Image::make($phisic_image->path());
                
                $img->fit(600)->save($path.'/'.$name);

                $image        = new Image();
                $image->name  = $name;
                $image->article()->associate($article);
                $image->save();
            }
        } 
        return redirect()->route('articles.index')->with('message', 'Se ha editado el artículo con éxito');
    }


    public function updateStatus(Request $request, $id)
    {
        $article = Article::find($id);
        $article->status = $request->status;
        $result = $article->save();

        if ($result) {
            echo 1;
        } else {
            echo 0;
        }
    }

    public function deleteArticleImg(Request $request, $id)
    {
        $image  = Image::find($id);
        $path   = 'webimages/content/products/';

        File::Delete(public_path($path . $image->name));
        $image->delete();

        echo 1;
    }


    // ---------- Ajax Delete -------------- //
    public function ajax_delete(Request $request, $id)
    {
        $article  = Article::find($id);

        $path     = 'webimages/content/products/';
        $article->each(function($articles){
            $articles->images;
        });

        foreach ($article->images as $phisic_image) {
            File::Delete(public_path( $path . $phisic_image->name));
        }

        $article->delete();
        echo 1;
    }

     // ---------- Ajax Bach Delete -------------- //
    public function ajax_batch_delete(Request $request, $id)
    {
        $ids = $request->id;

        foreach ($ids as $id) {
        
            $article  = Article::find($id);
            $path     = 'webimages/content/products/';
            $article->each(function($articles){
                $articles->images;
            });
            foreach ($article->images as $phisic_image) {
                File::Delete(public_path( $path . $phisic_image->name));
            }
            $article->delete();
        }
        echo 1;
    }

} // End
