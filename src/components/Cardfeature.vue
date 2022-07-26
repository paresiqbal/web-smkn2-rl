<script setup></script>

<template>
  <div class="slide-container">
    <div class="slide-content">
      <div class="card-wrapper">
        <div class="card">
          <button class="button">
            <span class="button-icon one">
              <font-awesome-icon icon="book" size="xl" />
            </span>
            <a href="http://slims.smkn2rejanglebong.sch.id/" class="button-text"
              >SLIMS</a
            >
          </button>
        </div>
        <div class="card">
          <button class="button">
            <span class="button-icon two">
              <font-awesome-icon icon="book-open" size="xl" />
            </span>
            <a
              href="http://digilib.smkn2rejanglebong.sch.id/"
              class="button-text"
              >E-LIBRARY</a
            >
          </button>
        </div>
        <div class="card">
          <button class="button">
            <span class="button-icon">
              <font-awesome-icon icon="check-to-slot" sixe="xl" />
            </span>
            <a href="https://osis.smkn2rejanglebong.sch.id/" class="button-text"
              >PILKASIS</a
            >
          </button>
        </div>
        <div class="card">
          <button class="button">
            <span class="button-icon">
              <font-awesome-icon icon="box" size="xl" />
            </span>
            <a
              href="https://sarpras.smkn2rejanglebong.sch.id/"
              class="button-text"
              >E-SARPRAS</a
            >
          </button>
        </div>
        <div class="card">
          <button class="button">
            <span class="button-icon">
              <font-awesome-icon icon="database" size="xl" />
            </span>
            <a
              href="http://sidadik.smkn2rejanglebong.sch.id/"
              class="button-text"
              >SIDADIK</a
            >
          </button>
        </div>
        <div class="card">
          <button class="button">
            <span class="button-icon">
              <font-awesome-icon icon="envelope" size="xl" />
            </span>
            <a href="http://arsip.smkn2rejanglebong.sch.id/" class="button-text"
              >E-ARSIP SURAT</a
            >
          </button>
        </div>
        <div class="card">
          <button class="button">
            <span class="button-icon">
              <font-awesome-icon icon="user" size="xl" />
            </span>
            <a
              href="https://simpeg.smkn2rejanglebong.sch.id/"
              class="button-text"
              >SIMPEG</a
            >
          </button>
        </div>
        <div class="card">
          <button class="button">
            <span class="button-icon">
              <font-awesome-icon icon="graduation-cap" size="xl" />
            </span>
            <a
              href="https://alumni.smkn2rejanglebong.sch.id/"
              class="button-text"
              >DATA ALUMI</a
            >
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.slide-container {
  background: #e9ecef;
  padding-bottom: 30px;
}
.card-wrapper {
  display: grid;
  justify-content: space-around;
}
.card {
  padding-top: 20px;
}
.card a {
  text-decoration: none;
}

.button {
  display: inline-flex;
  height: 70px;
  width: 290px;
  padding: 0;
  background: #fff;
  border: none;
  outline: none;
  border-radius: 10px;
  overflow: hidden;
  font-size: 22px;
  font-weight: 500;
  cursor: pointer;
}
.button:hover {
  border: 3px solid #538dd7;
}
.button-text,
.button-icon {
  display: inline-flex;
  align-items: center;
  padding: 0 24px;
  color: #003566;
  height: 100%;
}
/* Individual Button */
.button-text {
  padding-left: 8px;
}

@media screen and (min-width: 600px) {
  .slide-content {
    margin: 0 140px;
  }
  .card-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
}
</style>
