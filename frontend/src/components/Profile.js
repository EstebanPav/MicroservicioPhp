import React, { useState, useEffect } from 'react';
import authService from '../services/authService';

const Profile = () => {
  const [token, setToken] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const user = authService.getCurrentUser();
    if (user && user.token) {
      setToken(user.token);
      setUser(user);
    }
  }, []);

  const handleDeleteToken = () => {
    authService.logout();
    setToken('');
    setUser(null);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center">Perfil</h1>
      <div className="mt-4">
        <h2 className="text-xl font-semibold">Token</h2>
        {user ? (
          <div>
            <p className="mt-4">Name: {user.name}</p>
            <p className="mt-4">Email: {user.email}</p>
          </div>
        ) : (
          <p>Please log in</p>
        )}
        <textarea
          readOnly
          value={token}
          className="w-full p-2 border border-gray-300 rounded mt-2"
          rows="4"
        />
        <button
          onClick={handleDeleteToken}
          className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition duration-300 mt-4"
        >
          Borrar Token
        </button>
      </div>
    </div>
  );
};

export default Profile;
