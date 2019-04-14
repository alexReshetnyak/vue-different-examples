<template>
  <div class="container menu_container">
    <div class="top" v-scroll-reveal.reset>
      <h2>Menu</h2>
    </div>

    <div class="buttons" v-scroll-reveal.reset="{delay: 250}">
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

    <div class="products_items" v-scroll-reveal.reset="{delay: 500}" >
        <mdb-card
          v-for="(product, index) in products" 
          :key="index"
          v-show="product.type === activeProduct"
        >
          <mdb-card-image 
            :src="require(`../../assets/images/products/${product.img}`)" 
            alt="Card image cap"
            :waves="true"
          >
          </mdb-card-image>
          <mdb-card-body>
            <mdb-card-title>{{product.name}}</mdb-card-title>
            
            <mdb-card-text>
              $ {{product.price}}  
            </mdb-card-text>

            <mdb-card-text>
              {{product.desc}}
            </mdb-card-text>
          </mdb-card-body>
        </mdb-card>
    </div>
  </div>
</template>

<script>
  import { mdbCard, mdbCardImage, mdbCardBody, mdbCardTitle, mdbCardText, mdbBtn } from 'mdbvue';

  export default {
    components: {
      mdbBtn,
      mdbCard,
      mdbCardImage,
      mdbCardBody,
      mdbCardTitle,
      mdbCardText,
    },
    data() {
      return {
        buttons: [
          { name: 'pizza', active: true },
          { name: 'burgers', active: false },
          { name: 'salat', active: false },
          { name: 'dessert', active: false }
        ],
        products: [],
        activeProduct: 'pizza',
        error: null
      }
    },
    methods: {
      changeMenu(value) {
        this.buttons.forEach(button => {
          button.active = button.name === value ? true : false;
        });

        this.activeProduct = value;
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
        this.error = error;
      }
    },
  }
</script>

<style scoped>
  .menu_container {
    flex-direction: column;
  }

  .products_items {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .card {
    width: 32%;
    margin-bottom: 20px;
  }

  .card .ripple-parent {
    overflow: hidden;
    position: relative;
  }

</style>
