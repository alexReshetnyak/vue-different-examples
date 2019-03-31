import Vue from 'vue';
import App from './App.vue';
import Header from './Components/Header_footer/Header.vue'
import Footer from './Components/Header_footer/Footer.vue';

Vue.component('app-header',Header);
Vue.component('app-footer',Footer);

// * Create custom directive global
Vue.directive('awesome', {
  bind(element, binding, vnode) { //* directive hook
    element.innerHTML = `Value: ${binding.value}, Expression: ${binding.expression}`;
    
    if (binding.arg === 'red') {
      element.style.color = 'red';
    } else {
      element.style.color = 'blue';
    }

    if (Object.keys(binding.modifiers).length) {
      element.style.color = binding.modifiers.red ? 'red' : 'blue';
      element.style.fontSize = binding.modifiers.big ? '20px' : '12px';
    }

    console.log('Parent node', element.parentNode);
    
  },
  inserted(element, binding, vnode) { // * Instead of bind, now we can get reference to container div element
    console.log('Parent node INSERTED:', element.parentNode);
  },
  update(element, binding, vnode, oldVnode) {
    console.log('Update hook:');
  },
  componentUpdated(element, binding, vnode, oldVnode) {
    console.log('Component updated Hook:');
  },
  unbind(element, binding, vnode) {
    console.log('Unbind Hook:');
  }
});

new Vue({
    el:'#app',
    render: h => h(App)
});
