(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{474:function(s,a,e){"use strict";e.r(a);var t=e(16),r=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("blockquote",[e("p",[s._v("这里假设我们已经根据自己的需求修改好了 micro 源码，并打包成 linux 环境下的二进制文件"),e("code",[s._v("micro")])])]),s._v(" "),e("h2",{attrs:{id:"创建-dockerfile-文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建-dockerfile-文件"}},[s._v("#")]),s._v(" 创建 Dockerfile 文件")]),s._v(" "),e("p",[s._v("目录结构如下：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("dockertest\n\tmicro\n\tDockerfile\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("div",{staticClass:"language-dockerfile line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[e("code",[e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" alpine")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COPY")]),s._v(" micro /micro")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENTRYPOINT")]),s._v(" [ "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/micro"')]),s._v(" ]")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h2",{attrs:{id:"构建-docker-镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#构建-docker-镜像"}},[s._v("#")]),s._v(" 构建 Docker 镜像")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("docker build -t 用户名/名称:版本 "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[e("code",[s._v("-t")]),s._v("指定构建的容器的名字以及版本，如果要上传到"),e("code",[s._v("hub.docker")]),s._v("中，"),e("code",[s._v("/")]),s._v("之前要使用"),e("code",[s._v("hub.docker")]),s._v("的用户名，"),e("code",[s._v("/")]),s._v("后面是自定义的镜像名称，"),e("code",[s._v(":")]),s._v("后面是版本信息")]),s._v(" "),e("li",[e("code",[s._v(".")]),s._v("指定"),e("code",[s._v("Dockerfile")]),s._v("文件所在的 mul")])]),s._v(" "),e("h2",{attrs:{id:"上传本地镜像到-dockerhub"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#上传本地镜像到-dockerhub"}},[s._v("#")]),s._v(" 上传本地镜像到 dockerhub")]),s._v(" "),e("p",[s._v("最简单的就是使用"),e("code",[s._v("docker")]),s._v("客户端上传")]),s._v(" "),e("p",[s._v("直接使用镜像右边有一个三个点的，点击"),e("code",[s._v("Push To Hub")]),s._v("即可")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://gitee.com/wxvirus/img/raw/master/img/20220208231437.png",alt:"docker客户端上传镜像"}})]),s._v(" "),e("hr"),s._v(" "),e("p",[s._v("命令行上传")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 登录dockerhub")]),s._v("\ndocker login\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 上传镜像")]),s._v("\ndocker push 用户名/镜像名称\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("h2",{attrs:{id:"使用自己打包好的镜像创建项目"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用自己打包好的镜像创建项目"}},[s._v("#")]),s._v(" 使用自己打包好的镜像创建项目")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("docker run --rm -v "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(" -w "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(" 用户名/镜像名称:版本号 new hello\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);