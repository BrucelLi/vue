import Vue from 'vue'
import App from './views/App.vue'
import router from '@/router'
import './style/js/base.js'
import store from '@store'

/*滑动事件*/
import VueTouch from 'vue-touch'
Vue.use(VueTouch, {name: 'v-touch'});

// 将数据以组件的形式暴露
import Api from '@api/plugin'
Vue.use(Api)

// 将辅助函数设置为全局
import mixins from '@/mixins'
Vue.mixin(mixins)

// 设置http请求请求中间件
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

/*图片懒加载*/
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
    preLoad: 1.3,
    loading: require('@/assets/logo.png'),
    attempt: 1
})

/*加载涟漪插件*/
import waves from '@directive/waves/waves.js'
Vue.directive('waves', waves)

/*加载全局样式*/
import { AlertPlugin, ToastPlugin, LoadingPlugin} from 'vux'
Vue.use(AlertPlugin)
Vue.use(ToastPlugin)
Vue.use(LoadingPlugin)

// 设置网页标题和路由跳转的过程loading
router.beforeEach((to, from, next) => {
    to.matched.some((record, index, arr) => {
        if (index === arr.length - 1) {
            document.title = record.meta.title ? record.meta.title : '小龙测试'
        }
    })
    let $vue = new Vue()
    $vue.$vux.loading.show({
        text: '加载中...'
    })
    next()
})
router.afterEach((to, from, next) => {
    let $vue = new Vue()
    setTimeout(function(){
        $vue.$vux.loading.hide()
    }, 1000)

})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
