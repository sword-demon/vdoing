(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{474:function(s,t,a){"use strict";a.r(t);var n=a(16),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://gitee.com/wxvirus/img/raw/master/img/20220119225226.png",alt:"go基本数据类型"}})]),s._v(" "),a("h2",{attrs:{id:"bool-类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bool-类型"}},[s._v("#")]),s._v(" bool 类型")]),s._v(" "),a("p",[s._v("布尔类型的值只可以是常量"),a("code",[s._v("true")]),s._v("或者"),a("code",[s._v("false")]),s._v("。")]),s._v(" "),a("p",[s._v("一个简单的例子：")]),s._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" gender "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("bool")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n\nflag "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"数值型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数值型"}},[s._v("#")]),s._v(" 数值型")]),s._v(" "),a("h3",{attrs:{id:"整数型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#整数型"}},[s._v("#")]),s._v(" 整数型")]),s._v(" "),a("ul",[a("li",[s._v("int8 有符号 8 位整型(-128-127)长度：8bit 一个字节")]),s._v(" "),a("li",[s._v("int16 有符号 16 位整型(-32768-32767)")]),s._v(" "),a("li",[s._v("int32 有符号 32 位整型(-214783648 到 214783647)")]),s._v(" "),a("li",[s._v("int64 有符号 63 位整型(-922337203854775808 到 922337203854775807)")]),s._v(" "),a("li",[s._v("uint8 无符号 8 位整型(0-255)8 位都用于表示数值")]),s._v(" "),a("li",[s._v("uint16 无符号 16 位整型(0-65535)")]),s._v(" "),a("li",[s._v("uint32 无符号 32 位整型(0-4294967295)")]),s._v(" "),a("li",[s._v("uint64 无符号 63 位整型(0-184457440737095)")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("有符号数 缺陷：不能表示负数\n11111111 = 257\n后面就把第一位拿出来代表符号位\n01111111 = 127\n如果第一位是负数(第一位是1)\n10000001 = -1\n\n有符号数会拿出第一位来表示正/负数，所以它的上限就会小\n\n无符号数，第一位就会参与计算，上限就会很高\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("相比较 python 为啥 go 有这么多 int 类型")]),s._v(" "),a("p",[a("code",[s._v("python")]),s._v("不管你数据库设置的字段有啥上限，都是用"),a("code",[s._v("int")]),s._v("表示")]),s._v(" "),a("p",[s._v("但是相对于现实来说，很多都是有上限的，比如：年龄，分数都是有上限的，这些数据就不必要去用"),a("code",[s._v("int16")]),s._v("后面的。")]),s._v(" "),a("p",[s._v("所以在很多场景下，数字有上限，我们可以选择合适的数据类型来降低内存的占用。")]),s._v(" "),a("p",[s._v("在"),a("code",[s._v("python")]),s._v("中定一个"),a("code",[s._v("int")]),s._v("变量")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" age "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("import")]),s._v(" sys\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" print"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sys.getsizeof"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("))")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("28")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("它就占用了"),a("strong",[s._v("28")]),s._v("个字节，虽然在"),a("code",[s._v("python")]),s._v("中"),a("code",[s._v("int")]),s._v("占用字节是动态的，但是它的使用我们不用担心超过上限。")])]),s._v(" "),a("blockquote",[a("p",[s._v("所以对应静态类型的语言的类型选择，我们必须得先做好预期，否则到了上限就很难受。")])]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("int 类型")]),s._v(" "),a("p",[s._v("在"),a("code",[s._v("go")]),s._v("语言中，如果定义了"),a("code",[s._v("int")]),s._v("类型的数据，它也是一个动态类型，取决于机器本身是多少位，64 位的机器上运行那么"),a("code",[s._v("int")]),s._v("就是"),a("code",[s._v("int64")]),s._v("，如果是"),a("code",[s._v("32")]),s._v("位的机器上那么就是 4 个字节 。")]),s._v(" "),a("p",[s._v("使用"),a("code",[s._v("go")]),s._v("语言内置的一个方法来查看")]),s._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" age "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v("\nfmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nfmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("unsafe"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Sizeof")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("我这里是 8 个字节。")]),s._v(" "),a("p",[s._v("一般情况下，我们都会指明"),a("code",[s._v("int")]),s._v("占用多少个字节")])]),s._v(" "),a("h3",{attrs:{id:"浮点型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浮点型"}},[s._v("#")]),s._v(" 浮点型")]),s._v(" "),a("ul",[a("li",[s._v("float32 32 位浮点型数")]),s._v(" "),a("li",[s._v("float64 64 位浮点型数")])]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),a("p",[s._v("它没有"),a("code",[s._v("float")]),s._v("类型")]),s._v(" "),a("p",[a("code",[s._v("float32")]),s._v("最大值："),a("code",[s._v("3.4028234663852886e+38")])]),s._v(" "),a("p",[a("code",[s._v("float64")]),s._v("最大值："),a("code",[s._v("1.7976931348623157e+308")])]),s._v(" "),a("blockquote",[a("p",[s._v("为什么 64 位的 float 最大值远大于 int64，float 底层存储和 int 的存储是不一样的")]),s._v(" "),a("p",[s._v("float32 和 float64 两者占用内存不一样，64 位的最大数和精度都比 32 位高")])])]),s._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" age "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v("\nfmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nfmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("unsafe"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Sizeof")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// float 类型")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" weight "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("float64")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("71.2")]),s._v("\nfmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("weight"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nfmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("unsafe"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Sizeof")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("weight"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nfmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("MaxFloat32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nfmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("MaxFloat64"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nfmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%T\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" weight"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nfmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%T\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("71.2")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(".4028234663852886e+38\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".7976931348623157e+308\nfloat64\nint\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h3",{attrs:{id:"其他"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[s._v("#")]),s._v(" 其他")]),s._v(" "),a("ul",[a("li",[s._v("byte 等于 uint8 "),a("code",[s._v("type byte = uint8")]),s._v(" 实际上是"),a("code",[s._v("uint8")]),s._v("的别称")]),s._v(" "),a("li",[s._v("rune 等于 int32 "),a("code",[s._v("type rune = int32")]),s._v(" 和字符处理有关")]),s._v(" "),a("li",[s._v("uint 32 或 64 位 自动选择 32 位或者 64 位的")])]),s._v(" "),a("h3",{attrs:{id:"字符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字符"}},[s._v("#")]),s._v(" 字符")]),s._v(" "),a("blockquote",[a("p",[s._v("字符的本质是一个数字，可以进行加减乘除")])]),s._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[s._v("b "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'b'")]),s._v("\nfmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("reflect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("TypeOf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("b "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nfmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"b+1=%c"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("int32\nb+1"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("c\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),a("ol",[a("li",[s._v("b + 1 可以和数字金蒜")]),s._v(" "),a("li",[s._v("b + 1 的类型是"),a("code",[s._v("int32")])]),s._v(" "),a("li",[s._v("int 类型可以直接变成字符")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);