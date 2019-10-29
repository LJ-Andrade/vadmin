<?php

namespace App\Http\Resources\Gallery;
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\GalleryArticle;

class GalleryController extends Controller
{
    public function index(Request $request)
    {

        $articles = GalleryArticle::orderBy('id', 'ASC')->paginate(20);
        // dd($articles);
        return view('vadmin.gallery.index')
            ->with($articles, 'articles');
    }
}
