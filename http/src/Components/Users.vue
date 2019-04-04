<template>
    <div>
        <h2>List of users</h2>

        <div 
            class="user_item"
            v-for="(user,index) in users"
            :key="index"
        >
            <div><strong>Name:</strong> {{ user.name }}</div>
            <div><strong>Lastname:</strong> {{ user.lastname }} </div>
        </div>

        <hr>

        <div class="user_item">
            <h3>Single User:</h3>
            <div><strong>Name:</strong> {{ user.name }}</div>
            <div><strong>Lastname:</strong> {{ user.lastname }} </div>
        </div>

    </div>
</template>


<script>
    export default {
        data(){
            return {
                users:'',
                user: '',
                resource: ''
            }
        },
        methods:{
            // fetchData: async function () {
            //     const response = await this.$http.get('users');
            //     this.users = response.body;
            // }

            fetchData: async function () {
                const usersResponse = await this.resource.get({ _limit: 3 });
                const userResponse = await this.resource.get({ id: 2 });
                this.users = usersResponse.body;
                this.user = userResponse.body;
            }
        },
        created(){
            this.resource = this.$resource('users{/id}', {_limit: 5 });
            this.fetchData();
        }
    }
</script>

<style>
    .user_item {
        box-sizing: border-box;
        border: 1px solid #f2f2f2;
        width: 250px;
        padding: 20px;
        float: left;
        margin-left: 10px;
        background: #f7f7f7;
        margin-bottom:10px;
    }
    
</style>