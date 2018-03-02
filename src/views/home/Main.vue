<template>
    <drawer-layout
            ref="drawer"
            :width="300"
            :enable="true"
            :animatable="true"
            :z-index="0"
            :drawable-distance="Math.floor(300/3)"
            :content-drawable="true"
            :backdrop="true"
            :backdrop-opacity-range="[0,0.4]"
            @mask-click="handleMaskClick">
        <!-- 侧栏 -->
        <div class="drawer-content" slot="drawer">
            <sidebar></sidebar>
        </div>
        <!-- 主体 -->
        <div slot="content">
            <!-- 头部 -->
            <head-nav @sidebar-click="toggle()"></head-nav>
            <!-- 滚动主体 -->
            <scroll class="main" :data="data" :pullDownInitTop="pullDownInitTop"
                    :pullUpLoad="pullUpLoad" :pullDownRefresh="pullDownRefresh"
                    @pullingDown="refreshData()" @pullingUp="loadData()">
                <keep-alive>
                    <!-- 设置过度动画 -->
                    <transition :duration="{ enter: 300, leave: 300 }"
                                name="custom-classes-transition"
                                enter-active-class="animated slideInRight"
                                leave-active-class="animated slideOutLeft"
                                mode="out-in">
                        <!-- 路由 -->
                        <router-view :contentHeight="contentHeight"></router-view>
                    </transition>
                </keep-alive>
            </scroll>
            <foot-nav></foot-nav>
        </div>
    </drawer-layout>
</template>

<script type="text/ecmascript-6">
    import footNav from '../../components/FootNav.vue'
    import headNav from '../../components/HeadNav.vue'
    import scroll from '../../components/Scroll.vue'
    import animate from 'animate.css'
    import {DrawerLayout} from 'vue-drawer-layout'
    import sidebar from '../../components/common/Sidebar.vue'

    export default {
        props : {
        },
        components:{
            scroll,
            footNav,
            headNav,
            DrawerLayout,
            sidebar
        },
        data() {
            return {
                pullUpLoad:{
                    threshold: -10, // 在上拉到超过底部 10px 时，触发 pullingUp 事件
                },
                pullDownRefresh:{
                    threshold: 20, // 当下拉到超过顶部 50px 时，触发 pullingDown 事件
                    stop: 0, // 刷新数据的过程中，回弹停留在距离顶部还有 20px 的位置
                    txt:'刷新完成'
                },
                pullDownInitTop:-40,
                data:[],
                contentHeight:'auto'
            }
        },
        created() {
        },
        mounted() {
            this.$nextTick(function () {
                /*
                 *动态设置背景图的高度为浏览器可视区域高度
                 */
                let wh = document.getElementById('content').clientHeight;
                // 浏览器高度
                let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
                console.log(h, wh)
                h = h - (2.7*16 + 16);
                if (h > wh) {
                    // 首先在Virtual DOM渲染数据时，设置下背景图的高度．
                    this.contentHeight = `${h}px`;
                    // 然后监听window的resize事件．在浏览器窗口变化时再设置下背景图高度．
                    //const that = this;
                    window.onresize = function temp() {
                       // that.clientHeight = `${h}px`;
                    };
                }
            })
        },
        methods: {
            refreshData(){
                let self = this;
                setTimeout(function(){
                    self.$router.go(0)
                }, 2000)
            },
            toggle() {
                this.$refs.drawer.toggle(true);
            },
            handleMaskClick() {
                this.$refs.drawer.toggle(false);
            }
        },
        watch:{
        }
    }

</script>
<style lang="scss">
    .main{
        width: 100%;
        height: auto;
        position:absolute;
        top: 2.7rem;
        bottom: 1rem;
        overflow: hidden;
        background-color: ghostwhite;
    }
</style>