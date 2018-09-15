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

class WebController extends Controller
{

	public function __construct()
	{
		Carbon::setLocale('es');
	}

	public function home()
	{
		return view('web.index');
	}
	
	public function getDownload($data){
		
		$filename = $data;
		$file = public_path()."/web/pdf/".$filename;
		$headers = array('Content-Type: application/pdf',);
		return \Response::download($file, $data, $headers);
	}

	public function portfolio(Request $request)
	{
		$articles = Article::search($request->title)->orderBy('id', 'DESC')->where('status', '1')->paginate(12);
		$articles->each(function($articles){
			$articles->category;
			$articles->images;
		}); 
		return view('web.portfolio.portfolio')
			->with('articles', $articles);
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

			//Mail::to(APP_EMAIL_1)->send(new WebContactMail($subject, $contact));
			
			return response()->json(['response' => 1,
									 'message'    => '0']); 
		} catch(Exception $e) {
			return response()->json(['response' => 0,
									 'message'    => $e->getMessage()]); 
		}
	}
}
