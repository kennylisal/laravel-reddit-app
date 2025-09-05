<?php

namespace App\Http\Controllers;

use App\Models\Subreddit;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SubredditController extends Controller
{
    public function index(Subreddit $subreddit)
    {
        if (!$subreddit->exists) {
            dd("Tidak ketemuuuu");
            abort(404, 'Subreddit not found');
        }
        // Subreddit::where('slug','==','impedit-earum-aut-explicabo')
        $posts = $subreddit->posts()->with([
            'author'
        ])->latest()->paginate(20, ['*'], 'page', 1);

        $subreddit = $subreddit->load([
            'flairs',
            'rules'
        ]);
        return Inertia::render('subreddit', [
            'subredditInfo' => $subreddit,
            'posts' => $posts
        ]);
    }
}
