<?php
namespace App\Http\Controllers;

use App\Models\Movie;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class MovieController extends Controller
{
    public function index() {
        return response()->json(Movie::all());
    }

    public function store(Request $request) {
        // Validación de los datos del request
        $validator = Validator::make($request->all(), [
            'title' => 'required|max:255',
            'description' => 'required',
            'director' => 'required|max:255',
            'release_year' => 'required|integer|min:1895'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        // Creación del objeto Movie si la validación es exitosa
        $movie = Movie::create($request->all());
        return response()->json($movie, 201);
    }

    public function show($id) {
        return response()->json(Movie::findOrFail($id));
    }

    public function update(Request $request, $id) {
        // Validación
        $validator = Validator::make($request->all(), [
            'title' => 'sometimes|required|max:255',
            'description' => 'sometimes|required',
            'director' => 'sometimes|required|max:255',
            'release_year' => 'sometimes|required|integer|min:1895'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        // Buscar y actualizar el objeto Movie
        $movie = Movie::findOrFail($id);
        $movie->update($request->all());
        return response()->json($movie, 200);
    }

    public function destroy($id) {
        Movie::findOrFail($id)->delete();
        return response()->json(null, 204);
    }
}
