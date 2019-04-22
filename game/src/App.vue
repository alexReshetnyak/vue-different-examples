<template>
  <div id="app">
    <comp-header />
    <div>
      content
    </div> 
    <comp-footer />
  </div>
</template>

<script>
import compHeader from './components/Header-Footer/Header';
import compFooter from './components/Header-Footer/Footer';

export default {
  components: {
    compHeader,
    compFooter
  }
}
</script>

<style lang="scss">
  @import './assets/style.scss';
</style>
