import "aos/dist/aos.css"; // You can also use <link> for styles
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/dist/css/bootstrap.css";
import Vue from "vue";
import App from "./App.vue";

const AOS = require("aos");

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(AOS);

AOS.init({
  duration: 1500,
});
new Vue({
  render: (h) => h(App),
}).$mount("#app");
