(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{528:function(s,t,n){"use strict";n.r(t);var a=n(16),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"通过-python-的-httpserver-库实现-rpc"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#通过-python-的-httpserver-库实现-rpc"}},[s._v("#")]),s._v(" 通过 python 的 httpserver 库实现 rpc")]),s._v(" "),n("blockquote",[n("p",[s._v("首先明确：一定会发起一个网络请求，一定会有个网络连接(TCP/UDP)")])]),s._v(" "),n("p",[n("strong",[s._v("把远程的函数变成一个"),n("code",[s._v("http")]),s._v("请求")])]),s._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" b"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" a "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" b\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("服务端")]),s._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -*- coding: utf8 -*-")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# @Time    : 2022/1/24 22:37")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# @Author  : wxvirus")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# @File    : remote_add.py")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# @Software: PyCharm")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" http"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("server "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" HTTPServer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" BaseHTTPRequestHandler\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" urllib"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("parse "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" urlparse"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" parse_qsl\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" json\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 暴露的端口")]),s._v("\nhost "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8003")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("AddHandler")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("BaseHTTPRequestHandler"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("do_GET")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 解析路径")]),s._v("\n        parsed_url "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" urlparse"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("path"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 请求参数")]),s._v("\n        qs "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("dict")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("parse_qsl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("parsed_url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("query"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取url的请求参数 a和b")]),s._v("\n        a "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("qs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"a"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        b "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("qs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"b"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置响应码")]),s._v("\n        self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("send_response"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("200")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置响应头为 json格式")]),s._v("\n        self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("send_header"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"content-type"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"application/json"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("end_headers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("wfile"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("write"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("json"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dumps"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"result"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" a "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" b"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("encode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"utf-8"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" __name__ "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'__main__'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    server "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" HTTPServer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("host"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" AddHandler"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"启动服务器"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 永远启动着")]),s._v("\n    server"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("serve_forever"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br")])]),n("p",[s._v("客户端")]),s._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -*- coding: utf8 -*-")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# @Time    : 2022/1/24 22:48")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# @Author  : wxvirus")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# @File    : rpc_client.py")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# @Software: PyCharm")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" requests"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" json\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 自己实现的一个demo级别的rpc封装")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Client")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("__init__")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("url "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" url\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" b"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        res "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" requests"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string-interpolation"}},[n("span",{pre:!0,attrs:{class:"token string"}},[s._v('f"')]),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("?a=")]),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("&b=")]),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("b"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" json"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("loads"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("text"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"result"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# rpc强调的就是一个本地调用过程的一个体验")]),s._v("\nclient "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Client"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://127.0.0.1:8003"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("client"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("add"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("client"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("add"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# res = requests.get("http://127.0.0.1:8003?a=1&b=2")')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# http的调用")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1. 每个函数调用都得记住url地址是什么，参数是如何传递的，返回数据是如何解析的")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 目标： add 函数调用就像本地函数调用一样")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# print(res.text)")]),s._v("\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br")])]),n("h2",{attrs:{id:"rpc-开发的要素分析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#rpc-开发的要素分析"}},[s._v("#")]),s._v(" rpc 开发的要素分析")]),s._v(" "),n("p",[n("strong",[s._v("rpc 开发的四大要素")]),s._v("：")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("客户端：服务调用发起方，也称为服务消费者")])]),s._v(" "),n("li",[n("p",[s._v("客户端存根：")]),s._v(" "),n("blockquote",[n("p",[s._v("该程序运行在客户端所在的就计算机器上，主要用来存储要调用的服务器的地址，另外，该程序还负责将客户端请求远端服务器的程序的数据信息打包成数据包，通过网络发送给服务端"),n("code",[s._v("Stub")]),s._v("程序；其次，还要接收服务端"),n("code",[s._v("Stub")]),s._v("程序发送的调用结果数据包，并解析返回给客户端。")])])]),s._v(" "),n("li",[n("p",[s._v("服务端：远端的计算机器上运行的程序，其中有客户端要调用的方法")])]),s._v(" "),n("li",[n("p",[s._v("服务端存根：")]),s._v(" "),n("blockquote",[n("p",[s._v("接收客户端"),n("code",[s._v("Stub")]),s._v("程序通过网络发送的请求信息数据包，并调用服务端中真正的程序功能方法，完成功能调用；其次，将服务端执行的调用结果进行数据处理打包发送给客户端"),n("code",[s._v("Stub")]),s._v("程序。")])])])]),s._v(" "),n("p",[s._v("其实上述代码中的"),n("code",[s._v("Client")]),s._v("类就是一个客户端存根，可以重命名为"),n("code",[s._v("ClientStub")]),s._v("。")]),s._v(" "),n("p",[s._v("为我们客户端调用屏蔽了：")]),s._v(" "),n("ol",[n("li",[s._v("call id")]),s._v(" "),n("li",[s._v("序列化和反序列化")]),s._v(" "),n("li",[s._v("传输协议(HTTP)")])]),s._v(" "),n("p",[s._v("所以这边也可以称之为一个代理，逻辑都放在了一个代理类上进行处理。其次，同理，服务端也会有一个存根，")]),s._v(" "),n("p",[s._v("用于将"),n("code",[s._v("url")]),s._v("映射到对应的函数，可以将客户端发过来的请求映射到想要调用的方法，服务端也会对传递的数据进行序列化和反序列化。")])])}),[],!1,null,null,null);t.default=e.exports}}]);