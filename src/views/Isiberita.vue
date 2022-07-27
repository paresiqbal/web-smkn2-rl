<script setup>
import Sidebar from "../components/Sidebar.vue";
import Share from "../components/Share.vue";
import Tags from "../components/Tags.vue";
</script>

<template>
  <div class="slide-container">
    <div class="main-content">
      <h1>
        Pelepasan SIswa SIswi Kelas 3 Ke Wali Murid | SMKN 2 Rejang Lebong 2022
      </h1>
      <div class="upload">
        <span
          ><font-awesome-icon icon="user" size="xs" /> Muhammad Ilham
          Maulidian</span
        >
        <span
          ><font-awesome-icon icon="clock" size="xs" /> Jumat, 1 Februari 2019
          pukul 11.15</span
        >
      </div>
      <div class="image">
        <img src="/image/News/berita1.jpg" />
      </div>
      <div class="text-content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum unde
          animi, numquam fugiat labore incidunt! Et distinctio eligendi quasi
          iusto numquam quia neque laudantium dicta perspiciatis asperiores
          cupiditate similique minima repudiandae consectetur, reiciendis
          obcaecati doloremque modi? Laudantium suscipit placeat culpa
          consectetur nesciunt natus adipisci laborum vel, alias quia aspernatur
          magnam!
        </p>
      </div>
      <div class="share"><Share /></div>
      <div class="tags"><Tags /></div>
    </div>
    <div class="sidebar">
      <Sidebar />
    </div>
  </div>
</template>

<style scoped>
.slide-container {
  display: flex;
  color: #183153;
}

.main-content {
  padding: 25px 0;
}
.main-content h1 {
  font-size: 32px;
  font-weight: 500;
  padding-bottom: 20px;
}

.upload {
  padding-bottom: 15px;
}
.upload span {
  margin: 0 10px;
}

.upload span:first-of-type {
  margin-left: 0;
}
.text-content {
  padding-bottom: 15px;
}
.main-content p {
  padding-bottom: 8px;
}
.main-content img {
  height: 480px;
  width: 600px;
  justify-items: center;
  align-items: center;
  padding-bottom: 20px;
}

@media (max-width: 574px) {
  .container {
    display: inline;
  }

  .main-content {
    width: 100%;
    padding-left: 10px;
  }
  .main-content img {
    height: 350px;
    width: 350px;
  }
}

@media (max-width: 998px) {
  .slide-container {
    display: grid;
  }
}

@media (min-width: 500px) {
  .slide-container {
    margin: 0 140px;
  }
}
</style>
