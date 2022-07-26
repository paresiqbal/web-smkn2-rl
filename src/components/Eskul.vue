<template>
  <div class="container">
    <h1 class="judul">EKSTRAKULIKULER</h1>
    <swiper
      :slidesPerView="3"
      :spaceBetween="30"
      :freeMode="true"
      :pagination="{
        clickable: true,
      }"
      :modules="modules"
      class="mySwiper"
      :breakpoints="swiperOptions.breakpoints"
    >
      <swiper-slide
        ><img src="/image/Eskul/osis.jpg" /><a href="/">Osis</a></swiper-slide
      >
      <swiper-slide
        ><img src="/image/Eskul/basket.jpg" /><a href="/"
          >Basket</a
        ></swiper-slide
      ><swiper-slide
        ><img src="/image/Eskul/futsal.jpg" /><a href="/"
          >Futsal</a
        ></swiper-slide
      ><swiper-slide
        ><img src="/image/Eskul/paskibra.jpg" /><a href="/"
          >Paskibra</a
        ></swiper-slide
      ><swiper-slide
        ><img src="/image/Eskul/pmr.jpg" /><a href="/">Pmr</a></swiper-slide
      ><swiper-slide
        ><img src="/image/Eskul/pramuka.jpg" /><a href="/"
          >Pramuka</a
        ></swiper-slide
      >
      <swiper-slide
        ><img src="/image/Eskul/taekwondo.jpg" /><a href="/"
          >Taekwondo</a
        ></swiper-slide
      >
    </swiper>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [FreeMode, Pagination],
      swiperOptions: {
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          820: {
            slidesPerView: 2,
          },
          1120: {
            slidesPerView: 3,
          },
        },
      },
    };
  },
};
</script>

<style scoped>
.container {
  margin: 30px auto;
}

.container h1 {
  text-align: center;
  padding-bottom: 10px;
  font-size: 26px;
  color: #183153;
  font-weight: 700;
}
.swiper {
  width: 88%;
  height: 100%;
  justify-content: center;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  height: 150px;
  width: 300px;

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
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 4px;
}

.swiper-slide a {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  font-size: 26px;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
}

@media screen and (min-width: 500px) {
  .swiper-slide {
    height: 200px;
    width: 350px;
  }
  .container h1 {
    font-size: 40px;
    padding-bottom: 28px;
  }
}
</style>
