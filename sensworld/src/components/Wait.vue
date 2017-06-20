<template>
    <div>
        <p>user_id: {{ $route.params.id }}</p>
        <div class="loading" v-if="loading">
            Loading...
        </div>
        <p v-if="data">取的结果是{{data}}</p>
    </div>
</template>

<script>
    export default {
        name: 'user',
        data () {
            return {
                loading: true,
                data: null
            }
        },
        created(){
            this.getData(this.$route.params.id);
        },
        watch: {
            $route () {
                this.getData(this.$route.params.id);
            }
        },
        methods: {
            getData (id){
                this.loading = true;
                this.data = null;
                setTimeout(function () {
                    this.loading = false;
                    this.data = id * 2
                }.bind(this),2000)
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
