<template>
  <div class="container newsl_container">
    <h2>Join to our newsletter</h2>

    <div class="form">
      <input type="text" v-model="email">
      <button @click="submitHandler">Subscribe</button>
    </div>

    <div class="error_label" v-if="error">
      <div>
        {{error}}
      </div>
    </div>

    <div class="success_label" v-if="success">
      <div>
        {{success}}
      </div>
    </div>

    <div class="small">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, exercitationem. 
        Dicta voluptatibus quos provident, amet perspiciatis iure sint sapiente debitis? 
        Amet impedit quaerat placeat odio sit debitis repudiandae eligendi ullam.
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        email: '',
        error: '',
        success: ''
      }
    },
    methods: {
      submitHandler() {
        const valid = this.validate(this.email);

        if (valid.valid) {
          this.error = '';
          this.addEmail(this.email);
        } else {
          this.error = valid.error ;
        }
      },

      validate(email) {
        let valid = { valid: true, error: '' };

        
        !/\S+@\S+\.\S+/.test(email) && (valid = {  valid: false, error: 'Enter correct email' });

        !email && (valid = {  valid: false, error: 'Its empty' });

        return valid;
      },

      async addEmail(email) {
        try {
          // eslint-disable-next-line no-useless-escape 
          const res = await this.$http.get(`users.json?orderBy=\"email\"&equalTo=\"${email}\"`);

          if (!Object.getOwnPropertyNames(res.data).length) {
            await this.$http.post('users.json', { email: this.email });
            this.success = 'Thank you';
          } else {
            this.success = 'Aready on the list'
          }
        } catch (err) {
          // eslint-disable-next-line no-console
          console.error(err);
        }

        this.clearSuccess();
      },

      clearSuccess() {
        setTimeout(() => {
          this.email = '';
          this.success = '';
        }, 3000);
      }

    },
  }
</script>

<style scoped>
  .newsl_container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  h2 {
    font-weight: 600;
  }

  h2, .form { 
    margin-bottom: 20px;
  }
</style>

