<template>
  <div class="w-full">
    <div class="w-full pt-4">
      <div class="flex items-center justify-center w-full mx-auto overlay rounded-[6px] max-w-[320px] py-[10px]" style="display: none">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="exclamation-circle"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          class="text-hi-buy-btn-red mr-[3px] svg-inline--fa fa-exclamation-circle w-[1em] text-sm"
        >
          <path
            fill="currentColor"
            d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"
            class=""
          ></path>
        </svg>
        <p class="text-sm text-center text-hi-buy-btn-red">社群平台端出現錯誤，請改用其他方式註冊</p>
      </div>
      <div class="flex flex-col items-center justify-between w-1/2 mx-auto mt-[23px]">
        <a
          v-for="item in loginMethods"
          :key="item.imgUrl"
          href="javascript:void(0)"
          class="flex items-center justify-center border-gray-500 border-[1px] py-[10px] rounded-[6px] w-[320px] mb-[12px]"
        >
          <img :src="item.imgUrl" alt="HiSKIO facebook login" class="mr-[12px]" />
          <p class="text-base text-gray-600 w-[140px]">{{ item.text2 }}</p></a
        >
      </div>
      <p class="text-base font-medium text-center text-gray-600 cursor-pointer mt-[24px]">使用 HiSKIO ID 註冊</p>
      <div class="flex justify-center mx-auto overflow-hidden mt-[40px]">
        <a href="javascript:void(0)" class="flex items-center justify-center float-left text-white mt-[3px] w-[16px] h-[16px] bg-green-2 mr-[4px]"
          ><svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="check"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="svg-inline--fa fa-check w-[1em] text-xs"
          >
            <path
              fill="currentColor"
              d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
              class=""
            ></path></svg
        ></a>
        <div>
          <p class="text-sm text-gray-600">
            登入註冊即代表您同意<a href="https://hiskio.com/user-policy" target="_blank" rel="noopener noreferrer" class="underline cursor-pointer">使用者</a
            >及<a href="https://hiskio.com/privacy-policy" target="_blank" rel="noopener noreferrer" class="underline cursor-pointer">隱私權政策</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { loginMethods } from './data';
export default {
  data() {
    return {
      loginMethods,
    };
  },
};
</script>

<style lang="scss" scoped></style>
