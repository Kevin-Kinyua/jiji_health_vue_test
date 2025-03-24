import axios from 'axios';

const API_URL = 'http://localhost:3000'; // Adjust if needed

export default {
  async register(user) {
    const response = await axios.post(`${API_URL}/users`, user);
    return response.data;
  },

  async login(user) {
    const response = await axios.post(`${API_URL}/users/sign_in`, user);
    localStorage.setItem('user', JSON.stringify(response.data));
    return response.data;
  },

  logout() {
    localStorage.removeItem('user');
  },

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
};
