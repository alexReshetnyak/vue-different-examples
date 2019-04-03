<template>
  <footer>
    <dir class="container">
      <div>
        <img :src="logoIcon">

        <div class="contact">
          <div>Call us</div>
          <div>095 111 11 11</div>
        </div>
      </div>
    </dir>
  </footer>
</template>

<script>
  import Logo from '../../assets/images/logo.png';

  export default {
    data() {
      return {
        logoIcon: Logo
      }
    },
  }
</script>