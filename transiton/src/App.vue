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

			<transition name="appear">
				<div class="p-3 mb-2 bg-success text-white" v-show="display">Hello 3</div>
			</transition>

			<button class="btn btn-primary" @click="display = !display">Toggle animation</button>

			<hr>

			<button class="btn btn-outline-info" @click="status = !status">Toggle Status</button>

			<!-- Mode = out-in say that animation will execute by order -->
			<transition name="appear" mode="out-in">
				<div class="p-3 mb-2 bg-success text-white" v-if="!status" key="status_false">STATUS IS FALSE</div>
				<div class="p-3 mb-2 bg-success text-white" v-else key="status_true">STATUS IS TRUE</div>
			</transition>

			<hr>

			<button class="btn btn-outline-warning" @click="custom = !custom">CUSTOM</button>

			<transition 
				name="custom"
				enter-active-class="customEnter"
				leave-active-class="customLeave"
			>
				<div class="p-3 mb-2 bg-success text-white" v-if="custom">CUSTOM</div>
			</transition>

			<hr>
			<button class="btn btn-outline-danger" @click="animate = !animate">ANIMATE CSS</button>

			<transition 
				name="animate"
				enter-active-class="animated rotateInDownRight"
				leave-active-class="animated rollOut"
			>
				<div class="p-3 mb-2 bg-success text-white" v-if="animate">ANIMATE CSS</div>
			</transition>


			<hr>

			<button class="btn btn-outline-success" @click="hook = !hook">TOGGLE HOOK</button>

			<transition
				name="appear"
				@before-enter="beforeEnter"
				@enter="enter"
			>
				<div class="p-3 mb-2 bg-success text-white" v-if="hook">TOGGLE HOOK</div>
			</transition>

			<hr>

			<button class="btn btn-outline-info" @click="velocity = !velocity">TOGGLE VELOCITY</button>

			<transition
			 	@before-enter="beforeEnter"
				@enter="enter"
				@after-enter="afterEnter"
				@enter-cancelled="enterCancelled"

				@before-leave="beforeLeave"
				@leave="leave"
				@after-leave="afterLeave"
				@leave-cancelled="leaveCancelled"
				:css="false"
			>
				<div class="p-3 mb-2 bg-warning text-white" v-if="velocity">TOGGLE VELOCITY</div>
			</transition>

			<hr>

			<button class="btn btn-success" @click="addOne">Add One</button>
			<input v-model="name">

			<ul class="list-group">
				<transition-group name="appear2">
					<li 
						class="list-group-item" 
						v-for="(item, index) in list" 
						:key="item"
						@click="removeItem(index)"
					>
						{{item}}
					</li>
				</transition-group>
			</ul>

		</div>
		<app-footer/>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				display: false,
				status: false,
				custom: false,
				animate: false,
				hook: false,
				velocity: false,
				name: '',
				list: ['Jack', 'Ron', 'James']
			}
		},
		methods: {
			removeItem(index) {
				this.list.splice(index, 1);
			},
			addOne() {
				if (!this.list.includes(this.name)) {
					this.list.unshift(this.name);
					this.name = '';
				}
			},
			beforeEnter(el) {
				console.log('Before Enter Hook');
				el.style.opacity = 0;
			},
			enter(el, done) {
				Velocity(el, {
					opacity: 1,
					fontSize: '20px'
				}, {
					duration: 2000,
					complete: done //* activate next hook
				});
			},
			afterEnter(el) {
				console.log('Animation done');
			},
			enterCancelled(el) { //* will called if animation not done
				console.log('Enter Cancelled');
			},

			// * LEAVING HOOKS

			beforeLeave(el) {
				console.log('Before Leave');
			},
			leave(el, done) {
				Velocity(el, {
					rotateZ: '100deg'
				}, {
					loop: 2,
					complete: done
				});
			},
			afterLeave(el) {
				console.log('After leave');
			},
			leaveCancelled(el) {
				console.log('Leave cancelled');
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

	.appear-move {
		transition: transform 0.5s;
	}

	/* List Animation */

	.list-group-item {
		transition: all 1s;
	}

	.appear2-enter, .appear2-leave-to {
		opacity: 0;
		transform: translateX(30px);
	}
	.appear2-leave-active {
		position: absolute;
	}

/* END */


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

	.customEnter {
		transition: all 1s ease;
	}

	.customLeave {
		transition: all 1s ease;
		opacity: 0;
	}

	.custom-enter {
		opacity: 0;
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