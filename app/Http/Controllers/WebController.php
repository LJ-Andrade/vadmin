<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Carbon\Carbon;
use App\Article;
use App\Category;
use App\Tag;
use App\Contact;
use Mail;
use App\Mail\WebContactMail;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Pagination\Paginator;

class WebController extends Controller
{

	public function __construct()
	{
		Carbon::setLocale('es');
	}

	public function home()
	{
		return view('web.index-es');
	}

	public function homeEs()
	{
		return view('web.index-es');
	}
	
	public function getDownload($data){
		
		$filename = $data;
		$file = public_path()."/web/pdf/".$filename;
		$headers = array('Content-Type: application/pdf',);
		return \Response::download($file, $data, $headers);
	}


	public function gallery(Request $request)
	{
		$images = array();
		for($i = 11; $i < 131; $i++)
		{
			array_push($images, 'webimages/gallery/'.$i.'.jpg');
		}

		$items = $this->paginate($images, 16);

		return view('web.portfolio.portfolio')
			->with('items', $items);
	}

	public function paginate($items, $perPage)
	{
		$pageStart = \Request::get('page', 1);
		// Start displaying items from this number;
		$offSet = ($pageStart * $perPage) - $perPage; 

		// Get only the items you need using array_slice
		$itemsForCurrentPage = array_slice($items, $offSet, $perPage, true);

		return new LengthAwarePaginator($itemsForCurrentPage, count($items), $perPage,Paginator::resolveCurrentPage(), array('path' => Paginator::resolveCurrentPath()));
	}

	public function searchCategory($name)
	{
		$category = Category::SearchCategory($name)->first();
		$articles=$category->article()->paginate(12);
		$articles->each(function($articles){
				$articles->category;
				$articles->images;
		});
		return view('web.portfolio.portfolio')->with('articles', $articles);
	}

	public function searchTag($name)
	{
		$tag = Tag::SearchTag($name)->first();
		$articles = $tag->article()->paginate(12);
		$articles->each(function($articles){
				$articles->category;
				$articles->images;
		});
		return view('web.portfolio.portfolio')->with('articles', $articles);
	}

	public function viewArticle($id)
	{
		$article = Article::find($id);
		$article->each(function($article){
				$article->category;
				$article->images;
				$article->tags;
				$article->colors;
		});
		return view('web.portfolio.article')->with('article', $article);
	}

	public function showWithSlug($slug) {
		$article = Article::where('slug', '=', $slug)->first();
		return view('web.portfolio.article')->with('article', $article);
	}

	public function contact()
	{  
		return view('contacto');
	}

	public function sendContact(Request $request)
	{
		// dd($request->all());
		try{
			$contact = new Contact();
			$contact->fill($request->all());
			$contact->save();
			$subject = 'Nuevo contacto desde la web';
			
			try{
				Mail::to(APP_EMAIL_1)->send(new WebContactMail($subject, $contact));
			}
			catch(Exception $e){ 
				// Nothing
			}
			
			return response()->json(['response' => 1,
									 'message'    => '0']); 
		} catch(Exception $e) {
			return response()->json(['response' => 0,
									 'message'    => $e->getMessage()]); 
		}
	}
}
