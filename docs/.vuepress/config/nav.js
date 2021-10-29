// nav
module.exports = [
    { text: '首页', link: '/' },
    {
        text: '后端',
        link: '/backend/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
        items: [
            // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
            {
                text: 'PHP文章',
                items: [{ text: 'PHP设计模式', link: '/pages/a09ce1/' }],
            },
            {
                text: 'Go文章',
                items: [{ text: 'Go语言学习', link: '/pages/1be6f5/' }],
            },
            {
                text: 'Python文章',
                items: [
                    { text: 'Python', link: '/pages/0ef862/' },
                    // { text: 'Vue', link: '/pages/5d463fbdb172d43b/' },
                ],
            },
            {
                text: 'Java',
                items: [
                    {
                        text: '《Java》',
                        link: '/note/java/',
                    },
                ],
            },
            {
                text: '学习笔记',
                items: [
                    {
                        text: '《Git》',
                        link: '/note/git/',
                    },
                ],
            },
        ],
    },
    {
        text: '前端',
        link: '/ui/',
        items: [
            { text: 'HTML', link: '/pages/8309a5b876fc95e3/' },
            { text: 'CSS', link: '/pages/0a83b083bdf257cb/' },
            { text: 'JS', link: '/pages/7601f3' },
        ],
    },
    {
        text: '技术',
        link: '/technology/',
        items: [
            { text: '技术文档', link: '/pages/9a7ee40fc232253e/' },
            { text: 'GitHub技巧', link: '/pages/4c778760be26d8b3/' },
            { text: '刷题', link: '/pages/df7058/' },
            { text: '博客搭建', link: '/pages/41f87d890d0a02af/' },
            { text: '算法学习', link: '/pages/9d0e8f/' },
            { text: '架构设计', link: '/pages/8f006a/' },
        ],
    },
    {
        text: '更多',
        link: '/more/',
        items: [
            { text: '学习', link: '/pages/f2a556/' },
            { text: '面试', link: '/pages/aea6571b7a8bae86/' },
            { text: '心情杂货', link: '/pages/2d615df9a36a98ed/' },
            { text: '实用技巧', link: '/pages/baaa02/' },
            { text: '友情链接', link: '/friends/' },
        ],
    },
    { text: '关于', link: '/about/' },
    {
        text: '收藏',
        link: '/pages/beb6c0bd8a66cea6/',
        // items: [
        //   { text: '网站', link: '/pages/beb6c0bd8a66cea6/' },
        //   { text: '资源', link: '/pages/eee83a9211a70f9d/' },
        //   { text: 'Vue资源', link: '/pages/12df8ace52d493f6/' },
        // ],
    },
    {
        text: '索引',
        link: '/archives/',
        items: [
            { text: '分类', link: '/categories/' },
            { text: '标签', link: '/tags/' },
            { text: '归档', link: '/archives/' },
        ],
    },
]
