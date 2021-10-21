<template>
  <div class="pt-[50px]">
    <hiskio-header></hiskio-header>
    <hero-section></hero-section>
    <course-section></course-section>
    <user-information v-if="$store.state.userStore.username"></user-information>
    <sign-in-out v-if="$store.state.signInOutStore.isopenSignInOut"></sign-in-out>
  </div>
</template>

<script>
import HiskioHeader from '@/components/layouts/HiskioHeader.vue';
import SignInOut from '@/components/layouts/SiginInOut.vue';
import UserInformation from '@/components/layouts/UserInformation.vue';
import HeroSection from '@/components/layouts/HeroSection.vue';
import CourseSection from '@/components/layouts/CourseSection.vue';
export default {
  components: {
    HeroSection,
    CourseSection,
    SignInOut,
    UserInformation,
    HiskioHeader,
  },
  // middleware: 'authenticated',
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 500);
    });
  },
};
</script>
