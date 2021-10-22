import { carts } from '@/api.js';

function setCartIDtoLoclStorage(state) {
  const cartIdList = state.cart.map((item) => item.id);
  localStorage.setItem('cartIdList', JSON.stringify(cartIdList));
}

const store = {
  state() {
    return {
      cart: [],
    };
  },
  getters: {},
  mutations: {
    handeAddCartItem(state, { courses }) {
      courses.forEach((course) => {
        if (!state.cart.filter((item) => Number(item.id) === course.id).length) {
          state.cart = [...state.cart, course];
        }
      });
      setCartIDtoLoclStorage(state);
    },
    handeDeleteCartItem(state, { id }) {
      state.cart = [...state.cart.filter((item) => Number(item.id) !== id)];
      setCartIDtoLoclStorage(state);
    },
  },
  actions: {
    async initCart({ commit }) {
      if (!localStorage.getItem('cartIdList')) return;
      const itemList = JSON.parse(localStorage.getItem('cartIdList'));
      const itemData = itemList.map((item) => ({ id: item, coupon: '' }));
      try {
        const res = await this.$axios({
          method: carts.postCarts.method,
          url: carts.postCarts.url,
          data: {
            items: itemData,
            coupon: '',
          },
        });
        commit('handeAddCartItem', { courses: res.data });
      } catch (error) {
        console.log(error);
      }
    },
    async addCart({ commit }, { id }) {
      try {
        const res = await this.$axios({
          method: carts.postCarts.method,
          url: carts.postCarts.url,
          data: {
            items: [
              {
                id,
                coupon: '',
              },
            ],
            coupon: '',
          },
        });
        commit('handeAddCartItem', { courses: res.data });
      } catch (error) {
        console.log(error);
      }
    },
    async deleteCart({ commit, rootState }, { id }) {
      try {
        if (rootState.userStore.username) {
          await this.$axios({
            method: carts.deleteCarts.method,
            url: carts.deleteCarts.url,
            data: {
              items: [
                {
                  id,
                  coupon: '',
                },
              ],
              coupon: '',
            },
          });
        }
        commit('handeDeleteCartItem', { id });
      } catch (error) {
        console.log(error);
      }
    },
  },
};

export default store;
