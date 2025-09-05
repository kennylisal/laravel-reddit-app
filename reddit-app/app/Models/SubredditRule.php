<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SubredditRule extends Model
{
    /** @use HasFactory<\Database\Factories\SubredditRuleFactory> */
    use HasFactory;
    protected $fillable = [
        'header',
        'description',
        'order_of_sequence',
        'subreddit_id'
    ];

    protected $table = 'subreddit_rules';
}
