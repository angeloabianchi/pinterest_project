<?php

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

/* ------------ \/ Rotas utilizando o fake server json (sem os 'cors') \/ ------------ */
//criar pin
//Route::post('/pins', 'PinsController@create');

//pegar todos os pins
//Route::get('/pins', 'PinsController@findAll');

//pegar um único pin, usando o parametro 'id'
//Route::get('/pins/{id}', 'PinsController@findById');

//update pin by id
//Route::put('/pins/{id}', 'PinsController@update');

//delete pin by id
//Route::delete('/pins/{id}', 'PinsController@delete');

//find board of a pin
//Route::get('/pins/{id}/board', 'PinsController@findBoard');



//criar board
//Route::post('/boards', 'BoardsController@create');

//pegar todos os boards
//Route::get('/boards', 'BoardsController@findAll');

//pegar um único board, usando o parametro 'id'
//Route::get('/boards/{id}', 'BoardsController@findById');

//update board by id
//Route::put('/boards/{id}', 'BoardsController@update');

//delete board by id
//Route::delete('/boards/{id}', 'BoardsController@delete');

// Get all the pins of the board
//Route::get('boards/{id}/pins', 'BoardsController@findPins');

//Get one pin of the board
//Route::get('boards/{id}/pins/{pin_id}', 'BoardsController@findPinOfBoard');



//criar user
//Route::post('/users', 'UsersController@create');

//pegar todos os users
//Route::get('/users', 'UsersController@findAll');

//pegar um único user, usando o parametro 'id'
//Route::get('/users/{id}', 'UsersController@findById');

//update user by id
//Route::put('/users/{id}', 'UsersController@update');

//delete user by id
//Route::delete('/users/{id}', 'UsersController@delete');

// Get all the boards of the user
//Route::get('users/{id}/boards', 'UsersController@findBoards');


/*  ---------------------- \/ Rotas do backend para o frontend \/ --------------------------- */


/* criar um 'Cors' que está no diretório 'backend-api/Http/Middleware' para fazer a conexão do frontend com o backend (mais detalhes no arquivo Cors.php */

//Route do front para o backend
Route::middleware('cors')->get('/users', 'UsersController@findAll');
Route::middleware('cors')->get('/user/{id}', 'UsersController@findById');
Route::middleware('cors')->post('/users', 'UsersController@create');
Route::middleware('cors')->put('/users/{id}', 'UsersController@update');
Route::middleware('cors')->delete('/users/{id}', 'UsersController@delete');
Route::middleware('cors')->get('/users/{id}/boards', 'UsersController@findBoards');
Route::middleware('cors')->get('/users/{id}/pins', "UsersController@findPins");

Route::middleware('cors')->get('/boards', 'BoardsController@findAll');
Route::middleware('cors')->get('/board/{id}', 'BoardsController@findById');
Route::middleware('cors')->post('/boards', 'BoardsController@create');
Route::middleware('cors')->put('/boards/{id}', 'BoardsController@update');
Route::middleware('cors')->delete('/boards/{id}', 'BoardsController@delete');
Route::middleware('cors')->get('/boards/{id}/pins', 'BoardsController@findPins');

Route::middleware('cors')->get('/pins', 'PinsController@findAll');
Route::middleware('cors')->get('/pin/{id}', 'PinsController@findById');
Route::middleware('cors')->post('/pins', 'PinsController@create');
Route::middleware('cors')->put('/pins/{id}', 'PinsController@update');
Route::middleware('cors')->delete('/pins/{id}', 'PinsController@delete');
Route::middleware('cors')->get('/pins/{id}/board', 'PinsController@findBoard');
