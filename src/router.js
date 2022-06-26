import { createRouter, createWebHistory } from "vue-router";

const TheHome = () => import("./pages/TheHome");

const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: "/", component: TheHome }],
});

export default router;
