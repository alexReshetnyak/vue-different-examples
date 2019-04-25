<template>
  <div id="app">
    <comp-header />

    <router-view></router-view>

    <comp-footer />
  </div>
</template>

<script>
import compHeader from "./components/Header-Footer/Header";
import compFooter from "./components/Header-Footer/Footer";

export default {
  components: {
    compHeader,
    compFooter
  },
  created() {
    this.$store.dispatch("admin/refreshToken");
  }
};
</script>

<style lang="scss">
@import "./assets/style.scss";
</style>
