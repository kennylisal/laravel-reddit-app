<?php

namespace App\Http\Controllers;

use App\Models\Subreddit;
use Illuminate\Http\Request;

class SearchController extends Controller
{
    public function basic(Request $request)
    {
        $search = $request->input('search');
        $result = Subreddit::select('name', 'slug', 'image', 'members_num')->where('name', 'like', '%' . $search . '%')->limit(7)->get()->toArray();
        return response()->json(['results' => $result]);
    }
}
