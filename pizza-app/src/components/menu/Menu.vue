<template>
  <div class="container menu_container">
    <div class="top">
      <h2>Menu</h2>
    </div>

    <div class="buttons">
      <mdb-btn 
        size="sm" 
        color="white"
        @click="changeMenu(button.name)"
        :active="button.active"
        v-for="(button, index) in buttons" :key="index"
      >
        {{button.name}}
      </mdb-btn>
    </div>
  </div>
</template>

<script>
 import { mdbBtn } from 'mdbvue';

  export default {
    components: {
      mdbBtn
    },
    data() {
      return {
        buttons: [
          { name: 'pizza', active: true },
          { name: 'burgers', active: false },
          { name: 'salat', active: false },
          { name: 'dessert', active: false }
        ],
        products: []
      }
    },
    methods: {
      changeMenu(value) {
        this.buttons.forEach(button => {
          button.active = button.name === value ? true : false; 
        });
      }
    },
    async created() {
      try {
        const { body: productList } = await this.$http.get('products.json');

        this.products = Object.keys(productList).map(productId => ({ 
          id: productId, 
          ...productList[productId] 
        }));
      } catch (error) {
        console.error(error);
      }
    },
  }
</script>

<style scoped>
  .menu_container {
    flex-direction: column;
  }
</style>
