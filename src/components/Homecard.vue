<script setup></script>

<template>
  <div class="slide-container">
    <div class="slide-content">
      <div class="card-wrapper">
        <div class="card">
          <div class="image-content">
            <span class="overlay"></span>
            <div class="card-image">
              <img src="../assets//image/person.jpg" class="card-img" />
            </div>
          </div>

          <div class="card-content">
            <h2 class="name">Pahreza</h2>
            <p class="description">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
              labore qui hic enim ab itaque voluptatibus voluptate eveniet
              aliquid nobis.
            </p>
            <button class="button">View More</button>
          </div>
        </div>
        <div class="card">
          <div class="image-content">
            <span class="overlay"></span>
            <div class="card-image">
              <img src="../assets//image/person.jpg" class="card-img" />
            </div>
          </div>

          <div class="card-content">
            <h2 class="name">Pahreza</h2>
            <p class="description">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
              labore qui hic enim ab itaque voluptatibus voluptate eveniet
              aliquid nobis.
            </p>
            <button class="button">View More</button>
          </div>
        </div>
        <div class="card">
          <div class="image-content">
            <span class="overlay"></span>
            <div class="card-image">
              <img src="../assets//image/person.jpg" class="card-img" />
            </div>
          </div>

          <div class="card-content">
            <h2 class="name">Pahreza</h2>
            <p class="description">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
              labore qui hic enim ab itaque voluptatibus voluptate eveniet
              aliquid nobis.
            </p>
            <button class="button">View More</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
body {
  min-height: 100vh;
  align-items: center;
  justify-content: center;
}
.slide-container {
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
}
.card {
  width: 390px;
  border-radius: 25px;
  background-color: #fff;
}
.image-content,
.card-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 14px;
}
.image-content {
  position: relative;
  row-gap: 5px;
  padding: 25px 0;
}
.overlay {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: #4070f4;
  border-radius: 25px 25px 0 25px;
}
.overlay::before,
.overlay::after {
  content: "";
  position: absolute;
  right: 0;
  bottom: -40px;
  height: 40px;
  width: 40px;
  background-color: #4070f4;
}
.overlay::after {
  border-radius: 0 25px 0 0;
  background-color: #fff;
}
.card-image {
  position: relative;
  height: 150px;
  width: 150px;
  border-radius: 50%;
  background: #fff;
  padding: 3px;
}
.card-image .card-img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid #4070f4;
}
.name {
  font-size: 18px;
  font-weight: 500;
  color: #333;
}
.description {
  font-size: 14px;
  color: #707070;
  text-align: center;
}
.button {
  border: none;
  font-size: 16px;
  color: #fff;
  padding: 8px 16px;
  background-color: #4070f4;
  border-radius: 6px;
  margin: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
}
.button:hover {
  background: #265df2;
}

@media only screen and (max-width: 1158px) {
  .slide-container {
    padding: 30px 0;
  }
  .slide-content {
    margin: 0 70px;
    border-radius: 25px;
  }
}

@media screen and (max-width: 768px) {
  .card-wrapper {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;
    align-content: stretch;
  }
}
</style>
