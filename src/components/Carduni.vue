<script setup></script>

<template>
  <div class="slide-container">
    <div class="slide-content">
      <h1 class="judul">SMARTSCHOOL</h1>
      <div class="card-wrapper">
        <div class="card">
          <div class="image-content">
            <div class="card-image">
              <img src="/image/Cardhome/card1.jpg" class="card-img" />
            </div>
          </div>
          <div class="card-content">
            <a
              href="http://cbt.smkn2rejanglebong.sch.id/"
              target="_blank"
              class="name"
              >Computer Base Test</a
            >
            <p class="description">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
              labore qui hic enim ab itaque voluptatibus voluptate eveniet
              aliquid nobis.
            </p>
          </div>
        </div>
        <div class="card">
          <div class="image-content">
            <div class="card-image">
              <img src="/image/Cardhome/card2.jpg" class="card-img" />
            </div>
          </div>
          <div class="card-content">
            <a
              href="http://ppdb.smkn2rejanglebong.sch.id/"
              target="_blank"
              class="name"
              >Penerimaan Peserta Didik Baru</a
            >
            <p class="description">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
              labore qui hic enim ab itaque voluptatibus voluptate eveniet
              aliquid nobis.
            </p>
          </div>
        </div>
        <div class="card">
          <div class="image-content">
            <div class="card-image">
              <img
                src="/image/Cardhome/card3.jpg"
                target="_blank"
                class="card-img"
              />
            </div>
          </div>
          <div class="card-content">
            <a href="https://sidadik.smkn2rejanglebong.sch.id/" class="name"
              >Sistem Informasi Data Siswa</a
            >
            <p class="description">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
              labore qui hic enim ab itaque voluptatibus voluptate eveniet
              aliquid nobis.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* body {
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: #e9ecef;
} */
.slide-container {
  background: #e9ecef;
  padding: 30px 0;
  width: 100%;
}
.slide-content {
  margin: 0 140px;
  border-radius: 25px;
}
.card-wrapper {
  display: flex;
  justify-content: space-around;
  gap: 15px;
}
.card {
  width: 400px;
  border-radius: 4px;
  border-bottom: 2px solid crimson;
  padding-top: 20px;
}

.card:hover {
  border-bottom: 6px solid crimson;
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

.card-content a:hover {
  text-decoration: underline;
}

.image-content {
  position: relative;
  row-gap: 5px;
  transition: transform 0.2s;
}
.image-content:hover {
  transform: scale(105%);
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
  border-radius: 6px 6px 0 0;
}
.name {
  font-size: 18px;
  font-weight: 500;
  color: #183153;
  padding-bottom: 10px;
}
.description {
  font-size: 14px;
  color: #183153;
  text-align: center;
}

.judul {
  padding: auto 25px;
  font-size: 40px;
  text-align: center;
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
  .slide-content {
    margin: 0;
  }
}
</style>
