let date = require('silly-datetime')
let dateTime = date.format(new Date(), 'YYYYMMDDHHmm')
const osConfig = require('../../config')

let config = {
    pageUri: '/',
    baseApi: `${window.location.protocol}//${window.location.host}`,
    AliOssPictureCdn: 'http://img.idongpin.com/',
    TencentPictureCdn: 'http://cdn2.img.idongpin.com/',
    pagesVersion: `v0.0.1.${dateTime}`,
    productionTip: false,
    routePrefix: '/',
    testPicCdn:process.env.NODE_ENV === 'production'
        ? osConfig.build.assetsPublicPath
        : osConfig.dev.assetsPublicPath
}

export default config