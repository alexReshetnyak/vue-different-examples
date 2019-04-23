import Vue from "vue";
import VueResource from "vue-resource";
import Vuelidate from "vuelidate";

import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbvue/build/css/mdb.css";

import store from "./store/store";

import App from "./App.vue";
import router from "./router";
import compButton from "./components/UI/Button.vue";

import "./registerServiceWorker";

Vue.component("app-button", compButton); // * Register component globally

Vue.config.productionTip = false;

// * VUE RESOURCE
Vue.use(VueResource);
Vue.http.options.root = "";

// * VALIDATION
Vue.use(Vuelidate);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
