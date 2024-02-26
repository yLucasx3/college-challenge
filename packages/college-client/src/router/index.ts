import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import LoginPage from "../views/LoginPage.vue";
import ListStudentsPageVue from "../views/Student/ListStudentsPage.vue";
import CreateOrUpdateStudentPageVue from "../views/Student/CreateOrUpdateStudentPage.vue";
import HomePageVue from "../views/HomePage.vue";
import DefaultLayoutVue from "../layouts/DefaultLayout.vue";
import LoginPageVue from "../views/LoginPage.vue";
import BlankLayoutVue from "../layouts/BlankLayout.vue";

const isAuthenticated = (): boolean => {
  return !!localStorage.getItem("access_token");
};

const privateRouteWithDefaultLayout = (
  path: string,
  component: any
): RouteRecordRaw => {
  return {
    path,
    component: DefaultLayoutVue,
    children: [{ path: "", component }],
    beforeEnter: (_to, _from, next) => {
      if (isAuthenticated()) next();

      next("/login");
    },
  };
};

const routes: RouteRecordRaw[] = [
  {
    path: "/login",
    component: BlankLayoutVue,
    children: [{ path: "", component: LoginPageVue }],
  },
  privateRouteWithDefaultLayout("/", HomePageVue),
  privateRouteWithDefaultLayout("/students", ListStudentsPageVue),
  privateRouteWithDefaultLayout(
    "/students/create",
    CreateOrUpdateStudentPageVue
  ),
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
