# Reddit Clone (Basic Version)

## Introduction

This project is an ongoing attempt to clone the core functionalities of Reddit using Laravel as the backend framework and React for the frontend, with a strong emphasis on Docker containerization from the ground up. Built specifically to demonstrate proficiency in Docker for recruiters, the entire setup—including PHP/Apache, Node.js for frontend assets, and MySQL—is dockerized for seamless, reproducible environments. It focuses on basic features like creating and viewing posts, managing communities (subreddits), user interactions such as liking and subscribing, and guest access without requiring login. The project is not yet complete but provides a solid foundation with models, migrations, factories, and a custom seeder. It emphasizes clean architecture with corresponding controllers for each model, following standard Laravel practices.

## Project Overview

This Reddit clone replicates essential Reddit features in a simplified manner, all orchestrated through a fully dockerized architecture to showcase containerization best practices:

- **Dockerized Environment**: The project leverages Docker Compose for multi-container orchestration (Laravel app + MySQL), a custom Dockerfile for PHP 8.3-Apache with Node.js integration, and a Makefile for streamlined commands like `make bash` or `make composer-update`. This ensures consistent development, testing, and deployment across machines, highlighting skills in building scalable, isolated services.
- **Posts**: Users can create, view, and interact with posts (e.g., text or image-based content).
- **Subreddits (Communities)**: Users can create and manage communities, including adding rules and flairs.
- **User Interactions**: Liking posts, subscribing to subreddits, and viewing content as a guest or authenticated user.
- **Guest Access**: Non-logged-in users can browse public posts and subreddits without authentication.
- **Data Management**: Each model (e.g., Post, Subreddit, User) has a dedicated controller for CRUD operations. Migrations are in `database/migrations`, and factories in `database/factories`.
- **Seeding**: A custom `ResetSeeder` is provided in `database/seeders/ResetSeeder.php` to reset and populate the database with fake data for testing (e.g., users, posts, likes, subscriptions, rules, and flairs).

For development, SQLite is used for simplicity, but the Docker setup includes MySQL for production-like environments, demonstrating flexible database handling within containers.

## Features

Based on the implemented models, the basic functions include:

- **Post Creation and Viewing**: Authenticated users can create posts with titles, content, images, and flairs. Guests can view public posts. Posts include computed attributes like age (e.g., "2 hours ago") and relationships to authors and subreddits.
- **Post Liking**: Users can like posts, with like counts updated automatically.
- **Subreddit Management**: Create communities with descriptions, images, backgrounds, and settings (e.g., type, maturity level). Includes member counts and relationships to posts.
- **Subreddit Rules and Flairs**: Add custom rules (with headers and descriptions) and flairs to subreddits.
- **Subscriptions**: Users can subscribe to subreddits, tracking membership.
- **User Profiles**: Basic user authentication and profiles with slugs for SEO-friendly URLs.
- **Guest Browsing**: All public content is accessible without login, while creation/editing requires authentication.

## Technologies Used

- **Backend**: Laravel (PHP framework) for API and logic, with Eloquent ORM for models.
- **Frontend**: React (via a starter kit, e.g., similar to Laravel Breeze with React scaffolding) for dynamic UI.
- **Database**: SQLite for development; MySQL (via Docker) for production/testing.
- **Containerization**: Docker for environment consistency, with PHP 8.3-Apache base image including Node.js for asset compilation.
- **Other Tools**: Composer for PHP dependencies, NPM/Bun for frontend assets, Faker for seeding data.
- **Additional Libraries**: Spatie's Laravel Sluggable for slug generation.

## Installation

This project follows standard Laravel installation but is dockerized for easy setup. It uses a React starter kit for the frontend (assumed to be integrated via something like Laravel Breeze or a custom template). For development, SQLite is configured, but Docker uses MySQL.

### Prerequisites

- Docker and Docker Compose
- Git
- Node.js/NPM (for frontend assets)

### Steps

1. **Clone the Repository**:

   ```
   git clone <your-repo-url>
   cd <repo-folder>
   ```

2. **Set Up Docker**:

   - The project is dockerized with `docker-compose.yml` and `Dockerfile` in the root.
   - Build and start containers:
     ```
     docker-compose up -d --build
     ```
     This sets up:
     - `laravel-app`: PHP 8.3 with Apache, Node.js for React compilation, and volumes mapping `./reddit-clone` to `/var/www/html`.
     - `mysql`: MySQL 8.0 database (`reddit_clone`) with root password `password`.
     - Network: `laravel_network` for communication.
     - Ports: Host 8000 → Container 80 (app), 3306 → 3306 (DB).

3. **Install Dependencies** (via Makefile or directly):

   - Use the `Makefile` for convenience:
     ```
     make composer-update  # Runs composer update inside the container
     ```
   - Alternatively, enter the container:
     ```
     make bash  # Opens bash in the reddit-clone container
     composer install
     npm install  # Or bun install for frontend
     ```

4. **Configure Environment**:

   - Copy `.env.example` to `.env` inside `reddit-clone` and update variables (e.g., DB_CONNECTION=sqlite for dev, or mysql for Docker).
   - Generate app key:
     ```
     docker exec -it reddit-clone php artisan key:generate
     ```

5. **Run Migrations and Seed Data**:

   - Migrate tables:
     ```
     docker exec -it reddit-clone php artisan migrate
     ```
   - Seed database (using custom ResetSeeder):
     ```
     docker exec -it reddit-clone php artisan db:seed --class=ResetSeeder
     ```
     This resets tables and generates fake data: 100 users, 40 subreddits, 400 posts, likes, subscriptions, rules, and flairs.

6. **Compile Frontend Assets**:

   ```
   docker exec -it reddit-clone npm run build  # Or bun run build
   ```

7. **Access the Application**:
   - Visit `http://localhost:8000` in your browser.
   - Stop containers: `make stop` or `docker-compose down`.

**Note on Makefile**: Simplifies commands:

- `make bash`: Enter container shell.
- `make composer-update`: Update Composer dependencies.
- `make stop`: Stop Docker Compose.
- `make data`: (Incomplete in provided file; customize for seeding or other tasks).

For non-Docker dev (using SQLite):

- Follow standard Laravel: `composer install`, `php artisan migrate`, `php artisan serve`.

## Roadmap

Here are the list of steps to build all the features and finish the project

- [x] Create SQL tables for all models (via migrations)
- [x] Set up basic models and relationships (Post, Subreddit, User, etc.)
- [x] Implement factories and custom seeder (ResetSeeder)
- [x] Dockerize the project with PHP, Apache, Node.js, and MySQL
- [x] Create Makefile for easy container management
- [ ] Implement API endpoints with controllers
  - [ ] Post endpoints (create, read, update, delete, like)
  - [ ] Subreddit endpoints (create, manage rules/flairs, subscribe)
  - [ ] User endpoints (auth, profile)
- [ ] Integrate RBAC (Role-Based Access Control) for moderation
  - [ ] Add middleware for authorization
  - [ ] Define roles (e.g., user, moderator, admin)
- [ ] Build React frontend views
  - [ ] Home feed with posts (guest/authenticated)
  - [ ] Subreddit pages with rules and flairs
  - [ ] Post creation form
  - [ ] User profile and subscription management
- [ ] Add search functionality for posts and subreddits
- [ ] Implement commenting system (new model/controller)
- [ ] Integrate image uploads and handling
- [ ] Add pagination and sorting (e.g., by hot, new)
- [ ] Deploy to production (e.g., configure for MySQL, add env vars)
