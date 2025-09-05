<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Subscribe extends Model
{
    use HasFactory;
    protected $table = 'subscribes';
    //
    protected $fillable = [
        'user_id','subreddit_id','created_at'
    ];
    public function subreddit(){
        return $this->belongsTo(Subreddit::class);
    }

    public function user(){
        return $this->belongsTo(User::class);
    }
}
