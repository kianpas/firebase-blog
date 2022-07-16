import { createRouter, createWebHistory } from "vue-router";

const TheHome = () => import("./pages/TheHome");
const TheBlogs = () => import("./pages/TheBlogs");

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: TheHome },
    { path: "/blogs", component: TheBlogs },
  ],
});

export default router;
