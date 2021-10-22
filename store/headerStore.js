const store = {
  state() {
    return {
      isShowSearch: false,
      isOpenHam: false,
      isOpenMobileCourse: false,
      isOpenProfile: false,
      isCartOpen: true,
    };
  },
  getters: {},
  mutations: {
    handleChangeIsCartOpen(state, { value }) {
      state.isCartOpen = value;
    },
    handleChangeIsOpenProfile(state, { value }) {
      state.isOpenProfile = value;
    },
    handleChangeIsShowSearch(state, { value }) {
      state.isShowSearch = value;
    },
    handleChangeIsOpenHam(state, { value }) {
      state.isOpenHam = value;
    },
    handleChangeIsOpenMobileCourse(state, { value }) {
      state.isOpenMobileCourse = value;
    },
  },
  actions: {},
};

export default store;
