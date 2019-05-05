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
        <tr v-for="post in posts" :key="post.id">
          <th scope="row">{{ post.title }}</th>
          <td>{{ post.desc }}</td>
          <td>{{ post.rating }}</td>
          <td>
            <div class="post_delete" @click="deleteHandler(post.id)">
              Delete
            </div>
          </td>
        </tr>
      </tbl-body>

      <!--/Table body-->
    </tbl>

    <comp-modal
      :open="dialog"
      @close="dialogOnCancel"
      @confirm="dialogOnConfirm"
    />
  </div>
</template>

<script>
import { Tbl, TblHead, TblBody } from "mdbvue";
import compModal from "./DeletePostConfirmModal.vue";

export default {
  components: {
    Tbl,
    TblHead,
    TblBody,
    compModal
  },

  data() {
    return {
      dialog: false,
      toDelete: null
    };
  },

  computed: {
    posts() {
      return this.$store.getters["admin/getAdminPosts"];
    }
  },

  methods: {
    deleteHandler(postId) {
      this.toDelete = postId;
      this.dialog = true;
    },
    dialogOnCancel() {
      this.toDelete = null;
      this.dialog = false;
    },
    dialogOnConfirm() {
      this.dialog = false;
      this.$store.dispatch("admin/deletePost", this.toDelete);
    }
  },

  created() {
    this.$store.dispatch("admin/getAdminPosts");
  }
};
</script>

<style lang="scss" scoped>
.post_delete {
  cursor: pointer;
}
</style>
