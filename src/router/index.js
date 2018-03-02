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

let routesArr = [
    {
        path: routePrefix,
        name: 'main',
        redirect:"/home",
        meta: {
            title: '小龙测试'
        }
    }
];

routesArr = routesArr.concat(
    home,
    test
);

export default new Router({
    mode: 'history',
    routes: routesArr
})
