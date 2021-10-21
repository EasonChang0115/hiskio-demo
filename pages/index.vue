<template>
  <div>
    <hiskio-header></hiskio-header>
    <hero-section></hero-section>
    <user-information v-if="$store.state.userStore.username"></user-information>
    <sign-in-out v-if="$store.state.signInOutStore.isopenSignInOut"></sign-in-out>
  </div>
</template>

<script>
import HiskioHeader from '@/components/layouts/HiskioHeader.vue';
import SignInOut from '@/components/layouts/SiginInOut.vue';
import UserInformation from '@/components/layouts/UserInformation.vue';
import HeroSection from '@/components/layouts/HeroSection.vue';
export default {
  components: {
    HeroSection,
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
