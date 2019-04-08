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
  </header>
</template>

<script>
  import Logo from '../../assets/images/logo.png';
  import Menu from '../../assets/images/menu.png';

  export default {
    data() {
      return {
        logoIcon: Logo,
        menu: Menu
      }
    },
    methods: {
      toggleMenu() {
        this.$emit('toggleMenu');
      }
    },
  }
</script>