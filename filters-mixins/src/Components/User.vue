<template>
  <div>
    <hr>
    <div>
      This is the list of cars
    </div>
    <ul>
      <li v-for="(car, index) in cars" :key="index">
        {{car}}
      </li>
    </ul>
  </div>
</template>

<script>
  import { carsMixin } from './mixin.js';

  export default {
    mixins: [carsMixin]
  }
</script>