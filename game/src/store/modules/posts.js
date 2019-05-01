import Vue from 'vue';

export const posts = {
  namespaced: true,
  state: {
    homePosts: null
  },

  getters: {
    getAllPosts(state) {
      return state.homePosts;
    }
  },

  mutations: {
    getAllPosts(state, posts) {
      state.homePosts = posts;
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
    }
  }
};