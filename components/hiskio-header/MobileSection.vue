<template>
  <section class="min-lg:hidden">
    <div
      class="fixed left-0 w-full overflow-auto transition-transform duration-300 transform pb-[50px] bg-hi-white"
      :class="isOpenHam ? 'translate-y-0 top-50 pt-[22px]' : '-translate-y-full top-0 pt-[22px]'"
      style="height: calc(100% - 50px)"
    >
      <ul class="border-gray-400 mb-[14px] mx-[14px] pb-[14px] border-b-[1px] bg-hi-white">
        <li class="mx-[-14px] text-blueGray-4">
          <nuxt-link to="/teach" class="block w-full leading-none pt-[18px] pb-[15px] px-[14px] focus:bg-hi-courses-box" aria-current="page">
            我想開課
          </nuxt-link>
        </li>
        <li
          class="leading-none cursor-pointer mx-[-14px] pt-[18px] pb-[15px] px-[14px] text-blueGray-4 focus:bg-hi-courses-box"
          @click="isOpenMobileCourse = true"
        >
          探索課程
        </li>
      </ul>
      <div>
        <div>
          <button class="block w-full leading-none text-left text-blueGray-4 pt-[18px] pb-[15px] px-[14px] focus:bg-hi-courses-box">登入</button>
          <button class="block w-full font-medium leading-none text-left text-green-1 pt-[18px] pb-[15px] px-[14px] focus:bg-hi-courses-box">註冊</button>
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
