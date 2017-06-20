<template>
    <div>
        <input type="text" v-model="modelCount">
        <p>{{modelCount}}</p>
        <button @click="setCount">改变store</button>
    </div>
</template>

<script>
    export default {
        name: 'editcount',
        data () {
            return {
                modelCount : this.$store.state.count
            }
        },
        computed: {
            count () {
                return this.$store.state.count;
            }
        },
        methods: {
            setCount(){
                this.$store.dispatch('setCount', this.modelCount);
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
