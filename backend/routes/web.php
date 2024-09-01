<?php

/** @var \Laravel\Lumen\Routing\Router $router */

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->group(['prefix' => 'api', 'middleware' => 'auth'], function () use ($router) {
    $router->get('movies', 'MovieController@index');
    $router->get('movies/{id}', 'MovieController@show');
    $router->post('movies', 'MovieController@store');
    $router->put('movies/{id}', 'MovieController@update');
    $router->delete('movies/{id}', 'MovieController@destroy');
});

//JWT
$router->group(['prefix' => 'auth'], function () use ($router) {
    $router->post('register', 'AuthController@register');
    $router->post('login', 'AuthController@login');
    $router->get('me', ['middleware' => 'auth', 'uses' => 'AuthController@me']);
});
