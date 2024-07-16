<?php

namespace Tests;

use App\Models\Movie;
use Laravel\Lumen\Testing\DatabaseMigrations;
use Laravel\Lumen\Testing\TestCase as BaseTestCase;

class MoviesTest extends BaseTestCase
{
    use DatabaseMigrations;

    public function createApplication()
    {
        return require __DIR__.'/../bootstrap/app.php';
    }

    public function test_can_show_movie()
    {
        $movie = new Movie([
            'title' => 'Sample Movie',
            'description' => 'Sample Description',
            'director' => 'Jane Doe',
            'release_year' => 2020
        ]);
        $movie->save();

        $this->get("/movies/{$movie->id}");
        $this->seeStatusCode(200);
        $this->seeJson($movie->toArray());
    }

    public function test_can_update_movie()
    {
        $movie = new Movie([
            'title' => 'Old Title',
            'description' => 'Old Description',
            'director' => 'Old Director',
            'release_year' => 2019
        ]);
        $movie->save();

        $data = [
            'title' => 'Updated Title',
            'description' => 'Updated Description',
            'director' => 'Updated Director',
            'release_year' => 2021
        ];

        $this->put("/movies/{$movie->id}", $data);
        $this->seeStatusCode(200);
        $this->seeJson($data);
    }

    public function test_can_delete_movie()
    {
        $movie = new Movie([
            'title' => 'Movie to Delete',
            'description' => 'Description of movie to delete',
            'director' => 'Director to Delete',
            'release_year' => 2018
        ]);
        $movie->save();

        $this->delete("/movies/{$movie->id}");
        $this->seeStatusCode(204);
        $this->notSeeInDatabase('movies', ['id' => $movie->id]);
    }

}
