<template>
  <div class="home">
    <div>
      <button
          v-for="entry in languages"
          :key="entry.title"
          :class="{selected: selectedLang === entry.language}"
          @click="changeLocale(entry.language)"
        >
        {{entry.title}}
      </button>
    </div>
  
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="welcomeMsg"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import { i18n } from '@/plugins/i18n';

export default {
  name: 'home',
  data () {
    return {
      languages: [
          { language: 'en', title: 'English' },
          { language: 'ru', title: 'Russian' }
      ],
      selectedLang: i18n.locale
    }
  },
  methods: {
    changeLocale (locale) {
      this.selectedLang = locale;
      i18n.locale = locale;
    }
  },
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss">
  .home{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    button {
        padding: 10px;
        border: 1px solid green;
        font-size: 12px;
        margin: 10px;
        color: white;
        font-weight: bold;
        background-color: #41B883;
        cursor: pointer;
    }
    .selected {
      border: 1px solid rgb(1, 224, 1);
        background-color: rgb(78, 216, 154);
    }
  }

</style>
