import Vue from 'vue';
import App from './App.vue';
import Header from './Components/Header_footer/Header.vue'
import Footer from './Components/Header_footer/Footer.vue';

Vue.component('app-header',Header);
Vue.component('app-footer',Footer);

Vue.filter('to-uppercase', (value) => {  // * Create filter globally
  return value.toUpperCase();
}
);

Vue.mixin({
  created() {
    console.log('Mixin: Created hook');
  }
});

new Vue({
    el:'#app',
    render: h => h(App)
});
