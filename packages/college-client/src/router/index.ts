import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import LoginPage from "../views/LoginPage.vue";
import StudentsPage from "../views/StudentsPage.vue";

const isAuthenticated = (): boolean => {
  return true;
};

const routes: RouteRecordRaw[] = [
  { path: "/login", component: LoginPage },
  {
    path: "/students",
    component: StudentsPage,
    beforeEnter: (_to, _from, next) => {
      if (isAuthenticated()) {
        next();
      } else {
        next("/login");
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
