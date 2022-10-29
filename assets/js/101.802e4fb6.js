(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{544:function(s,t,a){"use strict";a.r(t);var n=a(16),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("blockquote",[a("p",[s._v("类似于 Java 的 Maven、JS 的 npm、PHP 的 composer，go 的 module")])]),s._v(" "),a("p",[s._v("rust 的是"),a("code",[s._v("cargo")]),s._v("，就是"),a("code",[s._v("rust")]),s._v("的代码、项目组织和管理工具，提供项目的建立、构建到测试、运行直至部署。")]),s._v(" "),a("h2",{attrs:{id:"使用-cargo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-cargo"}},[s._v("#")]),s._v(" 使用 cargo")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("➜  rustworkspace cargo new mypro\n     Created binary "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("application"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("mypro"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(" package\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("使用"),a("code",[s._v("cargo")]),s._v("来新建一个项目")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(".\n├── Cargo.toml\n└── src\n    └── main.rs\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("还有一个隐藏的"),a("code",[s._v(".git")]),s._v("文件和"),a("code",[s._v(".gitignore")])]),s._v(" "),a("h2",{attrs:{id:"定义变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定义变量"}},[s._v("#")]),s._v(" 定义变量")]),s._v(" "),a("p",[s._v("使用"),a("code",[s._v("let")]),s._v("定义变量，暂时先不写对应的类型，这里会自动匹配为字符串类型。")]),s._v(" "),a("div",{staticClass:"language-rust line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fn")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[s._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" my_name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"wxvirus"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token macro property"}},[s._v("println!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"{}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" my_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("这里变量名称不推荐使用驼峰，它的定义风格和"),a("code",[s._v("python")]),s._v("类似，都喜欢小写接下划线拼接。")]),s._v(" "),a("p",[s._v("这里打印字符串跟别的语言来说，这个使用"),a("code",[s._v('"{}"')]),s._v("来"),a("code",[s._v("format")]),s._v("一下，别的可能是"),a("code",[s._v("%s")]),s._v("，这个是使用花括号代表即将打印的内容，和"),a("code",[s._v("python")]),s._v("里的也有点类似。")]),s._v(" "),a("hr"),s._v(" "),a("p",[s._v("编译运行")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("➜  mypro git:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("master"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" ✗ cargo build\n   Compiling mypro v0.1.0 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("/Users/wxvirus/workspace/rustworkspace/mypro"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    Finished dev "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("unoptimized + debuginfo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(".17s\n➜  mypro git:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("master"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" ✗ cargo run\n    Finished dev "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("unoptimized + debuginfo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(".00s\n     Running "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("target/debug/mypro"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\nwxvirus\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("编译我们可以直接使用"),a("code",[s._v("cargo build")]),s._v("即可，因为我们生成了一个"),a("code",[s._v("src/main.rs")]),s._v("入口文件,"),a("code",[s._v("build")]),s._v("之后生成的可执行文件会在"),a("code",[s._v("target/debug/可执行文件")])]),s._v(" "),a("p",[s._v("这里的生成的可执行文件(ELF)名称和"),a("code",[s._v("Cargo.toml")]),s._v("里配置的"),a("code",[s._v("package.name")]),s._v("一样")]),s._v(" "),a("div",{staticClass:"language-toml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-toml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token table class-name"}},[s._v("package")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("name")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mypro"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("version")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0.1.0"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("edition")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2021"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# See more keys and their definitions at https://doc.rust-lang.org/cargo/reference/manifest.html")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token table class-name"}},[s._v("dependencies")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("运行，我们可以直接使用"),a("code",[s._v("cargo run")]),s._v("，则会直接运行"),a("code",[s._v("mypro")]),s._v("可执行文件。")]),s._v(" "),a("h2",{attrs:{id:"cargo-vscode-运行-rust-程序、gdb-调试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cargo-vscode-运行-rust-程序、gdb-调试"}},[s._v("#")]),s._v(" Cargo + vscode 运行 rust 程序、GDB 调试")]),s._v(" "),a("p",[s._v("可以在"),a("code",[s._v("vs code")]),s._v("里安装插件："),a("code",[s._v("native debug")]),s._v("，然后点击左侧调试，添加"),a("code",[s._v("launch.json")]),s._v("文件配置,则会在文件目录下生成"),a("code",[s._v(".vscode/launch.json")]),s._v("文件，用于配置调试运行"),a("code",[s._v("rust")]),s._v("。")]),s._v(" "),a("p",[s._v("**先安装插件，再生产配置文件，选择"),a("code",[s._v("GDB")]),s._v("**才行")]),s._v(" "),a("p",[s._v("生成的配置文件需要调整"),a("code",[s._v("target")]),s._v("内容。如果是"),a("code",[s._v("windows")]),s._v("，需要在后面加上"),a("code",[s._v(".exe")])]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 使用 IntelliSense 了解相关属性。")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 悬停以查看现有属性的描述。")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 欲了解更多信息，请访问: https://go.microsoft.com/fwlink/?linkid=830387")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"version"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0.2.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"configurations"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Debug"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"gdb"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"request"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"launch"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"target"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./target/debug/${workspaceFolderBasename}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"cwd"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"${workspaceRoot}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"valuesFormatting"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"parseText"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("p",[s._v("但是这里没有"),a("code",[s._v("build")]),s._v("的过程，因此我们需要在运行程序之前有一个"),a("code",[s._v("build")]),s._v("的过程。")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 使用 IntelliSense 了解相关属性。")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 悬停以查看现有属性的描述。")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 欲了解更多信息，请访问: https://go.microsoft.com/fwlink/?linkid=830387")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"version"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0.2.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"configurations"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Debug"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"gdb"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"request"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"launch"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"target"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./target/debug/${workspaceFolderBasename}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"cwd"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"${workspaceRoot}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"valuesFormatting"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"parseText"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"preLaunchTask"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Build"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("p",[s._v("但是此时点击"),a("code",[s._v("vscode")]),s._v("的"),a("code",[s._v("debug")]),s._v("运行是找不到"),a("code",[s._v("Build")]),s._v("的")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://virusoss.oss-cn-shanghai.aliyuncs.com/images/20220830222301.png",alt:"nobuild"}})]),s._v(" "),a("p",[s._v("我们选择配置任务，然后选择"),a("code",[s._v("Create tasks.json file from template")]),s._v("，然后选择"),a("code",[s._v("Others")]),s._v("，生成一个比较纯净的"),a("code",[s._v("tasks")])]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// See https://go.microsoft.com/fwlink/?LinkId=733558")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// for the documentation about the tasks.json format")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"version"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2.0.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"tasks"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"label"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Build"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"shell"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"command"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cargo build"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),a("p",[s._v("这里的"),a("code",[s._v("label")]),s._v("必须和上面的"),a("code",[s._v("lanuch.json")]),s._v("里的"),a("code",[s._v("preLaunchTask")]),s._v("对应的名称一模一样，大小写也得一样。")]),s._v(" "),a("p",[a("code",[s._v("command")]),s._v("改成我们真正执行"),a("code",[s._v("build")]),s._v("的命令："),a("code",[s._v("cargo build")])])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://virusoss.oss-cn-shanghai.aliyuncs.com/images/20220830222722.png",alt:"run"}})]),s._v(" "),a("p",[s._v("尝试使用断点配合"),a("code",[s._v("Debug")]),s._v("进行调试，点击 F10 就会进行下一步，左侧本地变量就会出现"),a("code",[s._v("my_name")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://virusoss.oss-cn-shanghai.aliyuncs.com/images/20220830223017.png",alt:"debug"}})]),s._v(" "),a("p",[s._v("然后继续运行就结束运行。")])])}),[],!1,null,null,null);t.default=e.exports}}]);