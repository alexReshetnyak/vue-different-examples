<template>
  <div class="backdrop" @click="closeBackdrop"></div>
</template>

<script>
export default {
  methods: {
    closeBackdrop() {
      this.$emit('closeBackdrop');
    }
  },
}
</script>

<style scoped>
 .backdrop {
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }
</style>