import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    redirect: "emotions-wheel"
  },
  {
    path: "/emotions-wheel",
    name: "emotions-wheel",
    component: () =>
      import(
        /* webpackChunkName: "emotion-wheel" */ "../views/EmotionWheelView.vue"
      )
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "emotion-wheel" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
