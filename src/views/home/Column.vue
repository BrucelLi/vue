<template>
    <div id="content" :style="{height: contentHeight}">
        <button style="width: 100px; height: 100px;" @click="test()">点击{{contentHeight}}</button>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name : 'cart',
        props : {
            contentHeight:{
                type:String,
                default:'auto'
            }
        },
        methods : {
            test(){
                this.$vux.loading.show({
                    text: 'Loading'
                })
            }
        }
    }
</script>
<style scoped lang="scss">
</style>