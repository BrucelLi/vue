import * as http from '@api/http'

/**
 * 获取订单列表
 * @param status
 * @param page
 * @param size
 * @returns {Promise<any>}
 */
// export function indexItem (status = 'all', page = 1, size = 20) {
//     let type = {
//         all: '', // 全部
//         shipment_pending: 2, // 待发货
//         waiting_for_delivery: 3, // 待收货
//         refund_goods: 5 // 退款/退货
//     }
//     return http
//         .get('order.orderItem', {
//             order_type: type[status],
//             page: page,
//             size: size
//         }).then(r => r.data)
// }
export function indexItem (type = null, page = 1, pageNum = 5) {
    let data = {
        'code':0,
        'message': '获取成功',
        'data':{
            'info':[
                {
                    'id':1,
                    'title':"测试1号",
                    'bofang':2000,
                    'pinglun':'1.7万',
                    'time':'11:30',
                    'type':'手机游戏·大逃杀',
                    'img':'static/live/live01@2x.jpg'
                },
                {
                    'id':2,
                    'title':"测试2号",
                    'bofang':3000,
                    'pinglun':'1.1万',
                    'time':'12:30',
                    'type':'手机游戏·小淘沙',
                    'img':'static/live/live02@2x.jpg'
                },
                {
                    'id':3,
                    'title':"测试3号",
                    'bofang':'1.9万',
                    'pinglun':'1.7万',
                    'time':'1:30',
                    'type':'手机游戏·老逃杀',
                    'img':'static/live/live03@2x.jpg'
                },
                {
                    'id':4,
                    'title':"测试4号",
                    'bofang':'1.9万',
                    'pinglun':'1.7万',
                    'time':'1:30',
                    'type':'手机游戏·老逃杀',
                    'img':'static/live/live04@2x.jpg'
                },
                {
                    'id':5,
                    'title':"测试5号",
                    'bofang':'1.9万',
                    'pinglun':'1.7万',
                    'time':'1:30',
                    'type':'手机游戏·老逃杀',
                    'img':'static/live/live05@2x.jpg'
                },
                {
                    'id':6,
                    'title':"测试6号",
                    'bofang':'1.9万',
                    'pinglun':'1.7万',
                    'time':'1:30',
                    'type':'手机游戏·老逃杀',
                    'img':'static/live/live06@2x.jpg'
                }
            ],
            'page':1,
            'total':6
        }
    }

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data.data)
        }, 1000)
    })
}
export function itemTest(msg) {
    return http
        .get('test.send', {
            'msg': msg,
        }).then(r => r.data)
}