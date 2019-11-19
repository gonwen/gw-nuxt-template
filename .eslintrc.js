module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint'
    },
    env: {
        browser: true,
    },
    extends: [
        'plugin:vue/essential',
        'standard'
    ],
    plugins: [
        'vue'
    ],
    rules: {
        'indent': ['error', 4, {'SwitchCase': 1}],
        'generator-star-spacing': 'off',
        'object-curly-spacing': ['error', 'never']
    }
}
