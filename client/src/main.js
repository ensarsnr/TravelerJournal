import { createApp } from "vue";
import App from "./App.vue";
import i18n from "./plugins";
import "./index.css";
import { createWebHistory } from "vue-router";
import LoginFormVue from "./views/auth/LoginForm.vue";
import RegisterFormVue from "./views/auth/RegisterForm.vue";
import HomeView from "./views/HomeView.vue";
import { createRouter } from "vue-router";

// Create the Vue app instance
const app = createApp(App);

// Define your routes
const routes = [
  { path: "/", component: RegisterFormVue }, 
  { path: "/login", component: LoginFormVue },
  { path: "/home", component: HomeView }
];

// Create the router instance
const customRouter = createRouter({
  history: createWebHistory(),
  routes,
});

// Use the router and i18n plugin in your app
app.use(customRouter);
app.use(i18n);

// Mount the app to the element with the ID "app"
app.mount("#app");
