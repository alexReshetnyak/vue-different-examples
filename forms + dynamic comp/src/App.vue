<template>
	<div>
		<app-header/>
		<div class="container">
			<div>
				<button class="btn btn-primary" @click="compToRender = 'compHome'">Home</button>
				<button class="btn btn-primary" @click="compToRender = 'compPage'">Page</button>
				<button class="btn btn-primary" @click="compToRender = 'compContact'">Contact</button>
			</div>

			<!-- To prevent component destroy -->
			<keep-alive>
				<!-- Dinamic component container -->
				<component :is="compToRender"></component>
			</keep-alive>
		</div>
		<app-footer/>
	</div>
</template>

<script>
	import compContact from './Components/Contact.vue';
	import compHome from './Components/Home.vue';
	import compPage from './Components/Page.vue';

	// * compToRender variable that tell what component to render

	export default {
		data(){
			return {
				compToRender: 'compContact'
			}
		},
		components: {
			compContact,
			compHome,
			compPage
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