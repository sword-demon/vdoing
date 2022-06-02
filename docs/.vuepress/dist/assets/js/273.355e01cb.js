(window.webpackJsonp=window.webpackJsonp||[]).push([[273],{715:function(s,a,n){"use strict";n.r(a);var t=n(16),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"部署-alibaba-nacos-单机版本"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#部署-alibaba-nacos-单机版本"}},[s._v("#")]),s._v(" 部署 Alibaba Nacos 单机版本")]),s._v(" "),n("ul",[n("li",[s._v("下载地址："),n("a",{attrs:{href:"https://github.com/alibaba/nacos/releases",target:"_blank",rel:"noopener noreferrer"}},[s._v("nacos release 下载地址"),n("OutboundLink")],1)]),s._v(" "),n("li",[n("a",{attrs:{href:"https://nacos.io/zh-cn/index.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("nacos 官网"),n("OutboundLink")],1)])]),s._v(" "),n("p",[n("strong",[s._v("将下载的 gz 包进行解压缩")])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zxvf nacos-server-2.0.0.tar.gz\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[n("strong",[s._v("进入 nacos 目录运行")])]),s._v(" "),n("p",[s._v("Linux/Unix/Mac")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" nacos/bin\n ./startup.sh -m standalone\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("Windows")]),s._v(" "),n("div",{staticClass:"language-powershell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-powershell"}},[n("code",[s._v("startup"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cmd "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("m standalone\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("jps "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看当前运行的进程")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("40595")]),s._v(" nacos-server.jar\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("57351")]),s._v(" Jps\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("出现上述的"),n("code",[s._v("nacos-server.jar")]),s._v("即可")]),s._v(" "),n("p",[s._v("到浏览器里输入 "),n("a",{attrs:{href:"127.0.0.1:8848/nacos"}},[s._v("127.0.0.1:8848/nacos")]),s._v("即可进行访问\n因为它的配置文件("),n("code",[s._v("nacos/conf/application.properties")]),s._v(")里")]),s._v(" "),n("div",{staticClass:"language-properties line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-properties"}},[n("code",[n("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v(" server.servlet.contextPath")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("/nacos")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("所以需要访问的时候加上"),n("code",[s._v("nacos")]),s._v("结尾。")]),s._v(" "),n("p",[s._v("这里需要对配置文件进行小小的修改一下：")]),s._v(" "),n("div",{staticClass:"language-properties line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-properties"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v(" #*************** Config Module Related Configurations ***************#")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v(" ### If use MySQL as datasource:")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v(" spring.datasource.platform")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("mysql")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v(" ### Count of DB:")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v(" db.num")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("1")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v(" ### Connect URL of DB:")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v(" db.url.0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("jdbc:mysql://127.0.0.1:3306/nacos_config?characterEncoding=utf8&connectTimeout=1000&soc    ketTimeout=3000&autoReconnect=true&useUnicode=true&useSSL=false&serverTimezone=UTC")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v(" db.user.0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("root")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v(" db.password.0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("root")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("p",[s._v("需要将"),n("code",[s._v("MySQL")]),s._v("的配置注释的地方进行删除，配置 nacos 的"),n("code",[s._v("MySQL")]),s._v("数据库名称为"),n("code",[s._v("nacos-config")]),s._v("，或者不改也行。其他的数据库的用户名和密码就按照各自的来。")]),s._v(" "),n("p",[n("code",[s._v("nacos")]),s._v("配置文件夹里也有案例的"),n("code",[s._v("sql")]),s._v("文件："),n("code",[s._v("schema.sql")]),s._v("、"),n("code",[s._v("nacos-mysql.sql")]),s._v("，数据库的里的表基本是来自于这两个"),n("code",[s._v("sql")]),s._v("，可以各自去对照着，如果你的数据库名称改了，也要相对于的进行修改一下。在去数据库里执行相关的"),n("code",[s._v("sql")]),s._v("。")]),s._v(" "),n("p",[s._v("如果能够访问"),n("code",[s._v("nacos")]),s._v("的网页了，我们进行一项测试，打开命名空间，添加一个你自己想要添加的命名空间，然后去数据库里输入以下查询命令查看是否添加成功。")]),s._v(" "),n("div",{staticClass:"language-sql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("COUNT")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" count "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("nacos_config"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("tenant_info"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("如果有内容了，说明你添加成功了。基础的配置到这里也就完成了。")]),s._v(" "),n("h2",{attrs:{id:"nacos-集群部署方式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nacos-集群部署方式"}},[s._v("#")]),s._v(" Nacos 集群部署方式")]),s._v(" "),n("p",[s._v("进入到"),n("code",[s._v("nacos/conf")]),s._v("文件夹，新建"),n("code",[s._v("cluster.conf")]),s._v("文件，并填充内容")]),s._v(" "),n("div",{staticClass:"language-txt line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-txt"}},[n("code",[s._v("172.16.3.41:8848\n172.16.3.41:8858\n172.16.3.41:8868\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[n("code",[s._v("ip")]),s._v("是你的本机的 ip 即可")]),s._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),n("p",[s._v("集群必须要使用"),n("code",[s._v("MySQL(可以是 PG 或者是其他数据库)")]),s._v("作为持久化的方式，因为需要能够访问到同一个数据源。")])]),s._v(" "),n("p",[s._v("我们在下载的"),n("code",[s._v("nacos")]),s._v("外面，复制出来 3 份"),n("code",[s._v("nacos")]),s._v("分别起名为不同的端口为后缀")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" -p -r ./nacos nacos-8848\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" -p -r ./nacos nacos-8858\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" -p -r ./nacos nacos-8868\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("分别去对应的文件夹内的"),n("code",[s._v("nacos-端口/conf/application.properties")]),s._v("修改端口号")]),s._v(" "),n("p",[s._v("启动三个"),n("code",[s._v("nacos")]),s._v("，不带任何参数标识集群启动")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("./nacos-8848/bin/startup.sh\n./nacos-8858/bin/startup.sh\n./nacos-8868/bin/startup.sh\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);