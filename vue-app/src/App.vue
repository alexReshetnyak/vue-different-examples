<template>
  <div id="app">
    <app-header></app-header>

    <router-view/>

    <app-footer></app-footer>
  </div>
</template>

<script>
  import Footer from './components/header_footer/footer.vue';

  export default {
    components: {
      'app-footer': Footer
    }
  }
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
