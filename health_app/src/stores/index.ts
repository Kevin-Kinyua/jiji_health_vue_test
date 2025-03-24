import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
  state: {
    user: null,
    token: localStorage.getItem('token') || ''
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setToken(state, token) {
      state.token = token;
      localStorage.setItem('token', token);
    },
    logout(state) {
      state.user = null;
      state.token = '';
      localStorage.removeItem('token');
    }
  },
  actions: {
    async login({ commit }, credentials) {
      const { data } = await axios.post('http://localhost:3000/users/sign_in', credentials);
      commit('setToken', data.token);
    },
    async fetchUser({ commit, state }) {
      const { data } = await axios.get('http://localhost:3000/users/me', {
        headers: { Authorization: `Bearer ${state.token}` }
      });
      commit('setUser', data);
    },
    logout({ commit }) {
      commit('logout');
    }
  }
});

export default store;
