<template>
    <div ref="wrapper" class="wrapper">
        <div class="scroller-content">
            <slot name="pulldown" :pullDownRefresh="pullDownRefresh">
                <div v-if="pullDownRefresh">
                    <div :style="{height:scrollData.bubbleY + 'px','line-height': scrollData.bubbleY +'px'}" class="before-trigger" v-if="scrollData.beforePullDown">
                        下拉刷新
                    </div>
                    <div v-else>
                        <div v-if="scrollData.isPullingDown">
                            <loading :beforePullDown="scrollData.beforePullDown"></loading>
                        </div>
                        <div class="after-trigger" v-else>
                            <span>{{refreshTxt}}</span>
                        </div>
                    </div>
                </div>
            </slot>
            <div>
                <slot>
                </slot>
            </div>
            <slot name="pullup" :pullUpLoad="pullUpLoad">
                <div v-if="pullUpLoad">
                    <div class="noPullUpload"  v-if="!scrollData.isPullUpLoad">
                        {{pullUpTxt}}
                    </div>
                    <div v-else>
                        加载中
                    </div>
                </div>
            </slot>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import BScroll from 'better-scroll'
    import loading from '@/components/Loading/Loading.vue'

    // 组件名称
    const COMPONENT_NAME = 'scroll'

    export default {
        name:COMPONENT_NAME,
        props: {
            data: {
                type: Array,
                default: function () {
                    return []
                }
            },
            probeType: {
                type: Number,
                default: 1
            },
            click: {
                type: Boolean,
                default: true
            },
            listenScroll: {
                type: Boolean,
                default: false
            },
            listenBeforeScroll: {
                type: Boolean,
                default: false
            },
            scrollbar: {
                type: null,
                default: false
            },
            pullDownInitTop:{
                type:Number,
                default:0
            },
            pullDownRefresh: {
                type: null,
                default: false
            },
            pullUpLoad: {
                type: null,
                default: false
            },
            startY: {
                type: Number,
                default: 0
            },
            refreshDelay: {
                type: Number,
                default: 20
            },
            freeScroll: {
                type: Boolean,
                default: false
            },
            mouseWheel: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                scrollData:{
                    beforePullDown: true,
                    isRebounding: false,
                    isPullingDown: false,
                    isPullUpLoad: false,
                    pullUpDirty: true,
                    pullDownStyle: '',
                    bubbleY: 0
                }
            }
        },
        computed:{
            pullUpTxt() {
                const moreTxt = this.pullUpLoad && this.pullUpLoad.txt && this.pullUpLoad.txt.more || '加载更多'
                const noMoreTxt = this.pullUpLoad && this.pullUpLoad.txt && this.pullUpLoad.txt.noMore || '没有更多数据'
                return this.pullUpDirty ? moreTxt : noMoreTxt
            },
            refreshTxt() {
                return this.pullDownRefresh && this.pullDownRefresh.txt || '刷新完成'
            }
        },
        created(){
        },
        mounted(){
            setTimeout(() => {
                this.initScroll()
            }, 20)
        },
        methods: {
            initScroll() {
                if (!this.$refs.wrapper) {
                    return
                }
                let options = {
                    probeType: this.probeType,
                    click: this.click,
                    scrollbar: this.scrollbar,
                    pullDownRefresh: this.pullDownRefresh,
                    pullUpLoad: this.pullUpLoad,
                    freeScroll: this.freeScroll,
                    mouseWheel: this.mouseWheel
                }
                this.scroll = new BScroll(this.$refs.wrapper, options)
                if (this.listenScroll) {
                    this.scroll.on('scroll', (pos) => {
                        this.$emit('scroll', pos)
                    })
                }
                if (this.listenBeforeScroll) {
                    this.scroll.on('beforeScrollStart', () => {
                        this.$emit('beforeScrollStart')
                    })
                }
                if (this.pullDownRefresh) {
                    this._initPullDownRefresh()
                }
                if (this.pullUpLoad) {
                    this._initPullUpLoad()
                }
            },
            disable() {
                this.scroll && this.scroll.disable()
            },
            enable() {
                this.scroll && this.scroll.enable()
            },
            refresh() {
                this.scroll && this.scroll.refresh()
            },
            scrollTo() {
                this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
            },
            scrollToElement() {
                this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
            },
            clickItem(e, item) {
                console.log(e)
                this.$emit('click', item)
            },
            destroy() {
                this.scroll.destroy()
            },
            forceUpdate(dirty) {
                if (this.pullDownRefresh && this.scrollData.isPullingDown) {
                    this.scrollData.isPullingDown = false
                    this._reboundPullDown().then(() => {
                        this._afterPullDown()
                    })
                } else if (this.pullUpLoad && this.scrollData.isPullUpLoad) {
                    this.scrollData.isPullUpLoad = false
                    this.scroll.finishPullUp()
                    this.scrollData.pullUpDirty = dirty
                    this.refresh()
                } else {
                    this.refresh()
                }
            },
            _initPullDownRefresh() {
                this.scroll.on('pullingDown', () => {
                    this.scrollData.beforePullDown = false
                    this.scrollData.isPullingDown = true
                    this.$emit('pullingDown')
                })

                this.scroll.on('scroll', (pos) => {
                    if (this.scrollData.beforePullDown) {
                        this.scrollData.bubbleY = Math.max(0, pos.y)
                    } else {
                        this.scrollData.bubbleY = 0
                    }
                })
            },
            _initPullUpLoad() {
                this.scroll.on('pullingUp', () => {
                    this.scrollData.isPullUpLoad = true
                    this.$emit('pullingUp')
                })
            },
            _reboundPullDown() {
                const {stopTime = 600} = this.pullDownRefresh
                return new Promise((resolve) => {
                    setTimeout(() => {
                        this.scroll.finishPullDown()
                        resolve()
                    }, stopTime)
                })
            },
            _afterPullDown() {
                setTimeout(() => {
                    this.scrollData.beforePullDown = true
                    this.refresh()
                }, this.scroll.options.bounceTime)
            }
        },
        watch: {
            data: {
                handler: function (val, oldVal) {
                    setTimeout(() => {
                        this.forceUpdate(true)
                    }, this.refreshDelay)
                },
                deep: true
            }

        },
        components:{
            loading
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .wrapper
        width 100%
        height auto
        display block
        overflow hidden
        .before-trigger
            text-shadow: 5px 5px 5px blue
            transition height
            -webkit-transition height
            width 100%
            text-align center
            padding 5px 0
            font-size 20px
        .after-trigger
            text-shadow: 5px 5px 5px blue
            width 100%
            text-align center
            padding 5px 0
            font-size 20px
        .noPullUpload
            text-shadow: 5px 5px 5px blue
            width 100%
            text-align center
            padding 10px 0
            font-size 20px
</style>