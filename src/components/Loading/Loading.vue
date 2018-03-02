<template>
    <div class="container">
        <div class="loader">
           <div :class="[beforePullDown ? 'load':'load-animation load']">
           </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: 'loading',
        props:{
            "beforePullDown":{
                type:Boolean,
                default:true
            },
            "bubbleY":{
                type:Number,
                default:0
            }
        },
        data () {
            return {
            }
        },
        created(){
        },
        methods: {
        },
        computed:{
        },
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "../../style/css/function.styl"
    .container
        width 100%
        height auto
        text-align center
    @-webkit-keyframes loader
        0%
            transform rotate(0deg)
            border 2px solid red
            border-left-color transparent
            border-bottom 0
        100%
            transform rotate(360deg)
            border 2px solid gold
            border-left-color transparent
            border-bottom 0
    @-moz-keyframes loader
        0%
            transition rotate(0deg)
            border 2px solid red
            border-left-color transparent
            border-bottom 0
        100%
            transition rotate(360deg)
            border 2px solid gold
            border-left-color transparent
            border-bottom 0
    @keyframes loader
        0%
            transform rotate(0deg)
            border 2px solid red
            border-left-color transparent
            border-bottom 0
        100%
            transform rotate(360deg)
            border 2px solid gold
            border-left-color transparent
            border-bottom 0
    .loader
        height 40px
        width 40px
        position:relative;
        background-color #42b983
        margin 5px auto
        -moz-border-radius 50%
        -webkit-border-radius 50%
        border-radius 50%
        -moz-box-shadow: 3px 3px 4px #000;
        -webkit-box-shadow: 3px 3px 4px #000;
        box-shadow: 3px 3px 4px #000;
        /* For IE 8 */
        -ms-filter: "progid:DXImageTransform.Microsoft.Shadow(Strength=4, Direction=135, Color='#000000')"
        /* For IE 5.5 - 7 */
        filter: transition-property
        .load
            height 20px
            width 20px
            background-color white
            margin auto
            position: absolute;
            top: 0; left: 0; bottom: 0; right: 0;
            -moz-border-radius 50%
            -webkit-border-radius 50%
            border-radius 50%
        .load-animation
            -webkit-animation loader 1s linear infinite normal
            animation loader 1s linear infinite normal
</style>