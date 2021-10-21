<template>
  <div id="professions" class="relative ml-0 border-solid professions-container h-[67px] border-b-[1px] border-hi-input-gray md:mr-0 sn-640:h-auto">
    <div class="relative flex h-full overflow-auto">
      <client-only>
        <swiper class="swiper" :options="swiperOption">
          <swiper-slide
            v-for="item in courses"
            :key="item.course"
            class="
              transition-colors
              duration-300
              profession-group
              px-[20px]
              hover:bg-hi-white
              sn-640:px-[8px] sn-640:py-[8px]
              max-h-[440px]
              text-[18px]
              sn-640:text-[14px]
              text-hi-price
            "
            style="width: auto"
          >
            <nuxt-link :to="getLink(item.course)" class="flex items-center justify-center h-full">{{ item.name }}</nuxt-link>
          </swiper-slide>
        </swiper>
      </client-only>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        slidesPerView: 'auto',
      },
    };
  },
  computed: {
    courses() {
      const courseList = [...this.$store.state.coursesStore.courses];
      courseList.shift();
      return courseList;
    },
  },
  methods: {
    getLink(string) {
      return `/groups/${string}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.profession-group:first-child {
  padding-left: 48px;
}
</style>
