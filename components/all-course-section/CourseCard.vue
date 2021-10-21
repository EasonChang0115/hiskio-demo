<template>
  <li>
    <nuxt-link
      to="/fundraising/584/about"
      class="block w-full pt-5 pl-5 bg-white pr-[30px] rounded-[10px] shadow-tab min-lg:p-0 min-lg:shadow-package-card pb-[26px]"
    >
      <div class="flex w-full min-lg:flex-col min-lg:mb-0 mb-5">
        <div
          class="
            relative
            flex-shrink-0
            mr-4
            bg-center
            rounded-md
            course-card-image
            w-[100px]
            h-[54px]
            min-lg:mr-0 min-lg:w-full min-lg:h-[152px] min-lg:rounded-t-[10px] min-lg:rounded-b-none
          "
          style="background-size: cover"
          :style="{
            backgroundImage: `url(${course.image})`,
          }"
        >
          <div
            class="absolute inset-x-0 bottom-0 flex items-end justify-end p-2 leading-none course-card-cover h-1/2 text-[22px]"
            style="background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(250, 250, 250, 0))"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="bell"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              class="mr-3 text-white hover:text-[#ffd26b] svg-inline--fa fa-bell w-[0.875em]"
            >
              <path
                fill="currentColor"
                d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"
                class=""
              ></path>
            </svg>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="shopping-cart"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              class="text-white hover:text-yellow-3 svg-inline--fa fa-shopping-cart w-[1.125em]"
            >
              <path
                fill="currentColor"
                d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"
                class=""
              ></path>
            </svg>
          </div>
        </div>
        <div class="flex-col flex-grow min-lg:flex min-lg:pt-3 min-lg:pb-[11px] min-lg:px-3 min-lg:w-full">
          <h3
            class="
              min-h-[38px]
              text-sm
              leading-[19px]
              font-medium
              -order-1
              line-clamp-2
              text-gray-700
              min-lg:mb-[4.94px] min-lg:min-h-[58px] min-lg:text-xl min-lg:leading-[29px] min-lg:text-hi-price
            "
          >
            {{ course.title }}
          </h3>
          <div class="hidden justify-between items-center flex-wrap mb-[7.5px] min-lg:flex min-lg:mb-[10px] min-lg:w-full min-lg:order-2">
            <p class="hidden text-sm leading-[19px] text-gray-700 min-lg:block min-lg:mb-[6px]">剩 8 天</p>
            <p class="text-sm leading-[19px] text-gray-700 min-lg:mb-[6px]">已募資 330%</p>
            <!---->
            <div class="relative w-[39.54%] h-[6px] bg-hi-input-gray rounded-md overflow-hidden min-lg:w-full min-lg:h-[10px]">
              <div
                class="absolute inset-y-0 left-0 rounded-md"
                style="background: linear-gradient(90deg, rgb(235, 103, 103) 0%, rgb(227, 74, 74) 100%); width: 330%"
              ></div>
            </div>
          </div>
          <div class="flex justify-between items-center min-lg:justify-start min-lg:mb-[4.81px] min-lg:order-1">
            <div
              class="flex-shrink-0 hidden bg-center rounded-full mr-[5px] w-[23px] h-[23px] min-lg:block min-lg:mr-[10px] min-lg:w-[37px] min-lg:h-[37px]"
              style="background-size: cover"
              :style="{
                backgroundImage: `url(${course.lecturers[0].avatar})`,
              }"
            ></div>
            <p class="text-xs leading-[14px] text-gray-600 min-lg:text-base min-lg:leading-[27.64px]">{{ course.lecturers[0].username }}</p>
            <p class="font-bold leading-none min-lg:hidden text-red-1">{{ `$${nowPrice.price}` }}</p>
          </div>
          <div class="items-center hidden min-lg:flex min-lg:items-end min-lg:order-3">
            <span class="mr-[5px] text-sm leading-[17px] text-blueGray-4 font-bold min-lg:mr-1 min-lg:text-[22px] min-lg:leading-[24px]">{{
              `$${nowPrice.price}`
            }}</span>
            <del class="text-sm leading-[17px] text-gray-500 min-lg:leading-[18px]">{{ `$${course.fixed_price}` }}</del>
          </div>
        </div>
      </div>
      <div class="flex min-lg:hidden">
        <div class="flex items-center justify-center flex-shrink-0 mr-4 w-[100px]">
          <p class="text-sm leading-none text-gray-700">已募資 330%</p>
        </div>
        <div class="flex items-center justify-center flex-grow">
          <div class="relative flex-grow overflow-hidden rounded-md h-[6px] bg-hi-input-gray">
            <div class="absolute inset-y-0 left-0 rounded-md bg-red-1" style="width: 330%"></div>
          </div>
        </div>
      </div>
    </nuxt-link>
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
  computed: {
    nowPrice() {
      return this.course.prices.find((price) => price.fundraising);
    },
  },
};
</script>

<style lang="scss" scoped>
.course-card-cover {
  display: none;
}
@media (min-width: 1024px) {
  .course-card-image {
    &:hover {
      .course-card-cover {
        display: flex;
      }
    }
  }
}
</style>
