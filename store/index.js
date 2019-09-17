import {serBaseUrl, serFileUrl} from '../config/server.url.conf'

export const actions = {}
export const state = () => ({
    token: null,
    haslogin: '', // 未验证前 为 空字符  验证后为 布尔值
    userinfo: {},
    baseurl: serBaseUrl,
    basefile: serFileUrl
})

export const mutations = {
    setUserInfo (state, json) {
        state.userinfo = json
        state.haslogin = !!(json && json.id)
    },
    setToken (state, str) {
        state.token = str
    }
}
