(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{537:function(s,t,n){"use strict";n.r(t);var a=n(16),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"grpc"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#grpc"}},[s._v("#")]),s._v(" gRPC")]),s._v(" "),n("blockquote",[n("p",[s._v("gRPC 是一个高性能的、开源和通用的 RPC 框架，面向移动和 HTTP/2 设计。目前提供 C、Java 和 Go 语言版本，分别是：grpc、grpc-java、grpc-go，其中 C 版本支持 C、C++、Nodejs、Python、Ruby、Objective-C、PHP 和 C#。")])]),s._v(" "),n("p",[s._v("grpc 网址：https://grpc.io/")]),s._v(" "),n("p",[s._v("比如：java 中的"),n("code",[s._v("dubbo")]),s._v("使用了"),n("code",[s._v("dubbo/rmi/hessian")]),s._v("各种协议，但是它们压缩比都会比"),n("code",[s._v("json")]),s._v("和"),n("code",[s._v("xml")]),s._v("高，甚至某些场景和"),n("code",[s._v("protobuf")]),s._v("差不多，"),n("strong",[s._v("如果懂了协议，完全有能力自己实现一个性能比较高的协议。")])]),s._v(" "),n("h2",{attrs:{id:"protobuf"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#protobuf"}},[s._v("#")]),s._v(" protobuf")]),s._v(" "),n("p",[s._v("它全称为："),n("code",[s._v("protocol buffer")]),s._v("，是一种数据存储格式")]),s._v(" "),n("ul",[n("li",[s._v("它是谷歌出品的一种轻量、高效的结构化数据存储格式，性能比"),n("code",[s._v("json")]),s._v("、"),n("code",[s._v("xml")]),s._v("真的强很多")]),s._v(" "),n("li",[n("code",[s._v("protobuf")]),s._v("经历了"),n("code",[s._v("protobuf2")]),s._v("和"),n("code",[s._v("protobuf3")]),s._v("，"),n("code",[s._v("pb3")]),s._v("比"),n("code",[s._v("pb2")]),s._v("简化了很多，目前主流的版本是"),n("code",[s._v("pb3")])])]),s._v(" "),n("p",[s._v("优点：")]),s._v(" "),n("ol",[n("li",[s._v("性能\n"),n("ol",[n("li",[s._v("压缩性好")]),s._v(" "),n("li",[s._v("序列化和反序列化快，比"),n("code",[s._v("json")]),s._v("和"),n("code",[s._v("xml")]),s._v("快 2-100 倍")]),s._v(" "),n("li",[s._v("传输速度快")])])]),s._v(" "),n("li",[s._v("便捷性\n"),n("ol",[n("li",[s._v("使用简单：可以自动生成序列化和反序列化的代码")]),s._v(" "),n("li",[s._v("维护成本地，我们只需要维护"),n("code",[s._v("proto")]),s._v("文件即可")]),s._v(" "),n("li",[s._v("向后兼容好，不破坏旧的格式")]),s._v(" "),n("li",[s._v("加密性好，它的代码会变成二进制的，就算别人拿到也不一定知道")])])]),s._v(" "),n("li",[s._v("跨语言\n"),n("ol",[n("li",[s._v("跨平台")]),s._v(" "),n("li",[s._v("支持各种主流语言")])])])]),s._v(" "),n("p",[s._v("缺点：")]),s._v(" "),n("ol",[n("li",[s._v("通用性差："),n("code",[s._v("json")]),s._v("可以任何语言都支持，但是"),n("code",[s._v("protobuf")]),s._v("需要专门的解析库")]),s._v(" "),n("li",[s._v("自解释性差：只有通过"),n("code",[s._v("proto")]),s._v("文件才能了解数据结构，源自于它加密性好，所以有的时候不是必须使用"),n("code",[s._v("protobuf")])])]),s._v(" "),n("h2",{attrs:{id:"python-下体验-protobuf"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#python-下体验-protobuf"}},[s._v("#")]),s._v(" python 下体验 protobuf")]),s._v(" "),n("p",[n("a",{attrs:{href:"https://grpc.io/docs/languages/python/quickstart/",target:"_blank",rel:"noopener noreferrer"}},[s._v("文档地址"),n("OutboundLink")],1)]),s._v(" "),n("p",[s._v("生成代码的工具代码编写，可以和"),n("code",[s._v("proto")]),s._v("文件卸载同一目录下，便于代码生成")]),s._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -*- coding: utf8 -*-")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# @Time    : 2022/7/10 21:47")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# @Author  : wxvirus")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# @File    : tools.py")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# @Software: PyCharm")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" pkg_resources\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" grpc_tools "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" _protoc_compiler\n\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("command_arguments"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v('"""Run the protocol buffer compiler with the given command-line arguments.\n  Args:\n    command_arguments: a list of strings representing command line arguments to\n        `protoc`.\n  """')]),s._v("\n    command_arguments "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("argument"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("encode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" argument "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" command_arguments"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" _protoc_compiler"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("run_main"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("command_arguments"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n\nproto_include "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" pkg_resources"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("resource_filename"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'grpc_tools'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'_proto'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nargv "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'-I.'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'--python_out=.'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'--grpc_python_out=.'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./hello.proto'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nmain"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("argv "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'-I{}'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("format")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("proto_include"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br")])]),n("p",[n("code",[s._v("proto")]),s._v("文件")]),s._v(" "),n("div",{staticClass:"language-protobuf line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-protobuf"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("syntax")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"proto3"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("message")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HelloRequest")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v(" name "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("测试代码")]),s._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -*- coding: utf8 -*-")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# @Time    : 2022/7/10 21:40")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# @Author  : wxvirus")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# @File    : client.py")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# @Software: PyCharm")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" protobuf_test"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("proto "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" hello_pb2\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 生成的pb文件不要去改")]),s._v("\nrequest "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" hello_pb2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("HelloRequest"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nrequest"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"wujie"')]),s._v("\nres_str "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" request"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SerializeToString"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("res_str"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果通过字符串反向生成对象")]),s._v("\nrequest2 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" hello_pb2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("HelloRequest"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nrequest2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ParseFromString"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("res_str"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("request2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br")])]),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("b"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\n\\x05wujie'")]),s._v("\nwujie\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("这里的"),n("code",[s._v("name")]),s._v("属性是编号 1，"),n("code",[s._v("\\n\\x")]),s._v("是一个可变长编码")])])}),[],!1,null,null,null);t.default=e.exports}}]);