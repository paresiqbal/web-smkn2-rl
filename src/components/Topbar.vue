<script setup></script>

<template>
  <div class="container">
    <div class="top-warapper">
      <div class="image">
        <a href="/"> <img src="/image/logo.png" alt="" /> </a>
      </div>
      <div class="search-box">
        <input class="search-txt" type="text" name="" placeholder="search..." />
        <a class="search-btn" href="/">
          <font-awesome-icon icon="magnifying-glass" />
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1170px;
  margin: auto;
}

.top-warapper {
  display: flex;
  padding: 10px 0;
  align-items: center;
  justify-content: space-between;
}

.search-box {
  background: #e9ecef;
  height: 40px;
  border-radius: 40px;
  padding: 10px;
  float: right;
}

.search-btn {
  float: right;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  color: #333;
}
.search-txt {
  border: none;
  background: none;
  outline: none;
  float: left;
  padding: 0;
  font-size: 16px;
  width: 150px;
  line-height: 10px;
}

@media (max-width: 574px) {
  .image {
    float: left;
  }
}
</style>
