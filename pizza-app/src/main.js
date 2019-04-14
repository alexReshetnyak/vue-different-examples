import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
import VueScrollReveal from 'vue-scroll-reveal';

import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbvue/build/css/mdb.css';

Vue.use(VueResource);
Vue.use(VueScrollReveal, {
  duration: 800,
  scale: 1,
  distance: '50px'
});

Vue.http.options.root = "https://vue-pizza-d9b05.firebaseio.com";

new Vue({
  el: '#app',
  render: h => h(App),
});
