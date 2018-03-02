<template>
    <div>
        <button value="点击" @click="test()"></button>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name : 'cart',
        props : {},
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