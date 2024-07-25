import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ onLogout }) => {
  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center">Home</h1>
      <button
        onClick={onLogout}
        className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition duration-300"
      >
        Logout
      </button>
      <p className="mt-4">Bienvenido a la página de inicio.</p>
      <Link to="/movies" className="block mt-4 text-blue-500 hover:underline text-center">
        Ver Películas
      </Link>
    </div>
  );
};

export default Home;
