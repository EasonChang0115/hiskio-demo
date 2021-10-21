<template>
  <div>
    <hiskio-header></hiskio-header>
    <user-information v-if="$store.state.userStore.username"></user-information>
    <sign-in-out v-if="$store.state.signInOutStore.isopenSignInOut"></sign-in-out>
  </div>
</template>

<script>
import HiskioHeader from '@/components/layouts/HiskioHeader.vue';
import SignInOut from '@/components/layouts/SiginInOut.vue';
import UserInformation from '@/components/layouts/UserInformation.vue';
export default {
  components: {
    SignInOut,
    UserInformation,
    HiskioHeader,
  },
  middleware: 'authenticated',
};
</script>
