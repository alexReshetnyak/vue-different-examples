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

<style lang="scss" scoped> //* scoped : make styles protected
	header {
		font-family: 'Roboto', sans-serif;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 5px 20px;
		width: 100vw;
		background-color: #2196F3;
		border-bottom: 4px solid #607d8b;
		box-sizing: border-box;
		color: #ffffff;
		font-size: 20px;
		font-weight: bold;
	}

	#nav {
		padding: 10px;
		a {
			font-weight: bold;
			color: #ffffff;
			
			&.router-link-exact-active {
				color: #10d67d;
			}
			&:hover {
				background-color:  rgb(56, 165, 255);
			}
		}
	}
</style>
