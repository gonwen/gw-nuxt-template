// 精灵图初始化配置
let path = require('path')
let SpritesmithPlugin = require('webpack-spritesmith')
let imagePath = '../static/img'
let cssPath = '../assets/sass'

const templateStyle = (data) => {
    if (!data.sprites[0]) return ''
    let shared = '.icon { display:inline-block; background-image: url(I); background-size:WSMpx HSMpx; }'
        .replace('I', data.sprites[0].image)
        .replace('WSM', data.spritesheet.width)
        .replace('HSM', data.spritesheet.height)

    let perSprite = data.sprites.map(function (sprite) {
        return '.icon-N { width: Wpx; height: Hpx; background-position: Xpx Ypx; }'
            .replace('N', sprite.name)
            .replace('W', sprite.width)
            .replace('H', sprite.height)
            .replace('X', sprite.offset_x)
            .replace('Y', sprite.offset_y)
    }).join('\n')
    return shared + '\n' + perSprite
}

module.exports = (config) => {
    config.resolve.modules.push(imagePath) // css在哪里能找到sprite图
    config.plugins.push(
        new SpritesmithPlugin({
            src: {
                cwd: path.resolve(__dirname, `${imagePath}/sprites/`), // 图标根路径
                glob: '**/*.png' // 匹配任意 png 图标
            },
            target: {
                image: path.resolve(__dirname, `${imagePath}/sprites.png`), // 生成雪碧图目标路径与名称
                // 设置生成CSS背景及其定位的文件或方式
                css: [
                    [path.resolve(__dirname, `${cssPath}/sprites.scss`), {
                        format: 'function_based_template'
                    }]
                ]
            },
            customTemplates: {
                'function_based_template': templateStyle
            },
            apiOptions: {
                cssImageRef: `../${imagePath}/sprites.png` // css文件中引用雪碧图的相对位置路径配置
            },
            spritesmithOptions: {
                padding: 5
            }
        })
    )
}
