(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{457:function(s,a,t){"use strict";t.r(a);var n=t(16),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"linux-中的编译脚本-makefile-的讲解设计"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux-中的编译脚本-makefile-的讲解设计"}},[s._v("#")]),s._v(" Linux 中的编译脚本 Makefile 的讲解设计")]),s._v(" "),t("h2",{attrs:{id:"概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[s._v("#")]),s._v(" 概念")]),s._v(" "),t("p",[s._v("说明了组成程序的各模块之间的相互"),t("code",[s._v("make")]),s._v("按照这些说明自动地维护这些模块。")]),s._v(" "),t("blockquote",[t("p",[t("code",[s._v("Makefile")]),s._v("最终要的是要清晰编译链接的整个过程。")])]),s._v(" "),t("p",[s._v("我们最终只需要输入一个"),t("code",[s._v("make")]),s._v("命令即可完成整个项目的编译")]),s._v(" "),t("h3",{attrs:{id:"编译链接的过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编译链接的过程"}},[s._v("#")]),s._v(" 编译链接的过程")]),s._v(" "),t("p",[t("code",[s._v("hello.c")])]),s._v(" "),t("div",{staticClass:"language-c line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-c"}},[t("code",[t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("include")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("<stdio.h>")])]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" b "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("printf")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello world\\n"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("从"),t("code",[s._v(".c")]),s._v(" --\x3e "),t("code",[s._v(".i")]),s._v(" --\x3e "),t("code",[s._v(".s汇编")]),s._v(" --\x3e "),t("code",[s._v(".o")])]),s._v(" "),t("ol",[t("li",[t("p",[s._v("预编译：加载头文件，加载动态链接库")])]),s._v(" "),t("li",[t("p",[s._v("汇编："),t("code",[s._v("gcc -S hello.i -o hello.s")]),s._v("产生了我们的汇编代码")]),s._v(" "),t("div",{staticClass:"language-c line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-c"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@jb51 c"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("# cat hello"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("s\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("file   "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello.c"')]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("comm   a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("globl  b\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("data\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("align "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("type   b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" @object\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("size   b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("\nb"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("long")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("section        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("rodata\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("LC0"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("string "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello world"')]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("text\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("globl  main\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("type   main"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" @function\nmain"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("LFB0"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cfi_startproc\n        pushq   "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v("rbp\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cfi_def_cfa_offset "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cfi_offset "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v("\n        movq    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v("rsp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v("rbp\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cfi_def_cfa_register "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("\n        movl    $"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("LC0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v("edi\n        call    puts\n        movl    $"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v("eax\n        popq    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v("rbp\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cfi_def_cfa "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("\n        ret\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cfi_endproc\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("LFE0"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("size   main"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("main\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ident  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"GCC: (GNU) 4.8.5 20150623 (Red Hat 4.8.5-44)"')]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("section        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("note"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("GNU"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("stack"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("@progbits\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br")])]),t("p",[s._v("即刚才的 C 语言解析成了汇编语言，这里有几个段")]),s._v(" "),t("p",[t("code",[s._v("text")]),s._v("代码段：存放的是你的代码")]),s._v(" "),t("p",[t("code",[s._v("data")]),s._v("数据段：存的是一些字符串、const 变量或者 static 变量，还有一些赋了初值的全局变量，就会放到"),t("code",[s._v("data")]),s._v("段里。")]),s._v(" "),t("p",[t("code",[s._v("bss")]),s._v("段：变量"),t("code",[s._v("a")]),s._v("存放在这里，这里是不占内存的，最后是在你使用的时候帮你分配内存")]),s._v(" "),t("p",[s._v("rodata：只读数据段")])]),s._v(" "),t("li",[t("p",[s._v("编译："),t("code",[s._v(".s")]),s._v("到"),t("code",[s._v(".o")]),s._v("的过程，将汇编编程机器码，就变成一个可执行的二进制文件")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("gcc -c hello.s -o hello.o\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("这个就不能使用记事本或者别的编辑器打开了，如果打开都是些乱码，我们如果是 windows 平台可以使用"),t("code",[s._v("WinkHex")]),s._v("软件去打开看一看。")]),s._v(" "),t("p",[s._v("我们还可以去执行一下，但是得给它赋予执行权限")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" +x hello.o\n./hello.o\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 会提示如下即可")]),s._v("\n-bash: ./hello.o: cannot execute binary "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("链接：有几个"),t("code",[s._v(".c")]),s._v("文件，就可以生成多少个"),t("code",[s._v(".o")]),s._v("文件，最后要将这 3 个文件编译成"),t("code",[s._v("ELF")]),s._v("二进制可执行文件")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@jb51 c"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# gcc hello.o -o hello")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@jb51 c"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ./hello")]),s._v("\nhello world\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@jb51 c"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# file hello")]),s._v("\nhello: ELF "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v("-bit LSB executable, x86-64, version "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("SYSV"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", dynamically linked "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("uses shared libs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" GNU/Linux "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.6")]),s._v(".32, BuildID"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("sha1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("115b58fd30dcfc21a6e0aa445fa72a10f2f318ea, not stripped\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])])])]),s._v(" "),t("h3",{attrs:{id:"gcc命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gcc命令"}},[s._v("#")]),s._v(" "),t("code",[s._v("gcc")]),s._v("命令")]),s._v(" "),t("p",[t("code",[s._v("gcc")]),s._v("、"),t("code",[s._v("g++")]),s._v("或者"),t("code",[s._v("arm-linux-gcc")]),s._v("等编译工具")]),s._v(" "),t("p",[s._v("多数 UNIX 平台都通过 CC 调用它们的 C 编译程序.除标准和 CC 以外,LINUX 和 FREEBSD 还支持 gcc.\n基本的编译命令有以下几种:")]),s._v(" "),t("ol",[t("li",[t("p",[t("code",[s._v("-c")])]),s._v(" "),t("blockquote",[t("p",[s._v("编译产生对象文件(*.obj)而不链接成可执行文件,当编译几个独立的模块,而待以后由链接程序把它们链接在一起时,就可以使用这个选项,如:")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("gcc -c hello.c "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" hello.o   // 控制你的编译的过程\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"2"}},[t("li",[t("p",[s._v("-o")]),s._v(" "),t("blockquote",[t("p",[s._v("允许用户指定输出文件名,如")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("gcc hello.c -o hello.o\n    or\ngcc hello.c -o hello\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("-g: "),t("code",[s._v("gdb")]),s._v("选项，用于调试")]),s._v(" "),t("blockquote",[t("p",[s._v("指明编译程序在编译的输出中应产生调试信息.这个调试信息使源代码和变量名引用在调试程序中或者当程序异常退出后在分析core文件时可被使用.")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("gcc -c -g hello.c\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])])]),s._v(" "),t("li",[t("p",[s._v("-D")]),s._v(" "),t("blockquote",[t("p",[s._v("允许从编译程序命令行定义宏符号\n一共有两种情况:一种是用-D MACRO,相当于在程序中使用"),t("code",[s._v("#define MACRO")]),s._v(",另一种是用-"),t("code",[s._v("DMACRO=A")]),s._v(",相当于程序中的"),t("code",[s._v("#define MACRO A")]),s._v(".如对下面这代码:")]),s._v(" "),t("div",{staticClass:"language-c line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-c"}},[t("code",[t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("ifdefine")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token expression"}},[s._v("DEBUG")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("printf")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"debug message\\n"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("endif")])]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("编译时可加上-D DEBUG 参数,执行程序则打印出编译信息")])])]),s._v(" "),t("li",[t("p",[s._v("-I")]),s._v(" "),t("blockquote",[t("p",[s._v("可指定查找 include 文件的其他位置.例如,如果有些 include 文件位于比较特殊的地方,比如/usr/local/include,就可以增加此选项如下:\ngcc -c -I/usr/local/include -I/opt/include hello.c 此时目录搜索会按给出的次序进行.")])])]),s._v(" "),t("li",[t("p",[s._v("-E：预编译")]),s._v(" "),t("ul",[t("li",[s._v("加载头文件")]),s._v(" "),t("li",[s._v("加载动态链接库")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("gcc -E hello.c -o hello.i\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 最终会加载头文件和动态链接库，然后最下面是你的代码")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("blockquote",[t("p",[s._v("这个选项是相对标准的,它允许修改命令行以使编译程序把预先处理的 C 文件发到标准输出,而不实际编译代码.在查看 C 预处理伪指令和 C 宏时,这是很有用的.可能的编译输出可重新定向到一个文件,然后用编辑程序来分析:")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("gcc -c -E hello.c\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 生成 cpp.out")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 此命令使include文件和程序被预先处理并重定向到文件cpp.out.以后可以用编辑程序或者分页命令分析这个文件,并确定最终的C语言代码看起来如何.")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("-O：编译选项，去编译优化")]),s._v(" "),t("blockquote",[t("p",[s._v("输出 优化选项, 这个选项不是标准的\n-O 和 -O1 指定 1 级优化\n-O2 指定 2 级优化\n-O3 指定 3 级优化\n-O0 指定不优化\ngcc -c O3 -O0 hello.c 当出现多个优化时,以最后一个为准!!")])])]),s._v(" "),t("li",[t("p",[s._v("-Wall")]),s._v(" "),t("blockquote",[t("p",[s._v("以最高级别使用 GNU 编译程序,专门用于显示警告用!!\ngcc -Wall hello.c")])])]),s._v(" "),t("li",[t("p",[s._v("-L：指定连接库的搜索目录,-l(小写 L)指定连接库的名字")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("gcc main.o -L/usr/lib -lqt -o hello\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("blockquote",[t("p",[s._v("上面的命令把目标文件 main.o 与库 qt 相连接,连接时会到/usr/lib 查找这个库文件.也就是说-L 与-l 一般要成对出现.")])])])]),s._v(" "),t("h3",{attrs:{id:"简单makefile示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简单makefile示例"}},[s._v("#")]),s._v(" 简单"),t("code",[s._v("Makefile")]),s._v("示例")]),s._v(" "),t("div",{staticClass:"language-makefile line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-makefile"}},[t("code",[s._v("CC"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("gcc\nRM "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" rm -rf\nFLAGS"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" -g -o\nOBJGEN "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" linklist\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取当前目录下的所有c文件")]),s._v("\nSRC "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("wildcard")]),s._v(" *.c"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将所有的.c文件换成.o")]),s._v("\nOBJS "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("patsubst")]),s._v(" %.c,%.o,"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("SRC"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token symbol"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$")]),s._v("(OBJGEN)")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("OBJS"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("CC"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("FLAGS"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$@")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$^")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 规定所有.c --\x3e .o 的具体规则，为了在生成.o文件的时候加入 -g 选项 帮助调试 $< 第一个依赖文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token symbol"}},[s._v("%.o")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("%.c\n\t"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("CC"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" -c "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("FLAGS"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$@")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$<")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v(".PHONY")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("clean\n"),t("span",{pre:!0,attrs:{class:"token symbol"}},[s._v("clean")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("RM"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("OBJS"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("OBJGEN"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br")])]),t("h2",{attrs:{id:"依赖关系-显示规则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#依赖关系-显示规则"}},[s._v("#")]),s._v(" 依赖关系（显示规则）")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("target:dep\n\tcommand\n\n生成目标:生成目标所需要的依赖文件\n\t执行的命令\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("# 当前目录\noutput.c\nMakefile\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("对应的"),t("code",[s._v("Makefile")]),s._v("的显示规则编写：")]),s._v(" "),t("div",{staticClass:"language-M line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("target:output.o\n\tgcc output.o -o target # 依赖关系 会从这里向下去找\n\nouput.o:output.c\n\tgcc output.c -o output.o\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("如果"),t("code",[s._v(".c")]),s._v("文件很多的情况下，持续这么写下去，会很伤元气，写的人难受，复制粘贴都难受。")]),s._v(" "),t("p",[s._v("如果有链接，最好写在最上面，因为当你执行"),t("code",[s._v("make")]),s._v("命令时，会找到你的"),t("code",[s._v("Makefile")]),s._v("文件，从第一个目标文件开始识别。")]),s._v(" "),t("h2",{attrs:{id:"变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#变量"}},[s._v("#")]),s._v(" 变量")]),s._v(" "),t("h2",{attrs:{id:"通配符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#通配符"}},[s._v("#")]),s._v(" 通配符")]),s._v(" "),t("h2",{attrs:{id:"隐式规则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#隐式规则"}},[s._v("#")]),s._v(" 隐式规则")]),s._v(" "),t("h2",{attrs:{id:""}},[t("a",{staticClass:"header-anchor",attrs:{href:"#"}},[s._v("#")])])])}),[],!1,null,null,null);a.default=e.exports}}]);