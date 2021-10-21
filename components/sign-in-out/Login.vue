<template>
  <div class="w-full">
    <div class="w-full h-full">
      <div class="flex flex-col items-center justify-between w-1/2 mx-auto mt-[23px]">
        <a
          v-for="item in loginMethods"
          :key="item.imgUrl"
          href="javascript:void(0)"
          class="flex items-center justify-center border-gray-500 border-[1px] py-[10px] rounded-[6px] w-[320px] mb-[12px]"
        >
          <img :src="item.imgUrl" alt="HiSKIO facebook login" class="mr-[12px]" />
          <p class="text-base text-gray-600 w-[140px]">{{ item.text }}</p>
        </a>
      </div>
      <p class="text-base text-center text-gray-700 mt-[24px] mb-[21px]">使用 HiSKIO ID 登入</p>
      <div class="mx-auto overflow-hidden w-[320px]">
        <ul>
          <li class="relative">
            <input v-model="account" type="email" placeholder="請輸入 HiSKIO ID" class="input-text" />
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="user-circle"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
              class="absolute text-gray-500 top-1/2 w-20px h-20px left-5% -translate-y-1/2 svg-inline--fa fa-user-circle w-[1em]"
            >
              <path
                fill="currentColor"
                d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"
              ></path>
            </svg>
          </li>
          <p class="text-xs text-red-4"></p>
          <li class="relative mt-[8px]">
            <input v-model="password" type="password" placeholder="請輸入登入密碼" class="input-text" />
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="lock"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              class="absolute text-gray-500 top-1/2 transform -translate-y-1/2 h-[20px] left-5% svg-inline--fa fa-lock w-[0.875em]"
            >
              <path
                fill="currentColor"
                d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"
                class=""
              ></path>
            </svg>
          </li>
          <p class="text-xs text-red-4"></p>
        </ul>
      </div>
      <div class="flex items-center mx-auto policy w-[320px] mt-[20px]">
        <a href="javascript:void(0)" class="flex items-center justify-center float-left text-white w-[18px] h-[18px] bg-green-2 rounded-[2px] mr-[4px]"
          ><svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="check"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="svg-inline--fa fa-check w-[1em] text-xs"
          >
            <path
              fill="currentColor"
              d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
              class=""
            ></path></svg
        ></a>
        <div>
          <p class="text-sm text-gray-500">
            登入註冊即代表您同意<a href="https://hiskio.com/user-policy" target="_blank" rel="noopener noreferrer" class="underline cursor-pointer">使用者</a
            >及<a href="https://hiskio.com/privacy-policy" target="_blank" rel="noopener noreferrer" class="underline cursor-pointer">隱私權政策</a>
          </p>
        </div>
      </div>
      <button class="mx-auto default-solid-btn w-[320px] mt-[28px] py-[9px]" @click="handleLogin">登入</button>
      <button class="flex justify-center mx-auto text-center text-gray-600 mt-[20px]">忘記密碼</button>
    </div>
  </div>
</template>

<script>
import { loginMethods } from './data';
export default {
  data() {
    return {
      loginMethods,
      account: 's8710606@yahoo.com.tw',
      password: 'zltntq610856',
    };
  },
  methods: {
    async handleLogin() {
      this.$nuxt.$loading.start();
      await this.$store.dispatch('userStore/login', {
        data: {
          account: this.account,
          password: this.password,
        },
      });
      this.$store.commit('signInOutStore/handleChangeIsOpenSignInOut', { value: false });
      this.$nuxt.$loading.finish();
      this.$router.push('/');
    },
  },
};
</script>

<style lang="scss" scoped></style>
