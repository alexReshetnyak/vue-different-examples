<template>
  <div class="call_us_container">
    <div class="container">
      <div class="first" v-scroll-reveal.reset="{delay: 200, scarle: 2}">
        <h1>Hungry?</h1>
      </div>

      <div class="second"  v-scroll-reveal.reset="{delay: 300, afterReveal: () => {
          secondAnim = true;
        }}"
      >
        <div v-if="secondAnim">
          <comp-animation />
        </div>
      </div>

      <div class="third" v-scroll-reveal.reset="{delay: 600, scarle: 2}">
        <span>Give us a call {{' '}}</span>
        <span>(095) 455 22 55</span>
      </div>
    </div>
  </div>
</template>

<script>
  import compAnimation from './animation/CallUsAnimation.vue';
  
  export default {
    components: {
      compAnimation
    },
    data() {
      return {
        secondAnim: false
      }
    },
  }
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
  }
  h1 {
    font-weight: 600;
  }
</style>
