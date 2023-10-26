import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueRouter from "vue-router";
import HomePage from "@/views/HomePage";
import ForSmallBusiness from "@/views/ForSmallBusiness";
import ForEnterprise from "@/views/ForEnterprise";

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(vuetify);

const routes = [
  { path: "/", name: "HomePage", component: HomePage },
  {
    path: "/for-small-business",
    name: "ForSmallBusiness",
    component: ForSmallBusiness,
  },
  { path: "/for-enterprise", name: "ForEnterprise", component: ForEnterprise },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");
