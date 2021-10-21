<template>
  <div
    class="
      flex
      items-center
      transition-colors
      duration-300
      py-[32px]
      whitespace-nowrap
      sn-1100:py-[24px]
      md:py-[16px]
      sn-640:flex-col sn-640:items-start sn-640:pl-[20px] sn-640:py-[8px] sn-640:pb-[16px]
      bg-hi-white
    "
  >
    <p class="text-base text-right text-gray-600 ml-[20px] mr-[16px] sn-640:mb-[9px] sn-640:ml-0 sn-640:text-left sn-640:text-[14px] min-w-70">熱門標籤</p>
    <div id="tags" class="relative w-full mx-0 tags-container">
      <client-only>
        <swiper class="swiper" :options="swiperOption">
          <swiper-slide
            v-for="item in tags"
            :key="item.link"
            class="
              w-auto
              cursor-pointer
              tag
              p-[8px]
              rounded-[6px]
              mr-[12px]
              text-[14px]
              bg-hi-courses-box
              text-green-1
              sn-640:flex sn-640:h-[32px] sn-640:items-center sn-640:justify-center
              swiper-slide swiper-slide-active
            "
            style="width: auto"
          >
            <nuxt-link :to="item.link" class="">{{ item.name }}</nuxt-link>
          </swiper-slide>
        </swiper>
      </client-only>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        slidesPerView: 'auto',
      },
      tags: [
        {
          name: 'CSS',
          link: '/groups/web-frontend/css',
        },
        {
          name: '網頁排版',
          link: '/groups/web-frontend/%E7%B6%B2%E9%A0%81%E6%8E%92%E7%89%88',
        },
        {
          name: '數據分析',
          link: '/groups/%E8%B3%87%E6%96%99%E5%BA%AB-%E8%B3%87%E6%96%99%E7%A7%91%E5%AD%B8/%E6%95%B8%E6%93%9A%E5%88%86%E6%9E%90',
        },
        {
          name: 'R語言',
          link: '/groups/%E8%B3%87%E6%96%99%E5%BA%AB-%E8%B3%87%E6%96%99%E7%A7%91%E5%AD%B8/r%E8%AA%9E%E8%A8%80',
        },
        {
          name: 'Arduino',
          link: '/groups/iot/arduino',
        },
        {
          name: 'C / C++',
          link: '/groups/iot/c--c++',
        },
        {
          name: '物件導向',
          link: '/groups/computer-science/%E7%89%A9%E4%BB%B6%E5%B0%8E%E5%90%91',
        },
        {
          name: '爬蟲',
          link: '/groups/web-backend/%E7%88%AC%E8%9F%B2',
        },
        {
          name: 'Python',
          link: '/groups/web-backend/python',
        },
        {
          name: 'JavaScript',
          link: '/groups/web-frontend/javascript',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
