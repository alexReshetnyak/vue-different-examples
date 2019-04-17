<template>
    <div class="content">
        <h2>Alter name:</h2>
        <input type="text" v-model="name"/>
        <br>
        <button type="submit" @click="swapName(name)">Swap name</button>
    </div>
</template>


<script>
    // import { mapMutations } from 'vuex';
    import { mapActions } from 'vuex'

    export default {
        data(){
            return {
                name:''
            }
        },
        methods:{
            // swapName(){
            //     this.$store.state.name = this.name;
            // }

            // ...mapMutations([
            //     'swapName'
            // ])

            ...mapActions([
                'swapName'
            ])
        }
    }

</script>