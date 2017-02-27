<?php
// Esto lo puse yo
// use App\User;
use App\User;
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

$factory->define(User::class, function (Generator $faker) {
    // static $password;

    return [
        'name'        => $faker->name,
        'email'       => $faker->email,
        'password'    => '12121212',
        'avatar'       => 'user-gen.jpg'
    ];
    return $array;
});
