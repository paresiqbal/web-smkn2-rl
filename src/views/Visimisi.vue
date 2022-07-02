<template>
  <div class="slide-container">
    <div class="main-content">
      <h2 class="judul">Visi Misi</h2>
      <p class="subjudul">Visi</p>
      <p>
        Menjadi SMK yang berstandar Nasional dan Internasional unggul dalam
        prestasi, inovasi, kreatif, berbudaya lingkungan yang dilandasi dengan
        iman dan taqwa serta menghasilkan tamatan yang mampu bersaing pada
        tingkat Nasional dan Internsional..
      </p>
      <p class="subjudul">Misi</p>
      <p>
        Menjadi SMK yang berstandar Nasional dan Internasional unggul dalam
        prestasi, inovasi, kreatif, berbudaya lingkungan yang dilandasi dengan
        iman dan taqwa serta menghasilkan tamatan yang mampu bersaing pada
        tingkat Nasional dan Internsional..
      </p>
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
  padding-bottom: 10px;
}

.subjudul {
  font-size: 20px;
  font-weight: 500;
}

.main-content p {
  padding-right: 10px;
  padding-bottom: 6px;
  color: #183153;
}

@media (max-width: 574px) {
  .slide-container {
    display: grid;
  }

  .main-content {
    width: 100%;
    padding-left: 10px;
  }
}

@media (max-width: 998px) {
  .slide-container {
    display: grid;
  }
}
</style>
