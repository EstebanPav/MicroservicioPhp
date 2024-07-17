import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [movies, setMovies] = useState([]);
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    director: '',
    release_year: ''
  });
  const [editingMovie, setEditingMovie] = useState(null);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/movies');
      setMovies(response.data);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  const addMovie = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/movies', newMovie);
      setMovies([...movies, response.data]);
      setNewMovie({
        title: '',
        description: '',
        director: '',
        release_year: ''
      });
    } catch (error) {
      console.error('Error adding movie:', error);
    }
  };

  const updateMovie = async () => {
    try {
      const response = await axios.put(`http://localhost:8000/api/movies/${editingMovie.id}`, newMovie);
      setMovies(movies.map(movie => movie.id === editingMovie.id ? response.data : movie));
      setNewMovie({
        title: '',
        description: '',
        director: '',
        release_year: ''
      });
      setEditingMovie(null);
    } catch (error) {
      console.error('Error updating movie:', error);
    }
  };

  const deleteMovie = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/movies/${id}`);
      setMovies(movies.filter((movie) => movie.id !== id));
    } catch (error) {
      console.error('Error deleting movie:', error);
    }
  };

  const handleChange = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };

  const startEditing = (movie) => {
    setNewMovie(movie);
    setEditingMovie(movie);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Movie Collection</h1>
        <div className="mb-6">
          <input
            type="text"
            name="title"
            value={newMovie.title}
            onChange={handleChange}
            placeholder="Title"
            className="w-full mb-2 p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            name="description"
            value={newMovie.description}
            onChange={handleChange}
            placeholder="Description"
            className="w-full mb-2 p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            name="director"
            value={newMovie.director}
            onChange={handleChange}
            placeholder="Director"
            className="w-full mb-2 p-2 border border-gray-300 rounded"
          />
          <input
            type="number"
            name="release_year"
            value={newMovie.release_year}
            onChange={handleChange}
            placeholder="Release Year"
            className="w-full mb-4 p-2 border border-gray-300 rounded"
          />
          <button
            onClick={editingMovie ? updateMovie : addMovie}
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300"
          >
            {editingMovie ? 'Update Movie' : 'Add Movie'}
          </button>
        </div>
        <ul className="space-y-4">
          {movies.map((movie) => (
            <li key={movie.id} className="flex justify-between items-center p-4 border border-gray-300 rounded">
              <div>
                <h2 className="text-lg font-semibold">{movie.title}</h2>
                <p className="text-gray-600">{movie.description}</p>
                <p className="text-gray-500">{movie.director} - {movie.release_year}</p>
              </div>
              <div>
                <button
                  onClick={() => startEditing(movie)}
                  className="bg-yellow-500 text-white py-1 px-2 rounded hover:bg-yellow-600 transition duration-300 mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteMovie(movie.id)}
                  className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600 transition duration-300"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
