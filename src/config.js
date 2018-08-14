import qs from 'qs'
import axios from 'axios'
import eventProxy from './eventProxy'

// import { Toast } from 'antd'
// 拦截请求
axios.interceptors.request.use(function(config){
    // Toast.loading('加载中。。。',1)
    eventProxy.trigger('Loading', true);
    return config
})
// 拦截响应
axios.interceptors.response.use(function(config){
    // setTimeout(()=>{
    //     Toast.hide();
    // },300)
    eventProxy.trigger('Loading', false);
    return config
})

const base = "http://tmerchant.zcopain.com/partnerMerchant"

export default {
    ajaxs(getUrl, params, methods, type){
        return new Promise((resolve,reject)=>{
            let data = Object.assign({}, params);
            axios({
                url: base+getUrl,
                data: (type === 'NonForm') ? data : qs.stringify(data),
                method: methods ? methods : 'post',
                withCredentials: true,
            }).then((res)=>{
                resolve(res.data);
                if(res.data.rtnCode === 'biz_error_20002'){

                }else{

                }
            }, (err) => {
                reject(err);
            })
        })
    }
}