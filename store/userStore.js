import { capitalize } from '@/utils/utils.js';
import { auth, member } from '@/api.js';
// const getExpiresTime = (range) => {
//   const now = new Date();
//   const time = now.getTime();
//   const expireTime = time + range;
//   now.setTime(expireTime);
//   return now.toUTCString();
// };
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
        const userData = await dispatch('me', { Authorization: `${capitalize(this.$cookies.get('tokenType'))} ${this.$cookies.get('accessToken')}` });
        commit('setUserData', { ...userData });
        await dispatch('cartStore/initCart');
      } catch (error) {
        console.log(error);
      }
    },
    logout({ commit }) {
      this.$cookies.remove('accessToken');
      this.$cookies.remove('tokenType');
      commit('setUserData', { username: '', avatar: '' });
    },
    async me(context, { Authorization }) {
      return await this.$axios({
        method: member.me.method,
        url: member.me.url,
        headers: { Authorization },
      });
    },
  },
};

export default store;
