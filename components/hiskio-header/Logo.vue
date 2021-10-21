<template>
  <div class="flex items-stretch justify-start flex-grow h-full">
    <nuxt-link class="items-center w-auto h-full lg:flex flex" to="/" :class="isShowSearch ? 'hidden' : ''">
      <div class="bg-center bg-no-repeat bg-contain logo-hiskio h-[15px] w-[100px] mr-[12px] sn-500:h-[10px] sn-500:w-[66px] sn-500:mr-[6px]"></div>
    </nuxt-link>
    <a href="https://www.104.com.tw/company/1a2x6bko9q" rel="noopener noreferrer" target="_blank" class="items-center hidden mr-[20px] min-lg:flex">
      <img src="https://frontend.f5ezcode.in/img/header-recruit.3e1f6fd.png" alt="recruit" width="80px" />
    </a>
    <div>
      <course-filter></course-filter>
      <course-mobile></course-mobile>
    </div>
    <Search />
    <button class="self-center flex-shrink-0 w-[40px] h-[40px] min-lg:hidden" :class="isShowSearch ? 'hidden' : ''" @click="isShowSearch = true">
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="search"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        class="text-gray-700 svg-inline--fa fa-search w-4"
      >
        <path
          fill="currentColor"
          d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
          class=""
        ></path>
      </svg>
    </button>
  </div>
</template>

<script>
import CourseFilter from './CourseFilter.vue';
import CourseMobile from './CourseMobile.vue';
import Search from './Search.vue';

import headerMixin from './headerMixin';
export default {
  components: {
    CourseFilter,
    CourseMobile,
    Search,
  },
  mixins: [headerMixin],
  data() {
    return {
      isVisible: false,
    };
  },
};
</script>
