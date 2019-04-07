<template>
  <div id="app">
    <comp-header />
    <br>
    <br>
    <br>
    <br>
    <br>
<div>
  <b-button variant="outline-primary">Primary</b-button>
  <b-button variant="outline-secondary">Secondary</b-button>
  <b-button variant="outline-success">Success</b-button>
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
