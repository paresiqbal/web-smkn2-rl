<template>
  <swiper
    :slidesPerView="1"
    :spaceBetween="30"
    :loop="true"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide><img src="/image/Carousel/baner1.png" /></swiper-slide
    ><swiper-slide><img src="/image/Carousel/baner2.jpg" /></swiper-slide
    ><swiper-slide><img src="/image/Carousel/baner3.jpg" /></swiper-slide
    ><swiper-slide><img src="/image/Carousel/baner4.jpg" /></swiper-slide>
    <swiper-slide><img src="/image/Carousel/baner5.jpg" /></swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
};
</script>
<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 650px;
  object-fit: cover;
}

.swiper {
  margin-left: auto;
  margin-right: auto;
}

@media (max-width: 574px) {
  .swiper-slide img {
    width: 100%;
    height: 350px;
  }
}
</style>
