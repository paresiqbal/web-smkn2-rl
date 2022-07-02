<template>
  <div class="slide-container">
    <div class="slide-content">
      <div class="card-wrapper">
        <p>Tags :</p>
        <div class="card">
          <button class="button">
            <span class="button-text">Pelepasan</span>
          </button>
        </div>
        <div class="card">
          <button class="button">
            <span class="button-text">Murid</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.slide-container {
  padding-bottom: 30px;
}
.card-wrapper {
  display: flex;
  gap: 10px;
}

.button {
  display: inline-flex;
  height: 30px;
  width: 130px;
  padding: 10px;
  border: none;
  outline: none;
  border-radius: 50px;
  overflow: hidden;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  border: 0.5px solid #333;
}
.button-text {
  display: inline-flex;
  align-items: center;
  color: #183153;
  height: 100%;
}
/* Individual Button */

@media (max-width: 574px) {
  .card-wrapper {
    display: grid;
  }
}

@media (max-width: 998px) {
  .card-wrapper {
    display: grid;
  }
}
</style>
