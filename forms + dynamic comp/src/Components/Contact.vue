<template>
	<div>
    <form>
      <div class="row">
        <div class="col-xs-12">
        <h1>Contact us</h1>
        <hr>

        <div class="form-group">
          <label for="name">Name</label>
          <input 
            type="text" 
            id="name"
            class="form-control"
            v-model.lazy="formdata.name"
          >
          {{ formdata.name }}
        </div>

        <div class="form-group">
          <label for="lastname">Lastname</label>
          <input 
            type="text" 
            id="lastname"
            class="form-control"
            v-model="formdata.lastname"
          >
        </div>

        <div class="form-group">
          <label for="subject">Subject</label>
          <input 
            type="text" 
            id="subject"
            class="form-control"
            v-model="formdata.subject"
          >
        </div>

        <div class="form-group">
          <label for="message">Message</label>
          <textarea
            class="form-control"
            rows="3"
            id="message"
            v-model="formdata.message"
          ></textarea>
        
        </div>


        <div class="form-group">
          <label for="newsletter">Newsletter</label>
          <input
            type="checkbox"
            id="newsletter"
            value="Newsletter"
            v-model="formdata.extras"
          >
          <label for="promotions">Promotions</label>
          <input
            type="checkbox"
            id="promotions"
            value="Promotions"
            v-model="formdata.extras"
          >                         
        </div>

        <div class="form-group">
          <label for="human">
            <input
              type="radio"
              id="human"
              value="human"
              v-model="formdata.gender"
            >
            Human
          </label>
          <label for="alien">
            <input
              type="radio"
              id="alien"
              value="alien"
              v-model="formdata.gender"
            >
            Alien
          </label>
        </div>

        <div class="form-group">
          <label for="country">Country</label>
          <select
            class="form-control"
            id="country"
            v-model="formdata.country"
          >
            <option 
              v-for="(country,index) in countries"
              :key="index"
            >
              {{ country }}
            </option>
          </select>
        </div>

        
        <button 
          class="btn btn-primary"
          @click.prevent="submitForm"
        >
          Submit
        </button>

        </div>
      </div>
    </form>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				countries:[
					'EEUU',
					'India',
					'UK',
					'Russia'
				],
				formdata:{
					name:'',
					lastname:'',
					subject:'',
					message:'Some default content',
					extras:[],
					gender:'alien',
					country:'India'
				}
			}
		},
		methods:{
			submitForm(){
				console.log(this.formdata);
				console.log(JSON.stringify(this.formdata))
			}
		}
	}
</script>


<style>
	body {
		padding:0;
		margin:0;
		font-family: 'Roboto', sans-serif;
	}

	.container {
		min-height: 84vh;
		box-sizing: border-box;
		padding: 20px;
	}

</style>
