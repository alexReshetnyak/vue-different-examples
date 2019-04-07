<template>
  <div id="app">
    <comp-header />
    <br>
    <br>
    <br>
    <br>
        <div>
        <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
        <Btn color="primary">Primary</Btn>
    </div>
    <compDrawer />


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
  }
}



// mdbNavbar,
// NavbarNav,
// NavbarCollapse,
// mdbNavbarBrand,
// Modal,
// ModalHeader,
// ModalTitle,
// ModalBody,
// ModalFooter,
// Column,
// Badge,
// Row,
// Fa,
// Btn
</script>

<style>
  @import './assets/style.css';
</style>
