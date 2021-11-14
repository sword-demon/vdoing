(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{569:function(s,a,t){"use strict";t.r(a);var n=t(16),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"部署-alibaba-nacos-单机版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#部署-alibaba-nacos-单机版本"}},[s._v("#")]),s._v(" 部署 Alibaba Nacos 单机版本")]),s._v(" "),t("ul",[t("li",[s._v("下载地址："),t("a",{attrs:{href:"https://github.com/alibaba/nacos/releases",target:"_blank",rel:"noopener noreferrer"}},[s._v("nacos release 下载地址"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://nacos.io/zh-cn/index.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("nacos 官网"),t("OutboundLink")],1)])]),s._v(" "),t("p",[t("strong",[s._v("将下载的 gz 包进行解压缩")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zxvf nacos-server-2.0.0.tar.gz\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("strong",[s._v("进入 nacos 目录运行")])]),s._v(" "),t("p",[s._v("Linux/Unix/Mac")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" nacos/bin\n ./startup.sh -m standalone\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("Windows")]),s._v(" "),t("div",{staticClass:"language-powershell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[s._v("startup"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cmd "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("m standalone\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("jps "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看当前运行的进程")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("40595")]),s._v(" nacos-server.jar\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("57351")]),s._v(" Jps\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("出现上述的"),t("code",[s._v("nacos-server.jar")]),s._v("即可")]),s._v(" "),t("p",[s._v("到浏览器里输入 "),t("a",{attrs:{href:"127.0.0.1:8848/nacos"}},[s._v("127.0.0.1:8848/nacos")]),s._v("即可进行访问\n因为它的配置文件("),t("code",[s._v("nacos/conf/application.properties")]),s._v(")里")]),s._v(" "),t("div",{staticClass:"language-properties line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-properties"}},[t("code",[t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v(" server.servlet.contextPath")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("/nacos")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("所以需要访问的时候加上"),t("code",[s._v("nacos")]),s._v("结尾。")]),s._v(" "),t("p",[s._v("这里需要对配置文件进行小小的修改一下：")]),s._v(" "),t("div",{staticClass:"language-properties line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-properties"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v(" #*************** Config Module Related Configurations ***************#")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v(" ### If use MySQL as datasource:")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v(" spring.datasource.platform")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("mysql")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v(" ### Count of DB:")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v(" db.num")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("1")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v(" ### Connect URL of DB:")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v(" db.url.0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("jdbc:mysql://127.0.0.1:3306/nacos_config?characterEncoding=utf8&connectTimeout=1000&soc    ketTimeout=3000&autoReconnect=true&useUnicode=true&useSSL=false&serverTimezone=UTC")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v(" db.user.0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("root")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v(" db.password.0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("root")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[s._v("需要将"),t("code",[s._v("MySQL")]),s._v("的配置注释的地方进行删除，配置 nacos 的"),t("code",[s._v("MySQL")]),s._v("数据库名称为"),t("code",[s._v("nacos-config")]),s._v("，或者不改也行。其他的数据库的用户名和密码就按照各自的来。")]),s._v(" "),t("p",[t("code",[s._v("nacos")]),s._v("配置文件夹里也有案例的"),t("code",[s._v("sql")]),s._v("文件："),t("code",[s._v("schema.sql")]),s._v("、"),t("code",[s._v("nacos-mysql.sql")]),s._v("，数据库的里的表基本是来自于这两个"),t("code",[s._v("sql")]),s._v("，可以各自去对照着，如果你的数据库名称改了，也要相对于的进行修改一下。在去数据库里执行相关的"),t("code",[s._v("sql")]),s._v("。")]),s._v(" "),t("p",[s._v("如果能够访问"),t("code",[s._v("nacos")]),s._v("的网页了，我们进行一项测试，打开命名空间，添加一个你自己想要添加的命名空间，然后去数据库里输入以下查询命令查看是否添加成功。")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("COUNT")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" count "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("nacos_config"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("tenant_info"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("如果有内容了，说明你添加成功了。基础的配置到这里也就完成了。")])])}),[],!1,null,null,null);a.default=e.exports}}]);