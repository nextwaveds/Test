import { createRouter, createWebHistory } from "vue-router";
import Login from "../components/Login.vue";
import Home from "../views/Home.vue"; // ✅ Importamos Home.vue

const routes = [
  { path: "/", redirect: "/login" },
  { path: "/login", component: Login },
  { path: "/home", component: Home }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;