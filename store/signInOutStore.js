const store = {
  state() {
    return {
      signState: 'sign-in',
      isopenSignInOut: true,
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
