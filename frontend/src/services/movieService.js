import axios from 'axios';

const API_URL = 'http://localhost:8000/api/';

const getMovies = async () => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user && user.token) {
    return await axios.get(API_URL + 'movies', {
      headers: { 'Authorization': 'Bearer ' + user.token }
    });
  }
};

const getMovie = async (id) => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user && user.token) {
    return await axios.get(API_URL + `movies/${id}`, {
      headers: { 'Authorization': 'Bearer ' + user.token }
    });
  }
};

const addMovie = async (movie) => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user && user.token) {
    return await axios.post(API_URL + 'movies', movie, {
      headers: { 'Authorization': 'Bearer ' + user.token }
    });
  }
};

const updateMovie = async (id, movie) => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user && user.token) {
    return await axios.put(API_URL + `movies/${id}`, movie, {
      headers: { 'Authorization': 'Bearer ' + user.token }
    });
  }
};

const deleteMovie = async (id) => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user && user.token) {
    return await axios.delete(API_URL + `movies/${id}`, {
      headers: { 'Authorization': 'Bearer ' + user.token }
    });
  }
};

export default {
  getMovies,
  getMovie,
  addMovie,
  updateMovie,
  deleteMovie
};
