<template>
  <header class="fixed top-0 z-10 w-full bg-white shadow-sm h-[50px]">
    <default-section></default-section>
    <mobile-section></mobile-section>
  </header>
</template>

<script>
import DefaultSection from '@/components/hiskio-header/DefaultSection';
import MobileSection from '@/components/hiskio-header/MobileSection';
export default {
  components: {
    DefaultSection,
    MobileSection,
  },
  setup() {
    return {};
  },
};
</script>
