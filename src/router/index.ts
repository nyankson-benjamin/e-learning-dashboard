import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import StudentsView from "../views/Dashboard/StudentsView.vue";
import Lecturers from "../views/Dashboard/LecturersView.vue";
import HomePage from "../views/HomePage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/LoginView.vue"),
  },
  {
    path: "/reset",
    name: "reset",
    component: () => import("../views/ResetView.vue"),
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("../views/Dashboard/DashBoardHome.vue"),
  },

  {
    path: "/dashboard/students",
    name: "students",
    component: StudentsView,
  },
  {
    path: "/dashboard/lecturers",
    name: "lecturers",
    component: Lecturers,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
