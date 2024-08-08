(window.webpackJsonp=window.webpackJsonp||[]).push([[213],{654:function(t,a,s){"use strict";s.r(a);var e=s(16),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"安装-mongo-镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装-mongo-镜像"}},[t._v("#")]),t._v(" 安装 mongo 镜像")]),t._v(" "),s("p",[t._v("可以搜索一下有什么适合你的版本的我这里下的是"),s("kbd",[t._v("4.4.7")])]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("docker search mongo\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("docker pull mongo:4.4.7\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h2",{attrs:{id:"配置本地卷"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置本地卷"}},[t._v("#")]),t._v(" 配置本地卷")]),t._v(" "),s("p",[t._v("在你们合适的目录新建对应的进行映射的目录，我是在用户目录下新建了一个"),s("code",[t._v("mydata/mongo")]),t._v("文件夹，用于存储映射的一些相关的文件。")]),t._v(" "),s("p",[t._v("需要在目录下新建一个配置文件："),s("code",[t._v("mongod.conf")])]),t._v(" "),s("div",{staticClass:"language-conf line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('net:\n   port: 27017\n   bindIp: "0.0.0.0"\n\nstorage:\n   dbPath: "/data/db"\n\nsecurity:\n   authorization: enabled\n\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br")])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("MacOS 无法使用"),s("code",[t._v("root")]),t._v("目录，所以我们需要换成其他的目录，别的系统的就算了。")])]),t._v(" "),s("h2",{attrs:{id:"创建容器运行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建容器运行"}},[t._v("#")]),t._v(" 创建容器运行")]),t._v(" "),s("blockquote",[s("p",[t._v("创建容器，为 MongoDB 分配 500M 内存")])]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("docker run -it -d --name mongo -p "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("27017")]),t._v(":27017 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-v /Users/yourname/mydata/mongo:/etc/mongo -m 500m "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-e "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("MONGO_INITDB_ROOT_USERNAME")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("admin "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-e "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("MONGO_INITDB_ROOT_PASSWORD")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("admin "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-e "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("TZ")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Asia/Shanghai "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\nmongo:4.4.7 --config /etc/mongo/mongod.conf\n\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("ul",[s("li",[t._v("MONGO_INITDB_ROOT_USERNAME: 设置用户名")]),t._v(" "),s("li",[t._v("MONGO_INITDB_ROOT_PASSWORD: 设置密码")])]),t._v(" "),s("h2",{attrs:{id:"本地连接测试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#本地连接测试"}},[t._v("#")]),t._v(" 本地连接测试")]),t._v(" "),s("p",{attrs:{align:"center"}},[s("img",{attrs:{src:"https://gitee.com/wxvirus/img/raw/master/img/20220116231846.png",alt:"本地连接测试"}})]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("注意主机名")]),t._v(" "),s("p",[t._v("先前我默认是"),s("code",[t._v("localhost")]),t._v("，出现错误，后来也换了我本机的"),s("code",[t._v("ip")]),t._v("地址进行测试，谁知道最后直接"),s("code",[t._v("127.0.0.1")]),t._v("就可以。")])]),t._v(" "),s("h2",{attrs:{id:"mongo-语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mongo-语法"}},[t._v("#")]),t._v(" Mongo 语法")]),t._v(" "),s("blockquote",[s("p",[t._v("MySQL 和 Mongo 的对比")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("SQL")]),t._v(" "),s("th",[t._v("Mongo")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("表 Table")]),t._v(" "),s("td",[t._v("集合 Collection")])]),t._v(" "),s("tr",[s("td",[t._v("行 Row")]),t._v(" "),s("td",[t._v("文档 Document")])]),t._v(" "),s("tr",[s("td",[t._v("列 Col")]),t._v(" "),s("td",[t._v("字段 Field")])]),t._v(" "),s("tr",[s("td",[t._v("主键 Primary Key")]),t._v(" "),s("td",[t._v("对象 ID ObjectId")])])])]),t._v(" "),s("blockquote",[s("p",[t._v("数据库操作")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("创建数据库")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("Use demo")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("查看数据库")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("show dbs")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("删除数据库")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("db.dropDatabase()")])])])]),t._v(" "),s("blockquote",[s("p",[t._v("集合操作")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("创建集合")]),t._v(" "),s("th",[t._v("db.createCollection(name)")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("查看集合")]),t._v(" "),s("td",[t._v("show collections")])]),t._v(" "),s("tr",[s("td",[t._v("删除集合")]),t._v(" "),s("td",[t._v("db.collection.drop()")])])])]),t._v(" "),s("blockquote",[s("p",[t._v("文档操作")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("创建文档")]),t._v(" "),s("th",[t._v("db.collection.insertOne({}) db.collection.insertMany([])")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("查看文档")]),t._v(" "),s("td",[t._v("db.collections.find({})")])]),t._v(" "),s("tr",[s("td",[t._v("删除文档")]),t._v(" "),s("td",[t._v("db.collection.deleteOne() db.collection.deleteMany()")])]),t._v(" "),s("tr",[s("td",[t._v("更新文档")]),t._v(" "),s("td",[t._v("db.collection.update({}, {}, false, true)")])])])]),t._v(" "),s("blockquote",[s("p",[t._v("条件操作")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("大于")]),t._v(" "),s("th",[t._v("$gt")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("小于")]),t._v(" "),s("td",[t._v("$lt")])]),t._v(" "),s("tr",[s("td",[t._v("大于等于")]),t._v(" "),s("td",[t._v("$gte")])]),t._v(" "),s("tr",[s("td",[t._v("小于等于")]),t._v(" "),s("td",[t._v("$lte")])])])])])}),[],!1,null,null,null);a.default=n.exports}}]);