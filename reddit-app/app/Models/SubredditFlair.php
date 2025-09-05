<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SubredditFlair extends Model
{
    /** @use HasFactory<\Database\Factories\SubredditFlairFactory> */
    use HasFactory;
    protected $fillable = [
        'name',
        'subreddit_id'
    ];
    protected $table = 'subreddit_flairs';
}
