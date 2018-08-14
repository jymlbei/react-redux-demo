import config from './config'

export default {
    login(params){
        return config.ajaxs('/login',params)
    },
    getBanner(params){
        return config.ajaxs('/general/getBanner',params)
    },
    dataList(params){
        return config.ajaxs('/general/dataList',params)
    },
}