<?php

use App\Http\Controllers\PagesController;
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
