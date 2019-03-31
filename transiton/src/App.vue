<template>
	<div>
		<app-header/>
		<div class="container">

			<!-- Vue Transition -->
			<transition name="appear">
				<div class="p-3 mb-2 bg-success text-white" v-if="display">Hello</div>
			</transition>

			<transition name="slideup">
				<div class="p-3 mb-2 bg-success text-white" v-if="display">Hello 2</div>
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
		transform: translateX(300px);
		opacity: 0;
	}

	.appear-enter-active {
		transition: all 0.5s ease;
	}

	.appear-leave {

	}

	.appear-leave-active {
		transform: translateX(300px);
		opacity: 0;
		transition: all 0.5s ease;		
	}


	.slideup-enter {
		opacity: 0;
	}

	.slideup-enter-active {
		transition: opacity 0.5s;
		animation: slideUp 0.5s ease-out;
	}

	.slideup-leave {}

	.slideup-leave-active {
		opacity: 0;
		transition: opacity 0.5s;
		animation: slideDown 0.5s ease-out;
	}

	@keyframes slideUp {
		from {
			transform: translateY(200px);
		}
		to {
			transform: translateY(0);
		}
	}

	@keyframes slideDown {
		from {
			transform: translateY(0);
		}
		to {
			transform: translateY(200px);
		}
	}

</style>