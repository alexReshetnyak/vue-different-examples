<template>
  <div class="about">
    <div class="container">
      <compUserProfile
        :userName='userName'
        userLastName='Jones'
        :userAge="userAge"
        :userParents="parents"
        @updateName="userName = $event"
        :updateAge="updateAge"
      />

      <br>

      <compFriends />
      
      <br>
      
      <compAbilities>
        <ul class="list-group" slot='main_ab'>
          <li 
            class="list-group-item list-group-item-action" 
            v-for="(abil, index) in abilities" :key="index"
          >
            {{abil}}
          </li>
        </ul>

        <div slot="notes">
          <p>The User also knows PHP</p>
        </div>

        <dir :style="{padding: 0}">
          <a href="#">See more about this user</a>
        </dir>

        <div :slot="slotName">
          Other Content
        </div>
      </compAbilities>
    </div>
  </div>
</template>

<script>
  import { ParentsModel } from '@/Models/ParentsModel.js';
  import compUserProfile from '@/components/user/Profile.vue';
  import compFriends from '@/components/user/Friends.vue';
  import compAbilities from '@/components/user/Abilities.vue';

  export default {
    components: {
      compUserProfile,
      compFriends,
      compAbilities
    },

    data () {
      return {
        userName: 'Jack',
        userAge: 27,
        parents: new ParentsModel({
          father: 'Peter',
          mother: 'Martha'
        }),
        abilities: ['JS', 'HTML', 'CSS'],
        slotName: ''
      }
    },

    methods: {
      updateAge (newAge) {
        this.userAge = newAge;
      }
    },
    created () {
       setTimeout(() => {
         this.slotName = 'other';
       }, 3000);
    }
  }
</script>

<style lang="scss" scoped>
  .about {
    max-height: 100%;
    overflow: auto;
  }
</style>
