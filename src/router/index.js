import Vue from 'vue'
import Router from 'vue-router'

// 路由前缀
import config from '@config'
const routePrefix = config.routePrefix

//==================
//  路由分组
//==================

// 首页相关路由
import home from './home'
// 测试路由
import test from './test'

Vue.use(Router)

c
export default new Router({
    mode: 'history',
    routes: routesArr
})
