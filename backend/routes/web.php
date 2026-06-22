<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MessageController;

Route::get('/', function () {
    return view('welcome');
});



Route::get('/insert', [MessageController::class, 'store']);
