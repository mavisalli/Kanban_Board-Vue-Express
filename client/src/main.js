import Vue from "vue";
import App from "./App.vue";
import "./assets/css/bootstrap.min.css";
import "./assets/css/style.css";
import VueRouter from "vue-router";
import { routes } from "./routes";

Vue.use(VueRouter);
Vue.config.productionTip = false;

const router = new VueRouter({
  mode: "history",
  routes,
});

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
