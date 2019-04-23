import Vue from "vue";
import App from "./App.vue";

import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbvue/build/css/mdb.css";

import router from "./router";
import store from "./store";
import "./registerServiceWorker";

import compButton from "./components/UI/Button.vue";

Vue.config.productionTip = false;
Vue.component("app-button", compButton); // * Register component globally

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
