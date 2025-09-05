<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;

class Subreddit extends Model
{
    use HasFactory;
    use HasSlug;
    protected $fillable = [
        'name',
        'created_at',
        'description',
        'type',
        'is_active',
        'image',
        'slug',
        'background_image',
        'is_mature',
        'description_header',
        'members_num'
    ];
    protected $table = 'subreddits';
    protected $hidden = ['id'];
    //

    public function posts()
    {
        return $this->HasMany(Post::class);
    }

    public function getSlugOptions(): SlugOptions
    {
        return SlugOptions::create()
            ->generateSlugsFrom('name')
            ->saveSlugsTo('slug');
    }
    public function getRouteKeyName()
    {
        return 'slug';
    }
    public function rules()
    {
        return $this->hasMany(SubredditRule::class, 'subreddit_id',);
    }
    public function flairs()
    {
        return $this->hasMany(SubredditFlair::class, 'subreddit_id');
    }
}
