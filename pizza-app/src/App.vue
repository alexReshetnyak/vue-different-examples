<template>
  <div id="app">
    <comp-header/>

    <comp-featured />

    <comp-footer />
  </div>
</template>

<script>
import compHeader from './components/header-footer/Header.vue';
import compFooter from './components/header-footer/Footer.vue';
import compFeatured from './components/UI/Featured';

export default {
  name: 'app',
  components: {
    compFeatured,
    compHeader,
    compFooter
  }
}

</script>

<style>
  @import './assets/style.css';
</style>
