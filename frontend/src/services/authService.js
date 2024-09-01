import axios from 'axios';

const API_URL = 'http://localhost:8000/auth/';

const login = async (email, password) => {
    const response = await axios.post(API_URL + 'login', { email, password });
    if (response.data.token) {
        const user = { ...response.data.user, token: response.data.token };
        localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
};


const register = async (name, email, password, password_confirmation) => {
    const response = await axios.post(API_URL + 'register', {
        name,
        email,
        password,
        password_confirmation
    });
    if (response.data.token) {
        localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
};

const logout = () => {
    localStorage.removeItem('user');
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user'));
};

export default {
    login,
    register,
    logout,
    getCurrentUser
};
