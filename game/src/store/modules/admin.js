import Vue from "vue";

import router from "../../router";

const FbAuth = "https://www.googleapis.com/identitytoolkit/v3/relyingparty";
const FbApiKey = "AIzaSyB7gcJeG269SvgiqPxlawt6gCtdmaK-vS0";

export const admin = {
  namespaced: true,

  state: {
    token: null,
    refresh: null,
    authFailed: false,
    refreshLoading: true,
    addpost: false,
    imageUpload: null,
    posts: null
  },

  getters: {
    isAuth(state) {
      return state.token ? true : false;
    },
    refreshLoading(state) {
      return state.refreshLoading;
    },
    addPostStatus(state) {
      return state.addpost;
    },
    imageUpload(state) {
      return state.imageUpload;
    },
    getAdminPosts: state => state.posts
  },

  mutations: {
    authUser(state, authData) {
      state.token = authData.idToken;
      state.refresh = authData.refreshToken;

      authData.type === "signin" && router.push("/dashboard");
    },
    authFailed(state, type) {
      state.authFailed = type === "reset" ? false : true;
    },
    logoutUser(state) {
      state.token = null;
      state.refresh = null;

      localStorage.removeItem("token");
      localStorage.removeItem("refresh");

      router.push("/");
    },
    refreshLoading(state) {
      state.refreshLoading = false;
    },
    addPost(state) {
      state.addpost = true;
    },
    clearAddPost(state) {
      state.addpost = false;
    },
    imageUpload(state, imageData) {
      state.imageUpload = imageData.secure_url;
    },
    clearImageUpload(state) {
      state.imageUpload = null;
    },
    getAdminPosts: (state, posts) => (state.posts = posts)
  },

  actions: {
    async signin({ commit }, payload) {
      try {
        const { body: authData } = await Vue.http.post(
          `${FbAuth}/verifyPassword?key=${FbApiKey}`,
          {
            ...payload,
            returnSecureToken: true
          }
        );

        commit("authUser", {
          ...authData,
          type: "signin"
        });

        localStorage.setItem("token", authData.idToken);
        localStorage.setItem("refresh", authData.refreshToken);
      } catch (error) {
        commit("authFailed");
      }
    },
    async refreshToken({ commit }) {
      const refreshToken = localStorage.getItem("refresh");

      if (!refreshToken) {
        return commit("refreshLoading");
      }

      try {
        const { body: authData } = await Vue.http.post(
          `https://securetoken.googleapis.com/v1/token?key=${FbApiKey}`,
          {
            grant_type: "refresh_token",
            refresh_token: refreshToken
          }
        );

        commit("authUser", {
          idToken: authData.id_token,
          refreshToken: authData.refresh_token,
          type: "refresh"
        });

        commit("refreshLoading");

        localStorage.setItem("token", authData.id_token);
        localStorage.setItem("refresh", authData.refresh_token);
      } catch (error) {
        console.error(error);
      }
    },
    // *  context
    async addPost({ commit, state }, payload) {
      try {
        await Vue.http.post(`posts.json?auth=${state.token}`, payload);

        commit("addPost");

        setTimeout(() => {
          commit("clearAddPost");
        }, 3000);
      } catch (error) {
        console.error(error);
      }
    },

    async imageUpload({ commit }, payload) {
      const CLOUDINARY_URL =
        "https://api.cloudinary.com/v1_1/dul2a0sdh/image/upload";
      const CLOUDINARY_PRESET = "ml_default";

      const formData = new FormData();

      formData.append("file", payload);
      formData.append("upload_preset", CLOUDINARY_PRESET);

      try {
        const { body: response } = await Vue.http.post(
          CLOUDINARY_URL,
          formData,
          {
            headers: {
              "Content-type": "application/x-www-form-urlencoded"
            }
          }
        );

        commit("imageUpload", response);
      } catch (error) {
        console.error(error);
      }
    },

    async getAdminPosts({ commit }) {
      try {
        const { body: res } = await Vue.http.get("posts.json");

        const posts = Object.keys(res).map(id => ({ id, ...res[id] }));
        commit("getAdminPosts", posts.reverse());
      } catch (error) {
        console.error(error);
      }
    },

    async deletePost({ commit, state }, payload) {
      try {
        await Vue.http.delete(`posts/${payload}.json?auth=${state.token}`);

        const newPosts = state.posts.filter(post => post.id !== payload);

        commit("getAdminPosts", newPosts);
      } catch (error) {
        console.error(error);
      }
    }
  }
};
