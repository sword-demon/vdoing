(window.webpackJsonp=window.webpackJsonp||[]).push([[205],{646:function(s,a,t){"use strict";t.r(a);var e=t(16),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"下载镜像文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载镜像文件"}},[s._v("#")]),s._v(" 下载镜像文件")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" docker pull mysql:5.7\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("等待下载完成即可")]),s._v(" "),t("p",[s._v("下载完成后，使用"),t("code",[s._v("docker info")]),s._v("或者"),t("code",[s._v("docker images")]),s._v("来查看是否下载成功。")]),s._v(" "),t("h2",{attrs:{id:"创建实例并启动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建实例并启动"}},[s._v("#")]),s._v(" 创建实例并启动")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" docker run -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3306")]),s._v(":3306 --name mysql "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-v /mydata/mysql/log:/var/log/mysql "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-v /mydata/mysql/data:/var/lib/mysql "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-v /mydata/mysql/conf:/etc/mysql "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MYSQL_ROOT_PASSWORD")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("root "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-d mysql:5.7\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",{attrs:{align:"center"}},[t("img",{attrs:{src:"https://gitee.com/wxvirus/img/raw/master/img/20220110001837.png",alt:"参数说明"}})]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("sudo 问题")]),s._v(" "),t("p",[s._v("如果我们连续使用"),t("code",[s._v("sudo")]),s._v("加上，会嫌比较麻烦，我们可以切换到"),t("code",[s._v("root")]),s._v("用户，且密码和"),t("code",[s._v("vagrant")]),s._v("一样")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" root\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 输入 vagrant 即可")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("我这个是用"),t("code",[s._v("vagrant")]),s._v("创建的"),t("code",[s._v("centos7")]),s._v("虚拟机，如果是正常的服务器，可以不必这样。")])]),s._v(" "),t("hr"),s._v(" "),t("p",[t("code",[s._v("mysql")]),s._v("容器运行后，我们查看是否运行成功：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("docker "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("可以查看正在运行的容器。")]),s._v(" "),t("p",[s._v("我们使用本地数据库连接工具进行连接测试，连接地址为我们先前设置的虚拟机的"),t("code",[s._v("ip")]),s._v("地址即可。")]),s._v(" "),t("hr"),s._v(" "),t("p",[s._v("我们可以进入容器交互的内部：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("docker "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it 可以写容器的id/或者容器名称 /bin/bash\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("可以进入到容器内部的控制台，我们可以查看"),t("code",[s._v("mysql")]),s._v("安装在哪里：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("whereis")]),s._v(" mysql\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("mysql: /user/bin/mysql /user/lib/mysql /etc/mysql /user/share/mysql\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("可以看到以上的一些目录。")]),s._v(" "),t("h2",{attrs:{id:"配置-mysql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置-mysql"}},[s._v("#")]),s._v(" 配置 mysql")]),s._v(" "),t("p",[s._v("因为 mysql 内部配置的本身是没有"),t("code",[s._v("my.cnf")]),s._v("存在的，但是我们挂载的时候，就需要在我们本地创建一个对应的目录和配置文件，我们在外部的挂载的配置进行修改即可，就会同步 docker 的 mysql 修改。")]),s._v(" "),t("p",[t("code",[s._v("vim /mydata/mysql/conf/my.cnf")])]),s._v(" "),t("div",{staticClass:"language-ini line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-ini"}},[t("code",[t("span",{pre:!0,attrs:{class:"token header"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token section-name selector"}},[s._v("client")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("default-character-set")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("utf8")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token header"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token section-name selector"}},[s._v("mysql")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("default-character-set")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("utf8")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token header"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token section-name selector"}},[s._v("mysqld")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("init_connect")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("'"),t("span",{pre:!0,attrs:{class:"token inner-value"}},[s._v("SET collation_connection = utf8_unicode_ci")]),s._v("'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("init_connect")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("'"),t("span",{pre:!0,attrs:{class:"token inner-value"}},[s._v("SET NAMES utf8")]),s._v("'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("character-set-server")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("utf8")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("collation-server")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("utf8_unicode_ci")]),s._v("\nskip-character-set-client-handshake\nskip-name-resolve\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("p",[s._v("修改完之后，需要输入"),t("code",[s._v(":wq")]),s._v("保存退出并且重启"),t("code",[s._v("mysql")]),s._v("服务")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("docker restart mysql\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"配置自动启动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置自动启动"}},[s._v("#")]),s._v(" 配置自动启动")]),s._v(" "),t("blockquote",[t("p",[s._v("我们开发的时候，虚拟机开启的时候，docker 也不会自动启动，更别说 docker 的 mysql 容器也自动启动了。所以我们需要配置一下。")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" docker update mysql --restart"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("always\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("设置 mysql 在 docker 启动的时候就会自动重启。")]),s._v(" "),t("h2",{attrs:{id:"本地连接问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#本地连接问题"}},[s._v("#")]),s._v(" 本地连接问题")]),s._v(" "),t("blockquote",[t("p",[s._v("Docker 启动 mysql 和配置远程登录，错误 ERROR 1130: Host '....' is not allowed to connect to this MySQL server")])]),s._v(" "),t("p",[s._v("主要是"),t("code",[s._v("mysql")]),s._v("没有授权远程登录。")]),s._v(" "),t("p",[s._v("我们使用")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("docker "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it 可以写容器的id/或者容器名称 /bin/bash\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("进入到容器内部，在容器内部登录"),t("code",[s._v("mysql")]),s._v("，授权用户可以远程登录，密码是"),t("code",[s._v("root")]),s._v("，你们是啥密码和是啥用户就改成对应的用户和密码即可。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("grant all privileges on *.* to root@"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%"')]),s._v(" identified by "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"root"')]),s._v(" with grant option"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nflush privileges"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("这样就可以远程登录"),t("code",[s._v("mysql")]),s._v("了。")]),s._v(" "),t("hr"),s._v(" "),t("p",[s._v("或者登录"),t("code",[s._v("mysql")]),s._v("成功之后，可以使用以下命令来实现，比较简单。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("use mysql"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nupdate user "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("host")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%'")]),s._v(" where "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("user")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("div",{staticClass:"custom-block danger"},[t("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),t("p",[s._v("如果删除容器，就无法连接了。")])])])}),[],!1,null,null,null);a.default=n.exports}}]);