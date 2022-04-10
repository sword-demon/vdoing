(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{486:function(t,a,v){"use strict";v.r(a);var _=v(16),s=Object(_.a)({},(function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"什么是-rpc"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#什么是-rpc"}},[t._v("#")]),t._v(" 什么是 rpc")]),t._v(" "),v("ol",[v("li",[t._v("RPC(Remote Procedure Call)远程过程调用，简单的理解就是一个节点请求另一个节点提供的服务。")]),t._v(" "),v("li",[t._v("对应 rpc 的是本地过程调用，函数调用是最常见的本地调用过程")]),t._v(" "),v("li",[t._v("将本地过程调用变成远程过程调用会面临各种问题")])]),t._v(" "),v("h2",{attrs:{id:"本地过程调用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#本地过程调用"}},[t._v("#")]),t._v(" 本地过程调用")]),t._v(" "),v("div",{staticClass:"language-python line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-python"}},[v("code",[v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" a "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" b\n\ntotal "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" add"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("total"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br"),v("span",{staticClass:"line-number"},[t._v("2")]),v("br"),v("span",{staticClass:"line-number"},[t._v("3")]),v("br"),v("span",{staticClass:"line-number"},[t._v("4")]),v("br"),v("span",{staticClass:"line-number"},[t._v("5")]),v("br")])]),v("p",[t._v("函数调用过程：")]),t._v(" "),v("ol",[v("li",[t._v("将 1 和 2 压入"),v("code",[t._v("add")]),t._v("函数的栈")]),t._v(" "),v("li",[t._v("进入"),v("code",[t._v("add")]),t._v("函数，从栈中取出 1 和 2 分别赋值给"),v("code",[t._v("a")]),t._v("和"),v("code",[t._v("b")])]),t._v(" "),v("li",[t._v("执行"),v("code",[t._v("a + b")]),t._v("将结果压栈")]),t._v(" "),v("li",[t._v("最后将结果出栈，赋值给"),v("code",[t._v("total")]),t._v("，然后打印出数据")])]),t._v(" "),v("h2",{attrs:{id:"远程过程调用面临的问题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#远程过程调用面临的问题"}},[t._v("#")]),t._v(" 远程过程调用面临的问题")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("原本本地的函数放到另外一台服务器上去运行，会引入很多新的问题")])]),t._v(" "),v("li",[v("p",[t._v("Call 的 id 映射(不一定叫这个，但是一定是唯一的)")]),t._v(" "),v("blockquote",[v("p",[t._v("我们怎么告诉远程机器我们要调用"),v("code",[t._v("add")]),t._v("，而不是"),v("code",[t._v("sub")]),t._v("或者"),v("code",[t._v("foo")]),t._v("呢？在本地调用中，函数体是直接通过函数指针来指定的，我们调用"),v("code",[t._v("add")]),t._v("，编译器就自动帮我们调用它的函数指针。但是在远程调用中，函数指针是不行的，因为两个进程的地址空间是完全不一样的。")]),t._v(" "),v("p",[t._v("所以在 RPC 中，所有的函数必须有自己的一个"),v("code",[t._v("ID")]),t._v("，这个"),v("code",[t._v("ID")]),t._v("在所有进程中都是唯一确定的。客户端在做远程过程调用时，必须附上这个"),v("code",[t._v("ID")]),t._v("，然后我们还需要在客户端和服务端分别维护一个"),v("code",[t._v("{函数 <--\x3e Call ID}")]),t._v("的对应表。两者的表不一定需要完全相同，但相同的函数对应的"),v("code",[t._v("Call ID")]),t._v("必须相同。当客户端需要进行远程调用时，它就查一下这个表，找出相应的"),v("code",[t._v("Call ID")]),t._v("，然后把它传给服务端，服务端也通过查表，来确定客户端需要调用的函数，然后执行响应的函数的代码。")])])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("序列化和反序列化")])]),t._v(" "),v("blockquote",[v("p",[t._v("客户端怎么把参数值传给远程的函数呢？在本地调用中，我们只需要将参数压栈，然后让函数自己去栈里读就行。")]),t._v(" "),v("p",[t._v("但是在远程过程调用时，客户端跟服务端是不同的进程，不能通过内存来传递参数。甚至有时候客户端和服务端使用的都不是同一种语言。")]),t._v(" "),v("p",[t._v("这个时候就需要客户端把参数先转成一个字节流，传给服务端后，再把字节流转成自己可以读取的格式，这个过程叫序列化和反序列化。")]),t._v(" "),v("p",[t._v("同理，从服务端返回的值也需要序列化和反序列化的过程。")])])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("网络传输问题")])]),t._v(" "),v("blockquote",[v("p",[t._v("远程调用往往用在网络上，客户端和服务端是通过网络连接的。所有的数据都是需要通过网络传输，因此就需要有一个网络传输层。")]),t._v(" "),v("p",[t._v("网络传输层需要把"),v("code",[t._v("Call ID")]),t._v("和序列化后的参数字节流传给服务端，然后再把序列化后的调用结果传回给客户端。")]),t._v(" "),v("p",[t._v("只要能完成这两者的，都可以作为传输层使用。因此，它锁使用的协议其实是不限的，能完成传输就行，尽管大部分 RPC 框架都使用 TCP 协议，但是其实 UDP 也可以，而"),v("code",[t._v("gRPC")]),t._v("干脆就用了"),v("code",[t._v("HTTP2")]),t._v("。"),v("code",[t._v("Java")]),t._v("的"),v("code",[t._v("Netty")]),t._v("也属于这层的东西。")])]),t._v(" "),v("p",[v("code",[t._v("HTTP")]),t._v("协议来说，有一个问题：一次性，一旦对方反悔了结果，连接断开。所以"),v("code",[t._v("gRPC")]),t._v("的"),v("code",[t._v("HTTP2.0")]),t._v("可以实现长连接，且兼容"),v("code",[t._v("HTTP")]),t._v("协议。")])])])])}),[],!1,null,null,null);a.default=s.exports}}]);