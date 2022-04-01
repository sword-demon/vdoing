(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{460:function(s,a,t){"use strict";t.r(a);var n=t(16),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"mac系统go开发环境搭建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mac系统go开发环境搭建"}},[s._v("#")]),s._v(" Mac系统Go开发环境搭建")]),s._v(" "),t("h3",{attrs:{id:"_1-1-下载go编译器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-下载go编译器"}},[s._v("#")]),s._v(" 1.1 下载Go编译器")]),s._v(" "),t("p",[s._v("https://golang.google.cn/dl/")]),s._v(" "),t("h3",{attrs:{id:"_1-2-点击安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-点击安装"}},[s._v("#")]),s._v(" 1.2 点击安装")]),s._v(" "),t("p",[s._v("mac默认的安装目录："),t("code",[s._v("/usr/local/go")])]),s._v(" "),t("p",[s._v("编译器启动文件："),t("code",[s._v("/usr/local/go/bin/go")])]),s._v(" "),t("blockquote",[t("p",[s._v("因为写全路径比较麻烦，所以需要将go加入到环境变量")])]),s._v(" "),t("h3",{attrs:{id:"_1-3-配置环境path"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-配置环境path"}},[s._v("#")]),s._v(" 1.3 配置环境PATH")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/go/bin:"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("就可以在任何目录，使用"),t("code",[s._v("go")]),s._v("关键字运行"),t("code",[s._v("go")]),s._v("程序")]),s._v(" "),t("p",[s._v("检验")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("go version\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("正确得到的内容")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("go version go1.16.2 darwin/arm64\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"_1-4-其他配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-其他配置"}},[s._v("#")]),s._v(" 1.4 其他配置")]),s._v(" "),t("h4",{attrs:{id:"_1-4-1-创建一个任务目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-1-创建一个任务目录"}},[s._v("#")]),s._v(" 1.4.1 创建一个任务目录")]),s._v(" "),t("blockquote",[t("p",[s._v("此目录以后放你写的所有go代码")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("/Users/用户名/GolangProjects/\n- bin，用于存放编译后的可执行文件 go install 编译时生成的可执行文件\n- pkg，用于存放编译后的包文件 go install 编译时生成的包文件\n- src,放我们以后编写的所有的go代码和依赖\n\t- 项目1\n\t\t- app.go\n\t- 项目2\n\t\t- xx.go\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("bin和pkg会存放src里的项目编译产生的文件")]),s._v(" "),t("h4",{attrs:{id:"_1-4-2-配置环境变量-通知go解释器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-2-配置环境变量-通知go解释器"}},[s._v("#")]),s._v(" 1.4.2 配置环境变量，通知go解释器")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("配置Go的安装目录，即：Go源码目录，用于调用go相关源码")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GOROOT")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/go\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("配置新创建的文件夹的目录，存放我们的代码和编译的文件")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GOPATH")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/Users/用户名/GolangProjects\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("配置我们编译完的项目的可执行文件")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GOBIN")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/Users/用户名/GolangProjects/bin\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])]),s._v(" "),t("h3",{attrs:{id:"_1-5-环境变量-持久化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-环境变量-持久化"}},[s._v("#")]),s._v(" 1.5 环境变量“持久化”")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" ~/.zshrc\n\n// 或者\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" ~/.bash_profile\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/go/bin:"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GOROOT")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/go\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GOPATH")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/Users/用户名/GolangProjects\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GOBIN")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/Users/用户名/GolangProjects/bin\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("将上述4个命令追加到该文件里")]),s._v(" "),t("blockquote",[t("p",[s._v("最后还得让它生效")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" ~/.zshrc\n\n// 或者\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" ~/.bash_profile\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h3",{attrs:{id:"_1-6-编写go代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-编写go代码"}},[s._v("#")]),s._v(" 1.6 编写go代码")]),s._v(" "),t("p",[s._v("app.go")]),s._v(" "),t("div",{staticClass:"language-go line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-go"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 定义了包的名字，声明当前go文件属于哪个包，")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" main\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 告诉go 我需要fmt的这个包，实现了一些格式化输出的函数")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fmt"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 定义一个函数 main函数，程序开始执行的函数，每一个可执行的函数必须包含一个main函数")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 这是单行的注释")]),s._v("\n\n\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*\n\t多行注释，块注释\n\t */")]),s._v("\n\tfmt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Println")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"人生苦短，let\'s go"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])]),t("h3",{attrs:{id:"_1-7-运行go代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-7-运行go代码"}},[s._v("#")]),s._v(" 1.7 运行go代码")]),s._v(" "),t("p",[s._v("本质上就是让Go编译器去运行写的代码")]),s._v(" "),t("p",[s._v("方式1：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("// 先进入项目目录\ngo run app.go\n\n// 输出：\n人生苦短，let's go\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("方式2：==（推荐方式）==")]),s._v(" "),t("div",{staticClass:"language-go line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-go"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("go")]),s._v(" build "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 进行编译")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 运行")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("可执行文件"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("项目名"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 起别名编译")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("go")]),s._v(" build "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("o xx\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 运行")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("xx\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("方式3：")]),s._v(" "),t("div",{staticClass:"language-go line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-go"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 在项目目录里")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("go")]),s._v(" install\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 执行步骤")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 1. 编译")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 2. 到bin目录下查看编译完成的可执行文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 3. 执行可执行文件")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);