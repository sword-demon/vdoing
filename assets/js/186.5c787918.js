(window.webpackJsonp=window.webpackJsonp||[]).push([[186],{628:function(a,s,e){"use strict";e.r(s);var t=e(16),n=Object(t.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h2",{attrs:{id:"安装-rabbitmq"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装-rabbitmq"}},[a._v("#")]),a._v(" 安装 RabbitMQ")]),a._v(" "),e("p",[a._v("拉取镜像")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("docker pull rabbitmq:3.8.9\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("创建容器，分配 300M 内存")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("docker run -it -d --name mq -m 300m "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n-p "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("4369")]),a._v(":4369 -p "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("5672")]),a._v(":5672 -p "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("15672")]),a._v(":15672 -p "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("25672")]),a._v(":25672 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n-e "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("TZ")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("Asia/Shanghai "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\nrabbitmq:3.8.9\n\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br")])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[a._v("注意")]),a._v(" "),e("p",[a._v("如果"),e("code",[a._v("docker pull rabbitmq")]),a._v("后面不带"),e("code",[a._v("management")]),a._v("，启动"),e("code",[a._v("rabbitmq")]),a._v("后是无法打开管理界面的，所以还是得下载带"),e("code",[a._v("management")]),a._v("插件的"),e("code",[a._v("rabbitmq")])]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("docker search rabbitmq:management\n\ndocker pull rabbitmq:management\n\ndocker images\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br")])])]),a._v(" "),e("h2",{attrs:{id:"创建容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建容器"}},[a._v("#")]),a._v(" 创建容器")]),a._v(" "),e("p",[e("code",[a._v("rabbitmq")]),a._v("需要有映射以下端口："),e("code",[a._v("5671")]),a._v("、"),e("code",[a._v("5672")]),a._v("、"),e("code",[a._v("4369")]),a._v("、"),e("code",[a._v("15671")]),a._v("、"),e("code",[a._v("15672")]),a._v("、"),e("code",[a._v("25672")])]),a._v(" "),e("ul",[e("li",[a._v("15672 (if management plugin is enabled)")]),a._v(" "),e("li",[a._v("15671 management 监听端口，前台浏览器的控制界面")]),a._v(" "),e("li",[a._v("5672 5671 (AMQP 0-9-1 without and with TLS)")]),a._v(" "),e("li",[a._v("4368(epmd) epmd 代表"),e("code",[a._v("Erlang")]),a._v("端口映射守护进程")]),a._v(" "),e("li",[a._v("25672 (Erlang distrubution)")])]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("docker run -d --hostname rabbit --name rabbit -e "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("RABBITMQ_DEFAULT_USER")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("admin -e "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("RABBITMQ_DEFAULT_PASS")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("admin -p "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("15672")]),a._v(":15672 -p "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("5672")]),a._v(":5672 rabbitmq:management\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("docker run -di --name"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("rabbit -e -p "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("5672")]),a._v(":5672 -p "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("5671")]),a._v(":5671 -p "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("4369")]),a._v(":4369 -p "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("15671")]),a._v(":15671 -p "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("15672")]),a._v(":15672 -p "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("25672")]),a._v(":25672 rabbitmq:management\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("blockquote",[e("p",[a._v("--hostname：设定容器的主机名，它会被写到容器内的 /etc/hostname 和 /etc/hosts，作为容器主机 IP 的别名，并且将显示在容器的 bash 中")]),a._v(" "),e("p",[a._v("-e 参数\nRABBITMQ_DEFAULT_USER 用户名\nRABBITMQ_DEFAULT_PASS 密码")]),a._v(" "),e("p",[a._v("不加则默认为 guest")])]),a._v(" "),e("p",[a._v("创建后，控制台出现一行字符串表示创建成功")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("docker "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("ps")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("查看运行中的容器")]),a._v(" "),e("h2",{attrs:{id:"访问"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#访问"}},[a._v("#")]),a._v(" 访问")]),a._v(" "),e("p",[e("code",[a._v("web")]),a._v("管理端")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("http://宿主机ip:15672\n\n用户和密码都是 guest\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br")])]),e("h2",{attrs:{id:"启动失败处理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#启动失败处理"}},[a._v("#")]),a._v(" 启动失败处理")]),a._v(" "),e("ul",[e("li",[a._v("使用"),e("code",[a._v("docker ps")]),a._v("查看"),e("code",[a._v("mq")]),a._v("是否启动成功")]),a._v(" "),e("li",[a._v("使用"),e("code",[a._v("docker ps -a")]),a._v("查看是否启动进程")]),a._v(" "),e("li",[a._v("如果都没有成功，则查看是否有镜像："),e("code",[a._v("docker images")])]),a._v(" "),e("li",[a._v("最后，可以使用"),e("code",[a._v("docker inspec 容器id/容器名称")]),a._v("查看是否有配置问题")]),a._v(" "),e("li",[e("code",[a._v("docker logs -f 容器id/容器名称")]),a._v("查看容器日志")])])])}),[],!1,null,null,null);s.default=n.exports}}]);