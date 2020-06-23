import axios from 'axios'
import Qs from 'qs'

// 请求拦截器响应之前的操作
axios.interceptors.request.use((config) => {
    //POST传参序列化
    if (config.method == 'post') {
        config.data = Qs.stringify(config.data)
   	}
    return config
}, (error) => {
    return Promise.reject(error)
})

//响应拦截器即异常处理并关闭加载动画
axios.interceptors.response.use(config => {

    return config
}, err => {
    if (err && err.response) {
        switch (err.response.status) {
            case 400:
                err.message = '错误请求';
                break;
            case 401:
                err.message = '未授权，请重新登录';
                break;
            case 403:
                err.message = '拒绝访问';
                break;
            case 404:
                err.message = '请求错误,未找到该资源';
                break;
            case 405:
                err.message = '请求方法未允许';
                break;
            case 408:
                err.message = '请求超时';
                break;
            case 500:
                err.message = '服务器端出错';
                break;
            case 501:
                err.message = '网络未实现';
                break;
            case 502:
                err.message = '网络错误';
                break;
            case 503:
                err.message = '服务不可用';
                break;
            case 504:
                err.message = '网络超时';
                break;
            case 505:
                err.message = 'http版本不支持该请求';
                break;
            default:
                err.message = `连接错误${err.response.status}`
        }
    } else {
        err.message = "连接到服务器失败"
    }

    alert(err.message)
})

function checkStatus(res) {
    // 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，可以弹出一个错误提示，告诉用户
    if (!res.data.status) {
        alert(res.data.message)
    }
    return res
}

export default {
    post(url, data) {
        return axios({
            method: 'post',//接口类型
            url: url,//接口
            data: data,//向后台传的参数
            timeout: 60000,//延迟60s
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/x-www-form-urlencoded'
            }//请求头部信息
        }).then((response) => {
                return checkStatus(response)//成功运行
            }
        ).catch(function (error) {
            // 由网络或者服务器抛出的错误
            alert(url + '--' + error.toString())
        })
    },
    get(url, params) {
        return axios({
            method: 'get',
            url: url,
            params,
            timeout: 60000,
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'text/plain'
            }
        }).then((response) => {
                return checkStatus(response)
            }
        ).catch(function (error) {
            // 由网络或者服务器抛出的错误
            alert(url + '--' + error.toString())
        })
    },
}