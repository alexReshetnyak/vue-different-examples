<template>
  <div class="container">
    <div class="home_container">
      <mdb-card v-for="(post, index) in posts" :key="index">
        <mdb-card-image
          :waves="true"
          :src="post.img"
          v-if="post.img"
          alt="Game"
        ></mdb-card-image>
        <mdb-card-body>
          <mdb-card-title>{{ post.title }}</mdb-card-title>
          <mdb-card-text>
            {{ post.desc }}
          </mdb-card-text>

          <app-button
            type="link"
            linkTo="`posts/${post.id}`"
            :addClass="['small_link']"
          >
            See review
          </app-button>
        </mdb-card-body>
      </mdb-card>
    </div>

    <div class="load_more">
      <app-button type="btn" :addClass="['small_link']" :action="loadMore">
        Load more
      </app-button>
    </div>
  </div>
</template>

<script>
import {
  mdbCard,
  mdbCardImage,
  mdbCardBody,
  mdbCardTitle,
  mdbCardText
} from "mdbvue";

export default {
  components: {
    mdbCard,
    mdbCardImage,
    mdbCardBody,
    mdbCardTitle,
    mdbCardText
  },
  computed: {
    posts() {
      return this.$store.getters["posts/getAllPosts"];
    }
  },
  methods: {
    loadMore() {
      this.$store.dispatch("posts/getAllPosts", {
        limit: this.posts.length + 3
      });
    }
  },
  created() {
    this.$store.dispatch("posts/getAllPosts", {
      limit: 3
    });
  }
};
</script>

<style lang="scss" scoped>
.card {
  width: 30%;
  margin-bottom: 25px;

  img {
    min-width: 100%;
    object-fit: cover;
    height: 180px;
  }
}
</style>
