(window.webpackJsonp=window.webpackJsonp||[]).push([[314],{753:function(s,t,a){"use strict";a.r(t);var n=a(16),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"springboot-配置文件-自定义配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#springboot-配置文件-自定义配置"}},[s._v("#")]),s._v(" springboot 配置文件(自定义配置)")]),s._v(" "),a("h2",{attrs:{id:"配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置文件"}},[s._v("#")]),s._v(" 配置文件")]),s._v(" "),a("p",[a("code",[s._v("spring")]),s._v("能自动识别"),a("code",[s._v("resources")]),s._v("目录下的"),a("code",[s._v(".properties")]),s._v("、"),a("code",[s._v(".yml")]),s._v("，以及"),a("code",[s._v("resources/config")]),s._v("目录下的相关配置文件。")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://toyaml.com/index.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("yaml 文件转换工具"),a("OutboundLink")],1)]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),a("p",[a("code",[s._v("bootstrap.yml/properties")]),s._v("单个"),a("code",[s._v("SpringBoot")]),s._v("不会读取"),a("code",[s._v("bootstrap")]),s._v("配置，要"),a("code",[s._v("SpringCloud")]),s._v("架构下的"),a("code",[s._v("SpringBoot")]),s._v("应用才会读。")]),s._v(" "),a("p",[a("code",[s._v("bootstrap")]),s._v("一般是用于动态配置，线上可以实时修改实时生效的配置，一般可配合上"),a("code",[s._v("nacos")]),s._v("使用。")])]),s._v(" "),a("blockquote",[a("p",[s._v("这里会有一个疑问？哪个配置文件的优先级会比较高呢？")]),s._v(" "),a("p",[s._v("可以自己尝试测试：都把注释打开，设置不同的端口，看看最终运行的是哪一个。")])]),s._v(" "),a("p",[s._v("我自己测试下来，好像是："),a("code",[s._v("resources/config/application.properties")]),s._v("文件配置优先级比较高。")]),s._v(" "),a("blockquote",[a("p",[a("strong",[s._v("但是呢，如果"),a("code",[s._v("config")]),s._v("目录下也有"),a("code",[s._v("yml")]),s._v("文件，则是以"),a("code",[s._v("yml")]),s._v("配置为优先")])])]),s._v(" "),a("h2",{attrs:{id:"自定义配置项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义配置项"}},[s._v("#")]),s._v(" 自定义配置项")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 自定义配置项")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("hello")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" hello\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("div",{staticClass:"language-properties line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("test.hello")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("hello")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("我们在类里如何获取配置项的内容呢：")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("org"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("springframework"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("beans"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("factory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("annotation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("org"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("springframework"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("web"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("bind"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("annotation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RequestMapping")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("org"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("springframework"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("web"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("bind"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("annotation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RestController")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@RestController")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TestController")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"${test.hello:TEST}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" testHello"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@RequestMapping")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/hello"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("hello")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello world"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" testHello"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("blockquote",[a("p",[s._v("使用"),a("code",[s._v("@Value()")]),s._v("注解，里面填入变量，变量使用"),a("code",[s._v("${}")]),s._v("方式，填入配置项的字符串即可。")])]),s._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[s._v("生产环境容易忘记配置")]),s._v(" "),a("p",[s._v("到了生产环境的时候，我们可能在配置中心忘记配置有关的配置项，我们则需要在"),a("code",[s._v("@Value")]),s._v("注解中加上"),a("code",[s._v(":默认值")]),s._v("即可，如："),a("code",[s._v('@Value("${test.hello:TEST}")')]),s._v("，当没有配置值的时候就会读取默认值。")])]),s._v(" "),a("h2",{attrs:{id:"同一目录下的application和bootstrap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#同一目录下的application和bootstrap"}},[s._v("#")]),s._v(" 同一目录下的"),a("code",[s._v("application")]),s._v("和"),a("code",[s._v("bootstrap")])]),s._v(" "),a("ul",[a("li",[a("code",[s._v("bootstrap")]),s._v("优先级高于"),a("code",[s._v("application")]),s._v("，优先被加载")]),s._v(" "),a("li",[a("code",[s._v("bootstrap")]),s._v("用于应用程序上下文的引导阶段，由父"),a("code",[s._v("ApplicationContext")]),s._v("加载")]),s._v(" "),a("li",[a("code",[s._v("bootstrap")]),s._v("是系统级别的配置(不变的参数)，"),a("code",[s._v("application")]),s._v("是应用级别的配置")])]),s._v(" "),a("h2",{attrs:{id:"不同位置的配置文件加载顺序-优先级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不同位置的配置文件加载顺序-优先级"}},[s._v("#")]),s._v(" 不同位置的配置文件加载顺序(优先级)")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("file")]),s._v("："),a("code",[s._v("./config/")]),s._v(" 优先级最高(项目根路径下的"),a("code",[s._v("config")]),s._v(")")]),s._v(" "),a("li",[a("code",[s._v("file")]),s._v("："),a("code",[s._v("./")]),s._v(" 优先级第二(项目根路径下)")]),s._v(" "),a("li",[a("code",[s._v("classpath:/config")]),s._v(" 优先级第三(项目"),a("code",[s._v("resources/config")]),s._v("下)")]),s._v(" "),a("li",[a("code",[s._v("classpath:/")]),s._v(" 优先级第四(项目"),a("code",[s._v("resources")]),s._v("目录下)")])]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),a("p",[a("strong",[s._v("高优先级覆盖低优先级相同配置")])]),s._v(" "),a("p",[a("strong",[s._v("多个配置文件互补")])])]),s._v(" "),a("h2",{attrs:{id:"配置测试-生产环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置测试-生产环境"}},[s._v("#")]),s._v(" 配置测试，生产环境")]),s._v(" "),a("p",[a("code",[s._v("application.yml")])]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spring")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("profiles")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指明使用什么环境")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("active")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" dev\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("server")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8000")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[a("code",[s._v("application-dev.yml")])]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("server")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("servlet")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("context-path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" /dev\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[a("code",[s._v("application-prod.yml")])]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("server")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("servlet")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("context-path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" /prod\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);