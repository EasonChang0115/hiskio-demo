<template>
  <div class="overlay-style">
    <div
      class="
        relative
        w-full
        max-h-screen
        overflow-auto
        bg-white bg-top bg-no-repeat bg-contain bg-layout
        max-w-[450px]
        rounded-xl
        pb-[28px]
        pt-[40px]
        max-sm:rounded-none max-sm:h-full max-sm:pb-[50px]
      "
    >
      <button class="absolute top-[11px] right-[9px] w-40px h-40px text-xl leading-none" @click="close">
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
      <div class="w-full overflow-hidden">
        <div class="flex justify-center">
          <button
            class="text-[32px] leading-[37px] w-[160px] text-center font-black pt-5 pb-[8px] transition-colors float-left"
            :class="signState === 'login-in' ? 'text-green-2' : 'text-gray-400'"
            @click="signState = 'login-in'"
          >
            登入
          </button>
          <button
            class="text-[32px] leading-[37px] w-[160px] text-center font-black pt-5 pb-[8px] transition-colors float-right"
            :class="signState === 'sign-in' ? 'text-green-2' : 'text-gray-400'"
            @click="signState = 'sign-in'"
          >
            註冊
          </button>
        </div>
        <div class="clear-both w-full mx-auto bg-white max-w-[320px]">
          <span
            class="block transition-transform duration-150 dash bg-green-2 w-[80px] h-[4px] left-0 transform"
            :class="signState === 'login-in' ? 'translate-x-[40px]' : 'translate-x-[200px]'"
          ></span>
        </div>
      </div>
      <Login v-if="signState === 'login-in'" />
      <Signin v-if="signState === 'sign-in'" />
    </div>
  </div>
</template>

<script>
import Login from '@/components/sign-in-out/Login';
import Signin from '@/components/sign-in-out/Signin';
export default {
  components: {
    Login,
    Signin,
  },
  data() {
    return {
      loginMethods: [
        {
          type: 'facebook',
          imgUrl: 'https://hiskio.com/images/icon-facebook.svg',
          text: '使用Facebook登入',
          text2: '使用Facebook註冊',
        },
        {
          type: 'google',
          imgUrl: 'https://hiskio.com/images/icon-google.svg',
          text: '使用Google登入',
          text2: '使用Google註冊',
        },
        {
          type: 'github',
          imgUrl: 'https://hiskio.com/images/icon-github.svg',
          text: '使用Github登入',
          text2: '使用Github註冊',
        },
        {
          type: 'linkedin',
          imgUrl: 'https://hiskio.com/images/icon-linkedin.svg',
          text: '使用LinkedIn登入',
          text2: '使用LinkedIn註冊',
        },
      ],
    };
  },
  computed: {
    signState: {
      get() {
        return this.$store.state.signInOutStore.signState;
      },
      set(type) {
        this.$store.commit('signInOutStore/handleChangeSignState', { type });
      },
    },
  },
  methods: {
    close() {
      this.$store.commit('signInOutStore/handleChangeIsOpenSignInOut', { value: false });
    },
  },
};
</script>

<style lang="scss" scoped></style>
