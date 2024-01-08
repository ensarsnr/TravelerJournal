import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import i18n from "./plugins";
import "./index.css";

const app = createApp(App);

// libraries
app.use(router);
app.use(i18n);

app.mount("#app");
