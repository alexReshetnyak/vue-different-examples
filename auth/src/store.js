/* eslint-disable no-console */
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
      isAuth(state) {
        return !!state.token;
      }
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
      },

      async refreshToken({ commit }) {
        const refreshToken = localStorage.getItem('refresh');

        if (!refreshToken) { return; }

        try {
          const { body: authData } = await Vue.http.post(`https://securetoken.googleapis.com/v1/token?key=${FbApiKey}`, {
            grant_type: 'refresh_token',
            refresh_token: refreshToken
          });

          commit('auth', {
            idToken: authData.id_token,
            refreshToken: authData.refresh_token
          });
          
          localStorage.setItem('token', authData.id_token);
          localStorage.setItem('refresh', authData.refresh_token);
          // console.log('Response refresh token:', authData);
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error(error);
        }
   
      }
    }
  })