<?php

use App\Mail\KryptoniteFound;

Auth::routes();


Route::get('/', function () {
    return view('web');
});

Route::get('guest', function () {
    return view('vadmin.guest');
});

Route::get('helpers', function () {
    return view('vadmin.dev.helpers');
});


Route::get('profile', 'UsersController@profile');
Route::post('profile', 'UsersController@updateAvatar');



//////// VADMIN Index //////////
Route::get('/vadmin', 'VadminController@index')->middleware('admin');

// Route::get('vadmin', [
// 	'as'   => 'web.vadmin',
// 	'uses' => 'VadminController@index',
// ]);

//////// PORTFOLIO ///////////
Route::get('portfolio', [
	'as'   => 'web.portfolio',
	'uses' => 'WebController@portfolio',
]);

// Show Article / Portfolio
Route::get('article/{slug}', [
	'uses' => 'WebController@showWithSlug',
	'as'   => 'web.portfolio.article'
])->where('slug', '[\w\d\-\_]+');

// Article Searcher
Route::get('categories/{name}', [
	'uses' => 'WebController@searchCategory',
	'as'   => 'web.search.category'
]);

Route::get('tag/{name}', [
	'uses' => 'WebController@searchTag',
	'as'   => 'web.search.tag'
]);




// Article Status update (active or paused)
Route::post('updateStatus/{id}', 'ArticlesController@updateStatus');

// CRUD
Route::group(['prefix' => 'vadmin', 'middleware' => ['auth','admin']], function(){

	Route::resource('users', 'UsersController');
	Route::get('users/{id}/destroy', [
		'uses' => 'UsersController@destroy',
		'as'   => 'users.destroy'
	]);

	Route::resource('categories', 'CategoriesController');
	Route::get('categories/{id}/destroy', [
		'uses' => 'CategoriesController@destroy',
		'as'   => 'categories.destroy'
	]);

	Route::resource('tags', 'TagsController');
	Route::get('tags/{id}/destroy', [
		'uses' => 'TagsController@destroy',
		'as'   => 'tags.destroy'
	]);

	Route::resource('articles', 'ArticlesController');
	Route::get('articles/{id}/destroy', [
		'uses' => 'ArticlesController@destroy',
		'as'   => 'articles.destroy'
	]);

	Route::post('deleteArticleImg/{id}', 'ArticlesController@deleteArticleImg');
	// Route::post('deleteArticleImg/{id}', [
	// 	'uses' => 'ArticlesController@deleteArticleImg',
	// 	'as'   => 'articleImage.destroy'
	// ]);

	Route::get('images', [
		'uses' => 'ImagesController@index',
		'as'   => 'images.index',
	]);

});


// Mail Sender
Route::post('/sendmail', function (\Illuminate\Http\Request $request,
	\Illuminate\Mail\Mailer $mailer) {

	$mailer
		->to($request->all())
		->send(new \App\Mail\svvadmin($request->all()));
	return redirect()->back();

})->name('sendmail');



// Esto funciona bien para entrar por Vadmin hacia el login y no directamente al admin
// Route::get('/vadmin', 'HomeController@index')->middleware('admin');