<template>
    <div>
        <div class="item">
            Car: <span> {{ car }} </span>
            <br/>
            Model: <span> {{ model }} </span>
            <br/>
            Name: <span> {{ name }} </span>
           
        </div>
    </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    computed: {
        // car() {
        //     return this.$store.state.car;
        // },
        // model() {
        //     return this.$store.state.model;
        // }

        ...mapState([
          'car',
          'model'
        ]),
        ...mapState('myName', ['name'])
    }
  }
</script>
