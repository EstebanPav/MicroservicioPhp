import React, { useState } from 'react';
import movieService from '../services/movieService';
import { useNavigate } from 'react-router-dom';

const MovieForm = () => {
  const [movie, setMovie] = useState({
    title: '',
    description: '',
    director: '',
    release_year: ''
  });

  const navigate= useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovie({ ...movie, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await movieService.addMovie(movie);
        navigate('/movies');
    } catch (error) {
      console.error('Error adding movie:', error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center">Add Movie</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            value={movie.title}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <input
            type="text"
            name="description"
            value={movie.description}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Director</label>
          <input
            type="text"
            name="director"
            value={movie.director}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Release Year</label>
          <input
            type="number"
            name="release_year"
            value={movie.release_year}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300">
          Add Movie
        </button>
      </form>
    </div>
  );
};

export default MovieForm;
