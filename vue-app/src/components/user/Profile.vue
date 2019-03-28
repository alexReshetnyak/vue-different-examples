<template>
  <div class="user_profile">
    <h1>User Information: </h1>
    <ul class="list-group">
      <li class="list-group-item list-group-item-action"><span>Name: </span> {{userName}}</li>
      <li class="list-group-item list-group-item-action"><span>Last Name: </span> {{userLastName}}</li>
      <li class="list-group-item list-group-item-action"><span>Age: </span> {{userAge}}</li>
    </ul>
    <br><br>

    <ul class="list-group">
      <li class="list-group-item list-group-item-action"><span>Father: </span>{{userParents.father}}</li>
      <li class="list-group-item list-group-item-action"><span>Mother: </span>{{userParents.mother}}</li>
    </ul>
    <br><br>

    <button class="btn btn-outline-primary" @click="updateName">Update Name</button> {{'  '}}
    <button class="btn btn-outline-primary" @click="updateAge(66)">Update Age</button>
    <br><br>

    <div class="input-group">
      <input form-control type="text" v-model="friendInput">
    </div>
    <br>

    <button class="btn btn-outline-success" @click="addFriend">Save</button>

  </div>
</template>

<script>
  import { ParentsModel } from '@/Models/ParentsModel.js';
  import { bus } from '@/main.js';

  export default {
    props: {
      userName: String, //* Number, Boolean, Array, Object, Function, Promise, Date, Symbol, [String, Number], { type: String, required: true }
      userLastName: { type: String, required: true }, //* { type: Number, default: 100 }, {}
      userAge: { type: Number, validator: age => (age > 0 && age < 120) },
      userParents: ParentsModel,
      updateAge: Function
    },

    data () {
      return {
        friendInput: ''
      }
    },

    methods: {
      updateName () {
        this.$emit('updateName', 'Updated Jack'); // * Emit value for parent
      },
      addFriend () {
        bus.$emit('addFriend', this.friendInput); //* Child to Child Bus
        this.friendInput = '';
      }
    }
  }
</script>

<style lang="scss" scoped>
  span {
    font-weight: 800;
  }

  .user_profile {
    border: 1px solid #2196f3;
  }
</style>
