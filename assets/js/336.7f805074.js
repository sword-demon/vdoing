(window.webpackJsonp=window.webpackJsonp||[]).push([[336],{776:function(s,a,e){"use strict";e.r(a);var t=e(16),r=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"下载"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#下载"}},[s._v("#")]),s._v(" 下载")]),s._v(" "),e("p",[s._v("去"),e("code",[s._v("oracle")]),s._v("的官网去下载 JDK 即可，或者别的啥资源地址。")]),s._v(" "),e("h2",{attrs:{id:"linux-安装配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linux-安装配置"}},[s._v("#")]),s._v(" Linux 安装配置")]),s._v(" "),e("p",[s._v("通过 SFTP 或者 FTP 或者 SSH 连接到服务器将对应的 JDK 发送到服务器")]),s._v(" "),e("p",[s._v("例："),e("code",[s._v("jdk-8u202-linux-x64.tar.gz")])]),s._v(" "),e("p",[s._v("先进行解压")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zxvf jdk-8u202-linux-x64.tar.gz\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("解压完，对文件目录进行重新命名为简单的名称："),e("code",[s._v("jdk1.8")])]),s._v(" "),e("hr"),s._v(" "),e("p",[s._v("找到"),e("code",[s._v("/etc/profile")]),s._v("文件，以文本形式打开，新增三行代码")]),s._v(" "),e("div",{staticClass:"language-txt line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-txt"}},[e("code",[s._v("export JAVA_HOME=/root/jdk1.8\nexport PATH=$JAVA_HOME/bin:$PATH\nexport CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("然后更新到服务器上。")]),s._v(" "),e("p",[s._v("执行指令，让这三行生效")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" /etc/profile\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("输出"),e("code",[s._v("java -version")]),s._v("进行检测")])])}),[],!1,null,null,null);a.default=r.exports}}]);