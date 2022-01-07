import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import "./assets/tailwind.css";
import axios from "axios";
import VueAxios from "vue-axios";
import VueLoading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

let app = createApp(App);
app.use(store);
app.use(VueLoading);
app.use(VueAxios, axios);

app.mount("#app");
