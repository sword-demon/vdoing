(window.webpackJsonp=window.webpackJsonp||[]).push([[175],{615:function(s,a,t){"use strict";t.r(a);var n=t(16),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"安装-mongo-镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-mongo-镜像"}},[s._v("#")]),s._v(" 安装 mongo 镜像")]),s._v(" "),t("p",[s._v("可以搜索一下有什么适合你的版本的我这里下的是"),t("kbd",[s._v("4.4.7")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("docker search mongo\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("docker pull mongo:4.4.7\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"配置本地卷"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置本地卷"}},[s._v("#")]),s._v(" 配置本地卷")]),s._v(" "),t("p",[s._v("在你们合适的目录新建对应的进行映射的目录，我是在用户目录下新建了一个"),t("code",[s._v("mydata/mongo")]),s._v("文件夹，用于存储映射的一些相关的文件。")]),s._v(" "),t("p",[s._v("需要在目录下新建一个配置文件："),t("code",[s._v("mongod.conf")])]),s._v(" "),t("div",{staticClass:"language-conf line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('net:\n   port: 27017\n   bindIp: "0.0.0.0"\n\nstorage:\n   dbPath: "/data/db"\n\nsecurity:\n   authorization: enabled\n\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),t("p",[s._v("MacOS 无法使用"),t("code",[s._v("root")]),s._v("目录，所以我们需要换成其他的目录，别的系统的就算了。")])]),s._v(" "),t("h2",{attrs:{id:"创建容器运行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建容器运行"}},[s._v("#")]),s._v(" 创建容器运行")]),s._v(" "),t("blockquote",[t("p",[s._v("创建容器，为 MongoDB 分配 500M 内存")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("docker run -it -d --name mongo -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("27017")]),s._v(":27017 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-v /Users/yourname/mydata/mongo:/etc/mongo -m 500m "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MONGO_INITDB_ROOT_USERNAME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("admin "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MONGO_INITDB_ROOT_PASSWORD")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("admin "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("TZ")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Asia/Shanghai "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\nmongo:4.4.7 --config /etc/mongo/mongod.conf\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("ul",[t("li",[s._v("MONGO_INITDB_ROOT_USERNAME: 设置用户名")]),s._v(" "),t("li",[s._v("MONGO_INITDB_ROOT_PASSWORD: 设置密码")])]),s._v(" "),t("h2",{attrs:{id:"本地连接测试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#本地连接测试"}},[s._v("#")]),s._v(" 本地连接测试")]),s._v(" "),t("p",{attrs:{align:"center"}},[t("img",{attrs:{src:"https://gitee.com/wxvirus/img/raw/master/img/20220116231846.png",alt:"本地连接测试"}})]),s._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[s._v("注意主机名")]),s._v(" "),t("p",[s._v("先前我默认是"),t("code",[s._v("localhost")]),s._v("，出现错误，后来也换了我本机的"),t("code",[s._v("ip")]),s._v("地址进行测试，谁知道最后直接"),t("code",[s._v("127.0.0.1")]),s._v("就可以。")])])])}),[],!1,null,null,null);a.default=e.exports}}]);