<template>
  <div class="user_friends">
    <h2>User Friends:</h2>
    <ul>
      <li v-for="(friend, index) in friends" :key="index">
        {{friend}}
      </li>
    </ul>
  </div>
</template>

<script>
  import { bus } from '@/main.js';

  export default {
     data () {
       return {
         friends: ['Max', 'Lesha']
       }
     },
     created () {
       bus.$on('addFriend', (newFriend) => {
         this.friends.push(newFriend);
       });
     }
  }
</script>

<style lang="scss">
  .user_friends {
    border: 1px solid #2196f3;
    padding: 10px 20px;
  }
</style>
