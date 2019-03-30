<template>
	<div>
		<app-header/>
		<div class="container">
			<dir v-awesome="textToRender"></dir>			
		</div>
		<app-footer/>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				textToRender:'Dynamic Text from App component'
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