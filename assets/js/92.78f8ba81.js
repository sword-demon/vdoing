(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{535:function(s,a,t){"use strict";t.r(a);var n=t(16),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"快速使用-docker-部署单机-rabbitmq、go-客户端"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#快速使用-docker-部署单机-rabbitmq、go-客户端"}},[s._v("#")]),s._v(" 快速使用 docker 部署单机 RabbitMQ、Go 客户端")]),s._v(" "),t("h2",{attrs:{id:"使用-docker-部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-docker-部署"}},[s._v("#")]),s._v(" 使用 docker 部署")]),s._v(" "),t("p",[t("code",[s._v("docker")]),s._v("镜像地址："),t("a",{attrs:{href:"https://hub.docker.com/_/rabbitmq",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://hub.docker.com/_/rabbitmq"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("通常带有："),t("code",[s._v("DOCKER OFFICIAL IMAGE")]),s._v("的都代表是对应的官方镜像")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("docker pull rabbitmq:3.8-management-apline\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),t("p",[t("code",[s._v("management")]),s._v("代表是有带管理后台的。")]),s._v(" "),t("p",[s._v("最新版")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("docker pull rabbitmq:3.11.5-management-alpine\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("h3",{attrs:{id:"启动容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动容器"}},[s._v("#")]),s._v(" 启动容器")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("docker run -d --name rmq "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("RABBITMQ_DEFAULT_USER")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("wxviurs "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("RABBITMQ_DEFAULT_PASS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("123")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8082")]),s._v(":15672 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5672")]),s._v(":5672 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\nrabbitmq:3.11.5-management-alpine\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("ul",[t("li",[s._v("15672 是管理端的端口")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://virusoss.oss-cn-shanghai.aliyuncs.com/images/image-20230106233656794.png",alt:"image-20230106233656794"}})]),s._v(" "),t("div",{staticClass:"custom-block danger"},[t("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),t("p",[s._v("此时如果你有开启什么科学上网，请关闭，否则本地会访问不到")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://virusoss.oss-cn-shanghai.aliyuncs.com/images/image-20230106234127444.png",alt:"image-20230106234127444"}})]),s._v(" "),t("h2",{attrs:{id:"go-客户端库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#go-客户端库"}},[s._v("#")]),s._v(" go 客户端库")]),s._v(" "),t("p",[s._v("GitHub 地址："),t("a",{attrs:{href:"https://github.com/streadway/amqp",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/streadway/amqp"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("使用文档："),t("a",{attrs:{href:"https://github.com/rabbitmq/rabbitmq-tutorials/tree/main/go",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/rabbitmq/rabbitmq-tutorials/tree/main/go"),t("OutboundLink")],1)]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("go get github.com/streadway/amqp\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("code",[s._v("main.go")])]),s._v(" "),t("div",{staticClass:"language-go line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-go"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" main\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fmt"')]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"github.com/streadway/amqp"')]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"log"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\tdsn "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" fmt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Sprintf")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"amqp://%s:%s@%s:%d"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"wxviurs"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"123"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"127.0.0.1"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5672")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\tconn"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" err "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" amqp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Dial")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("dsn"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" err "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("nil")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\tlog"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Fatalln")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("err"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("defer")]),s._v(" conn"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Close")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("p",[s._v("直接运行无报错即可")]),s._v(" "),t("p",[s._v("使用"),t("code",[s._v("docker logs rmq")]),s._v("查看日志")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://virusoss.oss-cn-shanghai.aliyuncs.com/images/image-20230106235203948.png",alt:"image-20230106235203948"}})]),s._v(" "),t("p",[s._v("代表有客户端进行连接成功")]),s._v(" "),t("h2",{attrs:{id:"简单-demo-草图"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简单-demo-草图"}},[s._v("#")]),s._v(" 简单 demo 草图")]),s._v(" "),t("div",{staticClass:"language-mermaid line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-mermaid"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("graph")]),s._v(" TD"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\tA"),t("span",{pre:!0,attrs:{class:"token text string"}},[s._v("(生产者譬如你的API-Producer)")]),s._v("\n\tB"),t("span",{pre:!0,attrs:{class:"token text string"}},[s._v("(channel-1)")]),s._v("\n\tC"),t("span",{pre:!0,attrs:{class:"token text string"}},[s._v("(channel-2)")]),s._v("\n\tD"),t("span",{pre:!0,attrs:{class:"token text string"}},[s._v("(exchange)")]),s._v("\n\tE"),t("span",{pre:!0,attrs:{class:"token text string"}},[s._v("(Queue-1)")]),s._v("\n\tF"),t("span",{pre:!0,attrs:{class:"token text string"}},[s._v("(Queue-2)")]),s._v("\n\tG"),t("span",{pre:!0,attrs:{class:"token text string"}},[s._v("(Queue-3)")]),s._v("\n\tH"),t("span",{pre:!0,attrs:{class:"token text string"}},[s._v("(channel-1)")]),s._v("\n\tI"),t("span",{pre:!0,attrs:{class:"token text string"}},[s._v("(channel-2)")]),s._v("\n\tJ"),t("span",{pre:!0,attrs:{class:"token text string"}},[s._v("(channel-3)")]),s._v("\n\tK"),t("span",{pre:!0,attrs:{class:"token text string"}},[s._v("(Consumer)")]),s._v("\n\tA "),t("span",{pre:!0,attrs:{class:"token arrow operator"}},[s._v("--\x3e")]),s._v(" B\n\tA "),t("span",{pre:!0,attrs:{class:"token arrow operator"}},[s._v("--\x3e")]),s._v(" C\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("subgraph")]),s._v(" channels-1\n\tB\n\tC\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n\tB "),t("span",{pre:!0,attrs:{class:"token arrow operator"}},[s._v("--\x3e")]),s._v(" D\n\tC "),t("span",{pre:!0,attrs:{class:"token arrow operator"}},[s._v("--\x3e")]),s._v(" D\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("subgraph")]),s._v(" 绑定 binding\n\tD "),t("span",{pre:!0,attrs:{class:"token arrow operator"}},[s._v("--\x3e")]),s._v(" E\n\tD "),t("span",{pre:!0,attrs:{class:"token arrow operator"}},[s._v("--\x3e")]),s._v(" F\n\tD "),t("span",{pre:!0,attrs:{class:"token arrow operator"}},[s._v("--\x3e")]),s._v(" G\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n\n\tE "),t("span",{pre:!0,attrs:{class:"token arrow operator"}},[s._v("--\x3e")]),s._v(" H\n\tF "),t("span",{pre:!0,attrs:{class:"token arrow operator"}},[s._v("--\x3e")]),s._v(" I\n\tG "),t("span",{pre:!0,attrs:{class:"token arrow operator"}},[s._v("--\x3e")]),s._v(" J\n\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("subgraph")]),s._v(" channels-2\n\tH\n\tI\n\tJ\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n\tH "),t("span",{pre:!0,attrs:{class:"token arrow operator"}},[s._v("--\x3e")]),s._v(" K\n\tI "),t("span",{pre:!0,attrs:{class:"token arrow operator"}},[s._v("--\x3e")]),s._v(" K\n\tJ "),t("span",{pre:!0,attrs:{class:"token arrow operator"}},[s._v("--\x3e")]),s._v(" K\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br")])]),t("ol",[t("li",[s._v("生产者创建"),t("code",[s._v("channel")]),s._v("发生消息给"),t("code",[s._v("ExChange")])]),s._v(" "),t("li",[t("code",[s._v("ExChange")]),s._v("（多种交换机）根据策略"),t("code",[s._v("binding")]),s._v("队列进行消息投递")]),s._v(" "),t("li",[s._v("队列具有推、拉模式")]),s._v(" "),t("li",[s._v("消费者使用"),t("code",[s._v("channel")]),s._v("获取消息，并确认接收或拒绝，重新入列给别的消费者")]),s._v(" "),t("li",[s._v("消费者和生产者都可能有多个")])])])}),[],!1,null,null,null);a.default=e.exports}}]);