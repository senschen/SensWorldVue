<template>
    <div class="welcome-block">
        <div class="welcome-block-main rel">
            <div v-show="!showBtn" class="welcome-box-center" :class="[{die:closeText}]">
                <span v-for="(item, index) in talk" class="welcome-text" @animationend="loadFinish(index)" @click="checkLoaded(index)" :class="['line'+(index+1),{play:start}]">
                    {{ item.msg }}
                </span>
                <span v-show="!loaded" class="welcome-text line7 fail" :class="[{play:showResult}]">哇塞，居然没加载完！</span>
                <span v-show="loaded" class="welcome-text line7 success" :class="[{play:showResult}]">哇塞，已经加载完了！</span>
                <span @animationend="textFinish" v-show="!loaded" class="welcome-text line8 fail" :class="[{play:showResult}]">不管了，直接开始吧！</span>
                <span @animationend="textFinish" v-show="loaded" class="welcome-text line8 success" :class="[{play:showResult}]">那我们就立刻开始吧！</span>

                <span class="welcome-text-line">|</span>
                <div class="welcome-btn-start"></div>
            </div>

            <div class="welcome-box-btn" :class="[{show:showBtn},{abs:!showBtn}]">
                <input placeholder="" type="checkbox" @click="goNext">
                <span class="welcome-btn"></span>
                <p class="welcome-text-tip">接下来记得使用滚轮哟</p>
            </div>
        </div>
    </div>
</template>

<script>
    import runPrefixMethod from './../static/js/runPrefixMethod';

    const Cookie = (function () {
        function setCookie(name, value, day) {
            let oDate = new Date();
            oDate.setDate(oDate.getDate() + day);
            document.cookie = name + '=' + value + ';expires=' + oDate;
        }
        function delCookie(name) {
            setCookie(name, 1, -1);
        }
        function getCookie(name) {
            let arr = document.cookie.split('; ');
            for(let i = 0; i < arr.length; i++) {
                let arrName = arr[i].split('=');
                if(arrName[0] === name) {
                    return arrName[1];
                }
            }
            return '';
        }
        return {
            set: setCookie,
            del: delCookie,
            get: getCookie
        }
    })();
    
    export default {
        name: 'welcome',
        data () {
            return {
                talk: this.$store.state.talk,
                start:true,
                showResult: false,
                closeText: false,
                showBtn: false,
            }
        },
        computed: {
            loaded () {
                if(this.showResult){
                    return this.$store.state.loaded
                }
                else {
                    return false;
                }
            }
        },
        created(){
            if(Cookie.get('finished')){
                this.closeText = true;
                setTimeout(_=> {
                    this.showBtn = true;
                },0)
            }
        },
        watch: {

        },
        methods: {
            checkLoaded(index){
                console.log(index);
            },
            loadFinish(index){
                if(index === 5){
                    this.showResult = true;
                }
            },
            textFinish(){
                let _this = this;
                new Promise(function (resolve) {
                    setTimeout(function () {
                        _this.closeText = true;
                        resolve();
                    },1000);
                }).then(function () {
                    return new Promise(function (resolve) {
                        setTimeout(function () {
                            _this.showBtn = true;
                            resolve();
                        },1000);
                    });
                });
            },
            goNext(){
                setTimeout(function () {
                    Cookie.set('finished','1',1);
                    runPrefixMethod(document.documentElement, "RequestFullScreen");
                    document.body.addEventListener("dblclick", function() {
                        if (runPrefixMethod(document, "FullScreen") || runPrefixMethod(document, "IsFullScreen")) {
                            runPrefixMethod(document, "CancelFullScreen");
                        } else {
                            runPrefixMethod(document.documentElement, "RequestFullScreen");
                        }
                    });
                    this.$router.push('sky');
                }.bind(this),500)
            },
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .welcome-block{
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 10;
        background: #DADCDF;
        transition: all 2s;
    }
    .welcome-block.fadeout{
        opacity: 0;
    }
    .welcome-block-main{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        color: #333;
        z-index: 10;
        text-align: center;
    }
    .welcome-block-main:after{
        display: inline-block;
        height: 100%;
        content: '';
        vertical-align: middle;
    }
    .welcome-box-center{
        width: 320px;
        /*position: absolute;*/
        /*top: 0;*/
        /*left: 0;*/
        /*right: 0;*/
        /*bottom: 0;*/
        /*margin: auto;*/
        font-size: 0;
        display: inline-block;
        vertical-align: middle;
        text-align: left;
    }
    .welcome-box-center.die {
        transition: all 2s;
        transform: rotate(1800deg) scale(0,0);
    }
    .welcome-text{
        display: inline-block;
        width: 0;
        overflow: hidden;
        vertical-align: top;
        font-size: 20px;
        white-space: nowrap;
    }
    .line1.play{
        animation: lineShow1 2s forwards;
        animation-timing-function: steps(1,end);
    }
    .line2.play{
        animation: lineShow2 1s forwards 2s;
        animation-timing-function: steps(10,end);
    }
    .line3.play{
        animation: lineShow3 1s forwards 3.5s;
        animation-timing-function: steps(9,end);
    }
    .line4.play{
        animation: lineShow4 .5s forwards 5s;
        animation-timing-function: steps(5,end);
    }
    .line5.play{
        animation: lineShow5 1s forwards 6s;
        animation-timing-function: steps(6,end);
    }
    .line6.play{
        animation: lineShow6 1s forwards 7s;
        animation-timing-function: steps(16,end);
    }
    .line7.play{
        animation: lineShow7 .5s forwards 0.5s;
        animation-timing-function: steps(10,end);
    }
    .line8.play{
        animation: lineShow8 1s forwards 1s;
        animation-timing-function: steps(10,end);
    }

    @keyframes lineShow1 {
        0%{
            width: 0;
        }
        10%{
            width: 1em;
        }
        20%{
            width: 2em;
        }
        60%{
            width: 3em;
        }
        65%{
            width: 4em;
        }
        70%{
            width: 5em;
        }
        75%{
            width: 6em;
        }
        80%{
            width: 7em;
        }
        85%{
            width: 8em;
        }
        90%{
            width: 9em;
        }
        95%{
            width: 10em;
        }
        99.99%{
            width: 11em;
        }
        100%{
            width: 100%;
        }
    }
    @keyframes lineShow2 {
        0%{
            width: 0;
        }
        99.99%{
            width: 10em;
        }
        100%{
            width: 100%;
        }
    }
    @keyframes lineShow3 {
        0%{
            width: 0;
        }
        99.99%{
            width: 9em;
        }
        100%{
            width: 100%;
        }
    }
    @keyframes lineShow4 {
        0%{
            width: 0;
        }
        99.99%{
            width: 5em;
        }
        100%{
            width: 100%;
        }
    }
    @keyframes lineShow5 {
        0%{
            width: 0;
        }
        99.99%{
            width: 6em;
        }
        100%{
            width: 100%;
        }
    }
    @keyframes lineShow6 {
        0%{
            width: 0;
        }
        99.99%{
            width: 16em;
        }
        100%{
            width: 100%;
        }
    }
    @keyframes lineShow7 {
        0%{
            width: 0;
        }
        99.99%{
            width: 10em;
        }
        100%{
            width: 100%;
        }
    }
    @keyframes lineShow8 {
        0%{
            width: 0;
        }
        99.99%{
            width: 10em;
        }
        100%{
            width: 100%;
        }
    }

    .welcome-text-line{
        animation: lineBling 1s infinite;
        animation-timing-function: steps(2,end);
        opacity: 1;
        font-size: 20px;
    }
    @keyframes lineBling {
        0%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
    }


    .welcome-box-btn {
        display: inline-block;
        box-shadow:
                inset 0 0 35px 5px rgba(0, 0, 0, 0.25),
                inset 0 2px 1px 1px rgba(255, 255, 255, 0.9),
                inset 0 -2px 1px 0 rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        background: #ccd0d4;
        position: relative;
        height: 140px;
        width: 140px;
        top: -1000px;
        transition: top 1s;
    }
    .welcome-box-btn.show{
        top: 0;
    }

    .welcome-btn {
        -webkit-filter: blur(1px);
        -moz-filter: blur(1px);
        filter: blur(1px);
        transition: all 300ms ease;
        box-shadow:
                0 15px 25px -4px rgba(0, 0, 0, 0.5),
                inset 0 -3px 4px -1px rgba(0, 0, 0, 0.2),
                    0 -10px 15px -1px rgba(255, 255, 255, 0.6),
                inset 0 3px 4px -1px rgba(255, 255, 255, 0.2),
                inset 0 0 5px 1px rgba(255, 255, 255, 0.8),
                inset 0 20px 30px 0 rgba(255, 255, 255, 0.2);
        border-radius: 50%;
        position: absolute;
        background: #ccd0d4;
        margin-left: -48.16px;
        margin-top: -48.16px;
        display: block;
        height: 96.32px;
        width: 96.32px;
        left: 50%;
        top: 50%;
    }
    .welcome-box-btn input {
        opacity: 0;
        position: absolute;
        cursor: pointer;
        z-index: 1;
        height: 100%;
        width: 100%;
        left: 0;
        top: 0;
    }
    .welcome-box-btn input:active ~ .welcome-btn {
        box-shadow:
                0 15px 25px -4px rgba(0, 0, 0, 0.4),
                inset 0 -8px 30px 1px rgba(255, 255, 255, 0.9),
                    0 -10px 15px -1px rgba(255, 255, 255, 0.6),
                inset 0 8px 25px 0 rgba(0, 0, 0, 0.4),
                inset 0 0 10px 1px rgba(255, 255, 255, 0.6);
    }

    .welcome-box-btn input:focus ~ .welcome-btn {
        box-shadow:
                0 15px 25px -4px rgba(0, 0, 0, 0.4),
                inset 0 -8px 25px -1px rgba(255, 255, 255, 0.9),
                    0 -10px 15px -1px rgba(255, 255, 255, 0.6),
                inset 0 8px 20px 0 rgba(0, 0, 0, 0.2),
                inset 0 0 5px 1px rgba(255, 255, 255, 0.6);
    }

    .welcome-text-tip{
        position: absolute;
        white-space: nowrap;
        bottom: -120px;
        font-size: 30px;
        background-image: -webkit-linear-gradient(left, #147B96, #ff6900 25%, #147B96 50%, #ff6900 75%, #147B96);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        transform: translate(-50%,0);
        left: 50%;
        -webkit-background-size: 200% 100%;
        animation: masked 1s infinite linear;
    }
    @keyframes masked {
        0%  {
            background-position: 0 0;
        }
        100% {
            background-position: -100% 0;
        }
    }

    .wrapper-box-link{
        position: fixed;
        z-index: 100;
        left: 50%;
    }
</style>
