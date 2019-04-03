<template>
  <div id="app">
    <comp-header />
    
    <div>
      Content
    </div>

    <comp-footer />
  </div>
</template>

<script>
import compHeader from './components/header-footer/Header.vue';
import compFooter from './components/header-footer/Footer.vue';

export default {
  name: 'app',
  components: {
    compHeader,
    compFooter
  }
}
</script>

<style>
  @import './assets/style.css'; 
</style>
