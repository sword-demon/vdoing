---
home: true
# heroImage: /img/web.png
heroText: Licorne
tagline: 纯粹的浪荡人士与抱定决心干大事的人，面相是截然不同的。
# actionText: 立刻进入 →
# actionLink: /backend/
bannerBg: auto
# auto => 网格纹背景(有bodyBgImg时无背景)，默认 | none => 无 | '大图地址' | background: 自定义背景样式       提示：如发现文本颜色不适应你的背景时可以到palette.styl修改$bannerTextColor变量

features: # 可选的
    - title: 后端
      details: 后端技术
      link: /backend/ # 可选
      imgUrl: /img/backend.jpg # 可选
    - title: 前端
      details: html(5)/css(3)/js，前端页面相关技术
      link: /ui/
      imgUrl: /img/ui.png
    - title: 随笔和相关技术文档
      details: 技术文档、教程、技巧、总结或者运维等文章
      link: /technology/
      imgUrl: /img/other.png
# 文章列表显示方式: detailed 默认，显示详细版文章列表（包括作者、分类、标签、摘要、分页等）| simple => 显示简约版文章列表（仅标题和日期）| none 不显示文章列表
# postList: detailed
# simplePostListLength: 10 # 简约版文章列表显示的文章数量，默认10。（仅在postList设置为simple时生效）
---

::: cardImgList 2

```yaml
- img: https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4021/161700131u7g.jpg
  link: https://www.bilibili.com/video/BV1Ys411z7fo
  name: Dade亚索
  desc: Dade亚索精彩集锦 # 描述，可选
  author: wxvirus # 作者，可选
  avatar: https://cdn.jsdelivr.net/gh/sword-demon/image_store/blog/WechatIMG587.jpeg # 头像，可选
- img: https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4021/src=http___i0.hdslb.com_bfs_article_ad7600cb9b4845c7bae1d2fa23edffb382614ad4.jpg&refer=http___i0.hdslb.jpeg
  link: https://www.bilibili.com/video/BV1Qf4y1K7ff?t=16.2
  name: Java学习路线
  desc: 程序员鱼皮分享的Java学习路线 # 描述，可选
  author: wxvirus # 作者，可选
  avatar: https://cdn.jsdelivr.net/gh/sword-demon/image_store/blog/WechatIMG587.jpeg
```

:::

::: cardList 2

```yaml
- name: typecho的博客
  desc: 以前的老站点
  link: http://blog.wjstar.top
  bgColor: '#F0DFB1'
  textColor: '#242A38'
- name: CatchAdmin
  desc: CatchAdmin是一款基于thinkphp framework和 ant degisn pro vue二次开发而成的后台管理系统
  link: http://wjcatch.wjstar.top/#/dashboard
  bgColor: '#DFEEE7'
  textColor: '#2A3344'
- name: 小米商场静态页面
  desc: 我学习前端的时候仿的一个官网页面
  link: http://mitest.wjstar.top/
- name: Github Page静态博客地址
  desc: 使用next和hexo搭建的一个博客，部署在GitHub上
  link: https://sword-demon.github.io/
  bgColor: '#DFEEE7'
  textColor: '#2A3344'
- name: 我的ThinkPHP5.1搭建的简单CMS
  desc: 带有正常权限管理已经日志管理和错误信息收集，以及强大的配置操作，适合个人上手
  link: http://wujie.wjstar.top/admin
  bgColor: '#DFEEE7'
  textColor: '#2A3344'
- name: wiki知识库
  desc: SpringBoot2.4 + Vue3 + WebSocket完成的电子书知识库项目
  link: http://wiki.wjstar.top/
  bgColor: 'orange'
  textColor: '#232033'
- name: bbs论坛
  desc: Django2.2 + bootstrap + mysql实现小型论坛系统
  link: http://bbs.wjstar.top/
  bgColor: 'lightgreen'
  textColor: '#232033'
- name: halo docker搭建的博客
  desc: java + docker halo博客
  link: http://evil.wjstar.top/
  bgColor: 'lightgreen'
  textColor: '#232033'
```

:::

<!-- 小熊猫 -->
<!-- <img src="/img/panda-waving.png" class="panda no-zoom" style="width: 130px;height: 115px;opacity: 0.8;margin-bottom: -4px;padding-bottom:0;position: fixed;bottom: 0;left: 0.5rem;z-index: 1;"> -->

<!--
## 关于

### 📚Blog
这是一个兼具博客文章、知识管理、文档查找的个人网站，主要内容是Web前端技术。如果你喜欢这个博客&主题欢迎到[GitHub](https://github.com/xugaoyi/vuepress-theme-vdoing)点个Star、获取源码，或者交换[友链](/friends/) ( •̀ ω •́ )✧

### 🎨Theme
本站主题是根据[VuePress](https://vuepress.vuejs.org/zh/)的默认主题修改而成。取名`Vdoing`(维度)，旨在轻松打造一个`结构化`与`碎片化`并存的个人在线知识库&博客，让你的知识海洋像一本本书一样清晰易读。配合多维索引，让每一个知识点都可以快速定位！ 更多[详情](https://github.com/xugaoyi/vuepress-theme-vdoing)。

<a href="https://github.com/xugaoyi/vuepress-theme-vdoing" target="_blank"><img src='https://img.shields.io/github/stars/xugaoyi/vuepress-theme-vdoing' alt='GitHub stars' class="no-zoom"></a>
<a href="https://github.com/xugaoyi/vuepress-theme-vdoing" target="_blank"><img src='https://img.shields.io/github/forks/xugaoyi/vuepress-theme-vdoing' alt='GitHub forks' class="no-zoom"></a>

</br>


## 特色功能
博客部分特色功能介绍

#### 一站式技术搜索

   博客内容中包含部分技术教程，可以利用搜索框快速搜索到相关文档，即使博客中没有的，你还可以选择最下方的 `在XXX中搜索“xxx”` 快速到达你想要找的内容。

#### 深色模式与阅读模式
关爱程序员，保护视力，点击右下角的主题模式按钮试试吧~

#### Demo演示模块
   为了更直观的展示一些代码的效果，博客添加了demo模块插件，可查看demo、源码，以及跳转到codepen在线编辑。**示例**：

::: demo [vanilla]
```html
<html>
  <div id="vanilla-box"></div>
</html>
<script>
  var box = document.getElementById('vanilla-box')
  box.innerHTML = 'Hello World! Welcome to EB'
</script>
<style>
#vanilla-box {
  color: #11a8cd;
}
</style>
```
:::


## :email: 联系

- **WeChat or QQ**: <a href="tencent://message/?uin=894072666&Site=&Menu=yesUrl" class='qq'>894072666</a>
- **Email**: <a href="mailto:894072666@qq.com">894072666@qq.com</a>
- **GitHub**: <https://github.com/xugaoyi>

</br>  -->
