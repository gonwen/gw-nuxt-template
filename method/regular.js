export default {
    ExPhone: /^(((13[0-9]{1})|(15[0-9]{1})|(16[0-9]{1})|(17[0-9]{1})|(19[0-9]{1})|(18[0-9]{1}))+\d{8})$/, // 手机号
    ExEmail: /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/, // email
    ExZip: /^[0-9]{6}$/, // 邮政编号
    ExCellphone: /^([0-9]{3,4}-)?[0-9]{7,8}$/, // 座机
    ExBankcard: /^([1-9]{1})(\d{14}|\d{18})$/, // 银行卡号
    ExCard: /^([a-zA-z]|[0-9]){5,50}$/,
    ExIdentity: /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/, // 身份证号
    ExPassport: /^([a-zA-z]|[0-9]){5,17}$/, // 护照
    ExMCP: /^[HMhm]{1}([0-9]{10}|[0-9]{8})$/, // 港澳通行证
    ExTWP: /^[a-zA-Z][0-9]{9}$/, // 台胞通行证
    ExCredit: /^[^_IOZSVa-z\W]{2}\d{6}[^_IOZSVa-z\W]{10}$/, // 社会信用代码
    // 网址
    ExWebsite: /^((ht|f)tps?):\/\/([\w\-]+(\.[\w\-]+)*\/)*[\w\-]+(\.[\w\-]+)*\/?(\?([\w\-\.,@?^=%&:\/~\+#]*)+)?/, // eslint-disable-line no-useless-escape
    // ExPassWord: /^([a-zA-Z0-9]){6,20}$/,
    ExZh: /^[\u4e00-\u9fa5]+$/, // 中文
    //  中文或英文名
    ExZhAndEn: /^(?:[\u4e00-\u9fa5]+)(?:●[\u4e00-\u9fa5]+)*$|^[a-zA-Z0-9]+\s?[\.·\-()a-zA-Z]*[a-zA-Z-\s]+$/, // eslint-disable-line no-useless-escape
    ExBankCode: /^[1-9]\d{6,26}$/, // 银行卡号
    ExNickName: /^[\da-zA-Z\u4e00-\u9fa5_-]*$/, // eslint-disable-line no-useless-escape
    ExName: /^[a-zA-Z\u4e00-\u9fa5]*$/, // eslint-disable-line no-useless-escape
    ExUserName: /^[a-zA-Z]([-_a-zA-Z0-9]{3,29})$/,
    ExInvitCode: /^[a-zA-Z0-9]+$/, // 邀请码
    ExMoney: /((^[1-9]\d*)|^0)(\.\d{0,2}){0,1}$/,
    ExPassWord: /^([a-zA-Z0-9!,.@#$%^&*();':"_?<>+\-=[\]{}/\\|`~]){6,20}$/
}
