import Vue from 'vue'
const FILTER_FORMATER = {
    install (Vue) {
        Vue.prototype.FILTER_FORMATER = {
            /**
             * 金额数据格式化
             * @params      val  => 原始金额
             *              type  =>  true 万元单位  false  元单位
             * @return    string
             * */
            price (val, type) {
                if (!val || isNaN(Number(val))) return type ? '0万元' : '0.00元'
                else {
                    const numb = type ? parseFloat((Number(val) / 10000).toFixed(2)) : Number(val).toFixed(2)
                    const str = numb.toString()
                    const arr = str.split('.')
                    let num0 = ''
                    const re = /(?=(?!\b)(\d{3})+$)/g
                    num0 = arr[0]
                    if (num0.length > 3) {
                        num0 = num0.replace(re, ',')
                    }
                    return num0 + (arr[1] ? '.' + arr[1] : '') + (type ? '万元' : '元')
                }
            },
            /**
             * 字符长度截取带省略符
             * @params      val  => 字符
             *              num   => 字符最大长度
             *              model => 字符长度模式  true 为 占位符长度 false 为字符串长度
             * @return    string
             * */
            wordNum (val, n, model) {
                let str = val || ''
                let num = n
                if (
                    val &&
                    num &&
                    !isNaN(Number(num)) &&
                    val.length > num
                ) {
                    num = Number(num)
                    if (model) {
                        let strlen = 0
                        for (let i = 0; i < str.length; i++) {
                            if (str.charCodeAt(i) > 255) strlen += 2
                            else strlen++
                            if (strlen > num) {
                                num = i
                                break
                            }
                        }
                    }
                    str = val.substring(0, num) + '...'
                }
                return str
            }
        }
    }
}
Vue.use(FILTER_FORMATER)
