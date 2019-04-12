import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';

import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbvue/build/css/mdb.css';

Vue.use(VueResource);

Vue.http.options.root = "https://vue-pizza-d9b05.firebaseio.com";

new Vue({
  el: '#app',
  render: h => h(App),
});
