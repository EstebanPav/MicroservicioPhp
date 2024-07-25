import React, { useState, useEffect } from 'react';
import movieService from '../services/movieService';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await movieService.getMovies();
        if (response && response.data) {
          setMovies(response.data);
        }
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center">Movies</h1>
      <ul className="space-y-4">
        {movies.map((movie) => (
          <li key={movie.id} className="flex justify-between items-center p-4 border border-gray-300 rounded">
            <div>
              <h2 className="text-lg font-semibold">{movie.title}</h2>
              <p className="text-gray-600">{movie.description}</p>
              <p className="text-gray-500">{movie.director} - {movie.release_year}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
