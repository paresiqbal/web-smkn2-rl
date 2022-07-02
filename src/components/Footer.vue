<script setup>
// function initMap() {
//   let location = { lat: 3.44653, lng: 102.54805 };
//   let map = new google.maps.Map(document.getElementbyId("map"), {
//     zoom: 4,
//     center: location,
//   });
// }
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="footer-col map">
          <h4>Peta</h4>
          <div id="map"></div>
        </div>
        <div class="footer-col bantuan">
          <h4>Bantuan</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Pendaftaran</a></li>
            <li><a href="#">Visi Misi</a></li>
            <li><a href="#">Download</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Hubungi Kami</h4>
          <ul>
            <li>
              <a>Jl. Duku Ulu, Curup Timur, Rejang Lebong, Bengkulu</a>
            </li>
            <li><a href="#">Email: komkaadf@gmail.com</a></li>
            <li><a>Telpon: 0857 </a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Follow Kami</h4>
          <div class="social-links">
            <a href="#"><font-awesome-icon :icon="['fab', 'facebook-f']" /></a>
            <a href="#"><font-awesome-icon :icon="['fab', 'youtube']" /></a>
            <a href="#"><font-awesome-icon :icon="['fab', 'instagram']" /></a>
            <a href="#"><font-awesome-icon :icon="['fab', 'twitter']" /></a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container {
  max-width: 1170px;
  margin: auto;
}
.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
ul {
  list-style: none;
}
.footer {
  background-color: #24262b;
  padding: 70px 0;
}
.footer-col {
  width: 25%;
  padding: 0 15px;
}
.footer-col.map {
  padding-right: 15rem;
}

.footer-col h4 {
  font-size: 18px;
  color: #ffffff;
  text-transform: capitalize;
  margin-bottom: 35px;
  font-weight: 600;
  position: relative;
}
.footer-col h4::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: -10px;
  background-color: #e91e63;
  height: 2px;
  box-sizing: border-box;
  width: 50px;
}
.footer-col ul li:not(:last-child) {
  margin-bottom: 10px;
}
.footer-col ul li a {
  font-size: 16px;
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  color: #bbbbbb;
  display: block;
  transition: all 0.3s ease;
}
.footer-col ul li a:hover {
  color: #ffffff;
  padding-left: 8px;
}
.footer-col .social-links a {
  display: inline-block;
  height: 40px;
  width: 40px;
  background-color: rgba(255, 255, 255, 0.2);
  margin: 0 10px 10px 0;
  text-align: center;
  line-height: 40px;
  border-radius: 50%;
  color: #ffffff;
  transition: all 0.5s ease;
}
.footer-col .social-links a:hover {
  color: #24262b;
  background-color: #ffffff;
}
#map {
  height: 250px;
  width: 250px;
  background: #fff;
}

/*responsive*/
@media screen and (max-width: 767px) {
  .footer-col {
    width: 50%;
    margin-bottom: 30px;
  }
}
@media screen and (max-width: 574px) {
  .footer-col {
    width: 100%;
  }
  #map {
    height: 250px;
    width: 445px;
  }
}
</style>
