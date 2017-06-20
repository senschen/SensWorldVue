<template>
    <div id="app">
        <music></music>
        <router-view></router-view>
    </div>
</template>

<script>
    import music from './components/music/music.vue';

    export default {
        name: 'app',
        created (){

        },
        data () {
            return {

            }
        },
        components: {
            music
        }
    }
</script>

<style>
    html,body{
        margin: 0;
        padding: 0;
        font-size: 14px;
        font-family: "Microsoft YaHei", sans-serif;
        background-color: #DADCDF;
    }
    html{
        min-height: 100vh;
    }
    body.full{
        min-height: 100vh;
        background-color: #000;
    }
    body.nocursor{
        cursor: none!important;
    }
    .rel{
        position: relative;
    }
    .abs{
        position: absolute!important;
    }
    ::-webkit-scrollbar{
        width: 8px;
        height: 8px;
        background-color: #2F73BC;
        border-radius: 10px;
    }
    ::-webkit-scrollbar-track{
        border-radius: 10px;
        background-color: #6E8EB7;
    }
    ::-webkit-scrollbar-thumb{
        border-radius: 10px;
        background-color: #0D4690;
    }
</style>
