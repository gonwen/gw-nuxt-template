// axios 初始化 配置和封装
import qs from 'qs'
import axios from 'axios'
import { serBaseUrl } from './server.url.conf'
const AXIOS = axios
AXIOS.defaults.withCredentials = true

AXIOS.interceptors.response.use(
    response => {
        if (response.data.constructor === Object) {
            let flag = false
            if (response.data && response.data.code >= 0) flag = true
            else if (response.data && response.data.code === -9) {
                window.location.reload()
            }
            response.data.flag = flag
        }
        return response
    },
    error => {
        error.data = {}
        error.data.flag = false
        error.data.msg = '服务出错'
        return error
    }
)

/*  封装ajax方法 */
const requestResponse = (type, urls, data, urlType) => {
    let url = urls
    if (!urlType) url = serBaseUrl + urls
    if (!type) type = 'GET'
    if (!data) data = null
    type = type.toUpperCase()
    if (type === 'GET') return AXIOS.get(url, {params: data})
    if (type === 'PUT') return AXIOS.put(url, qs.stringify(data))
    if (type === 'POST') return AXIOS.post(url, qs.stringify(data))
}
export {
    AXIOS
    , requestResponse
}
