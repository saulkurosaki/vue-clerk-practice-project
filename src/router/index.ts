import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SignIn from "@/views/SignIn.vue";
import SignUp from "@/views/SignUp.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/sign-in",
      name: "signin",
      component: SignIn,
    },
    {
      path: "/sign-up",
      name: "signup",
      component: SignUp,
    },
  ],
});

export default router;
