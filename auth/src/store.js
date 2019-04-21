import Vue from 'vue';
import Vuex from 'vuex';

import router from './routes';

Vue.use(Vuex);

const FbAuthUrl = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty';
const FbApiKey = 'AIzaSyDnI4kH-m7XIRfb-Llt8p9xi3lsx7q0VAg';

export default new Vuex.Store({
    state: {
      email: '',
      token: '',
      refresh: ''
    },
    getters: {
      
    },
    mutations: {
      auth(state, authData) {
        state.email = authData.email;
        state.token = authData.idToken;
        state.refresh = authData.refreshToken;
      },
      logout(state) {
        state.email = null;
        state.token = null;
        state.refresh = null;

        localStorage.removeItem('token');
        localStorage.removeItem('refresh');

        router.push('/');
      }
    },
    actions: {
      async signup({ commit }, payload) {
        try {
          const { body: authData } = await Vue.http.post(`${FbAuthUrl}/signupNewUser?key=${FbApiKey}`, {
            ...payload,
            returnSecureToken: true
          });

          commit('auth', authData);

          localStorage.setItem('token', authData.idToken);
          localStorage.setItem('refresh', authData.refreshToken);
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error(error);
        }
      },
      
      async signin({ commit }, payload) {
        try {
          const { body: authData } = await Vue.http.post(`${FbAuthUrl}/verifyPassword?key=${FbApiKey}`, {
            ...payload,
            returnSecureToken: true
          });

          commit('auth', authData);

          localStorage.setItem('token', authData.idToken);
          localStorage.setItem('refresh', authData.refreshToken);
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error(error);
        }
      }
    }
  })