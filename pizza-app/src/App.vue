<template>
  <div id="app">
    <comp-header/>
    
    <div>
      <comp-featured />
      <comp-menu />
    </div>



    <comp-footer />
  </div>
</template>

<script>
import compHeader from './components/header-footer/Header.vue';
import compFooter from './components/header-footer/Footer.vue';
import compFeatured from './components/UI/Featured';
import compMenu from './components/menu/Menu.vue';

export default {
  name: 'app',
  components: {
    compFeatured,
    compHeader,
    compFooter,
    compMenu
  }
}

</script>

<style>
  @import './assets/style.css';
</style>
