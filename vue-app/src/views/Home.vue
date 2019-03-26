<template>
  <div class="home">
    <button v-for="entry in languages" :key="entry.title" @click="changeLocale(entry.language)">
      {{entry.title}}
    </button>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="welcomeMsg"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { i18n } from '@/plugins/i18n'

export default {
  name: 'home',
  data () {
    return {
       languages: [
            { language: 'en', title: 'English' },
            { language: 'ru', title: 'Russian' }
        ]
    }
  },
  methods: {
    changeLocale (locale) {
        i18n.locale = locale
    }
  },
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss">
  button {
      padding: 15px;
      border: 1px solid green;
      font-size: 18px;
      margin: 15px;
      cursor: pointer;
  }
</style>
