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
    refreshLoading: true
  },

  getters: {
    isAuth(state) {
      return state.token ? true : false;
    },
    refreshLoading(state) {
      return state.refreshLoading;
    }
  },

  mutations: {
    authUser(state, authData) {
      state.token = authData.idToken;
      state.refresh = authData.refreshToken;

      authData.type === "signin" && router.push("/dashboard");
    },
    authFailed(state, type) {
      if (type === "reset") {
        state.authFailed = false;
      } else {
        state.authFailed = true;
      }
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
    }
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

      if (refreshToken) {
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
      } else {
        commit("refreshLoading");
      }
    }
  }
};
