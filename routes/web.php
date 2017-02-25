<?php

use App\Mail\KryptoniteFound;

Auth::routes();


//////////// WEB HOME ////////////
// Route::get('/', function () {
//     return view('web');
// });

Route::get('/', [
	'as'   => 'web',
	'uses' => 'WebController@home',
]);


///////// VADMIN Index ///////////
Route::get('/vadmin', 'VadminController@index')->middleware('admin');
Route::get('contacto', 'WebController@contact');

//////// WEB CATALOGUE ///////////
Route::get('catalogo', [
	'as'   => 'web.portfolio',
	'uses' => 'WebController@portfolio',
]);

// Show Article / Catalogue
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

	Route::get('images', [
		'uses' => 'ImagesController@index',
		'as'   => 'images.index',
	]);

});


Route::get('profile', 'UsersController@profile')->middleware('admin');
Route::post('profile', 'UsersController@updateAvatar')->middleware('admin');


// Mail Sender
Route::post('/sendmail', function (\Illuminate\Http\Request $request,
	\Illuminate\Mail\Mailer $mailer) {

	$mailer
		->to($request->all())
		->send(new \App\Mail\svvadmin($request->all()));
	return redirect()->back();

})->name('sendmail');


Route::get('guest', function () {
    return view('vadmin.guest');
});


// Esto funciona bien para entrar por Vadmin hacia el login y no directamente al admin
// Route::get('/vadmin', 'HomeController@index')->middleware('admin');



/////////////////////////////////////////////////
//                CRUDS - AJAX                 //
/////////////////////////////////////////////////
Route::group(['middleware' => ['auth', 'admin']], function()
{
	// ---------------- USERS ---------------------//
	Route::get('ajax_list_users/{page?}', 'UsersController@ajax_list');

	// ---------------- ARTICLES ------------------//
	Route::post('ajax_delete/{id}', 'ArticlesController@ajax_delete');
	Route::post('ajax_batch_delete/{id}', 'ArticlesController@ajax_batch_delete');
	Route::post('deleteArticleImg/{id}', 'ArticlesController@deleteArticleImg');
	
	// --------------- CATEGORIES -----------------//
	Route::get('ajax_list/{page?}', 'CategoriesController@ajax_list');
	Route::get('categories/{id}/ajax_edit', 'CategoriesController@ajax_edit');
	Route::get('categories/{id}', 'CategoriesController@update');
	Route::post('deleteCategory/{id}', 'CategoriesController@deleteCategory');

	// -------------- SIZES (Tags) ----------------//
	Route::get('ajax_tags_list/{page?}', 'TagsController@ajax_list');
	Route::post('deleteTag/{id}', 'TagsController@ajax_delete');
	Route::get('tags/{id}/ajax_edit', 'TagsController@ajax_edit');
	Route::get('tags/{id}', 'TagsController@update');

});


// Route::get('ajax_list/{page?}', 'CategoriesController@ajax_list')->middleware('admin');
// Route::get('categories/{id}/ajax_edit', 'CategoriesController@ajax_edit')->middleware('admin');
// Route::get('categories/{id}', 'CategoriesController@update')->middleware('admin');
// Route::post('deleteCategory/{id}', 'CategoriesController@deleteCategory');

