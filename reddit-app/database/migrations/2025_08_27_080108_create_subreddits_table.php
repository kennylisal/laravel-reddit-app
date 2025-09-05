<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('subreddits', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string("name");
            $table->text("description");
            $table->enum("type", ['public', 'restricted', 'private'])->default('public');
            $table->boolean('is_active');
            $table->string("slug")->unique();
            $table->string('image')->nullable();
            $table->string('background_image')->nullable();
            $table->string('description_header')->nullable();
            $table->boolean('is_mature')->nullable();
            $table->integer('members_num')->default(0);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('subreddits');
    }
};
