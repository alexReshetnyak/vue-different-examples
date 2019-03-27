<template>
  <div id="app">
    <app-header></app-header>
    
    <div class="container">
      <router-view/>
    </div>
    
    <compFooter></compFooter>
  </div>
</template>

<script>
  import compFooter from './components/header_footer/Footer.vue';

  export default {
    components: {
      compFooter
    }
  }
</script>

<style lang="scss">
  #app {
    font-family: 'Roboto', sans-serif;
    color: #2c3e50;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between
  }

  .container {
    height: 100%;
    overflow: hidden;
    padding: 20px;
    box-sizing: border-box;
  }
</style>
