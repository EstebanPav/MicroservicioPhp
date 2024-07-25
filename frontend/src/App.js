import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import MovieList from './components/MovieList';
import MovieForm from './components/MovieForm';
import Profile from './components/Profile';
import Sidebar from './components/Sidebar';
import authService from './services/authService';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const user = authService.getCurrentUser();
    if (user && user.token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    authService.logout();
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div className="flex">
        {isAuthenticated && <Sidebar onLogout={handleLogout} />}
        <div className={`flex-grow ${isAuthenticated ? 'ml-64' : ''} p-10`}>
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={isAuthenticated ? <Home onLogout={handleLogout} /> : <Navigate to="/login" />} />
            <Route path="/movies" element={isAuthenticated ? <MovieList /> : <Navigate to="/login" />} />
            <Route path="/movie-form" element={isAuthenticated ? <MovieForm /> : <Navigate to="/login" />} />
            <Route path="/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/login" />} />
            <Route path="/" element={<Navigate to={isAuthenticated ? "/home" : "/login"} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
