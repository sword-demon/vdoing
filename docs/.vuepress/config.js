const head = require('./config/head.js')
const plugins = require('./config/plugins.js')
const themeConfig = require('./config/themeConfig.js')

module.exports = {
    theme: 'vdoing', // 使用npm包主题
    // theme: require.resolve('../../theme-vdoing'), // 使用本地主题

    title: 'wxvirus',
    description: '年轻的后端，学习ing',
    // base: '/', // 格式：'/<仓库名>/'， 默认'/'
    markdown: {
        lineNumbers: true, // 代码行号
    },

    head,
    plugins,
    themeConfig,
    dest: '/Users/wangxin/workspace/vdoing_dist_local'
}
