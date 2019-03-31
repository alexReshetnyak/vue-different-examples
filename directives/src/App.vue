<template>
	<div>
		<app-header/>
		<div class="container">
			<div>{{userName}}</div>
			
			<!-- <dir v-awesome="2+2"></dir>
			<br>
			<br>
			Arguments:
			<dir v-awesome:red="textToRender"></dir>
			<dir v-awesome:blue="textToRender"></dir>
			<br><br>
			Modifiers:
			<dir v-awesome.red.big="textToRender"></dir> -->
			<dir v-awesome.blue.small="textToRender"></dir>
			<hr>

			<div v-user-lastname="userLastname"></div>
		</div>
		<app-footer/>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				textToRender:'Dynamic Text from App component',
				userName: 'Jack',
				userLastname: 'Jones'
			}
		},
		mounted() {
			setTimeout(() => {
				this.userName = 'updated jack';
			}, 3000);
		},
		directives: { //* local directive
			'user-lastname': {
				bind(el, binding, vnode) {
					el.innerHTML = binding.value
				}
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