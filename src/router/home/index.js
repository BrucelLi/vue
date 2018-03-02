// 主体
const Main= r => require.ensure([], () => r(require('@/views/home/Main.vue')), 'Main')
// 顶部导航
const Recommended= r => require.ensure([], () => r(require('@/views/home/Recommended.vue')), 'Recommended')
const Classify= r => require.ensure([], () => r(require('@/views/home/Anime.vue')), 'Anime')
const Movie= r => require.ensure([], () => r(require('@/views/home/Movie.vue')), 'Movie')
const Column= r => require.ensure([], () => r(require('@/views/home/Column.vue')), 'Column')
// 底部四栏目
const Index= r => require.ensure([], () => r(require('@/views/home/index.vue')), 'Index')
const Search= r => require.ensure([], () => r(require('@/views/home/Search.vue')), 'Search')
const Cart= r => require.ensure([], () => r(require('@/views/home/Cart.vue')), 'Cart')
const vipMessage= r => require.ensure([], () => r(require('@/views/home/Vip.vue')), 'vipMessage')
// 详情--视频播放
const Play = r => require.ensure([], () => r(require('@/views/home/Play.vue')), 'Play')


export default  {
    path:'/home',
    meta:{
        'title':'首页'
    },
    component:Main,
    children:[
        {
            path:'',
            redirect:"index"
        },
        {
            name:"index",
            path:'index',
            meta:{
                'title':'首页',
                'keepAlive': true
            },
            component:Index,
        },
        {
            name:"search",
            path:'search',
            component:Search
        },
        {
            name:"cart",
            path:'cart',
            component:Cart
        },
        {
            name:"vip",
            path:'vip',
            component:vipMessage
        },
        {
            path:'index/recommended',
            name:"recommended",
            component:Recommended
        },
        {
            path:'index/anime',
            name:"anime",
            component:Classify
        },
        {
            path:'index/movie',
            name:"movie",
            component:Movie
        },
        {
            path:'index/column',
            name:"column",
            component:Column
        },
        {
            path:'detail/play',
            name:"play",
            component:Play
        }
    ],
}