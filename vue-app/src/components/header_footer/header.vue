<template>
	<header>
		<span>{{name}}</span>
		<div id="nav">
			<router-link to="/">Home</router-link> |
			<router-link to="/about">About</router-link>
		</div>
	</header>
</template>

<script>
export default {
	data () {
		return {
			name: 'Jack'
		}
	}
}
</script>

<style lang="scss" scoped>
	#nav {
		padding: 30px;
		a {
			font-weight: bold;
			color: #2c3e50;
			&.router-link-exact-active {
				color: #42b983;
			}
		}
	}
</style>
