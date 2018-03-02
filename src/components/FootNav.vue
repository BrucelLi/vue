<template>
    <div class="foot-nav-containner">
        <div class="bottom-nav" id="foot-nav">
            <router-link tag="div" :to='{name:"index"}' class="bottom-nav__li">
                <div class="iconfont icon-shouye1"></div>
                <div class="bottom-nav-desc">首页</div>
            </router-link>
            <router-link tag="div" :to='{name:"search"}' class="bottom-nav__li">
                <div class="iconfont icon-fenquweixuanzhong"></div>
                <div class="bottom-nav-desc">分区</div>
            </router-link>
            <router-link tag="div" :to='{name:"cart"}' class="bottom-nav__li">
                <div class="iconfont icon-dongtaiweixuanzhong"></div>
                <div class="bottom-nav-desc">动态</div>
            </router-link>
            <router-link tag="div" :to='{name:"vip"}' class="bottom-nav__li">
                <div class="iconfont icon-shouye"></div>
                <div class="bottom-nav-desc">消息</div>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'foot-nav',
        data () {
            return {
            }
        },
        created(){
        },
        methods: {
        },
        computed:{
        }
    }
</script>

<style scoped lang="scss">
    @import '../style/css/base.scss';
    .router-link-active{
        color:#fd0909;
    }
    .foot-nav-containner{
        position: fixed;
        bottom:0;
        width: 100%;
        z-index: 1001;
        border-top: 0.014rem solid #ddd;
        background: #fff;
        .bottom-nav{
            display: flex;
            .bottom-nav__li{
                cursor: pointer;
                flex:1;
                align-items:center;
                justify-content:center;
                text-align: center;
                height:1rem;
                line-height: 0.55rem;
                padding: 0.1rem 0;
                @include fz(20px);
                position: relative;
                .bottom-nav-desc{
                    @include fz(10px);
                }
            }
        }
    }
</style>
