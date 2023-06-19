(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{605:function(s,a,t){"use strict";t.r(a);var n=t(16),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"会话"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#会话"}},[s._v("#")]),s._v(" 会话")]),s._v(" "),t("blockquote",[t("p",[s._v("会话就是一个进程组或多个进程组的集合；")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("一个会话可以至少有一个控制终端、伪终端")])]),s._v(" "),t("li",[t("p",[s._v("一个会话至少有一个前台进程组【前台：指能输入能执行命令的"),t("code",[s._v("bin/bash")]),s._v("】，其他的都是后台进程组")])]),s._v(" "),t("li",[t("p",[s._v("一个会话如果连接了一个控制终端，就叫控制进程；因为这个会话首进程"),t("code",[s._v("bin/bash")]),s._v("是连接控制终端的【伪终端设备驱动程序 + TCP/IP 对端的 SSH Client】，所以创建的子进程也会继承这个父进程的控制终端【0,1,2 标准输入，标准输出，标准错误】；因为连接了终端，所以在终端的输入会影响前台进程组，如："),t("code",[s._v("ctrl c")])])])])]),s._v(" "),t("div",{staticClass:"language-php line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token php language-php"}},[t("span",{pre:!0,attrs:{class:"token delimiter important"}},[s._v("<?php")]),s._v("\n\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function-definition function"}},[s._v("showPID")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$pid")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("posix_getpid")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("fprintf")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("STDOUT")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"pid=%d, ppid=%d, gpid=%d, sid=%d\\n"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$pid")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("posix_getppid")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("posix_getpgid")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$pid")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("posix_getsid")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$pid")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$pid")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("pcntl_fork")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("showPID")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sleep")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("p",[s._v("运行")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@jb51 process"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# php demo19.php")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("pid")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("26214")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ppid")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("24901")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gpid")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("26214")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("sid")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("24901")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("pid")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("26215")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ppid")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("26214")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gpid")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("26214")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("sid")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("24901")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("blockquote",[t("p",[s._v("这 2 个子进程会集成"),t("code",[s._v("bin/bash")]),s._v("父进程的一些属性，比如组 ID，SID，以及文件描述符：0,1,2【控制终端】，"),t("code",[s._v("bin/bash")]),s._v("你可以叫他一个会话，一个会话首进程，一个控制进程。")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /proc/26215\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" exe\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("就可以看到是链接的"),t("code",[s._v("bin/bash")])]),s._v(" "),t("p",[s._v("可以使用如下命令来查看进程的情况")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -exj\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("blockquote",[t("p",[s._v("可以知道该进程的"),t("code",[s._v("PID")]),s._v("、"),t("code",[s._v("PPID")]),s._v("、"),t("code",[s._v("PGID")]),s._v("、"),t("code",[s._v("SID")]),s._v("以及这个进程是哪个"),t("code",[s._v("UID")]),s._v("用什么"),t("code",[s._v("COMMAND")]),s._v("在什么时间启动的，状态是"),t("code",[s._v("STAT[S,T,D,R]")]),s._v("，该进程还连接了哪个终端【你可以认为连接了哪个输入单元，可以简单的认为是你的显示器和键盘，但是是由内核的伪终端设备驱动程序虚拟出来的】")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("24901")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("26214")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("26214")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("24901")]),s._v(" pts/2    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("26214")]),s._v(" S+       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(":00 php demo19.php "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("XDG_SESSION_ID")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("163175")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("HOSTNAME")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("jb51.net "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("TERM")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("xterm "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("SHELL")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/bin/bash HI\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("26214")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("26215")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("26214")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("24901")]),s._v(" pts/2    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("26214")]),s._v(" S+       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(":00 php demo19.php "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("XDG_SESSION_ID")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("163175")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("HOSTNAME")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("jb51.net "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("TERM")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("xterm "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("SHELL")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/bin/bash HI\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4021/20220601232113.png",alt:"流程"}})])])}),[],!1,null,null,null);a.default=e.exports}}]);