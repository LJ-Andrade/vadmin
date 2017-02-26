<?php

namespace App\Http\Controllers;
use Carbon\Carbon;
use Illuminate\Http\Request;

class WebController extends Controller
{

	public function __construct()
	{
        // Date convert to passed time plugin
		Carbon::setLocale('es');
	}

    public function home()
    {
    
        return view('web');
    }


}
