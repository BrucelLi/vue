<template>
    <div class="list-raw-containner fl">
        <router-link tag="div" :key="index" v-for="(item,index) in info"  :to='{name:"play"}' class="list-raw fl">
            <div class="list-raw-img">
                <img :src="completePath(item.img)" :alt="item.title">
                <div class="list-raw-img-desc">
                    <div style="flex-grow:3;">
                        <div class="fl">
                            <i class="iconfont icon-bofang"></i>
                            <span>{{item.bofang}}</span>
                            &nbsp;
                        </div>
                       <div class="fl">
                           <i class="iconfont icon-danmushu"></i>
                           <span>{{item.pinglun}}</span>
                       </div>
                    </div>
                    <div class="fr" style="flex-grow:1;">
                        {{item.time}}
                    </div>
                </div>
            </div>
            <div class="list-raw-title">
                {{item.title}}
            </div>
            <div class="list-raw-sort">
                <div class="fl">
                    {{item.type}}
                </div>
                <router-link tag="div" :to='{name:"play"}' class="iconfont icon-gengduo fr"></router-link>
            </div>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'list-raw',
        props:{
            data: {
                type: Object,
                default: function () {
                    return {}
                }
            },
        },
        data () {
            return {
                info:[],
                page:1,
            }
        },
        mounted(){
            // 加载初始数据
            this.getData()
            this.testData('test')
        },
        created(){
        },
        methods: {
            getData(type = 1, page = 1, pageNum = 5){
                this
                    .$api
                    .index
                    .indexItem(type = 1, page = 1, pageNum = 5)
                    .then(r => {
                        this.info = this.info.concat(r.info)
                    })
                this.page ++
            },
            loadData(){
                this.getData(1, this.page)
            },
            testData(msg){
                this
                    .$api
                    .index
                    .itemTest(msg)
                    .then(r => {
                        console.log(r)
                    })
            },
        },
        computed:{
            goddsNumber(){
                return "99+"
            }
        }
    }
</script>

<style scoped lang="scss">
    @import '../style/css/base.scss';
    .list-raw-containner {
        width: 100%;
        height: auto;
        display: block;
        .list-raw{
            width: 44%;
            height: 5rem;
            margin: 3%;
            position: relative;
            -moz-border-radius: 4px; /* Firefox */
            -webkit-border-radius: 4px; /* Safari 和 Chrome */
            border-radius: 4px; /* Opera 10.5+, 以及使用了IE-CSS3的IE浏览器 */

            -moz-box-shadow: 2px 2px 2px  #737373; /* Firefox */
            -webkit-box-shadow: 2px 2px 2px  #737373; /* Safari 和 Chrome */
            box-shadow: 2px 2px 2px  #737373; /* Opera 10.5+, 以及使用了IE-CSS3的IE浏览器 */
            .list-raw-title {
                padding: 0.1rem;
                height: 0.7rem;
                line-height: 0.4rem;
                overflow: hidden;
                @include fz(12px);
            }
            .list-raw-sort {
                position: absolute;
                bottom: 0.1rem;
                height: 0.5rem;
                line-height: 0.5rem;
                width: 100%;
            }
            .list-raw-img {
                height: 3.5rem;
                position: relative;
                img {
                    width: 100%;height: 3.5rem
                }
                .list-raw-img-desc{
                    position: absolute;
                    bottom: 0.1rem;
                    display: flex;
                    padding: 0 0.1rem;
                    width: 100%;
                    .iconfont{
                        font-size:13px;
                    }
                }
            }
        }
    }
</style>
