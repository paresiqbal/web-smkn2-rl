<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation],
    };
  },
};
</script>
<template>
  <div class="slide-container">
    <div class="agenda-wrapper">
      <div class="pengumuman">
        <h1>AGENDA KEGIATAN</h1>
        <ul class="list-item">
          <li class="isi">
            <a href="/"
              >PEMBAGIAN RAPOR SEMESTER GANJIL SMKN 2 REJANG LEBONG TAHUN
              2021.</a
            >
            <p>
              <font-awesome-icon icon="calendar-days" size="xs" />
              2018-10-12 14:57:00
            </p>
          </li>
          <li>
            <a href="/">PENGISIAN RAPOR SISWA.</a>
            <p>
              <font-awesome-icon icon="calendar-days" size="xs" />
              2018-10-12 14:57:00
            </p>
          </li>
        </ul>
      </div>
      <div class="banner">
        <h1>HIGHLIGHT PROGRAM</h1>
        <div class="swiper-wrapper">
          <swiper :navigation="true" :modules="modules" class="mySwiper">
            <swiper-slide
              ><img src="/image/Carousel/carousel1.jpg" /></swiper-slide
            ><swiper-slide
              ><img src="/image/Carousel/carousel2.jpg"
            /></swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.slide-container {
  margin: 0 140px;
}

.agenda-wrapper {
  padding-bottom: 30px;
  display: grid;
  grid-template-columns: 35% 65%;
}

.agenda-wrapper h1 {
  font-size: 23px;
  font-weight: 500;
}

ul.list-item {
  list-style: none;
  color: #183153;
}

ul.list-item a {
  text-decoration: none;
  color: crimson;
  font-weight: 500;
}
ul.list-item a:hover {
  text-decoration: underline;
}
.isi {
  padding-bottom: 8px;
}

.agenda-wrapper h1 {
  color: #183153;
  padding-bottom: 18px;
}
/* Carousel */
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  height: 380px;

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
  height: 100%;
  object-fit: cover;
}

@media screen and (max-width: 950px) {
  .agenda-wrapper {
    display: block;
  }

  .swiper-slide {
    height: 290px;
  }
}

@media screen and (max-width: 500px) {
  .slide-container {
    margin: 0 20px;
  }
}
</style>
