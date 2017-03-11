<?php

namespace App\Http\Controllers\Portfolio;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Tag;

class TagsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {

        $tags = Tag::search($request->name)->orderBy('id', 'ASC')->paginate(12);

        return view('vadmin.portfolio.tags.index')->with('tags', $tags);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('vadmin.tags.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    // public function store(Request $request)
    // {
    //     $this->validate($request,[

    //         'name'     => 'max:120|required|unique:tags',

    //     ]);

    //     $tag = new Tag($request->all());
    //     $tag->save();

    //     return redirect()->route('tags.index')->with('message','El talle '. $tag->name .' ha sido creado');

    // }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $tag = Tag::find($id);
        return view('vadmin.tags.edit')->with('tag', $tag);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    // public function update(Request $request, $id)
    // {
    //     $this->validate($request,[

    //         'name'     => 'max:120|required|unique:tags',

    //     ]);
        
    //     $tag = Tag::find($id);
    //     $tag->fill($request->all());
        
    //     $tag->save();

    //     return redirect()->route('tags.index')->with('message', 'El talle '. $tag->name.' ha sido actualizado');
    // }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $tag = Tag::find($id);
        $tag->delete();

        return redirect()->route('tags.index')->with('message', 'El talle '. $tag->name.' ha sido eliminado');
    }

    
////////////////////////////////////////
//                                    //
//               AJAX                 //
//                                    //
////////////////////////////////////////


    // ---------- List -------------- //
    public function ajax_list()
    {
        $tags = Tag::orderBy('id', 'DESC')->paginate(12);
        return view('vadmin/tags/list')->with('tags', $tags);
    }



    // ---------- Store --------------- //
    public function store(Request $request)
    {
        $this->validate($request,[
            'name' => 'max:120|required|unique:tags'
        ],[
            'name.unique'         => 'El talle ya existe'
        ]);

        if ($request->ajax())
        {            
            $result = Tag::create($request->all());
            if ($result)
            {
                return response()->json(['success'=>'true', 'message'=>'Talle creado']);
            } else {
                return response()->json(['success'=>'false', 'error'=>'Error']);        
            }
        }
    }


    // ---------- Edit --------------- //
    public function ajax_edit($id)
    {
        $tag = Tag::find($id);
        return response()->json($tag);
    }


    // ---------- Update -------------- //
    public function update(Request $request, $id)
    {
        $this->validate($request,[
            'name'     => 'max:120|required|unique:categories'
        ],[
            'name.unique'         => 'La categoría ya existe'
        ]);
        
        $tag = Tag::find($id);
        $tag->fill($request->all());

        $result = $tag->save();
        if ($result) {
            return response()->json(['success'=>'true']);
        } else {
            return response()->json(['success'=>'false']);
        }
    }


    // ---------- Delete -------------- //
    public function ajax_delete(Request $request, $id)
    {
        $tag  = Tag::find($id);
        $tag->delete();
        echo 1;
    }



} // End
