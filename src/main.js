import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import pinia from "./stores";

import "@/assets/css/normalize.css";
import "@/assets/css/index.css";
const app = createApp(App);

app.use(router).use(pinia).mount("#app");
