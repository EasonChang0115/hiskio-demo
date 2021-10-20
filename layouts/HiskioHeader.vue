<template>
  <header class="fixed top-0 z-10 w-full bg-white shadow-sm h-[50px]">
    <default-section></default-section>
  </header>
</template>

<script>
import DefaultSection from '@/components/hiskio-header/DefaultSection';
export default {
  components: {
    DefaultSection,
  },
  setup() {
    return {};
  },
};
</script>
