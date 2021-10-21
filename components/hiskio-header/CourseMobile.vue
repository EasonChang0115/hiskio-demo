<template>
  <div>
    <div
      class="fixed right-0 z-10 w-full overflow-auto duration-300 top-[50px] pb-[50px] h-[100vh] bg-hi-white"
      :class="isOpenMobileCourse ? '' : 'translate-x-full'"
    >
      <div class="sticky top-0 z-11 bg-hi-white px-[20px]">
        <p class="pt-5 pb-4 text-lg text-center text-gray-700 border-gray-400 border-solid border-b-[1px]">課程領域</p>
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="chevron-left"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
          class="absolute cursor-pointer text-hi-price left-[12px] top-6 z-11 svg-inline--fa fa-chevron-left fa-w-10"
          @click="isOpenMobileCourse = false"
        >
          <path
            fill="currentColor"
            d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"
            class=""
          ></path>
        </svg>
      </div>
      <ul class="px-[18px]">
        <li v-for="course in courses" :key="course.course" class="relative px-4 py-3 border-gray-400 border-solid cursor-pointer border-b-[1px]">
          {{ course.name }}
          <svg
            v-if="course.list.length"
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="chevron-right"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            class="absolute transform -translate-y-1/2 right-5 text-hi-price top-1/2 svg-inline--fa fa-chevron-right w-[0.625em]"
            @click="selectedCourse = course"
          >
            <path
              fill="currentColor"
              d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
              class=""
            ></path>
          </svg>
        </li>
      </ul>
    </div>
    <div class="fixed left-0 z-10 w-full overflow-auto duration-300 top-[50px] pb-[50px] h-[100vh] bg-white" :class="selectedCourse ? '' : 'translate-x-full'">
      <div class="sticky top-0 z-11 bg-hi-white px-[20px]">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="chevron-left"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
          class="absolute cursor-pointer text-hi-price left-[12px] top-6 svg-inline--fa fa-chevron-left w-[0.625em]"
          @click="selectedCourse = null"
        >
          <path
            fill="currentColor"
            d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"
            class=""
          ></path>
        </svg>
        <p class="pt-5 pb-4 text-lg text-center text-gray-700 border-gray-400 border-solid border-b-[1px]">{{ courseName }}</p>
      </div>
      <ul class="px-[18px] grid grid-cols-3 md:grid-cols-4 gap-4 my-[20px]">
        <li
          v-for="item in courseList"
          :key="item"
          class="text-center text-gray-700 truncate border-gray-400 border-solid cursor-pointer border-[1px] py-[5px] rounded-[4px] px-[8px]"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import headerMixin from './headerMixin';

export default {
  mixins: [headerMixin],
  data() {
    return {
      selectedCourse: null,
    };
  },
  computed: {
    courseName() {
      return this.selectedCourse ? this.selectedCourse.name : '';
    },
    courseList() {
      return this.selectedCourse ? this.selectedCourse.list : [];
    },
    courses() {
      return this.$store.state.coursesStore.courses;
    },
  },
};
</script>
