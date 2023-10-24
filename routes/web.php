<?php

use App\Http\Controllers\PagesController;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\TaskListController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::controller(PagesController::class)->group(function () {
    Route::get('/', 'home')->name('home');
});

Route::controller(UserController::class)->group(function () {
    Route::get('/login', 'login')->name('login');
    Route::post('/auth', 'auth')->name('auth');
    
    Route::get('/register', 'register')->name('register');
    Route::post('/register', 'createUser')->name('createUser');
});

Route::controller(TaskListController::class)->prefix('list')->name('list.')->group(function () {
    Route::get('/list', 'index')->name('index');
    Route::post('/list', 'store')->name('store');

    Route::put('/list/{list}', 'update')->name('update');
    Route::delete('/list/{list}', 'delete')->name('destory');
});

Route::controller(TaskController::class)->prefix('task')->name('task.')->group(function () {
    Route::get('/task', 'index')->name('index');
    Route::post('/task{list}', 'store')->name('store');

    Route::put('/task/{task}', 'update')->name('update');
    Route::delete('/task/{task}', 'delete')->name('destory');
});