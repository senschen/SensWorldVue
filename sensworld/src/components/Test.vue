<template>
    <div>
        <p>I'm test</p>
        <show-count></show-count>
        <edit-count></edit-count>
    </div>
</template>

<script>
    import ShowCount from './showcount/showcount.vue'
    import EditCount from './editcount/editcount.vue'

    export default {
        name: 'test',
        data () {
            return {

            }
        },
        components: {
            ShowCount,
            EditCount
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
