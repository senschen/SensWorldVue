<template>
    <div v-show="show" class="sky-block j-sky-block  ">
        <div id="j-wrapper-block-back" class="wrapper-block">
            <div id="j-stage-block-back" class="stage-block-back">
                <img src="http://i2.muimg.com/4851/24d05b63045ffd02.jpg" ondragstart="return false"
                     class="wrapper-img j-wrapper-img-back"/>
                <canvas id="wrapper-cvs" class="wrapper-cvs j-wrapper-cvs"></canvas>
            </div>
        </div>
        <div class="wrapper-block-main j-wrapper-block-main">
            <div class="stage-block-main j-stage-block-main">
                <div class="stage-box-earth j-stage-box-earth">
                    <img src="http://i2.muimg.com/4851/30acc09acf1e627f.png" alt="" class="j-stage-img-earth">
                </div>
                <div class="wrapper-box-link">呵呵</div>
            </div>
        </div>
    </div>
</template>

<script>
    import makeSky from './../static/js/makeSky';

    export default {
        name: 'sky',
        created (){
            this.$store.dispatch('setStep', 2);
            this.$store.dispatch('setMusic', true);
            this.$nextTick(function () {
                const ms = makeSky.init();
                ms.start();
                let timeSeed = 0;
                window.onresize = function () {
                    timeSeed && clearTimeout(timeSeed);
                    timeSeed = setTimeout(function () {
                        ms.restart();
                    }, 100);
                };
            });
        },
        computed : {
            show(){
                return this.$store.state.step === 2;
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

    .wrapper-block{
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: #060E1B;
        overflow: hidden;
        perspective: 1000px;
        perspective-origin: 50% 50%;
    }
    .wrapper-img{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        min-height: 100%;
        vertical-align: top;
        z-index: 10;
        opacity: .5;
    }
    .wrapper-cvs{
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0;
    }
    .stage-block-back{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        transform-style: preserve-3d;
        transform: translate3d(0,0,0);
        z-index: 20;
    }

    .wrapper-block-main{
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        perspective: 100000px;
        perspective-origin: 50% 50%;
        z-index: -1;
        transition: all 0.1s;
    }
    .stage-block-main{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        transform-style: preserve-3d;
        transition: all 1s;
        transform: translate3d(0,0,-10000000px);
    }

    .stage-box-earth{
        width: 408px;
        height: 408px;
        position: absolute;
        left: 50%;
        top: 50%;
        -webkit-transform: translate(-50%,-50%);
        -ms-transform: translate(-50%,-50%);
        transform:translate(-50%,-50%);
        border-radius: 50%;
        cursor: pointer;
    }
    .stage-box-earth.shake{
        animation-name:anishake;
        animation-duration: .2s;
        animation-timing-function:linear;
        animation-iteration-count: 5;
        -webkit-animation-name:anishake;
        -webkit-animation-duration: .2s;
        -webkit-animation-timing-function:linear;
        -webkit-animation-iteration-count: 5
    }
    @keyframes anishake
    {
        0%  {transform: translate(-50%,-50%) rotate(0deg);}
        25% {transform: translate(-70%,-50%) rotate(10deg);}
        50% {transform: translate(-50%,-50%) rotate(0deg);}
        75% {transform: translate(-30%,-50%) rotate(-10deg);}
        100%{transform: translate(-50%,-50%) rotate(0deg);}
    }
    @-webkit-keyframes anishake
    {
        0%  {transform: translate(-50%,-50%) rotate(0deg);}
        25% {transform: translate(-70%,-50%) rotate(10deg);}
        50% {transform: translate(-50%,-50%) rotate(0deg);}
        75% {transform: translate(-30%,-50%) rotate(-10deg);}
        100%{transform: translate(-50%,-50%) rotate(0deg);}
    }
</style>
