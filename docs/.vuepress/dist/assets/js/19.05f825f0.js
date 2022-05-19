(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{459:function(s,t,n){"use strict";n.r(t);var a=n(16),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"基于-xml-的-rpc-库"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基于-xml-的-rpc-库"}},[s._v("#")]),s._v(" 基于 xml 的 rpc 库")]),s._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -*- coding: utf8 -*-")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# @Time    : 2022/1/28 22:16")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# @Author  : wxvirus")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# @File    : xml_rpc_server.py")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# @Software: PyCharm")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" xmlrpc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("server "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" SimpleXMLRPCServer\n\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Calculate")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" y"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" x "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" y\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("multiply")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" y"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" x "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" y\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("subtract")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" y"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("abs")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" y"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("divide")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" y"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" x "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" y\n\n\nobj "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Calculate"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nserver "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" SimpleXMLRPCServer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"localhost"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8088")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将实例注册给 rpc server")]),s._v("\nserver"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("register_instance"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("obj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"listening on port 8088"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nserver"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("serve_forever"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br")])]),n("ul",[n("li",[s._v("没有出现"),n("code",[s._v("url")]),s._v("的映射问题")]),s._v(" "),n("li",[s._v("没有解码和编码的问题")])]),s._v(" "),n("blockquote",[n("p",[s._v("我们就不用去管一些解析过程，我们只需要去编写我们的业务代码即可。")])]),s._v(" "),n("p",[s._v("而基于"),n("code",[s._v("xml")]),s._v("的 rpc 的客户端就更加的简单了")]),s._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -*- coding: utf8 -*-")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# @Time    : 2022/1/28 22:24")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# @Author  : wxvirus")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# @File    : xml_rpc_client.py")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# @Software: PyCharm")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" xmlrpc "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" client\n\nserver "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" client"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ServerProxy"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://localhost:8088"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("server"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("add"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("blockquote",[n("p",[s._v("此时会感觉"),n("code",[s._v("xmlrpc")]),s._v("挺好用的。但是对于"),n("code",[s._v("django")]),s._v("或者别的"),n("code",[s._v("web")]),s._v("框架来说一定是可以做到"),n("code",[s._v("xmlrpc")]),s._v("的效果的，但是它本身的目的不是这种。")]),s._v(" "),n("p",[n("code",[s._v("xmlrpc")]),s._v("它只能使用它提供的"),n("code",[s._v("ServerProxy")]),s._v("才能使用。")])]),s._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[s._v("区别")]),s._v(" "),n("p",[s._v("rpc 强调的是本地调用效果，但是和一般的"),n("code",[s._v("web")]),s._v("框架来说，不会写成这样，而且不太适合一些正常的"),n("code",[s._v("http")]),s._v("协议。。")]),s._v(" "),n("p",[s._v("一般 rpc 在内部服务调用很多，对外暴露不太适合。")]),s._v(" "),n("p",[s._v("这边我们使用的是"),n("code",[s._v("xmlrpc")]),s._v(",所以它的序列化和反序列化协议是"),n("code",[s._v("xml")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);