<template>
  <client-only>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="(item, ind) in images" :key="'indexImg' + ind">
        <a :href="item.link">
          <div
            class="w-full bg-top bg-no-repeat bg-cover home-bg h-[640px]"
            :style="{
              backgroundImage: `url(${item.imgUrl})`,
            }"
            style="background-size: cover; background-position: center center; background-repeat: no-repeat"
          ></div>
        </a>
      </swiper-slide>
    </swiper>
  </client-only>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
      },
      images: [
        {
          imgUrl:
            'https://thumbnails.f5ezcode.in/eyJidWNrZXQiOiJjZG4uaGlza2lvLmNvbSIsImtleSI6InNsaWRlc1wvZWJvb2stcGFydHkucG5nIiwiZWRpdHMiOnsicG5nIjp7InF1YWxpdHkiOjEwMH0sInJlc2l6ZSI6eyJmaXQiOiJjb3ZlciIsIndpZHRoIjoxOTIwfX19',
          link: 'https://hiskio.com/events/ebooks2021',
        },
        {
          imgUrl:
            'https://thumbnails.f5ezcode.in/eyJidWNrZXQiOiJjZG4uaGlza2lvLmNvbSIsImtleSI6InNsaWRlc1wvZGV2b3BzLmpwZWciLCJlZGl0cyI6eyJwbmciOnsicXVhbGl0eSI6MTAwfSwicmVzaXplIjp7ImZpdCI6ImNvdmVyIiwid2lkdGgiOjE5MjB9fX0=',
          link: 'https://hiskio.com/events/devops2021/',
        },
        {
          imgUrl:
            'https://thumbnails.f5ezcode.in/eyJidWNrZXQiOiJjZG4uaGlza2lvLmNvbSIsImtleSI6InNsaWRlc1wvazhzY2FtcC5wbmciLCJlZGl0cyI6eyJwbmciOnsicXVhbGl0eSI6MTAwfSwicmVzaXplIjp7ImZpdCI6ImNvdmVyIiwid2lkdGgiOjE5MjB9fX0=',
          link: 'https://hiskio.com/k8scamp',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.home-bg {
  @media (max-width: 1480px) {
    height: 550px;
  }
  @media (max-width: 1380px) {
    height: 500px;
  }
  @media (max-width: 1200px) {
    height: 440px;
  }
  @media (max-width: 1100px) {
    height: 400px;
  }
  @media (max-width: 800px) {
    height: 320px;
  }
  @media (max-width: 640px) {
    height: 250px;
  }
  @media (max-width: 500px) {
    height: 190px;
  }
  @media (max-width: 375px) {
    height: 170px;
  }
}
</style>
