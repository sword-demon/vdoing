(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{590:function(s,t,a){"use strict";a.r(t);var e=a(16),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"企业做项目流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#企业做项目流程"}},[s._v("#")]),s._v(" 企业做项目流程")]),s._v(" "),a("ol",[a("li",[s._v("需求分析")]),s._v(" "),a("li",[s._v("设计(概要设计、详细设计)")]),s._v(" "),a("li",[s._v("技术选型")]),s._v(" "),a("li",[s._v("初始化/引入需要的技术")]),s._v(" "),a("li",[s._v("写"),a("code",[s._v("Demo")]),s._v("，写代码(实现业务逻辑)")]),s._v(" "),a("li",[s._v("测试(单元测试)")]),s._v(" "),a("li",[s._v("代码提交、代码评审")]),s._v(" "),a("li",[s._v("部署")]),s._v(" "),a("li",[s._v("发布")])]),s._v(" "),a("h2",{attrs:{id:"需求分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#需求分析"}},[s._v("#")]),s._v(" 需求分析")]),s._v(" "),a("ol",[a("li",[s._v("登录、注册")]),s._v(" "),a("li",[s._v("用户管理（仅管理员可见）对用户的查询或修改")]),s._v(" "),a("li",[s._v("用户校验（仅部分用户使用等）")])]),s._v(" "),a("h2",{attrs:{id:"技术选型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#技术选型"}},[s._v("#")]),s._v(" 技术选型")]),s._v(" "),a("ul",[a("li",[s._v("前端：三件套 + "),a("code",[s._v("React")]),s._v(" + "),a("code",[s._v("Ant Design")]),s._v("组件库 + "),a("code",[s._v("Umi")]),s._v(" + "),a("code",[s._v("Ant Design Pro(现成的管理系统)")])]),s._v(" "),a("li",[s._v("后端："),a("code",[s._v("Java")]),s._v(" + "),a("code",[s._v("Spring")]),s._v(" + "),a("code",[s._v("SpringMVC")]),s._v(" + "),a("code",[s._v("MyBatis")]),s._v(" + "),a("code",[s._v("MyBatis Plus")]),s._v(" + "),a("code",[s._v("SpringBoot")]),s._v(" + "),a("code",[s._v("MySQL")])]),s._v(" "),a("li",[s._v("部署：服务器/容器(平台)")])]),s._v(" "),a("h2",{attrs:{id:"计划"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#计划"}},[s._v("#")]),s._v(" 计划")]),s._v(" "),a("h3",{attrs:{id:"初始化项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#初始化项目"}},[s._v("#")]),s._v(" 初始化项目")]),s._v(" "),a("ol",[a("li",[s._v("前端初始化（20min）✅\n"),a("ol",[a("li",[s._v("初始化项目 ✅")]),s._v(" "),a("li",[s._v("引入一些组件之类的 ✅")]),s._v(" "),a("li",[s._v("框架介绍/项目瘦身 ✅")])])]),s._v(" "),a("li",[s._v("后端初始化（20min）\n"),a("ol",[a("li",[s._v("准备环境(MySQL 之类的) 验证是否安装完成 - 连接测试 ✅")]),s._v(" "),a("li",[s._v("初始化后端项目、引入框架 ✅")])])])]),s._v(" "),a("h3",{attrs:{id:"数据库设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据库设计"}},[s._v("#")]),s._v(" 数据库设计")]),s._v(" "),a("blockquote",[a("p",[s._v("什么是设计数据库表？")]),s._v(" "),a("p",[s._v("答：有哪些表(模型)？表中有哪些字段？字段的类型？给数据库字段添加索引？")]),s._v(" "),a("p",[s._v("表与表之间的关联？")])]),s._v(" "),a("p",[a("strong",[s._v("区分度不大的无需加索引，即性别不需要加索引")])]),s._v(" "),a("p",[s._v("用户表：")]),s._v(" "),a("p",[a("code",[s._v("id")]),s._v("(主键，用于标识身份) "),a("code",[s._v("bigint")])]),s._v(" "),a("p",[a("code",[s._v("username")]),s._v("(用户昵称) "),a("code",[s._v("varchar")])]),s._v(" "),a("p",[a("code",[s._v("userAccount")]),s._v("登录账号")]),s._v(" "),a("p",[a("code",[s._v("gender")]),s._v(" 性别 "),a("code",[s._v("tinyint")])]),s._v(" "),a("p",[a("code",[s._v("userPassword")]),s._v("密码 "),a("code",[s._v("varchar")])]),s._v(" "),a("p",[a("code",[s._v("phone")]),s._v("电话 "),a("code",[s._v("char/varchar")]),s._v(" 有人说电话固定是 11 位，但是总有一些地方要加"),a("code",[s._v("+86")]),s._v("什么的，不一定是固定的")]),s._v(" "),a("p",[a("code",[s._v("email")]),s._v("邮箱 "),a("code",[s._v("varchar")])]),s._v(" "),a("p",[a("code",[s._v("userStatus")]),s._v("是否有效（比如是否封号） "),a("code",[s._v("int")]),s._v(" "),a("code",[s._v("0-正常")])]),s._v(" "),a("p",[a("code",[s._v("avatarUrl")]),s._v("头像 "),a("code",[s._v("varchar")])]),s._v(" "),a("hr"),s._v(" "),a("p",[a("code",[s._v("createTime")]),s._v("创建时间（数据插入时间）"),a("code",[s._v("datetime/timestamp")])]),s._v(" "),a("p",[a("code",[s._v("updateTime")]),s._v("更新时间（数据更新时间）"),a("code",[s._v("datetime/timestamp")])]),s._v(" "),a("p",[a("code",[s._v("isDelete")]),s._v("是否删除（软删）"),a("code",[s._v("tinyint")])]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DROP")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("IF")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("EXISTS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    id           "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("bigint")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("auto_increment")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("comment")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'主键id'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    username     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("256")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("                  "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("null")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("comment")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'用户昵称'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    userAccount  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("256")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("                  "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("null")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("comment")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'账号'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    avatarUrl    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("                 "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("null")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("comment")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'用户头像'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    gender       "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("tinyint")]),s._v("                       "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("null")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("comment")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'性别'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    userPassword "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("                  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("not")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("null")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("comment")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'密码'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    phone        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("128")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("                  "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("null")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("comment")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'手机号'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    email        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("                  "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("null")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("comment")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'邮箱'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    userStatus   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("            "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("not")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("null")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("comment")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'是否有效 0正常'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    createTime   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("datetime")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CURRENT_TIMESTAMP")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("null")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("comment")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'创建时间'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    updateTime   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("datetime")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CURRENT_TIMESTAMP")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("null")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("update")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CURRENT_TIMESTAMP")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("comment")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'更新时间'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    isDelete     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("tinyint")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("            "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("null")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("comment")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'是否删除'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("constraint")]),s._v(" user_pk\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("primary")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("key")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("comment")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'用户'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br")])]),a("h3",{attrs:{id:"自动生成器的使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自动生成器的使用"}},[s._v("#")]),s._v(" 自动生成器的使用")]),s._v(" "),a("p",[a("code",[s._v("MybatixX")]),s._v("插件，自动根据数据库表生成"),a("code",[s._v("domain")]),s._v("实体对象，自动生成"),a("code",[s._v("mapper")]),s._v("操作数据库对象，生成"),a("code",[s._v("mapper.xml")]),s._v("定义了"),a("code",[s._v("mapper")]),s._v("对象和数据库的关联，可以在里面自己写 SQL，还生成了"),a("code",[s._v("service")]),s._v("包含常用的增删改查、以及"),a("code",[s._v("serviceImpl")]),s._v("实现类")]),s._v(" "),a("h3",{attrs:{id:"登录-注册-20min"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#登录-注册-20min"}},[s._v("#")]),s._v(" 登录/注册（20min）")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("前端")])]),s._v(" "),a("li",[a("p",[s._v("后端")]),s._v(" "),a("ol",[a("li",[s._v("规整项目目录 ✅")]),s._v(" "),a("li",[s._v("实现基本的用户（数据库）操作（操作"),a("code",[s._v("user")]),s._v("表） ✅\n"),a("ol",[a("li",[s._v("模型"),a("code",[s._v("user")]),s._v("对象和数据库的字段关联，自动生成 ✅")])])]),s._v(" "),a("li",[s._v("写登录逻辑 ✅")])])])]),s._v(" "),a("h3",{attrs:{id:"用户管理-20min"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用户管理-20min"}},[s._v("#")]),s._v(" 用户管理（20min）")]),s._v(" "),a("ol",[a("li",[s._v("前端")]),s._v(" "),a("li",[s._v("后端 ✅")])]),s._v(" "),a("h2",{attrs:{id:"三种初始化-java-项目的方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三种初始化-java-项目的方法"}},[s._v("#")]),s._v(" 三种初始化 java 项目的方法")]),s._v(" "),a("ol",[a("li",[s._v("Github 搜索模板")]),s._v(" "),a("li",[s._v("Spring 官网的模板生成器"),a("a",{attrs:{href:"https://start.spring.io/",target:"_blank",rel:"noopener noreferrer"}},[s._v("start.spring.io"),a("OutboundLink")],1)]),s._v(" "),a("li",[s._v("直接在 IDEA 开发工具中生成 ✅")])]),s._v(" "),a("h2",{attrs:{id:"注册逻辑-✅"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注册逻辑-✅"}},[s._v("#")]),s._v(" 注册逻辑 ✅")]),s._v(" "),a("ol",[a("li",[s._v("用户在前端输入账号和密码以及校验码(TODO)")]),s._v(" "),a("li",[s._v("后端校验用户的账户、密码、校验密码是否符合规则\n"),a("ol",[a("li",[s._v("非空")]),s._v(" "),a("li",[s._v("账户：不小于 4 位")]),s._v(" "),a("li",[s._v("密码：不小于 8 位(>=8)")]),s._v(" "),a("li",[s._v("账户不能重复")]),s._v(" "),a("li",[s._v("账户不包含特殊字符")]),s._v(" "),a("li",[s._v("密码和校验密码相同")]),s._v(" "),a("li",[s._v("其他的校验")])])]),s._v(" "),a("li",[s._v("对密码进行加密（"),a("strong",[s._v("千万不能明文存储到数据库中")]),s._v("）")]),s._v(" "),a("li",[s._v("向数据库插入用户数据")])]),s._v(" "),a("h2",{attrs:{id:"登录接口-✅"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#登录接口-✅"}},[s._v("#")]),s._v(" 登录接口 ✅")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("接收参数：用户账户、密码")])]),s._v(" "),a("li",[a("p",[s._v("请求类型："),a("code",[s._v("POST")])]),s._v(" "),a("p",[a("strong",[s._v("请求参数很长时不建议使用"),a("code",[s._v("GET")])])])]),s._v(" "),a("li",[a("p",[s._v("请求体："),a("code",[s._v("JSON")]),s._v("格式数据")])]),s._v(" "),a("li",[a("p",[s._v("返回值：用户信息("),a("strong",[s._v("脱敏")]),s._v(")")])])]),s._v(" "),a("h3",{attrs:{id:"逻辑"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#逻辑"}},[s._v("#")]),s._v(" 逻辑")]),s._v(" "),a("ol",[a("li",[s._v("校验用户账户和密码是否安全\n"),a("ol",[a("li",[s._v("非空")]),s._v(" "),a("li",[s._v("账户长度不小于 4 位")]),s._v(" "),a("li",[s._v("密码不小于 8 位")]),s._v(" "),a("li",[s._v("账户不包含特殊字符")])])]),s._v(" "),a("li",[s._v("校验密码是否输入正确，要和数据库中的密文进行对比")]),s._v(" "),a("li",[s._v("配置"),a("code",[s._v("mybatis-plus")]),s._v("的逻辑删除")]),s._v(" "),a("li",[s._v("脱敏,隐藏敏感信息")]),s._v(" "),a("li",[s._v("记录用户的登录态("),a("code",[s._v("session")]),s._v(")，将其存储到服务器上，或者存到某个服务里，或者存到"),a("code",[s._v("redis")]),s._v("里，这里使用默认的服务器"),a("code",[s._v("tomcat")]),s._v("去记录。")]),s._v(" "),a("li",[s._v("返回安全的脱敏后的用户信息")])]),s._v(" "),a("h3",{attrs:{id:"如何知道是哪个用户登录了"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何知道是哪个用户登录了"}},[s._v("#")]),s._v(" 如何知道是哪个用户登录了")]),s._v(" "),a("ol",[a("li",[s._v("连接服务器端后得到一个"),a("code",[s._v("session1")]),s._v("状态(匿名会话)，返回给前端")]),s._v(" "),a("li",[s._v("当用户登录成功后，得到了登录成功的"),a("code",[s._v("session")]),s._v("，并且给该"),a("code",[s._v("session")]),s._v("设置一些值，返回给前端一个设置"),a("code",[s._v("cookie")]),s._v("的命令")]),s._v(" "),a("li",[s._v("前端接收到后端的命令，设置"),a("code",[s._v("cookie")]),s._v("保存到浏览器中")]),s._v(" "),a("li",[s._v("前端再次请求后端时，在请求头中带上"),a("code",[s._v("cookie")]),s._v("去请求")]),s._v(" "),a("li",[s._v("后端拿到前端传来的"),a("code",[s._v("cookie")]),s._v("，找到对应的"),a("code",[s._v("session")])]),s._v(" "),a("li",[s._v("再从"),a("code",[s._v("session")]),s._v("中可以取出基于该"),a("code",[s._v("session")]),s._v("存储的变量（用户的登录信息、登录名、"),a("code",[s._v("Token")]),s._v("等）")]),s._v(" "),a("li",[s._v("需要在请求参数里加上"),a("code",[s._v("HttpServletRequest")])])]),s._v(" "),a("h3",{attrs:{id:"控制层封装请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#控制层封装请求"}},[s._v("#")]),s._v(" 控制层封装请求")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@RestController")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("blockquote",[a("p",[s._v("适用于编写"),a("code",[s._v("restful")]),s._v("风格的"),a("code",[s._v("api")]),s._v("，返回值默认为"),a("code",[s._v("json")]),s._v("类型")])]),s._v(" "),a("p",[a("code",[s._v("controller")]),s._v("层倾向于对请求参数本身的校验，不涉及业务逻辑本身，越少越好。")]),s._v(" "),a("p",[a("code",[s._v("service")]),s._v("层是对业务逻辑的校验（有可能被"),a("code",[s._v("controller")]),s._v("之外的类调用）")]),s._v(" "),a("h2",{attrs:{id:"用户管理接口-✅"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用户管理接口-✅"}},[s._v("#")]),s._v(" 用户管理接口 ✅")]),s._v(" "),a("p",[a("strong",[s._v("！！！必须鉴权")])]),s._v(" "),a("ol",[a("li",[s._v("查询用户 ✅\n"),a("ol",[a("li",[s._v("允许根据用户名查询 ✅")])])]),s._v(" "),a("li",[s._v("删除用户 ✅")])]),s._v(" "),a("h2",{attrs:{id:"前后端交互"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前后端交互"}},[s._v("#")]),s._v(" 前后端交互")]),s._v(" "),a("p",[s._v("前端需要向后端发送请求")]),s._v(" "),a("p",[s._v("前端"),a("code",[s._v("ajax")]),s._v("来请求后端")]),s._v(" "),a("p",[a("code",[s._v("axios")]),s._v("封装了"),a("code",[s._v("ajax")])]),s._v(" "),a("p",[a("code",[s._v("antDesignPro")]),s._v("里的"),a("code",[s._v("request")]),s._v("是它又进行了封装")]),s._v(" "),a("p",[s._v("追踪"),a("code",[s._v("request")]),s._v("源码，用到了"),a("code",[s._v("umi")]),s._v("的插件，同时"),a("code",[s._v("requestConfig")]),s._v("是一个配置")]),s._v(" "),a("p",[s._v("可以在"),a("code",[s._v("app.tsx")]),s._v("文件中进行配置接口请求地址")]),s._v(" "),a("div",{staticClass:"language-tsx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-tsx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" request"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" RequestConfig "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    timeout"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    prefix"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://localhost:8080/api'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"跨域正向代理处理方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#跨域正向代理处理方式"}},[s._v("#")]),s._v(" 跨域正向代理处理方式")]),s._v(" "),a("p",[s._v("正向代理：替客户端发送请求")]),s._v(" "),a("p",[s._v("反向代理：替服务器接收请求")]),s._v(" "),a("p",[s._v("服务端设置接口全局前缀")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("server")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("servlet")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("context-path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" /api\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("上述的配置请求地址的稍作修改")]),s._v(" "),a("div",{staticClass:"language-tsx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-tsx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" request"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" RequestConfig "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    timeout"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("将"),a("code",[s._v("proxy.ts")]),s._v("中的正向代理代码修改")]),s._v(" "),a("div",{staticClass:"language-typescript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[s._v("dev"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// localhost:8000/api/** -> https://preview.pro.ant.design/api/**")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/api/'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 要代理的地址 这里原先会是一个 https 的如果发现测试不通过，需要去掉https，换成http")]),s._v("\n      target"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://localhost:8080'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 配置了这个可以从 http 代理到 https")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 依赖 origin 的功能可能需要这个，比如 cookie")]),s._v("\n      changeOrigin"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h2",{attrs:{id:"写代码流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#写代码流程"}},[s._v("#")]),s._v(" 写代码流程")]),s._v(" "),a("ol",[a("li",[s._v("先做设计")]),s._v(" "),a("li",[s._v("代码实现")]),s._v(" "),a("li",[s._v("持续优化！！！（复用代码、提取公共逻辑/常量）")])])])}),[],!1,null,null,null);t.default=n.exports}}]);