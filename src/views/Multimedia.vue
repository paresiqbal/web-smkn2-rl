<template>
  <div class="slide-container">
    <div class="slide-content">
      <h2 class="judul">Multimedia</h2>
      <div class="card-wrapper">
        <div class="card">
          <div class="image-content">
            <div class="card-image">
              <img src="/image/Guru/nasrizal.jpg" class="card-img" />
            </div>
            <div class="card-content">
              <p class="name">Nasrizal S.Pd</p>
              <p class="jurusan">Kepala Jurusan TKI</p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="image-content">
            <div class="card-image">
              <img src="/image/Guru/ayu.jpg" class="card-img" />
            </div>
            <div class="card-content">
              <p class="name">Ayu Citra Yelly S.Kom</p>
              <p class="jurusan">Guru Multimedia</p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="image-content">
            <div class="card-image">
              <img src="/image/Guru/neni.jpg" class="card-img" />
            </div>
            <div class="card-content">
              <p class="name">Neni Citra Dewi S.T, M.TPd</p>
              <p class="jurusan">Guru Multimedia</p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="image-content">
            <div class="card-image">
              <img src="/image/Guru/guru10.jpg" class="card-img" />
            </div>
            <div class="card-content">
              <p class="name">Sondang S.Sn</p>
              <p class="jurusan">Guru Multimedia</p>
            </div>
          </div>
        </div>
        <div class="text-content">
          <div class="pertama">
            <p class="title">Profil Multimedia</p>
            <p>
              Multimedia adalah program ilmu kejuruan yang mempelajari tentang
              kombinasi atau penggabungan teks, audio, video, animasi, dan
              gambar yang di sajikan dalam penggunaan komputer dengan
              menggunakan bantuan software sehingga menghasilkan presentasi yang
              menarik orang untuk melihat nya. Peluang pekerjaan lulusan jurusan
              multimedia sangat terbuka lebar dikarenakan saat ini banyak
              dibutuhkan para designer logo, poster, brand, dan lain nya, serta
              video editing dan lain sebagainya.
            </p>
          </div>
          <div class="kedua">
            <p class="materi">Materi Keahlian</p>
            <ul>
              <li>Desain Grafis Pengembangan WEB</li>
              <li>Multimedia Interaktif</li>
              <li>Animasi 2D dan 3D</li>
              <li>Audio dan Video Produksi</li>
              <li>Fotografi</li>
            </ul>
          </div>
        </div>
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
.slide-content {
  padding: 25px 0;
  color: #183153;
}
.slide-content h2 {
  font-size: 40px;
  font-weight: 400;
}
.card-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding-bottom: 30px;
}

.card {
  width: 150px;
  border-radius: 4px;
  border-bottom: 2px solid #e91e63;
  padding-top: 20px;
}

.image-content,
.card-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #fff;
}

.image-content {
  position: relative;
  row-gap: 5px;
}

.card-image {
  position: relative;
  height: 200px;
  width: 150px;
  background: #fff;
}
.card-image .card-img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 4px;
}
.name {
  font-size: 13px;
  font-weight: 500;
  color: #183153;
  padding-bottom: 14px;
}
.jurusan {
  font-size: 13px;
  color: #183153;
  text-align: center;
}

.pertama {
  padding-bottom: 10px;
}
.title {
  font-size: 25px;
  padding: 10px 0;
}

.materi {
  font-size: 20px;
  font-weight: 500;
}

.kedua ul {
  list-style: none;
}

/* @media screen and (max-width: 767px) {

} */
@media screen and (max-width: 574px) {
  .slide-container {
    flex-direction: column;
    margin: 0 50px;
  }

  .card-wrapper {
    gap: 4px;
  }
}
</style>
