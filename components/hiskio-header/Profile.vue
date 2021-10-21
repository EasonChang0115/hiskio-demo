<template>
  <div class="flex items-center justify-end">
    <ul v-show="!isShowSearch" class="items-center justify-end h-full mobile min-lg:flex flex">
      <li>
        <nuxt-link to="/events/techcareer-express" class="block">
          <img width="130" src="https://frontend.f5ezcode.in/img/header-intercom.4c966fc.png" alt="intercom" />
        </nuxt-link>
      </li>
      <li class="hidden text-gray-700 header-btn min-lg:block">
        <nuxt-link to="/teach" class="text-gray-700 transition-colors duration-100 ease-in cursor-pointer px-[8px] hover:text-green-3" aria-current="page"
          >我想開課
        </nuxt-link>
      </li>
      <li v-if="username" class="relative hidden text-gray-700 header-btn min-lg:block">
        <span class=""></span>
        <nuxt-link to="/account/missions" class="text-gray-700 transition-colors duration-100 ease-in cursor-pointer px-[8px] textBtn hover:text-green-3">
          <span class=""></span>
          任務板
        </nuxt-link>
      </li>
      <li
        v-if="username"
        class="hidden text-gray-700 transition-colors duration-100 ease-in cursor-pointer px-[8px] header-btn min-lg:block textBtn hover:text-green-3"
      >
        <nuxt-link to="/account/courses?tab=continue" class="">我的學習</nuxt-link>
      </li>
    </ul>
    <ul v-show="!isShowSearch" class="items-center justify-end h-full min-lg:flex flex">
      <li class="flex-shrink-0 min-lg:mr-0">
        <button class="relative block text-lg leading-none w-40px h-40px text-green-1">
          <span class="absolute top-[10px] right-[10px] rounded-full w-[6px] h-[6px] bg-red-5 z-2"></span>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="shopping-cart"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            class="svg-inline--fa fa-shopping-cart w-[1.125em]"
          >
            <path
              fill="currentColor"
              d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"
              class=""
            ></path>
          </svg>
        </button>
      </li>
      <li v-if="username" class="hidden min-lg:block" @click="isOpenProfile = true">
        <div class="rounded-full cursor-pointer w-[32px] h-[32px]" :style="$store.getters['userStore/avatarStyle']"></div>
      </li>
      <li class="flex-shrink-0 min-lg:hidden" :class="isOpenHam ? 'hidden' : ''">
        <button class="w-40px h-40px" @click="isOpenHam = true">
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij4KICAgIDxkZWZzPgogICAgICAgIDxzdHlsZT4KICAgICAgICAgICAgLnByZWZpeF9fY2xzLTJ7ZmlsbDojOGM4YzhjfQogICAgICAgIDwvc3R5bGU+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0icHJlZml4X19pY29uLW1lbnUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00NjUgLTUwNTIpIj4KICAgICAgICA8cGF0aCBpZD0icHJlZml4X19SZWN0YW5nbGVfMTQxNSIgZmlsbD0ibm9uZSIgZD0iTTAgMEgxOFYxOEgweiIgZGF0YS1uYW1lPSJSZWN0YW5nbGUgMTQxNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDY1IDUwNTIpIi8+CiAgICAgICAgPGcgaWQ9InByZWZpeF9fR3JvdXBfMjQ1IiBkYXRhLW5hbWU9Ikdyb3VwIDI0NSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNCAxKSI+CiAgICAgICAgICAgIDxyZWN0IGlkPSJwcmVmaXhfX1JlY3RhbmdsZV8xNDEyIiB3aWR0aD0iMTYiIGhlaWdodD0iMiIgY2xhc3M9InByZWZpeF9fY2xzLTIiIGRhdGEtbmFtZT0iUmVjdGFuZ2xlIDE0MTIiIHJ4PSIxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NjMgNTA1MykiLz4KICAgICAgICAgICAgPHJlY3QgaWQ9InByZWZpeF9fUmVjdGFuZ2xlXzE0MTMiIHdpZHRoPSIxNiIgaGVpZ2h0PSIyIiBjbGFzcz0icHJlZml4X19jbHMtMiIgZGF0YS1uYW1lPSJSZWN0YW5nbGUgMTQxMyIgcng9IjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ2MyA1MDU5KSIvPgogICAgICAgICAgICA8cmVjdCBpZD0icHJlZml4X19SZWN0YW5nbGVfMTQxNCIgd2lkdGg9IjE2IiBoZWlnaHQ9IjIiIGNsYXNzPSJwcmVmaXhfX2Nscy0yIiBkYXRhLW5hbWU9IlJlY3RhbmdsZSAxNDE0IiByeD0iMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDYzIDUwNjUpIi8+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K"
            width="18px"
            height="18px"
            alt="menu"
            class="mx-auto"
          />
        </button>
      </li>
    </ul>
    <button v-show="!isShowSearch" class="text-xl leading-none text-gray-700 w-40px h-40px min-lg:hidden" :class="isOpenHam ? '' : 'hidden'" @click="closeAll">
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="times"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 352 512"
        class="svg-inline--fa fa-times w-[0.6875em]"
      >
        <path
          fill="currentColor"
          d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
          class=""
        ></path>
      </svg>
    </button>
    <button class="text-xl leading-none text-gray-700 w-40px h-40px min-lg:hidden" :class="isShowSearch ? '' : 'hidden'" @click="isShowSearch = false">
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="times"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 352 512"
        class="svg-inline--fa fa-times w-[0.6875em]"
      >
        <path
          fill="currentColor"
          d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
          class=""
        ></path>
      </svg>
    </button>
    <div v-if="!username" class="items-center justify-end hidden h-full min-lg:flex">
      <button
        class="flex items-center justify-center w-16 h-8 text-sm border-solid border-[1px] rounded-[4px] mx-[8px] text-green-3 border-green-3"
        @click="openSignInOut('login-in')"
      >
        登入
      </button>
      <button class="flex items-center justify-center w-16 h-8 text-sm text-white mx-[8px] rounded-[4px] bg-green-3" @click="openSignInOut('sign-in')">
        註冊
      </button>
    </div>
  </div>
</template>

<script>
import headerMixin from './headerMixin';
export default {
  mixins: [headerMixin],
  computed: {
    username() {
      return this.$store.state.userStore.username;
    },
  },
  methods: {
    closeAll() {
      this.isOpenHam = false;
      this.isOpenMobileCourse = false;
    },
  },
};
</script>

<style lang="scss" scoped></style>
