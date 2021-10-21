<template>
  <section class="min-lg:hidden">
    <div
      class="fixed left-0 w-full overflow-auto transition-transform duration-300 transform pb-[50px] bg-hi-white"
      :class="{
        'translate-y-0': isOpenHam,
        'top-50': isOpenHam,
        '-translate-y-full': !isOpenHam,
        'top-0': !isOpenHam,
        'pt-[22px]': !$store.state.userStore.username,
      }"
      style="height: calc(100% - 50px)"
    >
      <ul v-if="$store.state.userStore.username" class="mb-[14px] pt-[40px] pb-[17px] bg-[#EFF5F8]">
        <li class="flex items-center pb-8 border-gray-400 mx-[14px] mb-[14px] border-b-[1px]">
          <div class="mr-5 rounded-full w-40px h-40px" :style="$store.getters['userStore/avatarStyle']"></div>
          <p class="font-medium text-blueGray-400">仲豪</p>
        </li>
        <li class="text-blueGray-4">
          <nuxt-link to="/account/coupons" class="relative block w-full pt-[18px] pb-[15px] px-[14px] leading-none hover:bg-[#E1ECF1]">
            <p class="relative inline">
              <span class="absolute block transform -translate-y-1/2 rounded-full top-1/2 right-[-10px] w-[6px] h-[6px] bg-red-5"></span>我的抵用券
            </p>
          </nuxt-link>
        </li>
        <li class="text-blueGray-4">
          <nuxt-link to="/account/missions" class="relative block w-full pt-[18px] pb-[15px] px-[14px] leading-none hover:bg-[#E1ECF1]">
            <p class="relative inline">任務板</p>
          </nuxt-link>
        </li>
        <li class="text-blueGray-4">
          <nuxt-link to="/account/orders" class="block w-full h-full pt-[18px] pb-[15px] px-[14px] leading-none hover:bg-[#E1ECF1]">訂單紀錄</nuxt-link>
        </li>
        <li class="text-blueGray-4">
          <nuxt-link to="/account" class="block w-full pt-[18px] pb-[15px] px-[14px] leading-none hover:bg-[#E1ECF1]">帳戶設定</nuxt-link>
        </li>
      </ul>
      <ul class="border-gray-400 mb-[14px] mx-[14px] pb-[14px] border-b-[1px] bg-hi-white">
        <li class="mx-[-14px] text-blueGray-4">
          <nuxt-link to="/teach" class="block w-full leading-none pt-[18px] pb-[15px] px-[14px] focus:bg-hi-courses-box" aria-current="page">
            我想開課
          </nuxt-link>
        </li>
        <li
          v-if="$store.state.userStore.username"
          class="leading-none cursor-pointer mx-[-14px] pt-[18px] pb-[15px] px-[14px] text-blueGray-4 focus:bg-hi-courses-box"
          @click="isOpenMobileCourse = true"
        >
          我的課程
        </li>
        <li
          v-if="$store.state.userStore.username"
          class="leading-none cursor-pointer mx-[-14px] pt-[18px] pb-[15px] px-[14px] text-blueGray-4 focus:bg-hi-courses-box"
          @click="isOpenMobileCourse = true"
        >
          我的書籍
        </li>
        <li
          class="leading-none cursor-pointer mx-[-14px] pt-[18px] pb-[15px] px-[14px] text-blueGray-4 focus:bg-hi-courses-box"
          @click="isOpenMobileCourse = true"
        >
          探索課程
        </li>
      </ul>
      <div>
        <div v-if="!$store.state.userStore.username">
          <button
            class="block w-full leading-none text-left text-blueGray-4 pt-[18px] pb-[15px] px-[14px] focus:bg-hi-courses-box"
            @click="openSignInOut('login-in')"
          >
            登入
          </button>
          <button
            class="block w-full font-medium leading-none text-left text-green-1 pt-[18px] pb-[15px] px-[14px] focus:bg-hi-courses-box"
            @click="openSignInOut('sign-in')"
          >
            註冊
          </button>
        </div>
        <div v-else>
          <button
            class="block w-full leading-none text-left text-blueGray-4 pt-[18px] pb-[15px] px-[14px] focus:bg-hi-courses-box"
            @click="$store.dispatch('userStore/logout')"
          >
            登出
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import headerMixin from './headerMixin';
export default {
  mixins: [headerMixin],
};
</script>
