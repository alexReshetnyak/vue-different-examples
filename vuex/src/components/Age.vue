<template>
    <div class="content">
        <h2>Alter age:</h2>
        <div>
            <md-button 
                :style="{'background':'#3F51B5','color':'white'}"
                @click="addOne"
            >
                Add ONE
            </md-button>

            <md-button 
                :style="{'background':'#FF5722','color':'white'}"
                @click="restOne"
            >
                Rest ONE
            </md-button>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        addOne() {
            this.$store.state.age++;
        },
        restOne() {
            this.$store.state.age--;
        }
    },
}
</script>