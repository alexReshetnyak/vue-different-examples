<template>
  <header>
    <div class="container space-between">
      <div class="logo">
        <img :src="logoIcon">
      </div>

      <div class="navigation" @click="toggleMenu">
        <img :src="menu">        
      </div>
    </div>

    <compDrawer :open="showSideMenu" @closeDrawer="toggleMenu"/>
  </header>
</template>

<script>
  import Logo from '../../assets/images/logo.png';
  import Menu from '../../assets/images/menu.png';
  import compDrawer from '../drawer/Drawer.vue';

  export default {
    components: {
      compDrawer,
    },
    data() {
      return {
        logoIcon: Logo,
        menu: Menu,
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