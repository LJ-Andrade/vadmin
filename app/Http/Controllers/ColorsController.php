<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Image;

class ColorsController extends Controller
{
    public function index()
    {
    	$colors = Color::all();
    	$colors->each(function($colors){
    		colors->article;
    	});

		return view('vadmin.colors.index')->with('colors', $colors);
    }
}
