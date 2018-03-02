<template>
    <div>
        <tab>
            <tab-item :selected="demo1 === '已发货'" @click="demo1 = '已发货'">已发货</tab-item>
            <tab-item :selected="demo1 === '未发货'" @click="demo1 = '未发货'">未发货</tab-item>
            <tab-item :selected="demo1 === '全部订单'" @click="demo1 = '全部订单'">全部订单</tab-item>
            <tab-item :selected="demo1 === '1'" @click="demo1 = '6666'">6666</tab-item>
        </tab>
        <divider>手动切换</divider>
        <tab v-model="index01" prevent-default @on-before-index-change="switchTabItem">
            <tab-item selected>已发货</tab-item>
            <tab-item>未发货</tab-item>
            <tab-item>全部订单</tab-item>
        </tab>
        <br/>
        <br/>
        <divider>定义bar固定宽度</divider>
    </div>
</template>

<script>
    //引入组件
    import {Tab, TabItem ,Divider} from 'vux'
    //创造构造器
    export default {
        components: {
            Tab, TabItem,Divider
        },
        data () {
            return {
                demo1: '1'
            }
        }
    }

    /*创造构造器的老版本的写法，编译的时候会报错，执行没有问题。
    var MyComponent = Vue.extend{
        components: {
            Divider,FlexboxItem,Flexbox
        },
    }*/
</script>

<style>

</style>