<template>
  <aside
    class="fixed top-0 flex flex-col items-center w-full h-full duration-300 bg-white shadow-left max-w-[375px] z-11 pt-[60px] transition-position"
    :class="isOpenProfile ? 'right-0' : 'right-[-375px]'"
  >
    <div class="w-full">
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="times"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 352 512"
        class="
          absolute
          flex
          items-center
          justify-center
          text-gray-700
          cursor-pointer
          top-[30px]
          right-[30px]
          w-13
          h-13
          svg-inline--fa
          fa-times
          w-[0.6875em]
          fa-lg
        "
        @click="isOpenProfile = false"
      >
        <path
          fill="currentColor"
          d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
          class=""
        ></path>
      </svg>
      <div class="mx-auto mb-4 border-2 rounded-full border-green-3 w-2/5">
        <div class="border-white rounded-full border-3 h-[146px] w-[146px]" :style="$store.getters['userStore/avatarStyle']"></div>
      </div>
      <p class="flex justify-center w-90% h-[71px] text-gray-700 mx-auto text-[22px] border-b-[1px] border-hi-share-icon-gray">仲豪</p>
    </div>
    <ul class="scrollbar flex-1 block w-full overflow-y-auto">
      <li class="block w-full h-[60px]">
        <nuxt-link
          to="/account/coupons"
          class="relative flex items-center justify-center w-full h-full text-lg transition-colors duration-300 bg-white text-green-1 hover:bg-hi-white"
        >
          <span class="relative"><p class="coupons">我的抵用券</p></span>
        </nuxt-link>
      </li>
      <li class="block w-full h-[60px]">
        <nuxt-link
          to="/account/missions"
          class="relative flex items-center justify-center w-full h-full text-lg transition-colors duration-300 bg-white text-green-1 hover:bg-hi-white"
        >
          <span class="relative"><p class="">任務板</p></span>
        </nuxt-link>
      </li>
      <li class="block w-full h-[60px]">
        <nuxt-link
          to="/account/orders"
          class="flex items-center justify-center w-full h-full text-lg transition-colors duration-300 bg-white text-green-1 hover:bg-hi-white"
        >
          訂單記錄
        </nuxt-link>
      </li>
      <li class="block w-full h-[60px]">
        <nuxt-link
          to="/account"
          class="flex items-center justify-center w-full h-full text-lg transition-colors duration-300 bg-white text-green-1 hover:bg-hi-white"
        >
          帳戶設定
        </nuxt-link>
      </li>
      <!---->
    </ul>
    <a href="javascript:void(0)" class="flex items-center justify-center w-full text-lg text-gray-600 pb-[40px] pt-[10px]" @click="handleLogout">會員登出</a>
  </aside>
</template>

<script>
export default {
  computed: {
    isOpenProfile: {
      get() {
        return this.$store.state.headerStore.isOpenProfile;
      },
      set(value) {
        this.$store.commit('headerStore/handleChangeIsOpenProfile', { value });
      },
    },
  },
  methods: {
    async handleLogout() {
      this.$nuxt.$loading.start();
      try {
        await this.$store.dispatch('userStore/logout');
        this.$nuxt.$loading.finish();
        this.$router.push('/');
      } catch (error) {
        this.$nuxt.$loading.finish();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.coupons {
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    right: -10px;
    display: block;
    height: 6px;
    width: 6px;
    border-radius: 9999px;
    --tw-bg-opacity: 1;
    background-color: rgba(235, 103, 103, var(--tw-bg-opacity));
    --tw-translate-x: 0;
    --tw-translate-y: 0;
    --tw-rotate: 0;
    --tw-skew-x: 0;
    --tw-skew-y: 0;
    --tw-scale-x: 1;
    --tw-scale-y: 1;
    transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
      scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    --tw-translate-y: -50%;
  }
}
</style>
