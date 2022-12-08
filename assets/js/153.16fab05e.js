(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{593:function(s,v,_){"use strict";_.r(v);var e=_(16),a=Object(e.a)({},(function(){var s=this,v=s.$createElement,_=s._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[_("h2",{attrs:{id:"作业控制"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#作业控制"}},[s._v("#")]),s._v(" 作业控制")]),s._v(" "),_("blockquote",[_("p",[s._v("在"),_("code",[s._v("bin/bash")]),s._v("进程下启动的命令一般成为”作业“，或者叫工作")])]),s._v(" "),_("p",[s._v("​")]),s._v(" "),_("p",[s._v("一般说，在"),_("code",[s._v("bin/bash")]),s._v("下启动的命令的地方就叫做前景或者前台：一般受"),_("code",[s._v("ctrol+c")]),s._v("等指令影响")]),s._v(" "),_("p",[s._v("背景或后台：不受"),_("code",[s._v("ctrl + c")]),s._v("等指令影响")]),s._v(" "),_("p",[s._v("我们可以使用"),_("code",[s._v("&")]),s._v("命令把作业丢到背景中去执行")]),s._v(" "),_("div",{staticClass:"language-bash line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-bash"}},[_("code",[s._v("php demo20.php "),_("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n")])]),s._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[s._v("1")]),_("br")])]),_("p",[s._v("我们可以使用"),_("code",[s._v("jobs")]),s._v("来列出背景中的作业")]),s._v(" "),_("ul",[_("li",[_("code",[s._v("jobs -r")]),s._v("：运行中的作业")]),s._v(" "),_("li",[_("code",[s._v("jobs -s")]),s._v("：停止中的作业")])]),s._v(" "),_("p",[s._v("还可以使用"),_("code",[s._v("fg")]),s._v("命令把背景中的作业放到前景来执行；")]),s._v(" "),_("p",[_("code",[s._v("ctrl+z")]),s._v("可以将命令丢到背景中暂停，如果你想背景中的命令运行可以使用"),_("code",[s._v("bg")]),s._v("命令来实现")]),s._v(" "),_("div",{staticClass:"custom-block warning"},[_("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),_("p",[s._v("如果把一些作业放到背景中去执行，我们退出当前"),_("code",[s._v("bin/bash")]),s._v("或者关闭"),_("code",[s._v("sshd")]),s._v("服务，那么这个作业就没有了。作业会随着"),_("code",[s._v("bin/bash shell")]),s._v("的关闭而退出。")]),s._v(" "),_("p",[s._v("现在有 2 个方案：")]),s._v(" "),_("ol",[_("li",[_("p",[s._v("把这个程序改为守护进程")])]),s._v(" "),_("li",[_("p",[s._v("使用"),_("code",[s._v("nohup &")]),s._v("就可以把进程与控制终端断开成为守护进程")]),s._v(" "),_("div",{staticClass:"language-bash line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-bash"}},[_("code",[_("span",{pre:!0,attrs:{class:"token function"}},[s._v("nohup")]),s._v(" php demo20.php "),_("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n")])]),s._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[s._v("1")]),_("br")])]),_("p",[s._v("此时会话如果退出了，它就会变成一个守护进程")])])])])])}),[],!1,null,null,null);v.default=a.exports}}]);