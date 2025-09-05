<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;

class Post extends Model
{
    /** @use HasFactory<\Database\Factories\PostsFactory> */
    use HasFactory;
    use HasSlug;
    protected $fillable = [
        'title',
        'content',
        'comment_num',
        'like_num',
        'created_at',
        'status',
        'subreddit_id',
        'user_id',
        'image',
        'slug',
        'content_type'
    ];
    protected $table = 'posts';
    protected $appends = ['postAge']; // Automatically include postAge in JSON
    protected $hidden = ['id'];
    public function getPostAgeAttribute(): string
    {
        if (!$this->created_at) {
            return 'Unknown';
        }

        $now = now();
        $createdAt = $this->created_at;

        $hours = floor($createdAt->diffInHours($now));
        if ($hours < 24) {
            return $hours . ' hour' . ($hours != 1 ? 's' : '');
        }

        $days = floor($createdAt->diffInDays($now));
        if ($days < 7) {
            return $days . ' day' . ($days != 1 ? 's' : '');
        }

        $weeks = floor($createdAt->diffInWeeks($now));
        if ($weeks < 4) {
            return $weeks . ' week' . ($weeks != 1 ? 's' : '');
        }

        $months = $createdAt->diffInMonths($now);
        if ($months < 12) {
            return $months . ' month' . ($months != 1 ? 's' : '');
        }

        $years = $createdAt->diffInYears($now);
        return $years . ' year' . ($years != 1 ? 's' : '');
    }
    public function author()
    {
        return $this->belongsTo(User::class, 'user_id', 'id', 'author');
    }

    public function subreddit()
    {
        return $this->belongsTo(Subreddit::class, 'subreddit_id', 'id', 'subreddit');
    }
    public function getSlugOptions(): SlugOptions
    {
        return SlugOptions::create()
            ->generateSlugsFrom('title')
            ->saveSlugsTo('slug');
    }
    public function getRouteKeyName()
    {
        return 'slug';
    }
}
