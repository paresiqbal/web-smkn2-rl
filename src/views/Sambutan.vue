<template>
  <div class="slide-container">
    <div class="main-content">
      <h2 class="judul">Sambutan</h2>
      <img src="/image/aset/sambutan.jpg" />
      <p>Assalamualaikum Warahmatulahi Wabarakatuh</p>
      <p>
        Pertama-tama mari kita panjatkan puji syukur kehadirat Allah SWT yang
        senantiasa melimpahkan nikmat Iman dan Islam serta nikmat sehat kepada
        kita. Tak lupa teriring shalawat serta salam kepada junjungan kita Nabi
        Muhammad SAW. Kami Ucapkan Selamat Datang Kepada Para Pengunjung Website
        SMKN 2 Rejang Lebong , Kami Membuat Website ini untuk media
        informasi,promosi dan e-learning untuk siswa smkn 2 rejang lebong dan
        seluruh pengunjung website ini, kami adalah sekolah pertama yang
        mendirikan jurusan Teknik Komputer Jaringan dan satu-satunya jurusan
        Tataboga di kabupaten Rejang Lebong, dan kami akan berusaha untuk
        memajukan sekolah kami tercinta, terima kasih atas kunjungannya
      </p>
      <p>Kepala Sekolah SMKN 2 Rejang Lebong</p>
      <p>Sunardi, S.Pd.Bio</p>
    </div>
    <div class="sidebar"></div>
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
}

.main-content p {
  padding: 10px;
  color: #183153;
}

@media (max-width: 574px) {
  .slide-container {
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
</style>
