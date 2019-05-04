<template>
	<div>
		<tbl striped>
			<!--Table head-->
			<tbl-head class="blue-grey lighten-4">
				<tr>
					<th>Title</th>
					<th>Description</th>
					<th>Rating</th>
					<th>Action</th>
				</tr>
			</tbl-head>
			<!--/Table head-->

			<!--Table body-->
			<tbl-body>
				<tr v-for="(post) in posts" :key="post.id">
					<th scope="row">{{post.title}}</th>
					<td>{{post.desc}}</td>
					<td>{{post.rating}}</td>
					<td>
						<div class="post_delete" @click="deleteHandler(post.id)">
							Delete
						</div>
					</td>
				</tr>
			</tbl-body>
			<!--/Table body-->
		</tbl>
	</div>
</template>


<script>
import {
	Tbl,
	TblHead,
	TblBody
} from "mdbvue";

export default {
	components: {
		Tbl,
		TblHead,
		TblBody
	},

	computed: {
		posts() {
			const posts = this.$store.getters["admin/getAdminPosts"];
			return posts;
		}
	},

	methods: {
		deleteHandler(postId) {

		}
	},

	created() {
		this.$store.dispatch("admin/getAdminPosts");
	}
}
</script>