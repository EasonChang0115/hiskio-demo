import { capitalize } from '@/utils/utils.js';
const store = {
  state() {
    return {};
  },
  getters: {},
  mutations: {},
  actions: {
    async nuxtServerInit({ commit, dispatch }, { req, redirect, query }) {
      if (this.$cookies.get('accessToken')) {
        try {
          const res = await dispatch('userStore/me', { Authorization: `${capitalize(this.$cookies.get('tokenType'))} ${this.$cookies.get('accessToken')}` });
          commit('userStore/setUserData', { ...res.data });
        } catch (e) {
          commit('userStore/logout');
        }
      }
    },
  },
};

export default store;
