import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/HomeView.vue";
import Result from "@/views/ResultHome.vue";
import Student from "@/views/StudentHome.vue"
import Register from "@/views/RegisterHome.vue"
import System from "@/views/SystemHome.vue"
Vue.use(VueRouter);

const router = new VueRouter({
  base: "/",
  routes: [
    { path: "/home", component: Home },
    { path: "/result", component: Result },
    { path: "/student", component: Student },
    { path: "/register", component: Register },
    { path: "/system", component: System },
    { path: "*", component: Home },
  ],
});


export default router
