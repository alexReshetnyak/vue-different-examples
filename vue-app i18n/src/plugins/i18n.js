import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
  'en': {
    welcomeMsg: 'Welcome to Your Vue.js App'
  },
  'ru': {
    welcomeMsg: 'Добро пожаловать в Ваше приложение Vue.js'
  }
}

export const i18n = new VueI18n({
	locale: 'en', // set locale
	fallbackLocale: 'ru', // set fallback locale
	messages // set locale messages
})
