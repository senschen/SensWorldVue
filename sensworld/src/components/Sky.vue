<template>
    <div v-show="show" class="sky-block">
        <div class="wrapper-block" :class="[{fadeOut: breakSky}]">
            <div id="j-stage-block-back" class="stage-block-back">
                <img src="https://ws1.sinaimg.cn/large/6f6196f2gy1fgsxbr1390j21hc0zkncd.jpg" ondragstart="return false"
                     class="wrapper-img j-wrapper-img-back"/>
                <canvas id="wrapper-cvs" class="wrapper-cvs" :class="[{fadeOut: breakEarth}]"></canvas>
            </div>
        </div>
        <div class="wrapper-block-main j-wrapper-block-main" :class="[{show: showEarth},{no: breakEarth}]">
            <div class="stage-block-main" :class="[{show: showEarth}]">
                <div class="stage-box-earth" @click="breakALL"  :class="[{shake: breakEarth},{no: breakSky}]">
                    <img src="https://ws1.sinaimg.cn/large/6f6196f2gy1fgsxez3vu7j20bc0bcqbl.jpg" alt="" class="j-stage-img-earth">
                </div>
                <div class="wrapper-box-link">呵呵</div>
            </div>
        </div>
    </div>
</template>

<script>
    import makeSky from './../static/js/makeSky';
    import MakeBreakImg from './../static/js/breakImg';

    export default {
        name: 'sky',
        data() {
            return{
                showEarth: false,
                breakEarth: false,
                breakSky: false,
                objMakeSky: null
            }
        },
        created (){
            this.$store.dispatch('setStep', 2);
            this.$store.dispatch('setMusic', true);
            let _this = this;
            this.$nextTick(function () {
                const ms = makeSky.init();
                _this.objMakeSky = ms;
                ms.start(function (far) {
                    if (!_this.showEarth && far > 200) {
                        _this.showEarth = true;
                    }
                });

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
        },
        methods: {
            breakALL(){
                let _this = this;
                _this.breakEarth = true;

                let bi1 = new MakeBreakImg({
                    el: $('.j-stage-img-earth')
                });
                let bi2 = new MakeBreakImg({
                    el: $('.j-wrapper-img-back'),
                    strStyle: 'position: relative;z-index: 10;opacity: 0.5',
                    itemSpl: 10
                });

                this.objMakeSky.backToStart(function () {
                    document.body.setAttribute('class', 'full nocursor');
                    _this.breakSky = true;

                    bi1.makeBreak();
                    bi2.makeBreak();
                    if(_this.$store.state.loaded){
                        global.MV.slow();
                    }

                    setTimeout(function () {
                        _this.$router.push('intro');
                    }, 5000);
                });
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">

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
    .wrapper-block.fadeOut{
        perspective: none;
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
        transition: all 1s;
    }
    .wrapper-cvs.fadeOut{
        opacity: 0;
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
    .wrapper-block-main.show{
        z-index: 20;
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
    .stage-block-main.show{
        transform: translate3d(0,0,0);
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
        -webkit-animation-iteration-count: 5;
    }
    .stage-box-earth.no{
        cursor: none;
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
