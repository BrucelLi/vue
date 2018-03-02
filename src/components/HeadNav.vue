<template>
    <div class="head-nav-containner">
        <div class="head-nav-top">
            <div @click="sidebarSwitch()" class="fl head-nav-li">
                <div class="iconfont fl icon-celanliebiaogengduo"></div>
                <div class="user-detail__img fl">
                    <img src="../assets/head.jpg" height="334" width="334" alt="">
                </div>
            </div>
            <div class="head-nav-top-right fr">
            <router-link tag="div" :to='{name:"index"}' class="head-nav-li iconfont icon-iconset0316"></router-link>
            <router-link tag="div" :to='{name:"index"}' class="head-nav-li iconfont icon-youxi"></router-link>
            <router-link tag="div" :to='{name:"index"}' class="head-nav-li iconfont icon-iconset0425"></router-link>
            <router-link tag="div" :to='{name:"index"}' class="head-nav-li iconfont icon-sousuo"></router-link>
            </div>
        </div>

        <div class="head-nav-bottom">
            <tab style="background-color: #ff80bf" bar-active-color="yellow">
                <tab-item active-class="active-6-1" selected  @on-item-click="jump('home/index')">直播</tab-item>
                <tab-item active-class="active-6-1"   @on-item-click="jump('home/index/recommended')">推荐</tab-item>
                <tab-item active-class="active-6-1"   @on-item-click="jump('home/index/anime')">追番</tab-item>
                <tab-item active-class="active-6-1"   @on-item-click="jump('home/index/movie')">影视</tab-item>
                <tab-item active-class="active-6-1"   @on-item-click="jump('home/index/column')">专栏</tab-item>
            </tab>
        </div>
    </div>
</template>

<script>
    import {Tab, TabItem} from 'vux'
    export default {
        name: 'head-nav',
        components: {
            Tab, TabItem
        },
        data () {
            return {
            }
        },
        created(){
        },
        methods: {
            sidebarSwitch() {
                this.$emit('sidebar-click')
            }
        },
        computed:{
        }
    }
</script>

<style scoped lang="scss">
    @import '../style/css/base.scss';
    .router-link-active{
    }
    .head-nav-containner{
        width: 100%;
        height: 2.2rem;
        background-color:  #ff80bf;
        padding: 0.4rem 0;
        z-index: 10;
        position: relative;
        .head-nav-bottom{
            width: 100%;
            display: flex;
            position: absolute;
            bottom: 0.1rem;
            .active-6-1 {
                color: yellow !important;
            }
            .bar-active-color{
                color: blue;
            }
            div {
                flex: 1;
                cursor: pointer;
                align-items: center;
                justify-content: center;
                text-align: center;
                @include fz(15px);
                color: gray;
            }
        }
        .head-nav-top {
            width: 100%;
            height: 1rem;
            .head-nav-top-right{
                width: 60%;
                display: flex;
                div {
                    flex: 1;
                    cursor: pointer;
                }
            }
            .head-nav-li {
                cursor: pointer;
                align-items: center;
                justify-content: center;
                text-align: center;
                height: 1rem;
                line-height: 1rem;
                padding: 0.1rem 0;
                @include fz(20px);
                position: relative;
                .user-detail__img{
                    width:1rem;
                    height: 1rem;
                    position: relative;
                    left: -0.5rem;
                    margin:0 0.525rem;
                    img{
                        width: 100%;
                        height: auto;
                        border-radius:50%;
                    }
                }
                .bottom-nav-desc {
                    @include fz(10px);
                }
                .active {
                    color: red;
                }
                .goodsNumber {
                    position: absolute;
                    top: 0.1rem;
                    width: 0.38rem;
                    height: 0.38rem;
                    line-height: 0.38rem;
                    background: red;
                    color: #fff;
                    border-radius: 50%;
                    text-align: center;
                    @include fz(9px);
                }
            }
        }
    }
</style>
