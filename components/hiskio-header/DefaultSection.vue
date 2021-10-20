<template>
  <section class="relative flex items-center justify-between h-full xl:mx-auto max-w-[1170px] ml-[15px] mr-[9px] lg:mr-[15px]">
    <Logo />
    <Profile />
  </section>
</template>

<script>
import Logo from './Logo.vue';
import Profile from './Profile.vue';
export default {
  components: {
    Logo,
    Profile,
  },
};
</script>
