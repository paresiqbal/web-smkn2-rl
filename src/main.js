import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/base.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faChevronDown,
  faHouse,
  faMagnifyingGlass,
  faBook,
  faCheckToSlot,
  faBox,
  faBookOpen,
  faDatabase,
  faEnvelope,
  faUser,
  faGraduationCap,
  faCalendarDays,
  faChevronRight,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faYoutube,
  faInstagram,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const app = createApp(App);

/* add icons to the library */
library.add(
  faChevronDown,
  faHouse,
  faMagnifyingGlass,
  faBook,
  faCheckToSlot,
  faBox,
  faBookOpen,
  faDatabase,
  faEnvelope,
  faUser,
  faGraduationCap,
  faCalendarDays,
  faFacebookF,
  faYoutube,
  faInstagram,
  faTwitter,
  faChevronRight,
  faWhatsapp,
  faClock
);
app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
