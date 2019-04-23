<template>
  <div>
    <comp-featured />
    <comp-content />
  </div>
</template>

<script>
import compFeatured from "./Featured";
import compContent from "./Content.vue";

export default {
  components: {
    compFeatured,
    compContent
  }
};
</script>
