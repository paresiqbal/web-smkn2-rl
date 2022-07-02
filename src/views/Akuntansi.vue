<template>
  <div class="slide-container">
    <div class="slide-content">
      <h2 class="judul">Akuntansi</h2>
      <div class="card-wrapper">
        <div class="card">
          <div class="image-content">
            <div class="card-image">
              <img src="image/Guru/dwi.jpg" class="card-img" />
            </div>
            <div class="card-content">
              <p class="name">Dwi Oktarina S.E</p>
              <p class="jurusan">Kepala Jurusan Akuntansi</p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="image-content">
            <div class="card-image">
              <img src="image/Guru/guru9.jpg" class="card-img" />
            </div>
            <div class="card-content">
              <p class="name">Falah Izuddin S.Kom</p>
              <p class="jurusan">Guru Akuntansi</p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="image-content">
            <div class="card-image">
              <img src="image/Guru/guru14.jpg" class="card-img" />
            </div>
            <div class="card-content">
              <p class="name">Dio Stevano F.R A.Md</p>
              <p class="jurusan">Guru Akuntansi</p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="image-content">
            <div class="card-image">
              <img src="image/Guru/guru15.jpg" class="card-img" />
            </div>
            <div class="card-content">
              <p class="name">Ade Putri O., S.Kom</p>
              <p class="jurusan">Guru Akuntansi</p>
            </div>
          </div>
        </div>
        <div class="text-content">
          <div class="pertama">
            <p class="title">Profil Akuntansi</p>
            <p>
              Kompetensi keahlian akuntansi di SMK Negeri 2 Rejang Lebong
              meliputi pembelajaran Akuntansi Manual dan Akuntansi Komputer
              (MYOB). Kompetensi keahlian akuntansi di SMK Negeri 2 Rejang
              Lebong bertujuan agar siswa dapat mengetahui akuntansi baik untuk
              perusahaan jasa, perusahaan dagang, dan perusahaan manufaktur.
              Siswa kompetensi keahlian akuntansi diharapkan dapat melakukan
              siklus akuntansi minimal bagi dirinya sendiri dan pada perusahaan
              umumnya dan sekaligus mampu menerapkan sistem perpajakan
              Indonesia.
            </p>
            <p>
              Lulusan Kompetensi Akuntansi SMK Negeri 2 Rejang Lebong ada yang
              kuliah, bekerja dan tidak sedikit yang melanjutkan kuliah sambil
              bekerja. Untuk kompetensi keahlian akuntansi belajar mengenai
              siklus akuntansi maka tidak ada karya yang bersifat rill atau
              produk nyata yang bisa di pamerkan, tapi laporan keuangan
              merupakan produk jasa akuntansi.
            </p>
          </div>
          <div class="kedua">
            <p class="materi">Materi Keahlian</p>
            <ul>
              <li>Pengantar Ekonomi Bisnis</li>
              <li>Pengantar Administrasi Perkantoran</li>
              <li>Akuntansi Keuangan</li>
              <li>Akuntansi Perusahaan Dagang</li>
              <li>Akuntansi Manufaktur</li>
              <li>Komputer Akuntansi</li>
              <li>Administrasi Pajak</li>
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
