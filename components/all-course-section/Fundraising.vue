<template>
  <div class="fundraising-content mb-[60px] sn-750:mb-0 sn-750:pb-[90px]">
    <div class="max-w-[1170px] mx-auto mq-1380:w-95% sn-1000:max-w-[908px] sm:w-full">
      <div>
        <div class="flex items-center justify-between w-full sn-500:mb-[20px] mb-5">
          <div class="text-2xl font-medium text-hi-price sn-500:ml-[8px] sn-500:mt-[7px] sn-500:text-[18px]">正在募資中的課程</div>
          <nuxt-link to="/groups/all?status=PRESALE" class="text-gray-600 sn-500:pr-[8px] sn-500:text-[14px]">更多募資課程</nuxt-link>
        </div>
        <ul class="grid grid-cols-1 gap-4 min-md:grid-cols-2 min-lg:grid-cols-4">
          <course-card v-for="course in fundraisingCourse" :key="course.id" :course="course"></course-card>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import CourseCard from './CourseCard.vue';
export default {
  components: {
    CourseCard,
  },
  computed: {
    fundraisingCourse() {
      console.log(this.$store.state.coursesStore.fundraisingCourse);
      return this.$store.state.coursesStore.fundraisingCourse;
    },
  },
  async mounted() {
    await this.$store.dispatch('coursesStore/getFundraisingCourse');
  },
};
</script>

<style lang="scss" scoped></style>
