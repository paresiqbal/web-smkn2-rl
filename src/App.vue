<script setup>
import { RouterLink, RouterView, useRoute, useRouter } from "vue-router";
import { computed } from "@vue/reactivity";
import Topbar from "./components/Topbar.vue";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

const router = useRoute();
const isLogin = computed(() => router.name == "Login");
console.log(isLogin.value);
</script>

<template>
  <Topbar v-if="!isLogin" />
  <div class="navbar">
    <Navbar v-if="!isLogin" />
  </div>
  <RouterView />
  <Footer v-if="!isLogin" />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

.navbar {
  z-index: 999;
}
</style>
