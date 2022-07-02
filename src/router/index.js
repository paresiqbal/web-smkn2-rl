import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Sambutan from "../views/Sambutan.vue";
import Visimisi from "../views/Visimisi.vue";
import Download from "../views/Download.vue";
import Guru from "../views/Guru.vue";
import Tkj from "../views/Tkj.vue";
import Multimedia from "../views/Multimedia.vue";
import Akuntansi from "../views/Akuntansi.vue";
import Jasaboga from "../views/Jasaboga.vue";
import Perkantoran from "../views/Perkantoran.vue";
import Gallery from "../views/Gallery.vue";
import Berita from "../views/Berita.vue";
import Login from "../views/Login.vue";
import Isiberita from "../views/Isiberita.vue";
import Agenda from "../views/Agenda.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/sambutan",
      name: "Sambutan",
      component: Sambutan,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue')
    },
    {
      path: "/visimisi",
      name: "Visimisi",
      component: Visimisi,
    },
    {
      path: "/download",
      name: "Download",
      component: Download,
    },
    {
      path: "/guru",
      name: "Guru",
      component: Guru,
    },
    {
      path: "/tkj",
      name: "TKJ",
      component: Tkj,
    },
    {
      path: "/multimedia",
      name: "Multimedia",
      component: Multimedia,
    },
    {
      path: "/akuntansi",
      name: "Akuntansi",
      component: Akuntansi,
    },
    {
      path: "/jasaboga",
      name: "Jasaboga",
      component: Jasaboga,
    },
    {
      path: "/perkantoran",
      name: "Perkantoran",
      component: Perkantoran,
    },
    {
      path: "/gallery",
      name: "Gallery",
      component: Gallery,
    },
    {
      path: "/berita",
      name: "Berita",
      component: Berita,
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/isiberita",
      name: "Isiberita",
      component: Isiberita,
    },
    {
      path: "/agenda",
      name: "Agenda",
      component: Agenda,
    },
  ],
});

export default router;
