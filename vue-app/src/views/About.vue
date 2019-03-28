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
      <compFriends />
    </div>
  </div>
</template>

<script>
  import { ParentsModel } from '@/Models/ParentsModel.js';
  import compUserProfile from '@/components/user/Profile.vue';
  import compFriends from '@/components/user/Friends.vue';

  export default {
    components: {
      compUserProfile,
      compFriends
    },

    data () {
      return {
        userName: 'Jack',
        userAge: 27,
        parents: new ParentsModel({
          father: 'Peter',
          mother: 'Martha'
        })
      }
    },

    methods: {
      updateAge (newAge) {
        this.userAge = newAge;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .about {
    max-height: 100%;
    overflow: auto;
  }
</style>
