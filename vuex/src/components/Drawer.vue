<template>
<div>
    <md-button 
        class="md-dense md-raised md-primary"
        @click="showNavigation = !showNavigation"
    >
        Raised
    </md-button>

    <md-drawer 
        :md-active.sync="showNavigation"
        :style="{'background':'white'}"
        :md-right="true"
    >
        
        <div class="item">
            Name: <span> {{name}} </span>
            <br/>
            Age: <span> {{age}} </span>
        </div>
    </md-drawer>
</div>


</template>


<script>
    export default {
        data(){
            return {
                showNavigation:false
            }
        },
        computed: {
            name() {
                return this.$store.state.name;
            },
            age() {
                return this.$store.state.age;
            }
        },
    }

</script>