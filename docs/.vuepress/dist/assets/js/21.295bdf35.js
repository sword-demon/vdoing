(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{460:function(s,a,t){"use strict";t.r(a);var e=t(16),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"go-package-管理发展史"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#go-package-管理发展史"}},[s._v("#")]),s._v(" Go Package 管理发展史")]),s._v(" "),t("p",[s._v("Go依赖管理是通过Git仓库模式实现，并随着版本的更迭已经逐渐完善。")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("GOPAHT模式")]),s._v(" "),t("blockquote",[t("p",[s._v("GOPATH目录是所有工程的公共依赖包目录，所有需要编译的go工程的依赖包都放在GOPATH目录下。")])])]),s._v(" "),t("li",[t("p",[s._v("Vendor特性")]),s._v(" "),t("blockquote",[t("p",[s._v("为了解决GOPATH模式下，多个工程需要共享GOPATH目录，无法适用于多个工程对于不同版本的依赖包的使用，不便于更新某个依赖包。go1.6之后开启了vendor目录。")])])]),s._v(" "),t("li",[t("p",[s._v("Go Module包管理")]),s._v(" "),t("blockquote",[t("p",[s._v("从go1.11以后开始支持Module依赖管理工具，从而实现了依赖包的进行升级更新，在go1.13版本后默认打开")])])])]),s._v(" "),t("p",[s._v("GOPATH为go的开发环境时设置的一个环境变量。")]),s._v(" "),t("p",[s._v("历史版本的go语言开发时，会将代码放在GOPATH目录的src文件下，使用"),t("code",[s._v("go get")]),s._v("命令获取依赖，也会自动下载到GOPATH的src下。")]),s._v(" "),t("p",[t("code",[s._v("go get github.com/foo/bar")])]),s._v(" "),t("p",[s._v("会将代码下载到"),t("code",[s._v("$GOPATH/src/github.com/foo/bar")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("- bin，用于存放编译后的可执行文件 go install 编译时生成的可执行文件\n- pkg，用于存放编译后的包文件 go install 编译时生成的包文件\n- src,放我们以后编写的所有的go代码和依赖\n\t- 项目1\n\t\t- app.go\n\t- 项目2\n\t\t- xx.go\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h2",{attrs:{id:"using-go-module"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-go-module"}},[s._v("#")]),s._v(" Using Go Module")]),s._v(" "),t("p",[s._v("主要公共"),t("code",[s._v("go.mod")]),s._v("和"),t("code",[s._v("go.sum")]),s._v("组成，主要包含依赖模块路径定义，以及通过"),t("code",[s._v("checksum")]),s._v("方式进行保证包的安全性。并且可以在GOPATH外进行创建和编译项目。")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),t("p",[s._v("通过go mod init 初始化一个项目")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ 目录 go mod init example.com/hello\ngo: creating new go.mod: module example.com/hello\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("div",{staticClass:"language-go line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-go"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" main\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" log "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"github.com/sirupsen/logrus"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  log"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Info")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("通过"),t("code",[s._v("go get github.com/sirupsen/logrus")]),s._v("可以下载或者更新依赖包，也可以指定版本"),t("code",[s._v("path@v1.8.1")])]),s._v(" "),t("div",{staticClass:"language-go line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-go"}},[t("code",[s._v("module example"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("hello\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("go")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.16")]),s._v("\n\nrequire github"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("sirupsen"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("logrus v1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8.1")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("几个关键语法关键字和含义：")]),s._v(" "),t("ul",[t("li",[s._v("module：定义当前项目的模块路径")]),s._v(" "),t("li",[s._v("go：标识当前模块的go语言版本，仅仅是标识作用")]),s._v(" "),t("li",[s._v("require：说明module需要什么版本的依赖")]),s._v(" "),t("li",[s._v("exclude：用于从使用中排除一个特定的模块版本")]),s._v(" "),t("li",[s._v("replace：替换require中声明的依赖，使用另外的依赖及其版本号")])]),s._v(" "),t("details",{staticClass:"custom-block details"},[t("summary",[s._v("点击查看代码")]),s._v(" "),t("div",{staticClass:"language-go line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-go"}},[t("code",[s._v("module example"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("hello\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("go")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.16")]),s._v("\n\nrequire github"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("sirupsen"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("logrus v1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8.1")]),s._v("\n\nexclude github"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("sirupsen"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("logrus v1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8.0")]),s._v("\n\nreplace github"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("sirupsen"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("logrus "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" github"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("sirupsen"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("logrus v1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8.2")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])])]),s._v(" "),t("h2",{attrs:{id:"go-modules-checksum"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#go-modules-checksum"}},[s._v("#")]),s._v(" Go Modules Checksum")]),s._v(" "),t("blockquote",[t("p",[s._v("为了解决Go Modules的包被篡改安全隐患，Go开发团队在引入"),t("code",[s._v("go.mod")]),s._v("的同时也引入了"),t("code",[s._v("go.sum")]),s._v("文件，用于记录每个依赖包的哈希值，在构建时，如果本地的依赖包"),t("code",[s._v("hash")]),s._v("值与"),t("code",[s._v("go.sum")]),s._v("文件中记录得不一致，则会拒绝构建。")])]),s._v(" "),t("ul",[t("li",[s._v("go.sum 文件中每行记录由module名、版本和哈希组成，并由空格分开；")]),s._v(" "),t("li",[s._v("在引入新的依赖时，通常会使用"),t("code",[s._v("go get")]),s._v("命令获取该依赖，将会下载该依赖包下载到本地缓存目录"),t("code",[s._v("$GOPATH/pkg/mod/cache/download")]),s._v("，该依赖包为一个后缀为"),t("code",[s._v(".zip")]),s._v("的压缩包，并且把哈希运算同步到"),t("code",[s._v("go.sum")]),s._v("文件中；")]),s._v(" "),t("li",[s._v("在构建应用时，会从本地缓存中查找所有的"),t("code",[s._v("go.mod")]),s._v("中记录的依赖包，并计算本地依赖包的哈希值，然后与"),t("code",[s._v("go.sum")]),s._v("中的记录进行对比，当校验失败，go命令将拒绝构建。")])]),s._v(" "),t("h3",{attrs:{id:"go-modules-proxy"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#go-modules-proxy"}},[s._v("#")]),s._v(" Go Modules Proxy")]),s._v(" "),t("p",[s._v("Go1.13将GOPROXY默认成了中国大陆无法访问的"),t("code",[s._v("https://proxy.golang.org")]),s._v("，所以在国内需要配置代理进行使用。")]),s._v(" "),t("p",[s._v("GOPROXY可以解决一些公司内部的使用问题：")]),s._v(" "),t("ul",[t("li",[s._v("访问公司内网的"),t("code",[s._v("git server")])]),s._v(" "),t("li",[s._v("防止公网仓库变更或者消失，导致线上编译失败或者紧急回退失败")]),s._v(" "),t("li",[s._v("公司审计和安全需要")]),s._v(" "),t("li",[s._v("防止公司内部开发人员配置不当造成"),t("code",[s._v("import path")]),s._v("泄露")]),s._v(" "),t("li",[s._v("cache热点依赖，降低公司公网出口宽带")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置GOPROXY环境变量")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GOPROXY")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("https://goproxy.io,direct\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 还可以设置不走 proxy 的私有仓库，多个用逗号相隔(可选)")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GOPRIVATE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("git.mycompany.com,github.com/my/private\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[t("code",[s._v("GOPRIVATE")]),s._v("用来控制go命令把哪些仓库看做是私有的仓库，这样的话，可以跳过"),t("code",[s._v("proxy server")]),s._v("的校验检查。")]),s._v(" "),t("p",[s._v("当配置"),t("code",[s._v("GOPRIVATE")]),s._v("时，它的值同时也将作为"),t("code",[s._v("GONOPROXY")]),s._v("和"),t("code",[s._v("GONOSUMDB")]),s._v("的默认值，所以当配置"),t("code",[s._v("GOPRIVATE")]),s._v("后将会跳过代理，以及"),t("code",[s._v("checksum")]),s._v("的校验检查。")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),t("p",[s._v("通常推荐配置"),t("code",[s._v("GOPROXY")]),s._v("和"),t("code",[s._v("GOPRIVATE")]),s._v("进行使用，"),t("code",[s._v("GOPRIVATE")]),s._v("也可以识别"),t("code",[s._v("git ssh key")]),s._v("进行权限校验。")])]),s._v(" "),t("h2",{attrs:{id:"goproxy编译部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#goproxy编译部署"}},[s._v("#")]),s._v(" GOPROXY编译部署")]),s._v(" "),t("p",[t("code",[s._v("goproxy.io")]),s._v("是一个Go Modules开源代理，也可以作为公司内部代理。")]),s._v(" "),t("blockquote",[t("p",[s._v("下载及编译")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/goproxyio/goproxy.git\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" goproxy\ngo build\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("blockquote",[t("p",[s._v("运行goproxy代理")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("./goproxy -listen"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0:8081 -cacheDir"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/tmp/cache -proxy https://goproxy.io -exclude "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"github.com/private"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("goproxy运行配置信息：")]),s._v(" "),t("ul",[t("li",[t("p",[t("code",[s._v("-cacheDir string")])]),s._v(" "),t("p",[s._v("go modules cache dir [指定Go模块的缓存目录]")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("-exclude string")])]),s._v(" "),t("p",[s._v("exclude host pattern [proxy模式下指定哪些path不经过上游服务器]")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("-listen string")])]),s._v(" "),t("p",[s._v("service listen address [服务监听端口，默认8081]")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("-proxy string")])]),s._v(" "),t("p",[s._v("next hop proxy for go modules [指定上游 proxy server, 推荐 goproxy.io]")])])]),s._v(" "),t("h2",{attrs:{id:"goproxy-访问内网仓库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#goproxy-访问内网仓库"}},[s._v("#")]),s._v(" GoPROXY 访问内网仓库")]),s._v(" "),t("p",[s._v("goproxy配置访问公司内网的"),t("code",[s._v("git server")])]),s._v(" "),t("ul",[t("li",[s._v("用户本地配置"),t("code",[s._v("GONOSUMDB=github.com/private")])]),s._v(" "),t("li",[s._v("goproxy server配置exclude 进行排除掉所有的代理仓库")]),s._v(" "),t("li",[s._v("goproxy server 配置 ssh key 并且在仓库添加只读权限")]),s._v(" "),t("li",[s._v("goproxy server 配置 .gitconfig 把ssh替换成http方式访问")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('[url "git@github.com:"]\n\tinsteadOf = https://github.com/\n[url “git@gitlab.com:”]\n\tinsteadOf = https://gitlab.com/\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h2",{attrs:{id:"unittest"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#unittest"}},[s._v("#")]),s._v(" Unittest")]),s._v(" "),t("ul",[t("li",[s._v("小型测试带来的优秀的代码质量、良好的异常处理、优雅的错误报告；大中型测试会带来整体产品质量和数据验证。")]),s._v(" "),t("li",[s._v("不同的类型的项目，对测试的需求不同，总体上有一个经验法则，即70/20/10原则：70%是小型测试，20%是中型测试，10%是大型测试。")]),s._v(" "),t("li",[s._v("如果一个项目是面向用户的，拥有较高的集成度，或者用户接口比较复杂，他们就应该有更多的中型和大型测试，例如索引或网络爬虫，则最好有大量的小型测试，中型测试和大型测试的数量要求会少很多。")])]),s._v(" "),t("p",[s._v("单元测试的基本要求：")]),s._v(" "),t("ul",[t("li",[s._v("快速")]),s._v(" "),t("li",[s._v("环境一致")]),s._v(" "),t("li",[s._v("任意顺序")]),s._v(" "),t("li",[s._v("并行")])]),s._v(" "),t("p",[s._v("基于"),t("code",[s._v("docker-compose")]),s._v("实现跨平台语言环境的容器依赖管理方案，以解决运行unittest场景下的(mysql、redis、mc)容器依赖问题：")]),s._v(" "),t("ul",[t("li",[s._v("本地安装 Docker")]),s._v(" "),t("li",[s._v("无侵入式的环境初始化")]),s._v(" "),t("li",[s._v("快速重置环境")]),s._v(" "),t("li",[s._v("随时随地运行(不依赖外部服务)")]),s._v(" "),t("li",[s._v("语义式API声明资源")]),s._v(" "),t("li",[s._v("真实外部依赖，而非"),t("code",[s._v("in-process")]),s._v("模拟")]),s._v(" "),t("li",[s._v("正确对容器内服务进行健康检测，避免unittest启动时资源还未ready")]),s._v(" "),t("li",[s._v("应该交由app自己来初始化数据，比如db的schema，初始的sql数据等，为了满足测试的一致性，在每次结束后，都会销毁容器。")])])])}),[],!1,null,null,null);a.default=n.exports}}]);