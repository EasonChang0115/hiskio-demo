<template>
  <div>
    <hiskio-header></hiskio-header>
    <sign-in-out v-if="$store.state.signInOutStore.isopenSignInOut"></sign-in-out>
  </div>
</template>

<script>
import HiskioHeader from '@/layouts/HiskioHeader.vue';
import SignInOut from '@/layouts/SiginInOut.vue';
export default {
  components: {
    SignInOut,
    HiskioHeader,
  },
};
</script>
