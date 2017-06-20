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
            global.MV = new MusicVisualizer({
                size: 128,
                visualizer: function (arr) {

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
            count () {
                return this.$store.state.count;
            },
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
            setCount(){
                this.$store.dispatch('setCount', this.modelCount);
            }
        }
    }
</script>

<style scoped lang="less">
</style>
