<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PostController extends Controller
{
    public function index()
    {

        $posts = Post::with([
            'subreddit' => function ($query) {
                $query->select('id', 'slug', 'image');
            },
        ])->latest()->take(20)->get();

        return Inertia::render('main', [
            'data' => $posts
        ]);
        // return $posts;
    }
}
