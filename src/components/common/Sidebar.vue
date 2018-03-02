<template>
    <div class="sidebar-box">
        <div class="sidebar-head">
            <div style="width: 100%;display: inline-block">
                <router-link class="hand fl" tag="div" :to='{name:"index"}'>
                    <img src="/static/img/head/head.jpg" height="334"
                         width="334" alt="">
                </router-link>
                <div class="fr">
                    <router-link class="hand fl" tag="div" :to='{name:"index"}'>
                        <div class="my-iconfont-border fl"><i
                                class="iconfont icon-qianbao"></i></div>
                    </router-link>
                    <router-link class="hand fl" tag="div" :to='{name:"index"}'>
                        <div class="my-iconfont-border fr"><i
                                class="iconfont icon-erweima"></i></div>
                    </router-link>
                </div>
            </div>
            <div>
                <flexbox :gutter="0" style="font-size: 0.35rem;color: white">
                    <flexbox-item>测试张英</flexbox-item>
                    <flexbox-item>LV0</flexbox-item>
                </flexbox>
                <flexbox :gutter="0" style="color: white">
                    <flexbox-item>硬币:</flexbox-item>
                    <flexbox-item>B币:</flexbox-item>
                </flexbox>
            </div>
        </div>

        <div class="my-header" v-waves>
            <div class="fl">
                进入只有会员才知道的世界
            </div>
            <div class="fr">
                <i class="iconfont icon-xiayiye"></i>
            </div>
        </div>

        <flexbox :gutter="20" @click.native="testClick(index)" v-waves :class="[item.selectType ? 'item-select':'']" style="width:100%;justify-content: center;margin: 10px 0" v-for="(item,index) in nav"  :key="index">
            <flexbox-item :span="1"><i class="iconfont" :class="item.icon"></i>
            </flexbox-item>
            <flexbox-item :span="8">{{item.name}}</flexbox-item>
        </flexbox>

        <div class="sidebar-footer">
            <div>
                <div class="fl">
                    <i class="iconfont icon-shezhi"></i>
                </div>
                <div class="fl">
                    设置
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import {XButton,Flexbox, FlexboxItem} from 'vux'

    export default {
        name:'sidebar',
        props:{},
        components:{
            XButton,
            Flexbox,
            FlexboxItem
        },
        data(){
            return {
                title1:'进入只有会员才知道的世界',
                nav:[
                    {
                        'name':'首页',
                        'icon':'icon-shouye2',
                        'selectType':true
                    },
                    {
                        'name':'历史记录',
                        'icon':'icon-lishijilu',
                        'selectType':false
                    },
                    {
                        'name':'离线缓存',
                        'icon':'icon-yunxiazai',
                        'selectType':false
                    },
                    {
                        'name':'我的收藏',
                        'icon':'icon-shoucang',
                        'selectType':false
                    },
                    {
                        'name':'稍后再看',
                        'icon':'icon-bofang1',
                        'selectType':false
                    },
                    {
                        'name':'直播中心',
                        'icon':'icon-zhibo',
                        'selectType':false
                    },
                    {
                        'name':'我的大会员',
                        'icon':'icon-wodehuiyuan0101',
                        'selectType':false
                    },
                    {
                        'name':'免流量服务',
                        'icon':'icon-fuwu',
                        'selectType':false
                    },
                    {
                        'name':'会员购订单',
                        'icon':'icon-dingdan',
                        'selectType':false
                    },
                    {
                        'name':'联系客服',
                        'icon':'icon-kefu-tianchong',
                        'selectType':false
                    }
                ]
            }
        },
        computed:{

        },
        methods:{
            testClick(index){
                this.nav.forEach(function (v,i) {
                    if (i === index) {
                        v.selectType = true
                    } else {
                        v.selectType = false
                    }
                })
            }
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .sidebar-box
        width 100%
        height auto
        display block
        .sidebar-head
            height 3.5rem
            padding 10px
            background-color #ff3399
            img
                width: 1.5rem;
                height: 1.5rem;
                border-radius 50%;
                border: 4px solid #ececec
            .my-iconfont-border
                width: 0.8rem;
                height: 0.8rem;
                border 2px white solid
                border-radius: 50%
                text-align center
                line-height 0.8rem
                margin-right 5px
                .iconfont
                    color white
        .my-header
            height 1rem
            line-height 1rem
            background-color yellow
            padding 0 10px
            display block
        .item-select
            background-color #D5D5D5
        .sidebar-footer
            width 100%;
            height 1rem
            line-height 1rem
            border-top 1px solid #2b333f

</style>