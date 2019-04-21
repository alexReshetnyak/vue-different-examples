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
                        <router-link tag="span" to="/signin">Sign in</router-link>
                    </li>
                    <li>
                        <div
                            :style="{'display': 'inline'}"
                            @click="signout"
                        >
                        Sign Out</div>
                    </li>
                    <li>
                        <router-link tag="span" to="/signup">Sign up</router-link>
                    </li>
                    <li>
                        <router-link tag="span" to="/dashboard">Dashboard</router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
    export default {
        methods: {
            signout() {
                this.$store.commit('logout'); // * commit like sync dispatch
            }
        },
    }
</script>
