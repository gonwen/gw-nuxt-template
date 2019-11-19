const packageconfig = require('./package')
module.exports = {
    // Headers of the page
    head: {
        title: 'NUXT TEMPLATE FOR GW',
        meta: [
            {charset: 'utf-8'},
            {hid: 'description', name: 'description', content: 'NUXT TEMPLATE FOR GW'}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ],
        script: []
    },
    router: {
        middleware: 'authrouter'
    },
    // Customize the progress bar color
    loading: {color: '#2e6bc6'},
    plugins: [
        {src: '~/plugins/element-ui'},
        {src: '~/plugins/filters'}
    ],
    // 全局样式引入
    css: [
        {src: 'element-ui/lib/theme-chalk/index.css', lang: 'css'},
        {src: '~/assets/sass/index.scss', lang: 'scss'}
    ],
    modules: [
        '@nuxtjs/style-resources'
    ],
    styleResources: {
        scss: ['./assets/sass/style.scss', './assets/sass/mixin.scss']
    },
    // Build configuration
    build: {
        extractCSS: !(process.env.NODE_ENVS === 'DEV'),
        extend (config, ctx) {
            if (ctx.isDev && ctx.isClient) {
                // eslint build
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/,
                    options: {
                        fix: true
                    }
                })
                // 雪碧图插件
                require('./method/spritesmith')(config)
            }
        }
    },
    render: {
        resourceHints: false
    },
    env: {
        NODE_ENVS: process.env.NODE_ENVS,
        NODE_ENV: process.env.NODE_ENVS === 'DEV' ? 'development' : 'production'
    },
    server: {
        port: (packageconfig.config && packageconfig.config.nuxt && packageconfig.config.nuxt.port) || 3080,
        host: (packageconfig.config && packageconfig.config.nuxt && packageconfig.config.nuxt.host) || '0.0.0.0'
    }
}
