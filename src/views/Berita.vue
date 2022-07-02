<script setup></script>

<template>
  <div class="slide-container">
    <div class="news-wrapper">
      <h2 class="judul">Berita</h2>
      <div class="news">
        <div class="image-container">
          <a href="/"><img src="/image/News/berita1.jpg" /></a>
        </div>
        <div class="text-container">
          <div class="text">
            <RouterLink to="/isiberita"
              ><a href="/" class="title"
                >Pembagian Rapor Semester Ganjil SMKN 2 Rejang Lebong Tahun
                2021</a
              ></RouterLink
            >
            <p>Pembagian Rapor Dilaksanakan Hari Sabtu 18 Desember</p>
          </div>
          <div class="keterangan">
            <p>
              <font-awesome-icon icon="calendar-days" size="xs" />
              07 Jun 2022
            </p>
          </div>
        </div>
      </div>

      <div class="news">
        <div class="image-container">
          <a href="/"><img src="/image/News/berita4.jpg" /></a>
        </div>
        <div class="text-container">
          <div class="text">
            <a href="/" class="title"
              >Pelaksanaan ANBK SD di SMKN 2 Rejang Lebong Tahun 2021</a
            >
            <p>Pelaksanaan ANBK SD di SMKN 2 Rejang</p>
          </div>
          <div class="keterangan">
            <p>
              <font-awesome-icon icon="calendar-days" size="xs" />
              03 Des 2021
            </p>
          </div>
        </div>
      </div>

      <div class="news">
        <div class="image-container">
          <a href="/"><img src="/image/News/berita3.jpg" /></a>
        </div>
        <div class="text-container">
          <div class="text">
            <a href="/" class="title"
              >Upacara Peringatan Hari Guru Nasional 2021 - SMKN 2 Rejang
              Lebong</a
            >
            <p>Peringatan Hari Guru Nasional 2021 di smkn 2 rejang</p>
          </div>
          <div class="keterangan">
            <p>
              <font-awesome-icon icon="calendar-days" size="xs" />
              03 Des 2021
            </p>
          </div>
        </div>
      </div>

      <div class="news">
        <div class="image-container">
          <a href="/"><img src="/image/News/berita2.jpg" /></a>
        </div>
        <div class="text-container">
          <div class="text">
            <a href="/" class="title"
              >Tata Boga Smkn 2 Rejang Lebong Berpartisipasi Bazar UMKM</a
            >
            <p>
              Tata Boga Smkn 2 Rejang Lebong Berpartisipasi Bazar UMKM di Gedung
              Serba Guna Rejang Lebong
            </p>
          </div>
          <div class="keterangan">
            <p>
              <font-awesome-icon icon="calendar-days" size="xs" />
              03 Des 2021
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.slide-container {
  margin: 0 140px;
  display: flex;
  color: #183153;
}

.news-wrapper h2 {
  font-size: 40px;
  font-weight: 500;
  padding-bottom: 20px;
}

.news-wrapper {
  max-width: 70rem;
}

.news {
  display: flex;
  padding-bottom: 50px;
}

.image-container {
  width: 340px;
  height: 200px;
}

.image-container img {
  max-height: 100%;
  width: 100%;
}

.text-container {
  padding: 0 20px;
}

.title {
  text-decoration: none;
  font-size: 20px;
  font-weight: 500;
}

.title:hover {
  text-decoration: underline;
}

.text p {
  font-size: 14px;
  padding-top: 10px;
}

.keterangan p {
  font-size: 14px;
  padding-top: 5px;
}

/* responsive */
@media screen and (max-width: 800px) {
  .news {
    display: inline;
  }

  .news-wrapper {
    padding-left: 15px;
  }

  .text-container {
    padding: 0;
  }

  .container {
    display: inline;
  }
}
</style>
