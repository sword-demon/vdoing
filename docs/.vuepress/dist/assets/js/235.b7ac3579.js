(window.webpackJsonp=window.webpackJsonp||[]).push([[235],{685:function(s,t,a){"use strict";a.r(t);var n=a(16),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"命名空间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命名空间"}},[s._v("#")]),s._v(" 命名空间")]),s._v(" "),a("blockquote",[a("p",[s._v("用于进行租户粒度的配置隔离。不同的命名空间下，可以存在相同的"),a("code",[s._v("Group")]),s._v("和"),a("code",[s._v("DataID")]),s._v("的配置。"),a("code",[s._v("Namespace")]),s._v("的常用场景之一就是不同的配置区分隔离，例如开发测试环境和生产环境的资源(配置、服务)隔离等。")])]),s._v(" "),a("p",[s._v("默认的命名空间是："),a("code",[s._v("public")]),s._v("，保留空间，默认新增的配置都在"),a("code",[s._v("public")]),s._v("空间。")]),s._v(" "),a("p",[s._v("我们可以新建对应的：开发，测试，以及生产环境。")]),s._v(" "),a("p",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://gitee.com/wxvirus/img/raw/master/img/20220115222246.png",alt:"namespace"}})]),s._v(" "),a("h3",{attrs:{id:"场景一-配置隔离"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#场景一-配置隔离"}},[s._v("#")]),s._v(" 场景一：配置隔离")]),s._v(" "),a("p",[s._v("我们可以在对应的一个生产环境创建一个和前面一样的配置信息，但是我们应用启动的时候还是找的是默认的"),a("code",[s._v("public")]),s._v("空间的配置信息，如果我们想要在项目上线的时候切换调用配置信息，我们需要在"),a("code",[s._v("bootstrap.properties")]),s._v("中配置对应的命名空间。")]),s._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("名称空间配置")]),s._v(" "),a("p",[s._v("我们不能使用它的名称来进行配置，不能它叫什么就怎么配置，我们需要获取它对应旁边的"),a("kbd",[s._v("命名空间 ID")])]),s._v(" "),a("div",{staticClass:"language-properties line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 应用名称")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("spring.application.name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("project-coupon")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置中心的地址")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("spring.cloud.nacos.config.server-addr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("127.0.0.1:8848")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 命名空间")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("spring.cloud.nacos.config.namespace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("de352aa4-fe35-4b22-af38-7409a4a8b2a1")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("那么我们可以重启来查看是否生效即可。")])]),s._v(" "),a("h3",{attrs:{id:"场景-2-每一个微服务之间互相隔离配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#场景-2-每一个微服务之间互相隔离配置"}},[s._v("#")]),s._v(" 场景 2：每一个微服务之间互相隔离配置")]),s._v(" "),a("blockquote",[a("p",[s._v("每一个微服务都创建自己的命名空间，只加载自己命名空间下的所有配置。")])]),s._v(" "),a("p",[s._v("我们可以点击前面配置进行克隆，选中对应的创建每一个微服务的命名空间，每次运行相关服务只选择对应服务的配置。")]),s._v(" "),a("p",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://gitee.com/wxvirus/img/raw/master/img/20220115223622.png",alt:"克隆配置"}})]),s._v(" "),a("h3",{attrs:{id:"配置集"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置集"}},[s._v("#")]),s._v(" 配置集")]),s._v(" "),a("blockquote",[a("p",[s._v("所有的配置的集合。")])]),s._v(" "),a("h3",{attrs:{id:"配置集-id-类似文件名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置集-id-类似文件名"}},[s._v("#")]),s._v(" 配置集 ID：类似文件名")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),a("p",[s._v("就是我们所说的"),a("code",[s._v("DataID")])])]),s._v(" "),a("h2",{attrs:{id:"配置分组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置分组"}},[s._v("#")]),s._v(" 配置分组")]),s._v(" "),a("blockquote",[a("p",[s._v("默认所有的配置集都属于："),a("code",[s._v("DEFAULT_GROUP")])])]),s._v(" "),a("p",[s._v("不过都是可以基于业务来定制的(双十一，618 等业务活动)。")]),s._v(" "),a("p",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://gitee.com/wxvirus/img/raw/master/img/20220115224032.png",alt:"新增分组"}})]),s._v(" "),a("p",[s._v("我们新建一个双十一的分组，我们应用也要进行修改配置，才能获取到对应的配置内容。")]),s._v(" "),a("div",{staticClass:"language-properties line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 对应分组")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("spring.cloud.nacos.config.group")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("11")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("然后进行应用重启即可。")]),s._v(" "),a("h2",{attrs:{id:"使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[s._v("#")]),s._v(" 使用")]),s._v(" "),a("blockquote",[a("p",[s._v("一般使用，是每个微服务创建自己的名称的命名空间，使用配置分组来区分环境，"),a("code",[s._v("dev")]),s._v("，"),a("code",[s._v("test")]),s._v("，"),a("code",[s._v("prod")])])]),s._v(" "),a("h2",{attrs:{id:"拆分配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#拆分配置"}},[s._v("#")]),s._v(" 拆分配置")]),s._v(" "),a("p",[s._v("我们将"),a("code",[s._v("application.yml")]),s._v("中的一些配置进行拆分到各个细化的配置文件中，然后让应用可以加载多个配置。")]),s._v(" "),a("p",[s._v("我们可以将有关数据源的配置写到一个配置文件中(本地不一定需要创建，也可以将这些配置交给"),a("code",[s._v("nacos")]),s._v("来管理)：")]),s._v(" "),a("p",[a("code",[s._v("datasource.yml")])]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spring")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("datasource")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("username")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" root\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("password")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" root\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" jdbc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("mysql"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("//127.0.0.1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("3306/数据库\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("driver-class-name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" com.mysql.cj.jdbc.Driver\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("和"),a("code",[s._v("mybatis")]),s._v("有关的配置：")]),s._v(" "),a("p",[a("code",[s._v("mybatis.yml")])]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("mybatis-plus")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("mapper-locations")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" classpath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/mapper/"),a("span",{pre:!0,attrs:{class:"token important"}},[s._v("**/*.xml")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("global-config")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("db-config")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("id-type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" auto "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置主键自增")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("和框架有关的其他的一些配置信息：")]),s._v(" "),a("p",[a("code",[s._v("other.yml")])]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spring")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("cloud")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("nacos")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("discovery")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("server-addr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 127.0.0.1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8848")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("application")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 必须给当前服务起名字")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 应用名称\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("server")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8082")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("最后到"),a("code",[s._v("nacos")]),s._v("里也进行配置一番，并且配置对应的所在的微服务的命名空间和对应开发环境分组。")]),s._v(" "),a("p",[s._v("然后配置"),a("code",[s._v("bootstrap.properties")]),s._v("文件来加载多个配置("),a("strong",[s._v("老版本")]),s._v(")")]),s._v(" "),a("div",{staticClass:"language-properties line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 第一个配置源")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("spring.cloud.nacos.config.ext-config[0].data-id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("datasource.yml")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 对应分组")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("spring.cloud.nacos.config.ext-config[0].group")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("dev")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 是否动态刷新")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("spring.cloud.nacos.config.ext-config[0].refresh")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("true")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 第2个配置源")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("spring.cloud.nacos.config.ext-config[1].data-id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("mybatis.yml")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 对应分组")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("spring.cloud.nacos.config.ext-config[1].group")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("dev")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 是否动态刷新")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("spring.cloud.nacos.config.ext-config[1].refresh")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("true")]),s._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 第3个配置源")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("spring.cloud.nacos.config.ext-config[2].data-id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("other.yml")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 对应分组")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("spring.cloud.nacos.config.ext-config[2].group")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("dev")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 是否动态刷新")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("spring.cloud.nacos.config.ext-config[2].refresh")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("true")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br")])]),a("p",[s._v("然后注释原先使用的配置文件("),a("code",[s._v("application.yml")]),s._v(")里的内容，来进行重启应用测试配置是否加载成功。")]),s._v(" "),a("hr"),s._v(" "),a("p",[a("kbd",[s._v("新配置方法")])]),s._v(" "),a("div",{staticClass:"language-properties line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("spring.cloud.nacos.config.extension-configs[0].data-id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("datasource.yml")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("spring.cloud.nacos.config.extension-configs[0].group")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("dev")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("spring.cloud.nacos.config.extension-configs[0].refresh")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("true")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("spring.cloud.nacos.config.extension-configs[1].data-id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("mybatis.yml")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("spring.cloud.nacos.config.extension-configs[1].group")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("dev")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("spring.cloud.nacos.config.extension-configs[1].refresh")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("true")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("spring.cloud.nacos.config.extension-configs[2].data-id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("other.yml")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("spring.cloud.nacos.config.extension-configs[2].group")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("dev")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("spring.cloud.nacos.config.extension-configs[2].refresh")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("true")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("原先的"),a("code",[s._v("ext-config")]),s._v("已经加上了"),a("code",[s._v("@Deprecated")]),s._v("，表示此方法不再建议使用，调用时会出现删除线，但是并不代表不能用，只是说不推荐使用，因为还有更好的方法可以调用。")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("重启查看控制台启动了什么内容")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("Located property source: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("BootstrapPropertySource "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'bootstrapProperties-gulimall-coupon.properties,DEFAULT_GROUP'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(", BootstrapPropertySource "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'bootstrapProperties-gulimall-coupon,DEFAULT_GROUP'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(", BootstrapPropertySource "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'bootstrapProperties-other.yml,dev'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(", BootstrapPropertySource "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'bootstrapProperties-mybatis.yml,dev'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(", BootstrapPropertySource "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'bootstrapProperties-datasource.yml,dev'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("都可以清晰的看到，分别都读取了这几个配置文件。")])]),s._v(" "),a("p",[s._v("但是呢，查看我们接口返回的内容：")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"msg"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"success"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"code"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"wujie"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"age"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("这个文件不是上述的配置文件中的配置的值。是我本地的"),a("code",[s._v("application.properties")]),s._v("配置的值")]),s._v(" "),a("div",{staticClass:"language-properties line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("coupon.user.name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("wujie")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("coupon.user.age")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("18")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("分组问题")]),s._v(" "),a("p",[s._v("从上述的控制台内容来看，我们读取的还是默认分组下的内容，但是"),a("code",[s._v("nacos")]),s._v("里没有"),a("code",[s._v("DEFAULT_GROUP")]),s._v("这一项了，被我删了，所以从我本地进行查找，输出上述内容。")]),s._v(" "),a("p",[s._v("还是得加上分组的配置：")]),s._v(" "),a("div",{staticClass:"language-properties line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 对应分组")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("spring.cloud.nacos.config.group")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("dev")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])]),s._v(" "),a("p",[s._v("我们进行修改调整，重启后再次查看内容。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("Located property source: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("BootstrapPropertySource "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'bootstrapProperties-gulimall-coupon.properties,dev'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(", BootstrapPropertySource "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'bootstrapProperties-gulimall-coupon,dev'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(", BootstrapPropertySource "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'bootstrapProperties-other.yml,dev'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(", BootstrapPropertySource "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'bootstrapProperties-mybatis.yml,dev'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(", BootstrapPropertySource "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'bootstrapProperties-datasource.yml,dev'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("由上述控制台启动内容来看，我们这次加载的是"),a("code",[s._v("dev")]),s._v("下的分组。")]),s._v(" "),a("p",[s._v("也可以看到我接口的内容也随之发生了变化")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"msg"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"success"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"code"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dev"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"age"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),a("ol",[a("li",[s._v("微服务任何配置信息，任何配置文件都可以放在配置中心")]),s._v(" "),a("li",[s._v("只需要在"),a("code",[s._v("bootstrap.properties")]),s._v("说明加载配置中心中哪些配置文件即可")]),s._v(" "),a("li",[s._v("通过"),a("code",[s._v("@Value")]),s._v("、"),a("code",[s._v("@ConfigurationProperties")]),s._v("。。。等方式从配置文件中获取值都能从配置中心中获取")]),s._v(" "),a("li",[s._v("读取规则："),a("strong",[s._v("配置中心有的，优先读取配置中心的，否则从本地查找，没有就真的没有了")])]),s._v(" "),a("li",[s._v("开发时，还是优先先使用"),a("code",[s._v("application.yml")]),s._v("集成使用所有的配置，后续上线再进行拆分配置即可。")])])])}),[],!1,null,null,null);t.default=e.exports}}]);