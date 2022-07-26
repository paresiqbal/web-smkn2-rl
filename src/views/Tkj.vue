<template>
  <div class="slide-container">
    <div class="slide-content">
      <h2 class="judul">Teknik Komputer Jaringan</h2>
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
              <img src="/image/Guru/guru1.jpg" class="card-img" />
            </div>
            <div class="card-content">
              <p class="name">Falah Izuddin S.Kom</p>
              <p class="jurusan">Guru TKJ</p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="image-content">
            <div class="card-image">
              <img src="/image/Guru/guru2.jpg" class="card-img" />
            </div>
            <div class="card-content">
              <p class="name">Dio Stevano F.R A.Md</p>
              <p class="jurusan">Guru TKJ</p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="image-content">
            <div class="card-image">
              <img src="/image/Guru/guru3.jpg" class="card-img" />
            </div>
            <div class="card-content">
              <p class="name">Ade Putri O., S.Kom</p>
              <p class="jurusan">Guru TKJ</p>
            </div>
          </div>
        </div>
        <div class="text-content">
          <div class="pertama">
            <p class="title">Profil Teknik Komputer Jaringan</p>
            <p>
              TKJ adalah sebuah program ilmu kejuruan dibidang teknologi
              informasi dan komunikasi yang berhubungan dengan kemampuan
              pemrograman komputer, perakitan komputer dan jaringan komputer,
              serta pengoperasian perangkat lunak komputer. Lulusan jurusan ini
              sangat diperhitungkan dalam dunia teknologi dan informasi,
              terutama perusahaan ataupun startup yang bergerak di bidang
              pengembangan dan pelayanan TI seperti Bukalapak, Tokopedia, dan
              lainnya serta dapat membuka usaha sendiri dibidang komputer
              ataupun bisa juga bekerja di perusahaan dalam bidang pelayanan
              jaringan. Hal ini disebabkan karena tidak seimbang nya antara
              tuntutan kebutuhan SDM dalam dunia IT dengan jumlah tenaga kerja
              yang tersedia.
            </p>
          </div>
          <div class="kedua">
            <p class="materi">Materi Keahlian</p>
            <ul>
              <li>Administrasi Jaringan (LAN-WAN)</li>
              <li>Service Jaringan Komputer</li>
              <li>Teknik Komputer (Hardware Dan Software)</li>
              <li>Instalasi Server Dan Client</li>
              <li>Pemograman Web</li>
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
}
.slide-content {
  padding: 25px 0;
  color: #183153;
}
.slide-content h2 {
  font-size: 30px;
  font-weight: 500;
  text-align: center;
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
    margin: 0 30px;
  }

  .card-wrapper {
    gap: 4px;
  }
}

@media screen and (min-width: 574px) {
  .slide-container {
    margin: 0 140px;
  }

  .slide-content h2 {
    font-size: 40px;
    text-align: left;
    padding: 20px 0;
  }
}
</style>
