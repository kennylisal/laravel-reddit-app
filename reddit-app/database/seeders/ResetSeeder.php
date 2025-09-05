<?php

namespace Database\Seeders;

use App\Models\PostLike;
use App\Models\Post;
use App\Models\Subreddit;
use App\Models\SubredditFlair;
use App\Models\SubredditRule;
use App\Models\Subscribe;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;

class ResetSeeder extends Seeder
{
    // Post::where('like_num','>',0)->take(5)->get()
    // Subreddit::where('members_num','>',0)->take(5)->get()

    public function run(): void
    {
        $ammount_of_user_created = 100;
        PostLike::query()->delete();
        Post::query()->delete();
        Subreddit::query()->delete();
        User::query()->delete();
        Subscribe::query()->delete();
        //
        User::factory($ammount_of_user_created)->create();
        Subreddit::factory(40)->create();
        Post::factory(400)->create();
        // PostLikes::factory(150)->create();

        //post likes v2
        $user_ids = User::pluck('id')->toArray();
        $n_posts_liked = 90;
        $posts_query = Post::take($n_posts_liked)->pluck('id');

        //part 1
        //
        $posts = $posts_query->toArray();
        $all_likes_data = [];
        DB::transaction(function () use ($posts, $user_ids, &$all_likes_data) {
            //optimization
            // DB::statement('SET FOREIGN_KEY_CHECKS=0;');
            DB::disableQueryLog();
            //

            foreach ($posts as $post) {
                $ammount_of_likes = rand(50, 95);
                $selected_user_ids = Arr::random($user_ids, $ammount_of_likes);
                // $selected_user_ids = array_unique($selected_user_ids);
                //update post like count
                Post::find($post)->update(['like_num' => $ammount_of_likes]);

                foreach ($selected_user_ids as $user_id) {
                    $all_likes_data[] = [
                        'created_at' => fake()->dateTimeBetween('-20 days', 'now'),
                        'user_id' => $user_id,
                        'post_id' => $post
                    ];
                }
            }
            PostLike::insert($all_likes_data);
            //Re-enable foreign key check
            // DB::statement('SET FOREIGN_KEY_CHECKS=1;');
            DB::enableQueryLog();
        });

        //part 2
        //
        $posts = Post::skip($n_posts_liked)->take($n_posts_liked)->pluck('id')->toArray();
        $all_likes_data = [];
        DB::transaction(function () use ($posts, $user_ids, &$all_likes_data) {
            //optimization
            // DB::statement('SET FOREIGN_KEY_CHECKS=0;');
            DB::disableQueryLog();
            //

            foreach ($posts as $post) {
                $ammount_of_likes = rand(50, 95);
                $selected_user_ids = Arr::random($user_ids, $ammount_of_likes);
                // $selected_user_ids = array_unique($selected_user_ids);
                //update post like count
                Post::find($post)->update(['like_num' => $ammount_of_likes]);

                foreach ($selected_user_ids as $user_id) {
                    $all_likes_data[] = [
                        'created_at' => fake()->dateTimeBetween('-20 days', 'now'),
                        'user_id' => $user_id,
                        'post_id' => $post
                    ];
                }
            }
            PostLike::insert($all_likes_data);
            //Re-enable foreign key check
            // DB::statement('SET FOREIGN_KEY_CHECKS=1;');
            DB::enableQueryLog();
        });

        //subreddit_member
        $subreddit_ids = Subreddit::pluck('id')->toArray();
        $subreddit_subscriber_data = [];
        DB::transaction(function () use ($subreddit_ids, $user_ids, &$subreddit_subscriber_data) {
            //optimization
            // DB::statement('SET FOREIGN_KEY_CHECKS=0;');
            DB::disableQueryLog();
            //
            foreach ($subreddit_ids as $subreddit) {
                $ammount_of_members = rand(50, 95);
                $selected_user_ids = Arr::random($user_ids, $ammount_of_members);
                Subreddit::find($subreddit)->update(['members_num' => $ammount_of_members]);
                foreach ($selected_user_ids as $user_id) {
                    $subreddit_subscriber_data[] = [
                        'created_at' => fake()->dateTimeBetween('-40 days', 'now'),
                        'user_id' => $user_id,
                        'subreddit_id' => $subreddit
                    ];
                }
            }

            Subscribe::insert($subreddit_subscriber_data);
            //Re-enable foreign key check
            // DB::statement('SET FOREIGN_KEY_CHECKS=1;');
            DB::enableQueryLog();
        });


        //subreddit_flair
        $flairOptions = [
            'AMA',
            'Meme',
            'Question',
            'Help',
            'News',
            'Critique',
            'Discussion',
            'Stories',
            'Guide',
            'Review',
            'Rant',
            'PSA',
            'Tutorial'
        ];
        foreach ($subreddit_ids as $subreddit) {
            foreach ($flairOptions as $option) {
                if (rand(0, 1) == 1) {
                    SubredditFlair::create([
                        'name' => $option,
                        'subreddit_id' => $subreddit
                    ]);
                }
            }
        }

        foreach ($subreddit_ids as $subreddit) {
            $numOfRules = rand(5, 10);
            for ($i = 0; $i < $numOfRules; $i++) {
                SubredditRule::create([
                    'order_of_sequence' => $i + 1,
                    'subreddit_id' => $subreddit,
                    'header' => fake()->sentence(3, true),
                    'description' => fake()->paragraph(1)
                ]);
            }
        }
    }
}

//php artisan migrate --seed -> ini untuk migrate dan nge-seed
//php artisan db:seed

//post likes
// $post_ids = Post::inRandomOrder()->take(100)->pluck('id')->toArray();
// $user_ids = User::inRandomOrder()->take(60)->pluck('id')->toArray();
// foreach ($post_ids as $post) {
//     foreach ($user_ids as $user) {
//         if (rand(0, 1) == 1) {
//             PostLike::create([
//                 'created_at' => fake()->dateTimeBetween('-20 days', 'now'),
//                 'user_id' => $user,
//                 'post_id' => $post
//             ]);
//         }
//     }
// }

// for ($i = 0; $i < $ammount_of_likes; $i++) {
//     PostLike::create([
//         'created_at' => fake()->dateTimeBetween('-20 days', 'now'),
//         'user_id' => $user_ids[$i],
//         'post_id' => $post
//     ]);
// }

//subreddit_member
// $subreddit_ids = Subreddit::pluck('id')->toArray();
// $subreddit_subscriber_data = [];
// foreach ($subreddit_ids as $subreddit) {
//     foreach ($user_ids as $user) {
//         if (rand(0, 2) == 1) {
//             Subscribe::create([
//                 'created_at' => fake()->dateTimeBetween('-40 days', 'now'),
//                 'user_id' => $user,
//                 'subreddit_id' => $subreddit
//             ]);
//         }
//     }
// }
