import Vue from "vue";
import App from "./App.vue";

import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbvue/build/css/mdb.css";

// import router from "./router";
import store from "./store";
import "./registerServiceWorker";



Vue.config.productionTip = false;

new Vue({
  // router,
  store,
  render: h => h(App)
}).$mount("#app");
