import Vue from "vue";

const FbAuth = "https://www.googleapis.com/identitytoolkit/v3/relyingparty";
const FbApiKey = "AIzaSyB7gcJeG269SvgiqPxlawt6gCtdmaK-vS0";

export const admin = {
  namespaced: true,

  state: {
    token: null,
    refresh: null,
    authFailed: false
  },

  getters: {},

  mutations: {
    authUser(state, authData) {
      state.token = authData.idToken;
      state.refresh = authData.refreshToken;
    },
    authFailed(state, type) {
      if (type === 'reset') {
        
      } else {
        state.authFailed = true;
      }
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
        commit('authFailed');
      }
    }
  }
};
