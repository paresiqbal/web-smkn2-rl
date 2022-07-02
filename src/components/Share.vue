<template>
  <div class="slide-container">
    <div class="slide-content">
      <div class="card-wrapper">
        <p>Share :</p>
        <div class="card">
          <button class="button" style="background-color: #4267b2">
            <span class="button-icon one">
              <font-awesome-icon :icon="['fab', 'facebook-f']" size="xs" />
            </span>
            <span class="button-text">Facebook</span>
          </button>
        </div>
        <div class="card">
          <button class="button" style="background-color: #1da1f2">
            <span class="button-icon one">
              <font-awesome-icon :icon="['fab', 'twitter']" size="xs" />
            </span>
            <span class="button-text">Twitter</span>
          </button>
        </div>
        <div class="card">
          <button class="button" style="background-color: #25d366">
            <span class="button-icon one">
              <font-awesome-icon :icon="['fab', 'whatsapp']" size="xs" />
            </span>
            <span class="button-text">Whatsapp</span>
          </button>
        </div>
        <div class="card">
          <button class="button" style="background-color: #405de6">
            <span class="button-icon one">
              <font-awesome-icon :icon="['fab', 'instagram']" size="xs" />
            </span>
            <span class="button-text">instagram</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.slide-container {
  padding-bottom: 30px;
  margin: 0;
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
  font-weight: 400;
  cursor: pointer;
}
.button-text,
.button-icon {
  display: inline-flex;
  align-items: center;
  padding: 0 8px;
  color: #fff;
  height: 100%;
}
/* Individual Button */
.button-text {
  padding-left: 2px;
}

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
