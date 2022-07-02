<template>
  <div class="slide-container">
    <div class="slide-content">
      <h2 class="judul">Tata Boga</h2>
      <div class="card-wrapper">
        <div class="card">
          <div class="image-content">
            <div class="card-image">
              <img src="image/Guru/muthia.jpg" class="card-img" />
            </div>
            <div class="card-content">
              <p class="name">Muthia Osfira S.Pd</p>
              <p class="jurusan">Kepala Jurusan Tata Boga</p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="image-content">
            <div class="card-image">
              <img src="image/Guru/guru11.jpg" class="card-img" />
            </div>
            <div class="card-content">
              <p class="name">Falah Izuddin S.Kom</p>
              <p class="jurusan">Guru Tata Boga</p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="image-content">
            <div class="card-image">
              <img src="image/Guru/guru12.jpg" class="card-img" />
            </div>
            <div class="card-content">
              <p class="name">Dio Stevano F.R A.Md</p>
              <p class="jurusan">Guru Tata Boga</p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="image-content">
            <div class="card-image">
              <img src="image/Guru/guru13.jpg" class="card-img" />
            </div>
            <div class="card-content">
              <p class="name">Ade Putri O., S.Kom</p>
              <p class="jurusan">Guru Tata Boga</p>
            </div>
          </div>
        </div>
        <div class="text-content">
          <div class="pertama">
            <p class="title">Profil Tataboga</p>
            <p>
              Tata boga dengan isi jurusan kuliner, kompetensi tata boga :
              Menghasilkan tamatan yang mandiri dan berjiwa wirausaha dalam
              pariwisawa (Tata Boga).
            </p>
          </div>
          <div class="kedua">
            <p class="materi">Misi Jurusan Kuliner :</p>
            <p>Mendidik dan melatih peserta didik menjadi manusia yang :</p>
            <ul>
              <li>1. Memiliki sikap yang baik dalam mengelola makanan.</li>
              <li>
                2. Terampil, mandiri dan dapat mengembangkan diri dibidang
                pengolahan makanan.
              </li>
              <li>
                3. Memiliki kreativitas dan inovasi dalam bidang Tata Boga.
              </li>
              <li>
                4. Melaksanakan layanan prima terhadap siswa kompetensi keahlian
                Tata Boga dalam semua aspek sarana dan prasarana untuk
                menghasilkan tenaga yang kompeten dan mandiri.
              </li>
              <li>
                5. Meningkatkan kualitas tamatan yang sesuai dengan standar
                kompentsi nasional (SSN) dalam menghadapi era globalisasi.
              </li>
              <li>
                Meningkatkan mutu sumber daya manusia melalui penerapat IPTEK
                dan IMTAQ
              </li>
            </ul>
            <p>
              Moto Kuliner (Tata Boga) : Terdepan Bersama Boga, Terampil
              Berwirausaha.
            </p>
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
