import Vue from "vue";

export const posts = {
  namespaced: true,
  state: {
    homePosts: null,
    post: null
  },

  getters: {
    getAllPosts: state => state.homePosts,
    getPost: state => state.post
  },

  mutations: {
    getAllPosts(state, posts) {
      state.homePosts = posts;
    },
    getPost(state, post) {
      state.post = post;
    },
    clearPost(state) {
      state.post = null;
    }
  },

  actions: {
    async getAllPosts({ commit }, payload) {
      try {
        const { body: response } = await Vue.http.get(
          `posts.json?orderBy="$key"&limitToLast=${payload.limit}`
        );

        const posts = Object.keys(response).map(id => ({
          id,
          ...response[id]
        }));

        commit("getAllPosts", posts.reverse());
      } catch (error) {
        console.error(error);
      }
    },
    async getPost({ commit }, payload) {
      try {
        const { body: res } = await Vue.http.get(
          `posts.json?orderBy="$key"&equalTo="${payload}"`
        );

        const post = Object.entries(res)[0];
        const serializedPost = { id: post[0], ...post[1] };

        commit("getPost", serializedPost);
      } catch (error) {
        console.error(error);
      }
    }
  }
};
