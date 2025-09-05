<?php

use App\Http\Controllers\PostController;
use App\Http\Controllers\SubredditController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('welcome');
// })->name('home');

Route::get('/', [PostController::class, 'index'])->name('home');

Route::get('/r/{subreddit:slug}', [SubredditController::class, 'index'])->name('subreddit.index');


Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
