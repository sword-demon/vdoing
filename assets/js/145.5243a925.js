(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{586:function(s,a,t){"use strict";t.r(a);var n=t(16),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"安装配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装配置"}},[s._v("#")]),s._v(" 安装配置")]),s._v(" "),t("p",[s._v("github 地址："),t("a",{attrs:{href:"https://github.com/laradock/laradock",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/laradock/laradock"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("文档、官网地址："),t("a",{attrs:{href:"http://laradock.io/",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://laradock.io/"),t("OutboundLink")],1)]),s._v(" "),t("ol",[t("li",[t("p",[s._v("克隆代码")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/Laradock/laradock.git\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("复制配置文件")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" .env.example .env\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("因为是 M1 系统，所以需要在"),t("code",[s._v("docker-compose.yml")]),s._v("中的"),t("code",[s._v("mysql")]),s._v("部分进行修改")]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("mysql")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" mysql"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("8.0.19\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("platform")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'linux/x86_64'")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("build")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("context")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ./mysql\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("args")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" MYSQL_VERSION=$"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("MYSQL_VERSION"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("environment")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" MYSQL_DATABASE=$"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("MYSQL_DATABASE"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" MYSQL_USER=$"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("MYSQL_USER"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" MYSQL_PASSWORD=$"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("MYSQL_PASSWORD"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" MYSQL_ROOT_PASSWORD=$"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("MYSQL_ROOT_PASSWORD"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" TZ=$"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("WORKSPACE_TIMEZONE"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" $"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("DATA_PATH_HOST"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("/mysql"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/var/lib/mysql\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" $"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("MYSQL_ENTRYPOINT_INITDB"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/docker"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("entrypoint"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("initdb.d\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'${MYSQL_PORT}:3306'")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("networks")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" backend\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("user")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" mysql\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("后面还可能因为网络问题，导致"),t("code",[s._v("Service php-fpm build failed")]),s._v("，修改"),t("code",[s._v("docker-compose.yml")])]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[s._v("WORKSPACE_TIMEZONE=UTC "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 换成 PRC")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("如果没有很好的访问国外"),t("code",[s._v("raw.github.com")]),s._v("类似的网址的，建议去"),t("code",[s._v("hosts")]),s._v("文件添加，如果有，那就另当别论。")])]),s._v(" "),t("li",[t("p",[s._v("启动容器 ，根据自己需要的镜像来启动")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("docker-compose up -d redis mysql nginx workspace\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("进行等待漫长的下载过程即可。")])])]),s._v(" "),t("p",[s._v("如果最后都有一个绿色的"),t("code",[s._v("done")]),s._v("显示，并且没有"),t("code",[s._v("error")]),s._v("，再使用"),t("code",[s._v("docker ps")]),s._v("查看运行的容器是否运行成功。")]),s._v(" "),t("p",[s._v("因为我们使用这个，仅仅需要一个"),t("code",[s._v("workspace")]),s._v("，所以我们需要进入"),t("code",[s._v("workspace")]),s._v("的控制台。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("docker-compose up "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" workspace "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("克隆一个 laravel 代码，默认克隆下来是最新的版本，我们需要切换到我们支持的版本上去。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/wxvirus/img/raw/master/img/20220221211556.png",alt:"文件映射关系"}})]),s._v(" "),t("p",[s._v("我这里目录放的有点草率了，导致当前上一级目录都被映射到容器内部去了，浪费了。所以你们需要找一个当前"),t("code",[s._v("laradock")]),s._v("目录上一级是个除了"),t("code",[s._v("laradock")]),s._v("以外没啥东西的地方去弄比较合适。")]),s._v(" "),t("h2",{attrs:{id:"laravel-配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#laravel-配置"}},[s._v("#")]),s._v(" Laravel 配置")]),s._v(" "),t("p",[s._v("我们需要配置"),t("code",[s._v("composer")]),s._v("使用阿里云镜像")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("composer")]),s._v(" config -g repo.packagist "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("composer")]),s._v(" https://mirrors.aliyun.com/composer/\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("复制一份环境配置文件")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" .env.example .env\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("安装 Laravel 需要的依赖")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("composer")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -vvv\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("等待下载安装完成即可。")]),s._v(" "),t("p",[s._v("还需要对"),t("code",[s._v(".env")]),s._v("的"),t("code",[s._v("key")]),s._v("进行配置，因为我们是直接拉取的一个代码，而不是使用"),t("code",[s._v("Laravel")]),s._v("的命令或者"),t("code",[s._v("composer")]),s._v("安装的")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" laravel\nphp artisan key:generate\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("配置完成之后，我们最终还是需要在网页进行访问的，所以还需要配置"),t("code",[s._v("nginx")])]),s._v(" "),t("blockquote",[t("p",[s._v("到我们的"),t("code",[s._v("laradock")]),s._v("目录下的"),t("code",[s._v("nginx")]),s._v("下的"),t("code",[s._v("sites")]),s._v("目录里有一个"),t("code",[s._v("laravel.conf.example")]),s._v("文件，我们进行复制一份，去除后面的"),t("code",[s._v(".example")]),s._v("即可。")])]),s._v(" "),t("p",[t("strong",[s._v("注意：")])]),s._v(" "),t("p",[s._v("此时我们的"),t("code",[s._v("nginx")]),s._v("配置文件中的案例，是指向的是对的，")]),s._v(" "),t("div",{staticClass:"language-nginx line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-nginx"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#server {")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    listen 80;")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    server_name laravel.com.co;")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    return 301 https://laravel.com.co$request_uri;")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("listen")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("listen")]),s._v(" [::]:80")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# For https")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# listen 443 ssl;")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# listen [::]:443 ssl ipv6only=on;")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ssl_certificate /etc/nginx/ssl/default.crt;")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ssl_certificate_key /etc/nginx/ssl/default.key;")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置虚拟域名")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server_name")]),s._v(" laravel.test")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 主要是这里，必须指向我们真确的目录")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("root")]),s._v(" /var/www/laravel/public")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("index")]),s._v(" index.php index.html index.htm")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v(" /")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n         "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("try_files")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$uri")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$uri")]),s._v("/ /index.php"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$is_args")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$args")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v(" ~ \\.php$")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("try_files")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$uri")]),s._v(" /index.php =404")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fastcgi_pass")]),s._v(" php-upstream")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fastcgi_index")]),s._v(" index.php")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fastcgi_buffers")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("16k")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fastcgi_buffer_size")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("32k")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fastcgi_param")]),s._v(" SCRIPT_FILENAME "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$document_root")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$fastcgi_script_name")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#fixes timeouts")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fastcgi_read_timeout")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("600")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("include")]),s._v(" fastcgi_params")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v(" ~ /\\.ht")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("deny")]),s._v(" all")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v(" /.well-known/acme-challenge/")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("root")]),s._v(" /var/www/letsencrypt/")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("log_not_found")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("off")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("error_log")]),s._v(" /var/log/nginx/laravel_error.log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("access_log")]),s._v(" /var/log/nginx/laravel_access.log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br"),t("span",{staticClass:"line-number"},[s._v("52")]),t("br")])]),t("p",[s._v("要想使得"),t("code",[s._v("nginx")]),s._v("生效，我们还得重新启动一下"),t("code",[s._v("nginx")])]),s._v(" "),t("p",[s._v("重启"),t("code",[s._v("nginx")]),s._v("的几种方式")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入到laradock目录")]),s._v("\ndocker-compose "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" nginx "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或者使用docker ps 查看容器的id")]),s._v("\ndocker-compose "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" 容器id "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或者直接在任意目录下使用docker重启")]),s._v("\ndocker restart 容器id\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h2",{attrs:{id:"配置虚拟域名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置虚拟域名"}},[s._v("#")]),s._v(" 配置虚拟域名")]),s._v(" "),t("p",[s._v("如上所述，我们配置了"),t("code",[s._v("http://laravel.test")]),s._v("的虚拟域名")]),s._v(" "),t("p",[s._v("我们在"),t("code",[s._v("Mac")]),s._v("中有一个软件："),t("code",[s._v("SwitchHosts")]),s._v("可以轻松做到。"),t("code",[s._v("Windows")]),s._v("下你们可以自己去找到"),t("code",[s._v("hosts")]),s._v("文件进行修改即可。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/wxvirus/img/raw/master/img/20220221215315.png",alt:"hosts"}})]),s._v(" "),t("p",[s._v("配置完成之后，我们尝试"),t("code",[s._v("ping")]),s._v("通一下")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ping")]),s._v(" laravel.test\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://gitee.com/wxvirus/img/raw/master/img/20220221215419.png",alt:"ping"}})]),s._v(" "),t("p",[s._v("我们在浏览器上访问是否可以")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/wxvirus/img/raw/master/img/20220221215526.png",alt:"访问通过"}})])])}),[],!1,null,null,null);a.default=e.exports}}]);