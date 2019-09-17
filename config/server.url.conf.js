/**
 * 全局配置信息
 *
 * # 生产环境 PRO # 测试环境 TST # 本地环境 #  DEV #
 *
 * 服务地址          ser
 * 资源服务地址      file
 *
 * */
const configWebpackBaseInfo = {
    // 本地环境（根据实际需要改动）
    DEV: {
        ser: '',
        file: ''
    },
    // 生产环境（勿动）
    PRO: {
        ser: '',
        file: ''
    },
    // 测试环境（勿动）
    TST: {
        ser: '',
        file: ''
    }
}
const PATH_NODE_ENV = process.env.NODE_ENVS
const serBaseUrl = configWebpackBaseInfo[PATH_NODE_ENV].ser
const serFileUrl = configWebpackBaseInfo[PATH_NODE_ENV].file

export {serBaseUrl, serFileUrl}
