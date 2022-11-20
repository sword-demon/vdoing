(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{540:function(s,a,t){"use strict";t.r(a);var n=t(16),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"压测相关术语"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#压测相关术语"}},[s._v("#")]),s._v(" 压测相关术语")]),s._v(" "),t("ul",[t("li",[s._v("响应时间(RT)：指系统对请求作出响应的时间")]),s._v(" "),t("li",[s._v("吞吐量(Throughput)：指系统在单位时间内处理请求的数量")]),s._v(" "),t("li",[s._v("QPS每秒查询率(Query Per Second)：是每一台服务器每秒能够响应的查询次数，是对一个特定的查询服务器在规定时间内所处理流量多少的衡量标准")]),s._v(" "),t("li",[s._v("TPS(TransactionPerSecond)：每秒钟系统能够处理的交易或事务的数量")]),s._v(" "),t("li",[s._v("并发连接数：某个时刻服务器所接受的请求总数")])]),s._v(" "),t("h2",{attrs:{id:"压力测试工具"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#压力测试工具"}},[s._v("#")]),s._v(" 压力测试工具")]),s._v(" "),t("blockquote",[t("p",[s._v("ab")]),s._v(" "),t("p",[s._v("全称："),t("code",[s._v("Apache Bench")]),s._v("，是"),t("code",[s._v("Apache")]),s._v("自带的性能测试工具。只需指定连接数、请求数以及URL，即可测试网站或网站程序的性能。")])]),s._v(" "),t("p",[s._v("命令格式：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("ab "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("options"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("http://"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("hostname"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(":port"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("/path\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("常用参数如下：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("-n requests 总请求数\n-c concurrency 一次产生的请求数，可以理解为并发数\n-t timelimit 测试锁进行的最大秒数，请求的超时时间\n-p postfile 包含了需要post的数据的文件\n-T content-type POST数据所使用的Content-Type头信息\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("案例")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("ab -n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10000")]),s._v(" -c "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v(" -t "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://127.0.0.1:8080/api/v1/posts?page=1"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("测试post请求接口")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("ab -n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10000")]),s._v(" -c "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v(" -t "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" -p post.json -T "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"application/json"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://127.0.0.1:8080/api/v1/post"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("Mac安装")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("brew "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" ab\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("blockquote",[t("p",[s._v("Windows好像有点费劲。")])])])}),[],!1,null,null,null);a.default=e.exports}}]);