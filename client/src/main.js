import { createApp } from "vue";
import App from "./App.vue";
import i18n from "./plugins";
import "./index.css";
import { createWebHistory } from "vue-router";
import LoginFormVue from "./views/auth/LoginForm.vue";
import RegisterFormVue from "./views/auth/RegisterForm.vue";
import { createRouter } from "vue-router";

const app = createApp(App);

const routes = [
  { path: "/", component: RegisterFormVue },
  { path: "/login", component: LoginFormVue },
];

const customRouter = createRouter({
  history: createWebHistory(),
  routes,
});

// libraries
app.use(customRouter);
app.use(i18n);

app.mount("#app");
