<template>
	<div>
		<app-header/>
		<div class="container">

			<!-- Vue Transition -->
			<transition name="appear">
				<div class="p-3 mb-2 bg-success text-white" v-if="display">Hello</div>
			</transition>

			<button class="btn btn-primary" @click="display = !display">Toggle animation</button>
		</div>
		<app-footer/>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				display: false
			}
		},
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

	.appear-enter {
		opacity: 0;
	}

	.appear-enter-active {
		transition: opacity 1s;
	}

	.appear-leave {

	}

	.appear-leave-active {
		
	}

</style>