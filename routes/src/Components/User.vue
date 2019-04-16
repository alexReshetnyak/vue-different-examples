<template>
    <div>
        <h1>User</h1>

        <h3>User ID: {{userId}}</h3>
        <h3>User Name: {{userName}}</h3>

        <hr>
        <h1>Query params:</h1>
        <span>User: {{this.$route.query.user}}</span>
        <span>Some: {{$route.query.some}}</span>

        <hr>
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Francis Jones</h5>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip </p>
            </div>
            
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Cras justo odio</li>
                <li class="list-group-item">Dapibus ac facilisis in</li>
                <li class="list-group-item">Vestibulum at eros</li>
            </ul>
            <div class="card-body">
                <div @click="navigateHome" class="card-link">Go home!</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userId: null,
            userName: ''
        }
    },
    methods: {
        navigateHome() {
            this.$router.push({ name: 'home' });
        }
    },
    created() {
        console.log(this.$route);
        
        const { id, name } = this.$route.params;

        this.userId = id;
        this.userName = name;
    }
}
</script>

<style>

</style>
