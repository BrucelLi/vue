<template>
    <div style="height: 100%; background-color: red">
        111
    </div>
</template>

<script type="text/ecmascript-6">
    import { ViewBox,XHeader,Tabbar,TabbarItem } from 'vux'

    export default {
        name:'test',
        props:{},
        data() {
            return {
                width:800
            }
        },
        components:{
            ViewBox,
            XHeader,
            Tabbar,
            TabbarItem
        },
        mounted() {
            this.$nextTick(function () {
            })
        },
        methods:{
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>