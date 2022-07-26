<template>
  <div class="slide-container">
    <div class="slide-content">
      <h2 class="judul">Otomatisasi Tata Kelola Perkantoran</h2>
      <div class="card-wrapper">
        <div class="card">
          <div class="image-content">
            <div class="card-image">
              <img src="/image/Guru/raden.jpg" class="card-img" />
            </div>
            <div class="card-content">
              <p class="name">Drs.Radeh Suhardi</p>
              <p class="jurusan">Kepala Jurusan OTKP</p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="image-content">
            <div class="card-image">
              <img src="/image/Guru/guru14.jpg" class="card-img" />
            </div>
            <div class="card-content">
              <p class="name">Falah Izuddin S.Kom</p>
              <p class="jurusan">Guru Perkantoran</p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="image-content">
            <div class="card-image">
              <img src="/image/Guru/guru10.jpg" class="card-img" />
            </div>
            <div class="card-content">
              <p class="name">Dio Stevano F.R A.Md</p>
              <p class="jurusan">Guru Perkantoran</p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="image-content">
            <div class="card-image">
              <img src="/image/Guru/guru16.jpg" class="card-img" />
            </div>
            <div class="card-content">
              <p class="name">Ade Putri O., S.Kom</p>
              <p class="jurusan">Guru Perkantoran</p>
            </div>
          </div>
        </div>
        <div class="text-content">
          <div class="pertama">
            <p class="title">Profil Otomatisasi Tata Kelola Perkantoran</p>
            <p>
              Otomatisasi Tata Kelola Perkantoran merupakan kristalisasi dari
              program keahlian yang harus di kuasai oleh peserta didik untuk
              dapat bekerja sesuai dengan standart kompetentensi kerja nasional
              Indonesia (SKKNI) atau standart paket keahlian : ADMINISTRASI
              PERKANTORAN.
            </p>
          </div>
          <div class="kedua">
            <p class="materi">Materi Keahlian</p>
            <ul>
              <li>Pengantar Ekonomi Bisnis</li>
              <li>Pengantar Administrasi Perkantoran</li>
              <li>Pengantar Akuntansi</li>
              <li>Otomatisasi Perkantoran</li>
              <li>Korespondensi</li>
              <li>Kearsipan</li>
              <li>Simulasi Digital</li>
              <li>Administrasi Kepegawaiian</li>
              <li>Administrasi Keuangan</li>
              <li>Administrasi Sarana Prasarana</li>
              <li>Administrasi Humas dan Keprotokolan</li>
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
