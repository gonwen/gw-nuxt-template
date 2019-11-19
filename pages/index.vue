<!-- 首页 -->
<template>
    <div>this is nuxt template</div>
</template>

<script>
import {validScrollMsg} from '../method'

export default {
    head () {
        return {
            title: '首页',
            meta: [
                {hid: 'description', name: 'description', content: '首页'}
            ]
        }
    },
    created () {
        validScrollMsg()
    }
}
</script>

<style scoped lang="scss"></style>
