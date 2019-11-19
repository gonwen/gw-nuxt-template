/**
 * validScrollMsg
 * formname => 验证的form  的 ref
 * isThis => 作用模板的this
 * opt => 验证未通过列表字段
 * className => 滚动dom样式名 非必填  不填 默认 为 body 和 window
 * */
const validScrollMsg = (formname, isThis, opt, className) => {
    let errInfo = '请正确填写信息'
    const getFirstErrDom = (childrenList) => {
        const childArr = childrenList
        const arrLen = childArr.length
        if (!(arrLen > 0)) return
        for (var i = 0; i < arrLen; i++) {
            if (childArr[i].validateState && childArr[i].validateState === 'error') {
                getErrDomInfo(childArr[i])
                return
            }
        }
    }
    const getErrDomInfo = (item) => {
        errInfo = opt[item.prop][0].message
        isThis.$message.error(errInfo)
        const classNameDom = document.getElementsByClassName(className)
        if (className && !classNameDom) return // class dom 不存在
        const scrollDom = classNameDom ? classNameDom[0] : window
        let oHeight = 0
        let oTop = 0
        let wHeight = 0
        let errTop = item.$el.offsetTop - 70
        let steps = 1
        if (className) {
            oHeight = scrollDom.scrollHeight
            oTop = scrollDom.scrollTop
            wHeight = scrollDom.clientHeight
            const allSrocllTop = getParentsScrollTop(item.$el, className, item.$el.offsetTop)
            if (allSrocllTop) errTop = allSrocllTop - 70 - 80
        } else {
            oHeight =
                document.body.scrollHeight === 0
                    ? document.documentElement.scrollHeight
                    : document.body.scrollHeight
            oTop =
                document.body.scrollTop === 0
                    ? document.documentElement.scrollTop
                    : document.body.scrollTop
            wHeight = window.innerHeight
        }
        if (oHeight - wHeight < errTop) errTop = oHeight - wHeight
        if (
            oHeight < wHeight ||
            errTop === oTop ||
            Math.abs(errTop - oTop) < 1
        ) return
        steps = (errTop - oTop) / 50
        let moveLen = oTop
        const scrollMove = () => {
            if (
                (moveLen - errTop < 0 && oTop - errTop > 0) ||
                (moveLen - errTop > 0 && oTop - errTop < 0)
            ) return
            moveLen += steps
            scrollDom.scrollTo(0, moveLen)
            setTimeout(scrollMove, 10)
        }
        scrollMove()
    }
    if (formname && isThis && opt) {
        // console.log('***par***', isThis.$refs[formname])
        const childArr = isThis.$refs[formname].fields
        getFirstErrDom(childArr)
    }
}

const getParentsScrollTop = (dom, classname, top) => {
    if (dom && classname && top !== false) {
        const part = dom.parentElement
        let cln = part.className
        const tag = part.nodeName
        let tp = top
        if (tag === 'BODY') return false
        if (cln) {
            cln = cln.split(' ')
            if (cln.indexOf(classname) > -1) return tp
        }
        tp += part.offsetTop
        return getParentsScrollTop(part, classname, tp)
    } else return false
}

// 是否是ie浏览器检查 如果是ie返回对应ie版本 不是ie返回 -1
const IEVersion = () => {
    var userAgent = navigator.userAgent
    var isIE =
        userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1
    var isEdge = userAgent.indexOf('Edge') > -1 && !isIE
    var isIE11 =
        userAgent.indexOf('Trident') > -1 && userAgent.indexOf('rv:11.0') > -1
    if (isIE) {
        var reIE = new RegExp('MSIE (\\d+\\.\\d+);')
        reIE.test(userAgent)
        var fIEVersion = parseFloat(RegExp.$1)

        if (fIEVersion === 7) return 7
        else if (fIEVersion === 8) return 8
        else if (fIEVersion === 9) return 9
        else if (fIEVersion === 10) return 10
        else return 6
    } else if (isEdge) return 'edge'
    else if (isIE11) return 11
    else return -1
}

export {validScrollMsg, IEVersion}
