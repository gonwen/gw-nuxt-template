<!--前端错误页面模板-->
<template>
    <div class="err404">
        <div class="bg-content container bg-img">
            <div class="cp-btn text-info">
                <h1>对不起，好像出错了~ </h1>
                <el-button type="primary" @click="$router.push({path:'/'})">返回首页</el-button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['error'],
    head () {
        return {
            title: '404',
            meta: [
                {hid: 'description', name: 'description', content: '404'}
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
    .err404 {
        width: 100%;
        background-color: $white;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        margin-top: -60px;
        .bg-content {
            position: relative;
            width: 100%;
            height: 490px;
            background-image: url(../static/img/404.jpg);
            background-position: center center;
            background-repeat: no-repeat;
            .text-info {
                position: absolute;
                bottom: -50px;
                left: 0;
                right: 0;
                text-align: center;
                h1 {
                    font-size: 24px;
                    font-weight: normal;
                    color: $blue;
                    margin-bottom: 50px;
                }
                .el-button {
                    padding: 10px 40px;
                }
            }
        }
    }
</style>
