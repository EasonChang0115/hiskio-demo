import { auth, member } from '@/api.js';
import handleError from '@/utils/handleError';
const store = {
  state() {
    return {
      username: '',
      avatar: '',
    };
  },
  getters: {
    avatarStyle(state) {
      return `background-image: url(${state.avatar});
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;`;
    },
  },
  mutations: {
    setUserData(state, { username, avatar }) {
      state.username = username;
      state.avatar = avatar;
    },
  },
  actions: {
    async login({ commit, dispatch }, { data }) {
      try {
        const res = await this.$axios({
          method: auth.login.method,
          url: auth.login.url,
          data,
        });
        this.$cookies.set('accessToken', res.access_token);
        this.$cookies.set('tokenType', res.token_type);
      } catch (e) {
        throw handleError(e);
      }
    },
    logout({ commit }) {
      this.$cookies.remove('accessToken');
      this.$cookies.remove('tokenType');
      commit('setUserData', { username: '', avatar: '' });
    },
    async me(context, { Authorization }) {
      try {
        return await this.$axios({
          method: member.me.method,
          url: member.me.url,
          headers: { Authorization },
        });
      } catch (e) {
        throw handleError(e);
      }
    },
  },
};

export default store;
