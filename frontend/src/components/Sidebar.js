import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Sidebar = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  return (
    <div className="w-64 h-screen bg-gray-800 text-white fixed">
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-6 text-center">Menu</h1>
        <ul>
          <li className="mb-4">
            <Link to="/home" className="block py-2 px-4 rounded hover:bg-gray-700">Incio</Link>
          </li>
          <li className="mb-4">
            <Link to="/movies" className="block py-2 px-4 rounded hover:bg-gray-700">Lista de Peliculas</Link>
          </li>
          <li className="mb-4">
            <Link to="/movie-form" className="block py-2 px-4 rounded hover:bg-gray-700">Agregar Peliculas</Link>
          </li>
          <li className="mb-4">
            <Link to="/profile" className="block py-2 px-4 rounded hover:bg-gray-700">Perfil</Link>
          </li>
          <li className="mb-4">
            <button onClick={handleLogout} className="w-full text-left py-2 px-4 rounded hover:bg-gray-700">Cerrar Sesiòn</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
