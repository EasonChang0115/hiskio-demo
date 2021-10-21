<template>
  <section class="relative h-[100px] sn-640:h-auto">
    <div
      class="
        sn-640:rounded-none sn-640:px-0 sn-640:w-full sn-640:relative sn-640:top-0
        absolute
        -top-60%
        overflow-hidden
        z-3
        transform
        -translate-x-1/2
        left-1/2
        max-w-[1100px]
        w-90%
        mx-auto
        rounded-[6px]
        bg-white
        shadow-lg-plus
      "
    >
      <course-swiper></course-swiper>
      <div class="bg-hi-input-gray h-[1px] mx-[28px] sn-640:mx-0 line active"></div>
      <hot-tags></hot-tags>
    </div>
  </section>
</template>

<script>
import CourseSwiper from '@/components/course-section/CourseSwiper.vue';
import HotTags from '@/components/course-section/HotTags.vue';
export default {
  components: {
    CourseSwiper,
    HotTags,
  },
};
</script>

<style lang="scss" scoped></style>
