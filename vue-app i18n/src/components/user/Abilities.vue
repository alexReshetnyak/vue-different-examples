<template>
  <div class="user_profile container">
    <h3>User Profile:</h3>

    <slot name="other">Loading... </slot>
    
    <hr>
    
    <div>
      <slot name="main_ab"/>
    </div>

    <div>
      <slot name="notes" />
    </div>
    <hr>

    <slot />
  </div>
</template>

<script>
  // *  slot working like ng-content for Angular and props.children for React

  export default {
    data () {
      return {
        abilities: ['JS', 'HTML', 'CSS']
      }
    }
  }
</script>

<style lang="scss" scoped>
  span {
    font-weight: 800;
  }

  .user_profile {
    border: 1px solid #2196f3;
  }
</style>
