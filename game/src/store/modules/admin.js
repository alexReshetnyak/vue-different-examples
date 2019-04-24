import Vue from "vue";

import router from '../../router';

const FbAuth = "https://www.googleapis.com/identitytoolkit/v3/relyingparty";
const FbApiKey = "AIzaSyB7gcJeG269SvgiqPxlawt6gCtdmaK-vS0";

export const admin = {
  namespaced: true,

  state: {
    token: null,
    refresh: null,
    authFailed: false
  },

  getters: {
    isAuth(state) {
      return state.token ? true : false;
    }
  },

  mutations: {
    authUser(state, authData) {
      state.token = authData.idToken;
      state.refresh = authData.refreshToken;

      authData.type === 'signin' && router.push('/dashboard');
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

      router.push('/');
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
    }
  }
};
