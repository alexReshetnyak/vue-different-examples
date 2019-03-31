import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { i18n } from '@/plugins/i18n';
import Header from './components/header_footer/Header.vue';

Vue.component('app-header', Header); // * Register component globally

Vue.config.productionTip = false;

//* Pass data Child to Child
export const bus = new Vue(); 

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app');
