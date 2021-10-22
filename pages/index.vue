<template>
  <div class="pt-[50px]">
    <hiskio-header></hiskio-header>
    <hero-section></hero-section>
    <hot-tags-section></hot-tags-section>
    <all-course-section></all-course-section>
    <cart-wrapper></cart-wrapper>
    <user-information v-if="$store.state.userStore.username"></user-information>
    <sign-in-out v-if="$store.state.signInOutStore.isopenSignInOut"></sign-in-out>
  </div>
</template>

<script>
import HiskioHeader from '@/components/layouts/HiskioHeader.vue';
import SignInOut from '@/components/layouts/SiginInOut.vue';
import UserInformation from '@/components/layouts/UserInformation.vue';
import HeroSection from '@/components/layouts/HeroSection.vue';
import HotTagsSection from '@/components/layouts/HotTagsSection.vue';
import AllCourseSection from '@/components/layouts/AllCourseSection.vue';
import CartWrapper from '@/components/cart/CartWrapper.vue';
export default {
  components: {
    HeroSection,
    AllCourseSection,
    HotTagsSection,
    SignInOut,
    UserInformation,
    HiskioHeader,
    CartWrapper,
  },
  // middleware: 'authenticated',
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      this.$store.dispatch('cartStore/initCart');
      setTimeout(() => this.$nuxt.$loading.finish(), 500);
    });
  },
};
</script>
