import Vue from 'vue'
import VueResouce from 'vue-resource'

Vue.use(VueResouce)
Vue.http.interceptors.push((request, next) => {
    next()
    // // 请求发送前的处理逻辑
    // Weui.toast({
    //     status: 'loading',
    //     message: '数据加载中...'
    // })
    // next((response) => {
    //     // 请求发送后的处理逻辑
    //     Weui.toast({status: ''})
    //     const data = response.data
    //     if (data.errorCode !== 0) {
    //         Weui.alert({
    //             title: '提示',
    //             message: ('服务调用失败，错误码：' + data.errorCode)
    //         })
    //     }
    //     console.log(data.data)
    //     return response
    // })
})

export default {
    getTopicList (params, cb) {
        const api = 'https://cnodejs.org/api/v1/topics'
        return Vue.http
            .get(api, { params })
            .then((response) => {
                const result = response.data
                cb(result.data)
            })
    }
}
