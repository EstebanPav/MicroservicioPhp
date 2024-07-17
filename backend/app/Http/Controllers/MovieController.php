<?php

namespace App\Http\Controllers;

use App\Models\Movie;
use Illuminate\Http\Request;

class MovieController extends Controller
{
    public function index()
    {
        return response()->json(Movie::all());
    }

    public function show($id)
    {
        $movie = Movie::find($id);
        if ($movie) {
            return response()->json($movie);
        } else {
            return response()->json(['message' => 'Movie not found'], 404);
        }
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'title' => 'required',
            'description' => 'required',
            'director' => 'required',
            'release_year' => 'required|integer'
        ]);

        $movie = Movie::create($request->all());
        return response()->json($movie, 201);
    }

    public function update(Request $request, $id)
    {
        $movie = Movie::find($id);
        if ($movie) {
            $this->validate($request, [
                'title' => 'required',
                'description' => 'required',
                'director' => 'required',
                'release_year' => 'required|integer'
            ]);

            $movie->update($request->all());
            return response()->json($movie);
        } else {
            return response()->json(['message' => 'Movie not found'], 404);
        }
    }

    public function destroy($id)
    {
        $movie = Movie::find($id);
        if ($movie) {
            $movie->delete();
            return response()->json(['message' => 'Movie deleted successfully']);
        } else {
            return response()->json(['message' => 'Movie not found'], 404);
        }
    }
}
