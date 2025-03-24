import authService from '@/services/auth';

const state = {
  user: authService.getCurrentUser() || null
};

const mutations = {
  SET_USER(state, user) {
    state.user = user;
  },
  LOGOUT(state) {
    state.user = null;
  }
};

const actions = {
  async register({ commit }, user) {
    const data = await authService.register(user);
    commit('SET_USER', data.user);
    return data;
  },

  async login({ commit }, user) {
    const data = await authService.login(user);
    commit('SET_USER', data.user);
    return data;
  },

  logout({ commit }) {
    authService.logout();
    commit('LOGOUT');
  }
};

const getters = {
  isAuthenticated: state => !!state.user,
  user: state => state.user
};

export default {
  state,
  mutations,
  actions,
  getters
};
