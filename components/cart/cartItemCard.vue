<template>
  <li class="relative flex w-100% h-[120px] border-bottom-[1px] border-gray-600 shadow-sm py-2 px-2 pr-8">
    <div
      class="rounded h-full min-w-[120px] mr-3"
      style="background-size: cover; background-position: center center; background-repeat: no-repeat"
      :style="{
        backgroundImage: `url('${course.image}')`,
      }"
    ></div>
    <div class="flex flex-col justify-between">
      <h5 class="text-md leading-[19px] h-[58px] font-medium -order-1 line-clamp-2 text-gray-700 min-lg:mb-[4.94px] min-lg:leading-[29px] min-lg:text-hi-price">
        {{ course.name }}
      </h5>
      <div class="flex items-center">
        <span class="text-red-1 font-bold text-[18px] mr-2">${{ course.total | separator }}</span>
        <span class="border-[1px] rounded border-gray-700 text-sm px-1">募資課程</span>
      </div>
    </div>
    <button
      class="absolute right-[9px] top-[8px] w-[16px] h-[16px] opacity-60"
      style="background-size: cover; background-position: center center; background-repeat: no-repeat"
      :style="{
        backgroundImage: `url('https://i.imgur.com/lunDIfk.png')`,
      }"
      @click="deleteClick"
    ></button>
  </li>
</template>

<script>
export default {
  props: {
    course: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    deleteClick() {
      this.$emit('deleteClick', { id: this.course.id });
    },
  },
};
</script>

<style lang="scss" scoped></style>
