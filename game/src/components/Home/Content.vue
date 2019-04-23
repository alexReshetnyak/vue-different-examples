<template>
  <div class="container">
    <div class="home_container">
      <mdb-card v-for="(post, index) in posts" :key="index">
        <mdb-card-image
          :waves="true"
          :src="require(`../../assets/images/featured/${post.img}`)"
          alt="Game"
        ></mdb-card-image>
        <mdb-card-body>
          <mdb-card-title>{{ post.title }}</mdb-card-title>
          <mdb-card-text>
            {{ post.description }}
          </mdb-card-text>

          <app-button type="link" linkTo="" :addClass="['small_link']">
            See review
          </app-button>
        </mdb-card-body>
      </mdb-card>
    </div>
  </div>
</template>

<script>
import posts from "../../assets/posts.js";
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
  data() {
    return {
      posts
    };
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
