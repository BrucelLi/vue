<template>
    <div id="content" :style="{height: contentHeight}">
        <swiperComponent></swiperComponent>
        <list-raw></list-raw>
    </div>
</template>

<script>
    import swiperComponent from '../../components/IndexSwiper.vue'
    import listRaw from '../../components/ListRaw.vue'

    export default {
        props : {
            contentHeight:{
                type:String,
                default:'auto'
            }
        },
        components: {
            swiperComponent,
            listRaw
        },
        data() {
            return {
                info:{
                    type: Object,
                    default: function () {
                        return {}
                    }
                }
            }
        },
        mounted(){
        },
        methods:{

        }

    }
</script>
<style scoped lang="scss">
</style>