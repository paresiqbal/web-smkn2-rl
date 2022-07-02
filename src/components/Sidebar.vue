<template>
  <div class="container">
    <div class="sidebar">
      <h3>Berita Terkait</h3>
      <ul>
        <li>
          <font-awesome-icon icon="chevron-right" size="xs" />
          <a href="#"
            >Pelepasan SIswa SIswi Kelas 3 Ke Wali Murid | Smkn 2 Rejang Lebong
            2022</a
          >
        </li>
        <li>
          <font-awesome-icon icon="chevron-right" size="xs" />
          <a href="#"
            >Tata Boga Smkn 2 Rejang Lebong Berpartisipasi Bazar UMKM di Gedung
            Serba Guna Rejang Lebong</a
          >
        </li>
        <li>
          <font-awesome-icon icon="chevron-right" size="xs" />
          <a href="#"
            >Upacara Peringatan Hari Guru Nasional 2021 - SMKN 2 Rejang
            Lebong</a
          >
        </li>
        <li>
          <font-awesome-icon icon="chevron-right" size="xs" />
          <a href="#">Pelaksanaan ANBK SD di SMKN 2 Rejang Lebong 2021</a>
        </li>
        <li>
          <font-awesome-icon icon="chevron-right" size="xs" />
          <a href="#">SMKN 2 Rejang Lebong Banjir Prestasi di Tahun 2021</a>
        </li>
        <li>
          <font-awesome-icon icon="chevron-right" size="xs" /><a href="#"
            >Pelantikan Pengurus OSIS 2021</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding: 40px 0;
}
.sidebar {
  width: 300px;
}

.sidebar h3 {
  font-size: 20px;
  font-weight: 500;
  color: crimson;
}
ul {
  list-style: none;
}
.sidebar li a {
  text-decoration: none;
  list-style: none;
  padding-left: 5px;
  color: #183153;
  font-size: 14px;
  padding-bottom: 5px;
}

.sidebar li a:hover {
  text-decoration: underline;
}
@media (max-width: 574px) {
  .sidebar {
    padding-left: 10px;
  }
}
</style>
