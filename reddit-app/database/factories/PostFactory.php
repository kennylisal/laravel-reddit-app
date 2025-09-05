<?php

namespace Database\Factories;

use App\Models\Subreddit;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Posts>
 */
class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {

        $title = fake()->sentence(3);
        $id = rand(1, 300);
        return [
            'title' => $title,
            'content' => fake()->paragraphs(3, true),
            'status' => 'active',
            'subreddit_id' => Subreddit::inRandomOrder()->first()->id,
            'user_id' => User::inRandomOrder()->first()->id,
            'created_at' => fake()->dateTimeBetween('-30 days', 'now'),
            'slug' => \Illuminate\Support\Str::slug($title),
            'image' => 'https://picsum.photos/id/' . $id . '/1080/720',
            'content_type' => fake()->randomElement(['text', 'link', 'image'])
        ];
    }
}
