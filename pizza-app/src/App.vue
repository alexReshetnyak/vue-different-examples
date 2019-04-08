<template>
  <div id="app">
    <comp-header @toggleMenu="toggleMenu"/>
    <br>
    <br>
    <br>
    <br>
      <div>
      <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
      <Btn color="primary">Primary</Btn>
    </div>


    <compDrawer :open="showSideMenu" @closeDrawer="toggleMenu"/>
    <comp-footer />
  </div>
</template>

<script>
import compHeader from './components/header-footer/Header.vue';
import compFooter from './components/header-footer/Footer.vue';
import compDrawer from './components/drawer/Drawer.vue';
import { Btn } from 'mdbvue';

export default {
  name: 'app',
  components: {
    compHeader,
    compFooter,
    Btn,
    compDrawer
  },
  data() {
    return {
      showSideMenu: false
    }
  },
  methods: {
    toggleMenu() {
      this.showSideMenu = !this.showSideMenu;
    }
  }
}

</script>

<style>
  @import './assets/style.css';
</style>
