<template>
    <div>
    </div>
</template>

<script>
    import MusicVisualizer from './../../static/js/MusicVisualizer';
    import musicRes from '../.././static/res/Routine.mp3';

    export default {
        name: 'music',
        data () {
            return {
                modelCount : this.$store.state.count
            }
        },
        created (){
            let lastSum = 0;
            let _this = this;
            global.MV = new MusicVisualizer({
                size: 128,
                visualizer: function (arr) {
                    if(_this.$store.state.step !== 2){
                        return
                    }
                    let $wrapperBlock = $('.j-wrapper-block-main');
                    if($wrapperBlock.hasClass('no')){
                        return;
                    }
                    let sum = arr.reduce(function (prevResult, item) {
                        return prevResult + item;
                    });
                    if (sum > 5000) {
                        if(lastSum - sum > 500){
                            $wrapperBlock.css({
                                'transform': 'scale(0.5)'
                            });

                            lastSum = sum;
                        }
                        else if(sum - lastSum > 200){
                            $wrapperBlock.css({
                                'transform': 'scale(' + (0.5 + 2*(sum - lastSum) / 10000) + ')'
                            });
                            lastSum= sum;
                        }
                    }
                    else {
                        $wrapperBlock.css({
                            'transform': 'scale(0.5)'
                        });
                        lastSum = sum;
                    }
                }
            });
            global.MV.play && global.MV.play(musicRes, function () {
                this.$store.dispatch('setLoaded', true);
                if(this.$store.state.step === 2){
                    this.$store.dispatch('setMusic', true);
                    global.MV.start();
                }
            }.bind(this));
        },
        computed: {
            playMusic (){
                return this.$store.state.playmusic;
            }
        },
        watch: {
            'playMusic': function () {
                if(this.$store.state.loaded){
                    global.MV.start();
                }
            }
        },
        methods: {

        }
    }
</script>

<style scoped lang="less">
</style>
