<template>
  <div class="items-center justify-start flex-1 pl-[7px] min-lg:flex min-lg:pl-0" :class="isShowSearch ? 'flex' : 'hidden'">
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="search"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      class="text-gray-700 cursor-pointer mr-[5px] min-lg:mr-0 min-lg:text-gray-600 svg-inline--fa fa-search w-[1em]"
    >
      <path
        fill="currentColor"
        d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
        class=""
      ></path>
    </svg>
    <div class="relative flex-grow">
      <input placeholder="搜尋" class="w-full bg-white px-[8px] min-lg:w-auto" @focus="focusSearchInput" @blur="blurSearchInput" />
      <div class="absolute left-0 w-full border-t border-gray-500 border-solid bg-hi-white top-full z-8" style="display: none"></div>
    </div>
  </div>
</template>
<script>
import headerMixin from './headerMixin';
export default {
  mixins: [headerMixin],
  props: {
    isVisible: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    focusSearchInput(e) {
      e.target.style['border-bottom'] = '1px solid rgb(191, 191, 192)';
    },
    blurSearchInput(e) {
      e.target.style = '';
    },
  },
};
</script>
