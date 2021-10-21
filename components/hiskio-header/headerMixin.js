export default {
  computed: {
    isShowSearch: {
      get() {
        return this.$store.state.headerStore.isShowSearch;
      },
      set(value) {
        this.$store.commit('headerStore/handleChangeIsShowSearch', { value });
      },
    },
    isOpenHam: {
      get() {
        return this.$store.state.headerStore.isOpenHam;
      },
      set(value) {
        this.$store.commit('headerStore/handleChangeIsOpenHam', { value });
      },
    },
    isOpenMobileCourse: {
      get() {
        return this.$store.state.headerStore.isOpenMobileCourse;
      },
      set(value) {
        this.$store.commit('headerStore/handleChangeIsOpenMobileCourse', { value });
      },
    },
  },
};
