(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{579:function(s,a,t){"use strict";t.r(a);var e=t(16),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"运行-docker-的开始文档"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#运行-docker-的开始文档"}},[s._v("#")]),s._v(" 运行 Docker 的开始文档")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("docker run -d -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8000")]),s._v(":80 docker/getting-started\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("这样就可以在本地进行访问地址："),t("code",[s._v("127.0.0.1:8000")]),s._v(","),t("a",{attrs:{href:"127.0.0.1:8000"}},[s._v("127.0.0.1:8000")])]),s._v(" "),t("p",[s._v("打开运行后的界面如下")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/wxvirus/img/raw/master/img/20220201231607.png",alt:"getting-started"}})]),s._v(" "),t("h2",{attrs:{id:"制作镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#制作镜像"}},[s._v("#")]),s._v(" 制作镜像")]),s._v(" "),t("p",[s._v("这边有一个"),t("code",[s._v("Our Application")]),s._v("提供了一个"),t("code",[s._v("todo-app")]),s._v("的"),t("code",[s._v("js项目")]),s._v("，用于我们自己练手制作镜像使用。我们只需要进行下载即可。")]),s._v(" "),t("div",{staticClass:"language-dockerfile line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[t("code",[t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" node:12-alpine\t# 基础镜像")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Adding build tools to make yarn install work on Apple silicon / arm64 machines")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" apk add --no-cache python2 g++ make")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WORKDIR")]),s._v(" /app # 工作目录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COPY")]),s._v(" . . # 将当前目录下的所有内容，复制到镜像中的工作目录下")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" yarn install --production # 安装项目依赖")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CMD")]),s._v(" ["),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"node"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"src/index.js"')]),s._v("] # 指定启动时要执行的命令")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("docker build -t todo-app:版本 "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("使用上述命令构建镜像，"),t("code",[s._v("todo-app")]),s._v("是镜像名称，后面加上冒号后面指定版本，如果不写，则默认为"),t("code",[s._v("latest")]),s._v("，后面的一个空格点，是表名指定当前目录。")]),s._v(" "),t("p",[s._v("执行完就等待构建完成吧。")]),s._v(" "),t("p",[s._v("构建完成之后，运行镜像构成容器")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("docker run -dp "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3000")]),s._v(":3000 todo-app\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("端口自己找到合适的端口来进行测试运行，可能会出现端口占用的情况。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/wxvirus/img/raw/master/img/20220201235905.png",alt:"todo-app"}})]),s._v(" "),t("p",[s._v("出现上述内容，即表示构建成功。")])])}),[],!1,null,null,null);a.default=n.exports}}]);