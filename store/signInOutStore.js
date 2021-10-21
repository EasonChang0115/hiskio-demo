const store = {
  state() {
    return {
      signState: 'login-in',
      isopenSignInOut: false,
    };
  },
  getters: {},
  mutations: {
    handleChangeIsOpenSignInOut(state, { value }) {
      state.isopenSignInOut = value;
    },
    handleChangeSignState(state, { type }) {
      state.signState = type;
    },
  },
  actions: {},
};

export default store;
