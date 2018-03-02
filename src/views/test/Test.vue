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
        <div class="drawer-content" slot="drawer">
            <!-- drawer-content -->
            这里是侧栏
        </div>
        <div slot="content">
            <button-tab>
                <button-tab-item @on-item-click="sidebarSwitch()">测试1</button-tab-item>
                <button-tab-item selected>测试2</button-tab-item>
                <button-tab-item>测试3</button-tab-item>
            </button-tab>
            <!-- main-content -->
            这里是主题
        </div>
    </drawer-layout>
</template>

<script type="text/ecmascript-6">
    import {DrawerLayout} from 'vue-drawer-layout'
    import { ButtonTab, ButtonTabItem } from 'vux'

    export default {
        name:'test',
        props:{},
        data() {
            return {
                width:800
            }
        },
        components:{
            DrawerLayout,
            ButtonTab,
            ButtonTabItem
        },
        mounted() {
            this.$nextTick(function () {
            })
        },
        methods:{
            sidebarSwitch() {
                this.$refs.drawer.toggle(true);
            },
            handleMaskClick() {
                this.$refs.drawer.toggle(false);
            }
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>