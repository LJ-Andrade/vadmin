<?php

use App\Mail\KryptoniteFound;

Auth::routes();

/////////////////////////////////////////////////
//                   VADMIN                    //
/////////////////////////////////////////////////

// ---------------- Home ---------------------//
Route::get('/vadmin', 'VadminController@index')->middleware('admin');
Route::get('guest', function () {
    return view('vadmin.guest');
});

// ---------------- User Profile ---------------------//
Route::get('profile', 'UsersController@profile')->middleware('admin');
Route::post('profile', 'UsersController@updateAvatar')->middleware('admin');



/////////////////////////////////////////////////
//                   CRUDS                     //
/////////////////////////////////////////////////

Route::group(['prefix' => 'vadmin', 'middleware' => ['auth','admin']], function(){

	Route::resource('users', 'UsersController');
	Route::get('users/{id}/destroy', [
		'uses' => 'UsersController@destroy',
		'as'   => 'users.destroy'
	]);

});


/////////////////////////////////////////////////
//                CRUDS - AJAX                 //
/////////////////////////////////////////////////
Route::group(['middleware' => ['auth', 'admin']], function()
{
	// ---------------- USERS ---------------------//
	Route::get('ajax_list_users/{page?}', 'UsersController@ajax_list');
	Route::post('ajax_delete_user/{id}', 'UsersController@destroy');
	Route::post('ajax_batch_delete_users/{id}', 'UsersController@ajax_batch_delete');


});


/////////////////////////////////////////////////
//                     WEB                     //
/////////////////////////////////////////////////

// ------------------- Home -------------------//
Route::get('/', [
	'as'   => 'web',
	'uses' => 'WebController@home',
]);


// --------------- Catalogue ------------------//
Route::get('catalogo', [
	'as'   => 'web.portfolio',
	'uses' => 'WebController@portfolio',
]);

