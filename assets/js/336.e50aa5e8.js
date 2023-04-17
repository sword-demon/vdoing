(window.webpackJsonp=window.webpackJsonp||[]).push([[336],{776:function(s,a,t){"use strict";t.r(a);var n=t(16),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"乐观锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#乐观锁"}},[s._v("#")]),s._v(" 乐观锁")]),s._v(" "),t("blockquote",[t("p",[s._v("乐观锁是用于解决问题的一种方案。")]),s._v(" "),t("p",[s._v("问题是：多人对同一数据进行事务提交，最后提交的事务会把之前的事务覆盖掉，这就会发生"),t("strong",[s._v("丢失更新")]),s._v("的问题")])]),s._v(" "),t("h3",{attrs:{id:"场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#场景"}},[s._v("#")]),s._v(" 场景")]),s._v(" "),t("p",[s._v("主要适用场景：当要更新一条记录的时候，希望这条记录没有被别人更新，也就是说实现线程安全的数据更新。典型案例：抢票")]),s._v(" "),t("p",[t("strong",[s._v("乐观锁实现方式：")])]),s._v(" "),t("blockquote",[t("ol",[t("li",[s._v("取出记录时，获取当前"),t("code",[s._v("version")])]),s._v(" "),t("li",[s._v("更新时，带上这个"),t("code",[s._v("version")])]),s._v(" "),t("li",[s._v("执行更新时，"),t("code",[s._v("set version = newVersion where version = oldVersion")])]),s._v(" "),t("li",[s._v("如果"),t("code",[s._v("version")]),s._v("不对，就更新失败")])])]),s._v(" "),t("h2",{attrs:{id:"使用-mp-实现乐观锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-mp-实现乐观锁"}},[s._v("#")]),s._v(" 使用 MP 实现乐观锁")]),s._v(" "),t("h3",{attrs:{id:"修改实体类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改实体类"}},[s._v("#")]),s._v(" 修改实体类")]),s._v(" "),t("p",[s._v("如上述实现方式所言，我们还得在数据表加一个字段："),t("code",[s._v("version")])]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("com"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("wjstar"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("demomptest"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("entity")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("com"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("baomidou"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("mybatisplus"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("annotation"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("lombok"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Data")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("java"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("util"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Date")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Data")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("User")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@TableId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("type "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("IdType")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ASSIGN_ID"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Long")]),s._v(" id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Integer")]),s._v(" age"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" email"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@TableField")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("fill "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("FieldFill")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("INSERT"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Date")]),s._v(" createTime"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 添加和修改的时候都有值")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@TableField")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("fill "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("FieldFill")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("INSERT_UPDATE"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Date")]),s._v(" updateTime"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Version")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Integer")]),s._v(" version"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br")])]),t("p",[s._v("且我们加上"),t("code",[s._v("@Version")]),s._v("注解")]),s._v(" "),t("h3",{attrs:{id:"创建配置类来注册乐观锁插件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建配置类来注册乐观锁插件"}},[s._v("#")]),s._v(" 创建配置类来注册乐观锁插件")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("com"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("wjstar"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("demomptest"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("config")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("com"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("baomidou"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("mybatisplus"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("extension"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("plugins"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("OptimisticLockerInterceptor")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("org"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("mybatis"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("spring"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("annotation"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MapperScan")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("org"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("springframework"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("context"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("annotation"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Bean")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("org"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("springframework"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("context"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("annotation"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Configuration")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Configuration")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@MapperScan")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"com.wjstar.demomptest.mapper"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MpConfig")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n     * 乐观锁插件\n     */")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Bean")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("OptimisticLockerInterceptor")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("optimisticLockerInterceptor")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("OptimisticLockerInterceptor")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br")])]),t("h3",{attrs:{id:"测试乐观锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#测试乐观锁"}},[s._v("#")]),s._v(" 测试乐观锁")]),s._v(" "),t("p",[s._v("为了方便我们测试，我们在实体类上在加上自动填充的注解，让它默认添加的时候版本号为 1")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Version")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@TableField")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("fill "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("FieldFill")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("INSERT"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Integer")]),s._v(" version"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * MP 执行添加操作的时候这个方法就会执行\n *\n * @param metaObject\n */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Override")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("insertFill")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MetaObject")]),s._v(" metaObject"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("setFieldValByName")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"createTime"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Date")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" metaObject"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("setFieldValByName")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"updateTime"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Date")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" metaObject"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("setFieldValByName")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"version"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" metaObject"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[s._v("我们先调用先前的测试添加的方法添加一条记录，就会产生一个"),t("code",[s._v("verison")]),s._v("为 1 的数据")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/wxvirus/img/raw/master/img/20220220204224.png",alt:"数据显示效果"}})]),s._v(" "),t("p",[s._v("然后再来简单测试一下修改操作")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Test")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("testOptimisticLocker")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 先查询获取版本号")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("User")]),s._v(" user "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" userMapper"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("selectById")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1495378144188751873L")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 再进行修改")]),s._v("\n    user"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("setName")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"张三"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 这里不需要手动 user.setVersion(user.getVersion() + 1) 这个乐观锁插件已经帮我们做好了")]),s._v("\n    userMapper"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("updateById")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("user"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("Creating a new SqlSession\nSqlSession "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("org.apache.ibatis.session.defaults.DefaultSqlSession@3162743f"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" was not registered "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" synchronization because synchronization is not active\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2022")]),s._v("-02-20 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(":52:13.944  INFO "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("44053")]),s._v(" --- "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("           main"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" com.zaxxer.hikari.HikariDataSource       "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" HikariPool-1 - Starting"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2022")]),s._v("-02-20 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(":52:14.208  INFO "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("44053")]),s._v(" --- "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("           main"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" com.zaxxer.hikari.HikariDataSource       "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" HikariPool-1 - Start completed.\nJDBC Connection "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("HikariProxyConnection@1217639236 wrapping com.mysql.cj.jdbc.ConnectionImpl@53a665ad"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" will not be managed by Spring\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  Preparing: SELECT id,name,age,email,create_time,update_time,version FROM user WHERE "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("id")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("?\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" Parameters: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1495378144188751873")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Long"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("    Columns: id, name, age, email, create_time, update_time, version\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("        Row: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1495378144188751873")]),s._v(", 李四, "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v("@qq.com, "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2022")]),s._v("-02-20 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(":41:47, "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2022")]),s._v("-02-20 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(":41:47, "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("      Total: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nClosing non transactional SqlSession "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("org.apache.ibatis.session.defaults.DefaultSqlSession@3162743f"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nCreating a new SqlSession\nSqlSession "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("org.apache.ibatis.session.defaults.DefaultSqlSession@618ad2aa"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" was not registered "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" synchronization because synchronization is not active\nJDBC Connection "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("HikariProxyConnection@2030707995 wrapping com.mysql.cj.jdbc.ConnectionImpl@53a665ad"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" will not be managed by Spring\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  Preparing: UPDATE user SET "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("?, "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("age")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("?, "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("email")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("?, "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("create_time")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("?, "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("update_time")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("?, "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("version")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("? WHERE "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("id")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("? AND "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("version")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("?\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" Parameters: 张三"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("String"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Integer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v("@qq.com"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("String"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2022")]),s._v("-02-20 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(":41:47.0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Timestamp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2022")]),s._v("-02-20 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(":52:14.257"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Timestamp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Integer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1495378144188751873")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Long"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Integer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("    Updates: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nClosing non transactional SqlSession "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("org.apache.ibatis.session.defaults.DefaultSqlSession@618ad2aa"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br")])]),t("p",[s._v("步骤：")]),s._v(" "),t("ol",[t("li",[s._v("先查询")]),s._v(" "),t("li",[s._v("后修改版本号")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/wxvirus/img/raw/master/img/20220220205256.png",alt:"版本号改变"}})]),s._v(" "),t("p",[s._v("此时，版本号已经改变，如果还有别的人以旧版本号来进行修改请求就不会成功，也就达到乐观锁的目的。")])])}),[],!1,null,null,null);a.default=e.exports}}]);