<template>
  <div id="app">
    <comp-header/>
    
    <div>
      <comp-featured />
      <comp-menu />
      <comp-call-us />
      <comp-newsletter />
    </div>

    <comp-footer />
  </div>
</template>

<script>
import compHeader from './components/header-footer/Header.vue';
import compFooter from './components/header-footer/Footer.vue';
import compFeatured from './components/UI/Featured';
import compMenu from './components/menu/Menu.vue';
import compCallUs from './components/callUs/CallUs.vue';
import compNewsletter from './components/newsletter/Newsletter.vue';

export default {
  name: 'app',
  components: {
    compFeatured,
    compHeader,
    compFooter,
    compMenu,
    compCallUs,
    compNewsletter
  }
}

</script>

<style>
  @import './assets/style.css';
</style>
