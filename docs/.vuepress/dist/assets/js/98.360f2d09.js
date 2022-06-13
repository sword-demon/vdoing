(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{537:function(s,t,a){"use strict";a.r(t);var n=a(16),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"多进程编写"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多进程编写"}},[s._v("#")]),s._v(" 多进程编写")]),s._v(" "),a("p",[a("code",[s._v("pcntl_fork")]),s._v("函数来创建一个子进程，系统调用的是使用"),a("code",[s._v("clone")]),s._v("函数来创建的。")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("问题")]),s._v(" "),a("p",[s._v("使用多进程开发，必须清除的几件事：")]),s._v(" "),a("ol",[a("li",[s._v("到底创建了几个进程")]),s._v(" "),a("li",[s._v("每个进程"),a("code",[s._v("$count")]),s._v("是多少")]),s._v(" "),a("li",[s._v("每个进程到底从哪个地方开始运行代码")]),s._v(" "),a("li",[a("code",[s._v("fork")]),s._v("之后，每个进程的变量"),a("code",[s._v("$i, $count")]),s._v("的值到底是多少")]),s._v(" "),a("li",[s._v("每个进程运行到哪一行语句结束")])])]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[s._v("<?php")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$count")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$i")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$i")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$i")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$pid")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("pcntl_fork")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$pid")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$count")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$count")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("fprintf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("STDOUT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"poid=%d, count=%d\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("posix_getpid")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$count")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("p",[s._v("运行结果")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@jb51 process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# php demo11.php")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("poid")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5677")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("count")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("poid")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5683")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("count")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("110")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("poid")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5684")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("count")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("101")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@jb51 process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# poid=5685, count=12")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("感觉是不是和预想的一些值有出处。")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("分析")]),s._v(" "),a("ol",[a("li",[s._v("开始运行："),a("code",[s._v("php demo11.php")])]),s._v(" "),a("li",[s._v("for 循环开始\n"),a("ol",[a("li",[s._v("遇到"),a("code",[s._v("fork")]),s._v("函数之后，创建了一个子进程，假设命名这个子进程为"),a("code",[s._v("child1")]),s._v("，变量"),a("code",[s._v("$i = 0")]),s._v("目前为 0，"),a("code",[s._v("$count = 10")]),s._v("，子进程"),a("code",[s._v("child1")]),s._v("继续执行，这个时候满足"),a("code",[s._v("$pid == 0")]),s._v("，进行"),a("code",[s._v("$count += 1")]),s._v("，此时"),a("code",[s._v("$count = 11")]),s._v("，"),a("code",[s._v("$i++")]),s._v("之后变成 1。")]),s._v(" "),a("li",[a("code",[s._v("CPU")]),s._v("现在要调度到父进程，执行"),a("code",[s._v("$count *= 10")]),s._v("，此时"),a("code",[s._v("$count = 100")]),s._v("，"),a("code",[s._v("$i++")]),s._v("之后变为 1")]),s._v(" "),a("li",[s._v("假设父进程还在继续运行，"),a("code",[s._v("$count=100")]),s._v("了，"),a("code",[s._v("$i=1")]),s._v("了，再次执行"),a("code",[s._v("fork")]),s._v("，又产了一个子进程，命名为"),a("code",[s._v("child2")]),s._v("；假设"),a("code",[s._v("CPU")]),s._v("还是在调度父进程，"),a("code",[s._v("$count = 1000")]),s._v(","),a("code",[s._v("$i = 2")]),s._v("，正好"),a("code",[s._v("for")]),s._v("循环退出，父进程的最终结果是："),a("code",[s._v("$count = 1000")])])])]),s._v(" "),a("li",[a("code",[s._v("CPU")]),s._v("运行"),a("code",[s._v("child2")]),s._v("子进程，执行"),a("code",[s._v("$count += 1")]),s._v("，那么"),a("code",[s._v("$count = 101")]),s._v(","),a("code",[s._v("$i = 2")]),s._v("，"),a("code",[s._v("child2")]),s._v("的子进程最终结果是："),a("code",[s._v("$count = 101")])]),s._v(" "),a("li",[a("code",[s._v("CPU")]),s._v("又调度到"),a("code",[s._v("child1")]),s._v("子进程，此时变量"),a("code",[s._v("$count = 11")]),s._v(","),a("code",[s._v("$i = 1")]),s._v("，这个时候"),a("code",[s._v("child1")]),s._v("执行"),a("code",[s._v("pcntl_fork")]),s._v("函数，产生的子进程名称为"),a("code",[s._v("child3")]),s._v("，此时"),a("code",[s._v("$i=1,$count = 11")]),s._v("，会复制数据，"),a("code",[s._v("child1")]),s._v("继续执行，肯定是满足"),a("code",[s._v("child1是child3")]),s._v("的父亲，也算是一个父进程，会走"),a("code",[s._v("else")]),s._v("，此时"),a("code",[s._v("$count = 11 * 10 = 110")]),s._v("，此时"),a("code",[s._v("$i = 2")]),s._v("了，此时"),a("code",[s._v("child1")]),s._v("的最终结果："),a("code",[s._v("$count = 110")])]),s._v(" "),a("li",[a("code",[s._v("CPU")]),s._v("又调度到"),a("code",[s._v("child3")]),s._v("子进程，因为会复制数据，基础数据："),a("code",[s._v("$count = 11")]),s._v(","),a("code",[s._v("$i = 1")]),s._v("，最终结果为："),a("code",[s._v("$count = 12")])])]),s._v(" "),a("blockquote",[a("p",[s._v("关系")])]),s._v(" "),a("ul",[a("li",[a("code",[s._v("child1")]),s._v("和"),a("code",[s._v("child2")]),s._v("是兄弟进程，父进程是当前的主进程")]),s._v(" "),a("li",[a("code",[s._v("child3")]),s._v("的父亲是"),a("code",[s._v("child1")])])])]),s._v(" "),a("p",[s._v("我们可以加上一个死循环来阻塞一下，看看进程树")]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[s._v("<?php")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$count")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$i")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$i")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$i")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$pid")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("pcntl_fork")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$pid")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$count")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$count")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("fprintf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("STDOUT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"poid=%d, count=%d\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("posix_getpid")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$count")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sleep")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4021/20220410165538.png",alt:"运行结果"}})]),s._v(" "),a("p",[s._v("这样可以很清楚的看到几个进程之间的关系。")]),s._v(" "),a("h3",{attrs:{id:"稍作修改-加上一个break之后又是什么情况"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#稍作修改-加上一个break之后又是什么情况"}},[s._v("#")]),s._v(" 稍作修改，加上一个"),a("code",[s._v("break")]),s._v("之后又是什么情况")]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[s._v("<?php")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$count")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$i")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$i")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$i")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$pid")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("pcntl_fork")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$pid")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$count")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$count")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("fprintf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("STDOUT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"poid=%d, count=%d\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("posix_getpid")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$count")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("分析")]),s._v(" "),a("ol",[a("li",[a("code",[s._v("CPU")]),s._v("调度主进程，执行"),a("code",[s._v("fork")]),s._v("之后，就产生了一个子进程，命名为"),a("code",[s._v("child1")]),s._v("，并且复制父进程的代码段，即此时："),a("code",[s._v("$i = 0, $count =10")])]),s._v(" "),a("li",[s._v("假设"),a("code",[s._v("CPU")]),s._v("继续执行主进程，必然会满足"),a("code",[s._v("else")]),s._v("分支，此时"),a("code",[s._v("$count = 100，$i = 1")]),s._v("，这个时候遇到"),a("code",[s._v("break")]),s._v("退出了"),a("code",[s._v("for")]),s._v("循环，主进程就结束了，主进程的最终结果："),a("code",[s._v("$count = 100")])]),s._v(" "),a("li",[a("code",[s._v("CPU")]),s._v("调度到"),a("code",[s._v("child1")]),s._v("子进程，执行"),a("code",[s._v("if")]),s._v("分支，"),a("code",[s._v("$count = 11, $i = 1")]),s._v("，还是小于 2，会继续执行该进程，必然会执行"),a("code",[s._v("pcntl_fork")]),s._v("函数，又创建了有一个子进程，命名为"),a("code",[s._v("child2")]),s._v("，复制数据"),a("code",[s._v("$count = 11, $i = 1")]),s._v("。")]),s._v(" "),a("li",[s._v("假设"),a("code",[s._v("CPU")]),s._v("还是继续调度"),a("code",[s._v("child1")]),s._v("进程，此时它已经是一个父亲了，此时满足"),a("code",[s._v("else")]),s._v("分支 ，"),a("code",[s._v("$count = 110")]),s._v("，遇到"),a("code",[s._v("break")]),s._v("退出，"),a("code",[s._v("child1")]),s._v("进程的最终结果："),a("code",[s._v("$count = 110")])]),s._v(" "),a("li",[a("code",[s._v("CPU")]),s._v("切换调度到"),a("code",[s._v("child2")]),s._v("子进程，"),a("code",[s._v("$count = 11, $i = 1")]),s._v("，满足"),a("code",[s._v("if")]),s._v("分支，此时"),a("code",[s._v("$count = 12, $i = 2")]),s._v("，退出循环")])]),s._v(" "),a("p",[s._v("进程关系：")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("child1")]),s._v("子进程的父亲是主进程")]),s._v(" "),a("li",[a("code",[s._v("child2")]),s._v("子进程的父亲是"),a("code",[s._v("child1")])])])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4021/20220410172403.png",alt:"进程树"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4021/20220410172432.png",alt:"进程结果"}})])])}),[],!1,null,null,null);t.default=e.exports}}]);