<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//criar pin
Route::post('/pins/{id}', 'PinsController@create');

//pegar todos os pins
Route::get('/pins', 'PinsController@findAll');

//pegar um único pin, usando o parametro 'id'
Route::get('/pins/{id}', 'PinsController@findById');

//update pin by id
Route::put('/pins/{id}', 'PinsController@update');

//delete pin by id
Route::delete('/pins/{id}', 'PinsController@delete');
