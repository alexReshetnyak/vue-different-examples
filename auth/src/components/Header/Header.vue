<template>
    <header>
        <div class="container header_cont">
            <div class="logo">
                Aw-App
            </div>
            <nav>
                <ul>
                    <li>
                        <router-link tag="span" to="/">Home</router-link>
                    </li>
                    <li>
                        <router-link tag="span" to="/signin" v-if="!isAuth">Sign in</router-link>
                    </li>
                    <li v-if="isAuth">
                        <div
                            :style="{'display': 'inline'}"
                            @click="signout"
                        >
                        Sign Out</div>
                    </li>
                    <li v-if="!isAuth">
                        <router-link tag="span" to="/signup">Sign up</router-link>
                    </li>
                    <li v-if="isAuth">
                        <router-link tag="span" to="/dashboard">Dashboard</router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
    export default {
        computed: {
            isAuth() {
                return this.$store.getters.isAuth;
            }
        },
        methods: {
            signout() {
                this.$store.commit('logout'); // * commit like sync dispatch
            }
        },
    }
</script>
