// oss 初始化
import Oss from 'ali-oss'
import ossConfig from '../config/ali.oss.config'

export default () => {
    return new Oss(ossConfig)
}
