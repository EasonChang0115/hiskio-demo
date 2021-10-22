<template>
  <div
    class="fixed top-0 right-[3px] w-[350px] h-screen pt-[51px] bg-white shadow-md z-3 transition duration-300"
    :class="isCartOpen ? '' : '-translate-y-full'"
  >
    <h4 class="py-2 text-center text-gray-700">購物車</h4>
    <button data-v-427b1198="" class="absolute top-[51px] right-[9px] w-40px h-40px text-xl leading-none" @click="isCartOpen = false">
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="times"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 352 512"
        class="text-gray-700 svg-inline--fa fa-times w-[0.6875em]"
      >
        <path
          fill="currentColor"
          d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
        ></path>
      </svg>
    </button>
    <ul>
      <cart-item-card v-for="course in cart" :key="course.id" :course="course" @delete="handleDeleteClick"></cart-item-card>
    </ul>
    <div class="flex justify-end items-center py-2 px-2">
      <span class="text-base">加總：</span>
      <span class="table-cell align-baseline text-red-1 font-bold text-[24px]">${{ totalPrice | separator }}</span>
    </div>
  </div>
</template>

<script>
import CartItemCard from './CartItemCard';
export default {
  components: {
    CartItemCard,
  },
  computed: {
    totalPrice() {
      return this.cart.reduce((pre, now) => pre + Number(now.total), 0);
    },
    cart() {
      return this.$store.state.cartStore.cart;
    },
    isCartOpen: {
      get() {
        return this.$store.state.headerStore.isCartOpen;
      },
      set(value) {
        this.$store.commit('headerStore/handleChangeIsCartOpen', { value });
      },
    },
  },
  methods: {
    handleDeleteClick({ id }) {
      this.$store.dispatch('cartStore/deleteCart', { id });
    },
  },
};
</script>
