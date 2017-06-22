<template>
    <div class="intro-block j-intro-block">
        <div class="style-block" v-html="styleFinal"></div>
        <pre class="display-block" ref="displayBlock">{{textFinal}}</pre>
        <div class="intro-box">
            <div class="intro-box-main" v-show="showIntro">
                <p class="intro-box-hide">&emsp;&emsp;我叫陈思旭，15年毕业于重庆理工大学计算机科学与技术学院</p>
                <p class="intro-box-hide">&emsp;&emsp;15年年初开始在猪八戒网络有限公司品牌市场相关部门，从事前端开发工作</p>
                <p class="intro-box-hide">&emsp;&emsp;擅长页面重构、动画（css、js、canvas）</p>
                <p class="intro-box-hide">&emsp;&emsp;在公司主要做品牌、活动相关项目的开发以及外投用的下单页面的开发</p>
                <p class="intro-box-hide">&emsp;&emsp;平时工作用到的框架技术FIS-Plus、Vue及相关技术栈、Nodejs</p>
                <h3 class="intro-box-hide">&emsp;&emsp;部分参与的项目：</h3>
                <ul class="intro-list-task">
                    <li class="intro-box-hide">
                        <p class="c-fff">2015：<a class="ud" href="http://cyy.zbj.com/" target="_blank">猪八戒进产业园官网+线下产业园</a>+微信版产业园 ---（ps：均已停止维护有1年之久）</p>
                        <p class="intro-text-desc">主要功能有面向客户提供企业注册申请功能；<br>
                            面向运营人员提供新闻的配置和显示功能；<br>
                            面向运营人员提供线下园区的配置和显示功能</p>
                    </li>
                    <li class="intro-box-hide">
                        <p class="c-fff">2015：<a class="img" href="javascript:" target="">八戒网盟推广平台 <img src="https://ws1.sinaimg.cn/large/6f6196f2gy1fgsxjczt08j20vl0n9jso.jpg" alt=""></a></p>
                        <p class="intro-text-desc">面向合作方提供广告代码自动生成功能<br>
                            面向合作方提供广告效果数据查询展示功能；</p>
                    </li>
                    <li class="intro-box-hide">
                        <p class="c-fff">2015：<a class="img" href="javascript:" target="">猪八戒创业者频道 <img src="https://ws1.sinaimg.cn/large/6f6196f2gy1fgsxjdvbr9j21a80o7adz.jpg" alt=""></a></p>
                        <p class="intro-text-desc">面向运营人员提供版块的配置和显示功能<br>
                            面向客户提供表单申请功能</p>
                    </li>
                    <li class="intro-box-hide">
                        <p class="c-fff">2016：<a class="ud" href="http://sandbox.runjs.cn/show/2q2yqzeb" target="_blank">猪八戒新年开门红活动</a>（此处链接为demo链接）</p>
                    </li>
                    <li class="intro-box-hide">
                        <p class="c-fff">2016：全站订单来源统计功能</p>
                    </li>
                    <li class="intro-box-hide">
                        <p class="c-fff">2016：<a class="ud" href="http://bang.zbj.com/" target="_blank">新版八戒众帮</a></p>
                    </li>
                    <li class="intro-box-hide">
                        <p class="c-fff">2016：<a class="ud" href="http://88.zbj.com/redPacket/Main.html" target="_blank">猪八戒88免单节报名页以及抢购页</a></p>
                    </li>
                    <li class="intro-box-hide">
                        <p class="c-fff">2016：<a class="ud" href="http://10years.zbj.com/" target="_blank">猪八戒十周年官网</a></p>
                    </li>
                    <li class="intro-box-hide">
                        <p class="c-fff">2016：<a class="ud" href="http://city.zbj.com/" target="_blank">八戒城市部分分站</a></p>
                    </li>
                    <li class="intro-box-hide">
                        <p class="c-fff">2017：<a class="ud" href="http://zt.tianpeng.com/ztoper/tp/20170427tppp/" target="_blank">天蓬网订单快速发布功能</a></p>
                    </li>
                    <li class="intro-box-hide">
                        <p class="c-fff">2017：<a class="img" href="javascript:" target="">猪八戒服务商数字名片活动 <img src="https://ws1.sinaimg.cn/large/6f6196f2gy1fgsxjd5qcbj20ch0qigm2.jpg" alt=""></a></p>
                    </li>
                    <li class="intro-box-hide">
                        <p class="c-fff">2017：<a class="ud" href="http://xiaoyuan.zbj.com/" target="_blank">八戒校园</a></p>
                    </li>
                    <li class="intro-box-hide">
                        <p class="c-fff">2017：<a class="ud" href="http://csr.zbj.com/" target="_blank">八戒阳光</a></p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'intro',
        data () {
            return {
                talk: this.$store.state.talk,
                start:true,
                showResult: false,
                closeText: false,
                showBtn: false,
                style: `
/* ......
* 厉害了我的哥，这下玩坏了吧！
* 没办法，那只能重新造一个网页了╮(╯_╰)╭
*/

/* 首先给所有元素加上过渡效果 */
* {
    -webkit-transition: all .3s;
    transition: all .3s;
}
/* 还是用绚烂的星空背景才有逼格 */
html,body {
    background-image: url("https://t.cn/RotuF4m");
    color: #333;
}
/* 好歹还是加个边框吧 */
.display-block {
    padding: 10px;
    border: 2px solid rgb(0,155,255);
    margin: 10px;
    overflow: auto;
    width: 400px; height: 90vh;
    float: left;
    background: rgba(0,155,255,0.5);
}
/* 还差一个版块来介绍自己 */
.intro-box{
    padding: 12px;
    background: rgba(0,55,205,0.3);
    margin: 10px;
    min-height: 110vh;
    overflow: hidden;
}
/* 使命完成了，给主要的版块让让位置吧 */
.display-block {
    transform-origin: 0 50%;
    -webkit-transform: rotateY(30deg);
    transform: rotateY(30deg);
    margin-right: -100px;
}
`,
                currLen: 0,
                showIntro: false
            }
        },
        computed: {
            styleFinal(){
                return `<style>${this.style.substring(0,this.currLen)}</style>`
            },
            textFinal(){
                return `${this.style.substring(0,this.currLen)}`
            }
        },
        created () {
            let len = this.style.length;
            let _this = this;

            this.$nextTick(function () {
                new Promise(function (resolve) {
                    function appendStyle() {
                        if(_this.currLen === len){
                            resolve();
                        }
                        _this.currLen++;
                        _this.$refs.displayBlock.scrollTop = 9999;
                        setTimeout(appendStyle,30);
                    }
                    appendStyle();
                }).then(function () {
                    _this.showIntro = true;
                    document.body.setAttribute('class', '');
                    let introBoxHide = document.querySelectorAll(".intro-box-hide");
                    let len = introBoxHide.length;
                    for (let i = 0; i < len; i++) {
                        (function (i) {
                            setTimeout(function () {
                                introBoxHide[i].classList.add('show');
                            },i*500);
                        })(i)
                    }
                });
            });
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
    html,body{
        background-color: #000!important;
    }

    .intro-block{
        overflow: hidden;
        perspective: 1000px;
        perspective-origin: 10px 400px;
    }
    .display-block{
        color: #fff;
    }
    .intro-box{
        color: #eee;
        font-size: 18px;
        line-height: 1.5;
    }
    .c-fff{
        color: #fff;
    }
    .intro-text-desc{
        font-size: 14px;
        color: #ececec;
    }
    .intro-list-task>li{
        margin-bottom: 40px;
    }
    .intro-box-hide{
        visibility: hidden;
    }
    .intro-box-hide.show{
        animation: show 1s;
        animation-fill-mode: forwards;
    }
    @keyframes show {
        0%{
            visibility: visible;
            opacity: 0;
            transform: translate(100px,-20px);
        }
        100%{
            opacity: 1;
            visibility: visible;
            transform: translate(0,0);
        }
    }
</style>
