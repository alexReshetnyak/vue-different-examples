<template>
  <div>
    Page
  </div>
</template>

<script>

  export default {
    destroyed () {
      console.log('Page destroyed');
    },
    activated () {
      // * Lifecycle for dynamic component when keep alive was applyed
      console.log('Page Activated');    
    },
    deactivated () {
      // * Lifecycle for dynamic component when keep alive was applyed
      console.log('Page Deactivated');
            
    },
  }
</script>
