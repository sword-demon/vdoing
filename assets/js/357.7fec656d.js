(window.webpackJsonp=window.webpackJsonp||[]).push([[357],{795:function(a,t,s){"use strict";s.r(t);var n=s(16),e=Object(n.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[a._v("#")]),a._v(" 简介")]),a._v(" "),s("blockquote",[s("p",[a._v("网关作为流量的入口，通常功能包括路由转发、权限校验、限流控制等。而"),s("code",[a._v("SpringCloud Gateway")]),a._v("作为"),s("code",[a._v("SpringCloud")]),a._v("官方推出的第二代网关框架，取代了"),s("code",[a._v("Zuul")]),a._v("网关。")])]),a._v(" "),s("blockquote",[s("p",[a._v("网关提供 API 全托管服务，丰富的 API 管理功能，辅助企业管理大规模的 API，以降低管理成本和安全风险，包括协议适配、协议转发、安全策略、防刷、流量、监控日志等功能。")])]),a._v(" "),s("p",[a._v("官方文档地址：")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://docs.spring.io/spring-cloud-gateway/docs/3.1.1-SNAPSHOT/reference/html/",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://docs.spring.io/spring-cloud-gateway/docs/3.1.1-SNAPSHOT/reference/html/"),s("OutboundLink")],1)]),a._v(" "),s("h2",{attrs:{id:"glossary"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#glossary"}},[a._v("#")]),a._v(" "),s("a",{attrs:{href:"https://docs.spring.io/spring-cloud-gateway/docs/2.2.9.RELEASE/reference/html/#glossary",target:"_blank",rel:"noopener noreferrer"}},[a._v("Glossary"),s("OutboundLink")],1)]),a._v(" "),s("ul",[s("li",[s("strong",[a._v("Route")]),a._v(": The basic building block of the gateway. It is defined by an ID, a destination URI, a collection of predicates, and a collection of filters. A route is matched if the aggregate predicate is true(网关的基本构件。它由一个 ID、一个目标 URI、一个谓词集合和一个过滤器集合定义。如果聚合谓词为真，则匹配路由。).")]),a._v(" "),s("li",[s("strong",[a._v("Predicate")]),a._v(": This is a "),s("a",{attrs:{href:"https://docs.oracle.com/javase/8/docs/api/java/util/function/Predicate.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("Java 8 Function Predicate"),s("OutboundLink")],1),a._v(". The input type is a "),s("a",{attrs:{href:"https://docs.spring.io/spring/docs/5.0.x/javadoc-api/org/springframework/web/server/ServerWebExchange.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("Spring Framework "),s("code",[a._v("ServerWebExchange")]),s("OutboundLink")],1),a._v(". This lets you match on anything from the HTTP request, such as headers or parameters(这是一个"),s("a",{attrs:{href:"https://docs.oracle.com/javase/8/docs/api/java/util/function/Predicate.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("Java 8 函数谓词"),s("OutboundLink")],1),a._v("。输入类型是"),s("a",{attrs:{href:"https://docs.spring.io/spring/docs/5.0.x/javadoc-api/org/springframework/web/server/ServerWebExchange.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("Spring Framework ' ServerWebExchange '"),s("OutboundLink")],1),a._v("。这允许您匹配来自 HTTP 请求的任何内容，例如头信息或参数。).")]),a._v(" "),s("li",[s("strong",[a._v("Filter")]),a._v(": These are instances of "),s("a",{attrs:{href:"https://github.com/spring-cloud/spring-cloud-gateway/tree/2.2.x/spring-cloud-gateway-server/src/main/java/org/springframework/cloud/gateway/filter/GatewayFilter.java",target:"_blank",rel:"noopener noreferrer"}},[s("code",[a._v("GatewayFilter")]),s("OutboundLink")],1),a._v(" that have been constructed with a specific factory. Here, you can modify requests and responses before or after sending the downstream request.(这些是"),s("a",{attrs:{href:"https://github.com/spring-cloud/spring-cloud-gateway/tree/2.2.x/spring-cloud-gateway-server/src/main/java/org/springframework/cloud/gateway/filter/GatewayFilter.java",target:"_blank",rel:"noopener noreferrer"}},[a._v("' GatewayFilter '"),s("OutboundLink")],1),a._v("的实例，它们是用一个特定的工厂构造的。在这里，您可以在发送下游请求之前或之后修改请求和响应。)")])]),a._v(" "),s("p",[a._v("总结：")]),a._v(" "),s("ol",[s("li",[a._v("请求发送到网关")]),a._v(" "),s("li",[a._v("网关断言判断是否符合路由规则")]),a._v(" "),s("li",[a._v("符合则路由到指定的地方，就会经过一系列的过滤器进行过滤")])]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("提示")]),a._v(" "),s("p",[a._v("即：我们需要写哪些路由信息，断言是怎么判断的，要写一些适合的过滤器。")])]),a._v(" "),s("h2",{attrs:{id:"创建-测试-api-网关"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建-测试-api-网关"}},[a._v("#")]),a._v(" 创建&测试 API 网关")]),a._v(" "),s("p",[a._v("我们先在项目中创建一个模块，为"),s("code",[a._v("项目名-gateway")]),a._v("，使用"),s("code",[a._v("spring initializr")]),a._v("的方式，下一步下一步之后，搜索"),s("code",[a._v("gateway")]),a._v("加入即可点击完成。")]),a._v(" "),s("p",[a._v("然后配置"),s("code",[a._v("pom.xml")]),a._v("文件")]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("依赖问题")]),a._v(" "),s("p",[a._v("哎，无解的问题，我试了半天的版本，如下：")]),a._v(" "),s("p",[s("code",[a._v("springboot")]),a._v("版本")]),a._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("parent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("org.springframework.boot"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("spring-boot-starter-parent"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("2.2.2.RELEASE"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("relativePath")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("/>")])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("\x3c!-- lookup parent from repository --\x3e")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("parent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br")])]),s("p",[s("code",[a._v("SpringCloud")]),a._v("版本")]),a._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("properties")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("java.version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("1.8"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("java.version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("spring-cloud.version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("Hoxton.SR1"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("spring-cloud.version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("properties")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("p",[a._v("然后还得引入之前使用的"),s("code",[a._v("项目-common")]),a._v("模块，里面有注册中心和服务发现的相关依赖")]),a._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("com.wxvirus.gulimall"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("gulimall-common"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("0.0.1-SNAPSHOT"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])])]),a._v(" "),s("ol",[s("li",[s("p",[a._v("我们要在应用启动类上加上注解")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("org"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("springframework"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("boot"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("SpringApplication")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("org"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("springframework"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("boot"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("autoconfigure"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("SpringBootApplication")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("org"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("springframework"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("boot"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("autoconfigure"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("jdbc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("DataSourceAutoConfiguration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("org"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("springframework"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("cloud"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("client"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("discovery"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("EnableDiscoveryClient")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/**\n * 1. 开启服务注册发现\n * 2. 配置nacos的注册中心地址\n */")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@EnableDiscoveryClient")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 排除数据源的配置")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@SpringBootApplication")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("exclude "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("DataSourceAutoConfiguration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MallGatewayApplication")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("SpringApplication")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MallGatewayApplication")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br")])]),s("p",[a._v("因为这里，我们使用了"),s("code",[a._v("项目-common")]),a._v("模块，里面有配置"),s("code",[a._v("mybatis-plus")]),a._v("相关的数据源的依赖，但是我们现在这个模块并没有配置数据源信息，所以启动会报错，我们进行忽略。")])]),a._v(" "),s("li",[s("p",[a._v("配置"),s("code",[a._v("nacos")]),a._v("注册中心地址")]),a._v(" "),s("p",[s("code",[a._v("application.properties")])]),a._v(" "),s("div",{staticClass:"language-properties line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("spring.cloud.nacos.discovery.server-addr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("127.0.0.1:8848")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("spring.application.name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("gulimall-gateway")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[a._v("然后在"),s("code",[a._v("nacos")]),a._v("创建新的命名空间为"),s("code",[a._v("gateway")]),a._v("，并为之创建对应的配置文件，这里取名为"),s("code",[a._v("application.yml")]),a._v("，"),s("code",[a._v("yml")]),a._v("文件比较符合官网的配置路由的那些格式。")]),a._v(" "),s("p",[a._v("首先写一些应用名称即可")]),a._v(" "),s("div",{staticClass:"language-yaml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("spring")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("application")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" 项目"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("gateway\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("p",[a._v("配置"),s("code",[a._v("bootstrap.properties")]),a._v("配置中心")]),a._v(" "),s("div",{staticClass:"language-properties line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("spring.application.name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("项目名-gateway")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("spring.cloud.nacos.config.server-addr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("127.0.0.1:8848")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# gateway的名称空间的id")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("spring.cloud.nacos.config.namespace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("14316d98-d69e-47fe-86a1-6cae3536812b")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("server.port")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("88")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])]),s("p",[a._v("下面即可启动应用类查看是否有问题。")])]),a._v(" "),s("li",[s("p",[a._v("配置相关路由断言")]),a._v(" "),s("p",[a._v("这里写在"),s("code",[a._v("application.yml")]),a._v("呼应上述在"),s("code",[a._v("nacos")]),a._v("中写的配置信息")]),a._v(" "),s("div",{staticClass:"language-yaml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("spring")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("cloud")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("gateway")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("routes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" test_route\n                  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("uri")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" https"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("//www.baidu.com\n                  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("predicates")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n                      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" Query=url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" baidu\n\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" qq_route\n                  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("uri")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" https"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("//www.qq.com\n                  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("predicates")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n                      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" Query=url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" qq\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br")])]),s("p",[a._v("使用的是："),s("a",{attrs:{href:"https://docs.spring.io/spring-cloud-gateway/docs/2.2.9.RELEASE/reference/html/#the-query-route-predicate-factory",target:"_blank",rel:"noopener noreferrer"}},[a._v("The Query Route Predicate Factory"),s("OutboundLink")],1),a._v("这个路由断言规则")]),a._v(" "),s("p",[a._v("它需要一个参数，后面则是进行正则匹配的项。")]),a._v(" "),s("ul",[s("li",[a._v("id：表示一个代名词，名称")]),a._v(" "),s("li",[a._v("uri：表示路由到的地址")]),a._v(" "),s("li",[a._v("predicates：配置断言规则\n"),s("ul",[s("li",[a._v("和 id 一样是数组格式，在"),s("code",[a._v("yml")]),a._v("文件类型中 "),s("code",[a._v("-")]),a._v("代表数组的意思")]),a._v(" "),s("li",[a._v("Query：代表访问页面"),s("code",[a._v("?")]),a._v("开头的参数\n"),s("ul",[s("li",[a._v("第一个参数：参数名称")]),a._v(" "),s("li",[a._v("第二个参数：参数与之匹配的正则内容，这里写的是死内容")])])])])])]),a._v(" "),s("p",[a._v("意思：")]),a._v(" "),s("blockquote",[s("ul",[s("li",[a._v("如果访问："),s("code",[a._v("127.0.0.1:88?url=baidu")]),a._v("，则跳转到百度页面")]),a._v(" "),s("li",[a._v("如果访问："),s("code",[a._v("127.0.0.1:88?url=qq")]),a._v("，则跳转到 QQ 官网")])])])]),a._v(" "),s("li",[s("p",[a._v("测试结果")]),a._v(" "),s("p",{attrs:{align:"center"}},[s("img",{attrs:{src:"https://gitee.com/wxvirus/img/raw/master/img/20220118003002.png",alt:"测试结果"}})])])])])}),[],!1,null,null,null);t.default=e.exports}}]);