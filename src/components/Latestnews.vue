<script setup></script>
<template>
  <div class="slide-container">
    <div class="slide-content">
      <h1 class="judul">LATEST NEWS</h1>
      <div class="card-wrapper">
        <div class="card">
          <div class="image-content">
            <div class="card-image">
              <img src="/image/News/berita1.jpg" class="card-img" />
            </div>
          </div>
          <div class="card-content">
            <router-link :to="'/isiberita'" class="name"
              >Pelepasan Siswa Siswi Kelas Tiga Ke Wali Murid | SMKN 2 Rejang
              Lebong 2022.</router-link
            >
            <p class="date">
              <font-awesome-icon icon="calendar-days" size="xs" /> 07 Jun 2022
            </p>
          </div>
        </div>
        <div class="card">
          <div class="image-content">
            <div class="card-image">
              <img src="/image/News/berita2.jpg" class="card-img" />
            </div>
          </div>
          <div class="card-content">
            <router-link :to="'/isiberita'" class="name"
              >Tata Boga SMKN 2 Rejang Lebong Berpartisipasi Bazar UMKM Di
              Gedung Serba Guna Rejang Lebong.</router-link
            >
            <p class="date">
              <font-awesome-icon icon="calendar-days" size="xs" /> 27 Feb 2022
            </p>
          </div>
        </div>
        <div class="card">
          <div class="image-content">
            <div class="card-image">
              <img src="/image/News/berita3.jpg" class="card-img" />
            </div>
          </div>
          <div class="card-content">
            <router-link :to="'/isiberita'" class="name"
              >Upacara Peringatan Hari Guru National 2021 | SMKN 2 Rejang
              Lebong.</router-link
            >
            <p class="date">
              <font-awesome-icon icon="calendar-days" size="xs" /> 03 Des 2021
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.slide-content {
  margin: 0 140px;
  border-radius: 25px;
}
.card-wrapper {
  display: flex;
  justify-content: space-around;
}

.card {
  width: 400px;
  border-radius: 4px;
  padding-top: 20px;
}

.image-content,
.card-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 14px;
  background-color: #fff;
}

.card-content a {
  text-decoration: none;
}
.image-content {
  position: relative;
  row-gap: 5px;
  transition: transform 0.2s;
}

.card-image {
  position: relative;
  height: 230px;
  width: 400px;
  background: #fff;
}

.card-image .card-img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 6px;
}

.name {
  font-size: 18px;
  font-weight: 500;
  color: #183153;
  padding-bottom: 10px;
  text-align: center;
}
.name:hover {
  text-decoration: underline;
}

.date {
  font-size: 14px;
  color: #183153;
  text-align: center;
}
.judul {
  font-size: 40px;
  text-align: center;
  padding-top: 25px;
  color: #183153;
  font-weight: 700;
}

@media only screen and (max-width: 1207px) {
  .card {
    width: 340px;
  }
  .card-image {
    height: 130px;
    width: 340px;
  }
}

@media only screen and (max-width: 1085px) {
  .card {
    width: 330px;
  }
  .card-image {
    height: 130px;
    width: 330px;
  }

  .judul {
    font-size: 36px;
  }
}

@media screen and (max-width: 989px) {
  .card-wrapper {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;
    align-content: stretch;
  }

  .judul {
    font-size: 32px;
    white-space: normal;
  }
}

@media screen and (max-width: 486px) {
  .judul {
    font-size: 26px;
    white-space: normal;
  }
}
</style>
