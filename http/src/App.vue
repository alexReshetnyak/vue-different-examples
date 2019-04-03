<template>
    <div>
        <app-header/>
        <div class="container">
            <div>
                <button @click="active = 'compUsers'">Users</button>
                <button @click="active = 'compAddUsers'">Add users</button>
            </div>
            <hr>
            
            <div>
                <component :is="this.active"></component>
            </div>
        </div>
        <app-footer/>
    </div>
</template>

<script>
    import compUsers from './Components/Users.vue';
    import compAddUsers from './Components/AddUsers.vue';

    export default {
        data(){
            return{
                active:'compUsers'
            }
        },
        components:{
            compUsers,
            compAddUsers
        }
    }
</script>

<style>
    body {
        padding:0;
        margin:0;
        font-family: 'Roboto', sans-serif;
    }

    .container {
        min-height: 84vh;
        box-sizing: border-box;
        padding: 20px;
    }

</style>