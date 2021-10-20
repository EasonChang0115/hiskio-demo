<template>
  <div class="flex items-stretch justify-start flex-grow h-full">
    <nuxt-link class="items-center w-auto h-full lg:flex flex" to="/">
      <div class="bg-center bg-no-repeat bg-contain logo-hiskio h-[15px] w-[100px] mr-[12px] sn-500:h-[10px] sn-500:w-[66px] sn-500:mr-[6px]"></div>
    </nuxt-link>
    <a href="https://www.104.com.tw/company/1a2x6bko9q" rel="noopener noreferrer" target="_blank" class="items-center hidden mr-[20px] min-lg:flex">
      <img src="https://frontend.f5ezcode.in/img/header-recruit.3e1f6fd.png" alt="recruit" width="80px" />
    </a>
    <div>
      <course-filter></course-filter>
    </div>
    <Search />
  </div>
</template>

<script>
import CourseFilter from './CourseFilter.vue';
import Search from './Search.vue';
export default {
  components: {
    CourseFilter,
    Search,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
