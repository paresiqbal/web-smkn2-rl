<script setup></script>
<template>
  <div class="slide-container">
    <h2 class="judul">Galeri SMK Negeri 2 Rejang Lebong</h2>
    <div class="grid">
      <div class="grid-inner">
        <div class="item">
          <div class="item-inner"></div>
        </div>
        <div class="item">
          <div class="item-inner"></div>
        </div>
        <div class="item">
          <div class="item-inner"></div>
        </div>
        <div class="item">
          <div class="item-inner"></div>
        </div>
        <div class="item">
          <div class="item-inner"></div>
        </div>
        <div class="item">
          <div class="item-inner"></div>
        </div>
        <div class="item">
          <div class="item-inner"></div>
        </div>
        <div class="item">
          <div class="item-inner"></div>
        </div>
        <div class="item">
          <div class="item-inner"></div>
        </div>
        <div class="item">
          <div class="item-inner"></div>
        </div>
        <div class="item">
          <div class="item-inner"></div>
        </div>
        <div class="item">
          <div class="item-inner"></div>
        </div>
        <div class="item">
          <div class="item-inner"></div>
        </div>
        <div class="item">
          <div class="item-inner"></div>
        </div>
        <div class="item">
          <div class="item-inner"></div>
        </div>
        <div class="item">
          <div class="item-inner"></div>
        </div>
        <div class="item">
          <div class="item-inner"></div>
        </div>
        <div class="item">
          <div class="item-inner"></div>
        </div>
        <div class="item">
          <div class="item-inner"></div>
        </div>
        <div class="item">
          <div class="item-inner"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.slide-container {
  margin: 0 100px;
}

.judul {
  font-size: 40px;
  font-weight: 500;
  text-align: center;
  padding-top: 25px;
  color: #183153;
}
.grid {
  padding: 1em;
  padding-top: 25px;
}

.grid-inner {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -0.5em;
}

.item {
  flex: 1 1 100%;
  padding: 0.5em;
}

.item-inner {
  background-size: cover;
  background-image: url("/image/Gallery/1.jpg");
  padding-top: calc(100% / (16 / 9));
}

.item:nth-child(2) .item-inner {
  background-image: url("/image/Gallery/2.jpg");
}
.item:nth-child(3) .item-inner {
  background-image: url("/image/Gallery/3.jpg");
}
.item:nth-child(4) .item-inner {
  background-image: url("/image/Gallery/4.jfif");
}
.item:nth-child(5) .item-inner {
  background-image: url("/image/Gallery/5.jpg");
}
.item:nth-child(6) .item-inner {
  background-image: url("/image/Gallery/6.jfif");
}
.item:nth-child(7) .item-inner {
  background-image: url("/image/Gallery/7.jfif");
}
.item:nth-child(8) .item-inner {
  background-image: url("/image/Gallery/8.jfif");
}
.item:nth-child(9) .item-inner {
  background-image: url("/image/Gallery/9.jpeg");
}
.item:nth-child(10) .item-inner {
  background-image: url("/image/Gallery/10.jpeg");
}
.item:nth-child(11) .item-inner {
  background-image: url("/image/Gallery/11.jpeg");
}
.item:nth-child(12) .item-inner {
  background-image: url("/image/Gallery/12.jpeg");
}
.item:nth-child(13) .item-inner {
  background-image: url("/image/Gallery/13.jfif");
}
.item:nth-child(14) .item-inner {
  background-image: url("/image/Gallery/14.jpeg");
}
.item:nth-child(15) .item-inner {
  background-image: url("/image/Gallery/15.jpg");
}
.item:nth-child(16) .item-inner {
  background-image: url("/image/Gallery/16.jpg");
}
.item:nth-child(17) .item-inner {
  background-image: url("/image/Gallery/17.jpg");
}
.item:nth-child(18) .item-inner {
  background-image: url("/image/Gallery/18.jpg");
}
.item:nth-child(19) .item-inner {
  background-image: url("/image/Gallery/19.jpg");
}
.item:nth-child(20) .item-inner {
  background-image: url("/image/Gallery/20.jpg");
}

@media screen and (min-width: 480px) {
  .item {
    flex: 1 1 50%;
  }
}

@media screen and (min-width: 768px) {
  .item {
    flex: 1 1 33.333%;
  }
}

@media screen and (min-width: 980px) {
  .item {
    flex: 1 1 25%;
  }
}
</style>
