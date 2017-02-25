<?php
// Esto lo puse yo
// use App\User;
use App\Article;
use Faker\Generator;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

/** @var \Illuminate\Database\Eloquent\Factory $factory */

$factory->define(Article::class, function (Generator $faker) {
    // static $password;

    return [
        'title'       => $faker->name,
        'content'     => 'kljlkjlkjlkjlkjlkjlkjlkjlkjlkjkljkljllkjlkjlkjlkjkljkljllkjlkjlkjlkjkljkljllkjlkjlkjlkjkljkljllkjlkjlkjlkjkljkljl',
        'code'        => str_random(10),
        'status'      => 'active',
        'user_id'     => '1',
        'category_id' => '22',
        'slug'        => $faker->name,
        'image'       => 'test.jpg'
    ];
    return $array;
});
