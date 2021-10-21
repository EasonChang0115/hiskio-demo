<template>
  <div class="relative items-center hidden h-full explore-box mr-4 min-lg:flex" @mouseleave="courseMouseleave">
    <img
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAD8SURBVHgB5VTRCYMwEL1EB3AER3CFbtAvEb/qBOIExgnaDaRfiv50lI7gCA6g2Ls2CSFEsIVCpQ8keS/PF3KeAfh1MDVJ01TgkC/LEhjrAz6iaZorkTiOj77v15YHkFdt29L7wA2xtI2IkAIVwTCXBxhjuZpzeAOuMIngo8At+F4g1mFc8Zj6sOLRuq8mWJ8MhxKMeqA2cM4LY9MCtdr0SAjYDXRjJ0lywiOV1vo4TVPW9/2dCDZ/hEc+w6s/tWee56rruhsRXUMZFto7ep5HAQdJqX6Rw0P6M9BsmxBcR2BM6//Z2NsDERd7kTahL6g4XVNg/S3kQV3AbvAAgWBeoV6nTCwAAAAASUVORK5CYII="
      alt="courses-icon"
      class="cursor-pointer mr-1"
    />
    <p class="text-gray-700 cursor-pointer">{{ username ? '探索' : '課程' }}</p>
    <div class="absolute bottom-0 left-0 hidden transform translate-y-full pt-[4px] rounded-[6px] shadow">
      <div class="relative h-[420px] flex items-stretch bg-white rounded-[8px] overflow-hidden">
        <ul class="w-[210px] overflow-auto border-solid border-r-[1px] border-gray-400 py-[6px] text-gray-700">
          <li
            v-for="course in courses"
            :key="course.course"
            class="cursor-pointer py-[10px] hover:bg-hi-courses-box px-5 relative"
            @mouseover="
              (e) => {
                courseMouseover(e, course.course);
              }
            "
          >
            {{ course.name }}
            <span class="absolute bottom-0 left-0 w-11/12 border-gray-400 border-solid border-b-[1px]"></span>
            <svg
              v-if="course.list.length"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="chevron-right"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              class="absolute transform -translate-y-1/2 top-1/2 right-[10px] mr-[6px] min-lg:mr-[6px] svg-inline--fa fa-chevron-right w-[0.625em]"
            >
              <path
                fill="currentColor"
                d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
                class=""
              ></path>
            </svg>
          </li>
        </ul>
        <div class="overflow-auto text-gray-700" :class="courseLists.length ? 'w-auto' : 'w-0'">
          <ul class="w-[390px] grid grid-cols-3 gap-5 p-5">
            <template v-if="courseLists.length">
              <li
                v-for="list in courseLists"
                :key="list"
                class="
                  inline-block
                  border-solid border-[1px]
                  w-[100px]
                  py-[6px]
                  text-center
                  rounded
                  cursor-pointer
                  truncate
                  hover:bg-gray-200 hover:border-0
                  transition
                "
              >
                {{ list }}
              </li>
            </template>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      courseLists: [],
    };
  },
  computed: {
    username() {
      return this.$store.state.userStore.username;
    },
    courses() {
      return this.$store.state.coursesStore.courses;
    },
  },
  methods: {
    courseMouseover(e, course) {
      const parentChildNodes = e.target.parentNode.childNodes;
      parentChildNodes.forEach((node) => node.classList && node.classList.remove('bg-hi-courses-box'));
      e.target.classList.add('bg-hi-courses-box');
      this.courseLists = this.courses.find((item) => item.course === course).list;
    },
    courseMouseleave() {
      this.courseLists = [];
      const hoverCourse = document.querySelectorAll('.bg-hi-courses-box');
      hoverCourse.forEach((node) => node.classList && node.classList.remove('bg-hi-courses-box'));
    },
  },
};
</script>

<style lang="scss" scoped>
.bg-hi-courses-box {
  background-color: rgba(245, 245, 245, var(--tw-bg-opacity));
}
.explore-box {
  &:hover > div {
    display: block;
  }
}
</style>
