<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MessageController;

Route::get('/', function () {
    return view('welcome');
});



Route::get('/insert', [MessageController::class, 'store']);

Route::get('/test', function () {
    return response()->json([
        'message' => 'Laravel is working on live server!'
    ]);
});