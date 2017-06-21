<template>
    <div id="app">
        <div class="preload-block">
            <img src="https://ws1.sinaimg.cn/large/6f6196f2gy1fgsxbr1390j21hc0zkncd.jpg" />
        </div>
        <music></music>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>

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
    img{
        vertical-align: top;
    }
    p{
        margin: .5em 0;
    }
    a{
        color: #fff;
        text-decoration: none;
    }
    a:hover{
        color: #ff6900;
    }
    a.ud{
        border-bottom: 1px solid #fff;
    }
    a.img{
        border-bottom: 1px dashed #fff;
    }
    a.img img{
        display: none;
        max-width: 90%;
    }
    a.img:hover img{
        display: inline;
    }
    .hide{
        display: none;
    }
    .preload-block img{
        display: inline-block!important;
        width: 0!important;
        height: 0!important;
        visibility: hidden!important;
        line-height: 0!important;
        box-sizing: border-box!important;
    }
</style>
