(window.webpackJsonp=window.webpackJsonp||[]).push([[201],{643:function(s,a,t){"use strict";t.r(a);var n=t(16),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"使用-nacos-作为注册中心"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-nacos-作为注册中心"}},[s._v("#")]),s._v(" 使用 Nacos 作为注册中心")]),s._v(" "),t("blockquote",[t("p",[s._v("Nacos 是阿里巴巴开源的更易于构建云原生应用的动态服务发现、配置管理和服务管理平台。他是使用 java 编程。需要依赖 java 环境。\nNacos 文档地址："),t("a",{attrs:{href:"https://nacos.io/zh-cn/docs/quick-start.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://nacos.io/zh-cn/docs/quick-start.html"),t("OutboundLink")],1)])]),s._v(" "),t("h2",{attrs:{id:"下载-nacos-server"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载-nacos-server"}},[s._v("#")]),s._v(" 下载 Nacos-server")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/alibaba/nacos/release",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/alibaba/nacos/release"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("nacos 与 springcloud alibaba 和 springboot 的之间的版本选择")]),s._v(" "),t("p",{attrs:{align:"center"}},[t("img",{attrs:{src:"https://gitee.com/wxvirus/img/raw/master/img/92e3aa67482b220fec796c18b96cb09f.png",alt:"版本选择图"}})]),s._v(" "),t("h2",{attrs:{id:"启动-nacos-server"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动-nacos-server"}},[s._v("#")]),s._v(" 启动 nacos-server")]),s._v(" "),t("ul",[t("li",[s._v("打开命令终端："),t("code",[s._v("sh startup.sh")])]),s._v(" "),t("li",[s._v("访问："),t("code",[s._v("http://localhost:8848/nacos")])]),s._v(" "),t("li",[s._v("使用默认的"),t("code",[s._v("nacos/nacos")]),s._v("进行登录")]),s._v(" "),t("li",[t("code",[s._v("sh startup.sh -m standalone")]),s._v("使用单机模式启动")]),s._v(" "),t("li",[s._v("输入"),t("code",[s._v("jps")]),s._v("查看运行的进程")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("➜ jps\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("62867")]),s._v(" nacos-server.jar\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("64598")]),s._v(" Jps\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("64234")]),s._v(" Launcher\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("64235")]),s._v(" MemberApplication\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("64158")]),s._v(" CouponApplication\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("59359")]),s._v(" RemoteMavenServer36\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("出现以下内容：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("nacos is starting with standalone\nnacos is starting，you can check the /Users/用户/soft/nacos1.4.2/logs/start.out\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("即可，输入命令查看运行日志")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tail")]),s._v(" -200f /Users/用户/soft/nacos1.4.2/logs/start.out\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("主要查看下面的一句话：")]),s._v(" "),t("div",{staticClass:"language-txt line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-txt"}},[t("code",[s._v("2022-01-09 23:25:05,546 INFO Tomcat initialized with port(s): 8848 (http)\n\n2022-01-09 23:25:08,188 INFO Tomcat started on port(s): 8848 (http) with context path '/nacos'\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("说明访问的地址是以"),t("code",[s._v("/nacos")]),s._v("开头的,端口为："),t("code",[s._v("8848")])]),s._v(" "),t("p",[s._v("访问网址："),t("a",{attrs:{href:"http://localhost:8848/nacos",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://localhost:8848/nacos"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("输入："),t("code",[s._v("nacos")]),s._v("用户名")]),s._v(" "),t("p",[s._v("密码："),t("code",[s._v("nacos")]),s._v("即可登录")]),s._v(" "),t("h2",{attrs:{id:"将微服务注册到-nacos-中"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#将微服务注册到-nacos-中"}},[s._v("#")]),s._v(" 将微服务注册到 nacos 中")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("首先，修改"),t("code",[s._v("pom.xml")]),s._v("文件，引入"),t("code",[s._v("Nacos Discovery Starter")]),s._v("，在"),t("code",[s._v("project-common")]),s._v("的的"),t("code",[s._v("pom.xml")]),s._v("文件引入，别的微服务引入"),t("code",[s._v("common")]),s._v("模块即可。")]),s._v(" "),t("div",{staticClass:"language-xml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-xml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("dependency")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("groupId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("com.alibaba.cloud"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("groupId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("artifactId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("spring-cloud-starter-alibaba-nacos-discovery"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("artifactId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("dependency")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("在应用的"),t("code",[s._v("/src/main/resources/application.yml")]),s._v("配置文件中配置"),t("code",[s._v("nacos-server")]),s._v("地址")]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spring")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("cloud")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("nacos")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("discovery")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("server-addr")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 127.0.0.1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8848")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("application")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 必须给当前服务起名字")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" member\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("使用"),t("code",[s._v("@EnableDiscoveryClient")]),s._v("注解开启服务注册发现功能")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("com"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("wxvirus"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("project"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("member")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("org"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("springframework"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("boot"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SpringApplication")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("org"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("springframework"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("boot"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("autoconfigure"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SpringBootApplication")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("org"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("springframework"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cloud"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("client"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("discovery"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("EnableDiscoveryClient")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@EnableDiscoveryClient")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@SpringBootApplication")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MemberApplication")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" args"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SpringApplication")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("run")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MemberApplication")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" args"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("启动应用，观察 nacos 服务列表是否有已经注册上的服务")]),s._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[s._v("注意必须写应用名称")]),s._v(" "),t("p",[s._v("每一个应用都应该有名字，这样才能注册上去")])])])]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("总结")]),s._v(" "),t("p",[s._v("Nacos 使用三步：")]),s._v(" "),t("ol",[t("li",[s._v("导包"),t("code",[s._v("nacos-discovery")])]),s._v(" "),t("li",[s._v("写配置，指定"),t("code",[s._v("nacos-server")]),s._v("地址，指定应用名字")]),s._v(" "),t("li",[s._v("开启服务注册发现功能："),t("code",[s._v("@EnableDiscoveryClient")])])])])])}),[],!1,null,null,null);a.default=e.exports}}]);