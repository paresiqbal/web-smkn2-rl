<template>
  <div class="slide-container">
    <div class="main-content">
      <h2 class="judul">Download Area</h2>
      <div class="side">
        <h4>Click untuk mendownload</h4>
        <h4>2021</h4>
        <ul>
          <li><a href="/">Sertifikat Akreditasi SMKN 2 Rejang Lebong</a></li>
          <li><a href="/">Hardware Computer</a></li>
          <li><a href="/">Malicius Software</a></li>
          <li>
            <a href="/"
              >Augmented Reality Sebagai Media Pembelajaran Hardware Computer
              Untuk Siswa Jurusan Multimedia Di SMKN 2 Rejang Lebong</a
            >
          </li>
        </ul>
      </div>
      <div class="side">
        <h4>2017</h4>
        <ul>
          <li><a href="/">Bagaimana Membentuk Pola Pikir yang Baru</a></li>
          <li><a href="/">14 Teknik Komunikasi Yang Paling Efektif</a></li>
          <li><a href="/">Dasar-dasar CSS</a></li>
        </ul>
      </div>
    </div>
    <div class="sidebar">
      <Sidebar />
    </div>
  </div>
</template>

<script setup>
import Sidebar from "../components/Sidebar.vue";
</script>

<style scoped>
.slide-container {
  display: flex;
  margin: 0 140px;
}

.judul {
  font-size: 40px;
  font-weight: 500;
  color: #183153;
  padding-bottom: 20px;
}

.main-content h4 {
  font-size: 18px;
  color: #183153;
  font-weight: 500;
}

.side {
  padding: 0 10px;
}

ul li a {
  color: #183153;
}

a:hover {
  text-decoration: underline;
}

@media (max-width: 998px) {
  .slide-container {
    display: grid;
  }
}
</style>
