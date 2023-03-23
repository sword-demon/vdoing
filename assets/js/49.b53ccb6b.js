(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{485:function(t,s,a){"use strict";a.r(s);var n=a(16),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"类型别名和自定义类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类型别名和自定义类型"}},[t._v("#")]),t._v(" 类型别名和自定义类型")]),t._v(" "),a("h3",{attrs:{id:"自定义类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义类型"}},[t._v("#")]),t._v(" 自定义类型")]),t._v(" "),a("blockquote",[a("p",[t._v("在 Go 语言中有一些基本的数据类型，如"),a("code",[t._v("string")]),t._v("、"),a("code",[t._v("int")]),t._v("、浮点型、布尔等数据类型，Go 语言中可以使用"),a("code",[t._v("type")]),t._v("关键字来定义自定义类型。")])]),t._v(" "),a("p",[t._v("自定义类型是定义了一个全新的类型。我们可以基于内置的基本类型定义，也可以通过"),a("code",[t._v("struct")]),t._v("定义")]),t._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将MyInt定义为int类型")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" MyInt "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("通过"),a("code",[t._v("type")]),t._v("关键字的定义，"),a("code",[t._v("MyInt")]),t._v("就是一种新的类型，它具有"),a("code",[t._v("int")]),t._v("的特性")]),t._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" x MyInt "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("\nfmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"x=%T\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// x:main.MyInt")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("blockquote",[a("p",[t._v("自定义类型是程序员根据自己的需要创造的新类型")])]),t._v(" "),a("h3",{attrs:{id:"类型别名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类型别名"}},[t._v("#")]),t._v(" 类型别名")]),t._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" NewInt "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("这个实际上本质还是原来的"),a("code",[t._v("int")]),t._v("无非就是起了一个小名，别名。比如类型"),a("code",[t._v("rune")]),t._v("其实就是"),a("code",[t._v("int32")]),t._v("，还有"),a("code",[t._v("byte")]),t._v("就是"),a("code",[t._v("uint8")]),t._v("类型。")]),t._v(" "),a("p",[t._v("实际上就是为了方便理解而存在。")]),t._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" x NewInt "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("\nfmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"x=%T\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// x:int")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("blockquote",[a("p",[t._v("类型别名只在源文件中生效，编译完之后，还是会以被替换成原始的"),a("code",[t._v("int")]),t._v("类型")])])])}),[],!1,null,null,null);s.default=e.exports}}]);