import Vue from 'vue'
import ElementUI from 'element-ui'
Vue.config.devtools = process.env.NODE_ENVS === 'DEV'
Vue.use(ElementUI, {size: 'small'})
