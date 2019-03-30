import Vue from 'vue';
import App from './App.vue';
import Header from './Components/Header_footer/Header.vue'
import Footer from './Components/Header_footer/Footer.vue';

Vue.component('app-header',Header);
Vue.component('app-footer',Footer);

// * Create custom directive
Vue.directive('awesome', {
  bind(element, binding, vnode) { //* directive hook
    console.log('Directive bind el',element, binding, vnode);
    
    element.innerHTML = binding.value;
    element.style.color = 'red';
  }
}); 

new Vue({
    el:'#app',
    render: h => h(App)
});
