(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{507:function(t,s,a){"use strict";a.r(s);var n=a(16),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"map-为什么要扩容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#map-为什么要扩容"}},[t._v("#")]),t._v(" map 为什么要扩容")]),t._v(" "),a("p",[t._v("源码位置："),a("code",[t._v("runtime")]),t._v("包下的"),a("code",[t._v("map.go")]),t._v("里的"),a("code",[t._v("mapassign")]),t._v("方法")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("map")]),t._v("溢出桶太多时会导致严重的性能下降")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("runtime.mapassign()")]),t._v("可能会触发扩容")]),t._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// If we hit the max load factor or we have too many overflow buckets,")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// and we're not already in the middle of growing, start growing.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("h"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("growing")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("overLoadFactor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("h"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" h"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("B"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tooManyOverflowBuckets")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("h"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("noverflow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" h"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("B"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hashGrow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" h"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("goto")]),t._v(" again "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Growing the table invalidates everything, so try again")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("ul",[a("li",[t._v("装载因子超过 6.5(平均每个槽 6.5 个"),a("code",[t._v("key")]),t._v(")")]),t._v(" "),a("li",[t._v("使用了太多溢出桶(溢出桶超过了普通桶的数量就要开始考虑扩容)")])])])]),t._v(" "),a("h2",{attrs:{id:"map-扩容的类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#map-扩容的类型"}},[t._v("#")]),t._v(" map 扩容的类型")]),t._v(" "),a("ul",[a("li",[t._v("等量扩容：数据不多但是溢出桶太多了")]),t._v(" "),a("li",[t._v("翻倍扩容：数据太多了")])]),t._v(" "),a("h2",{attrs:{id:"map-扩容步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#map-扩容步骤"}},[t._v("#")]),t._v(" map 扩容步骤")]),t._v(" "),a("h3",{attrs:{id:"步骤一"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#步骤一"}},[t._v("#")]),t._v(" 步骤一")]),t._v(" "),a("ol",[a("li",[t._v("创建一组新桶")]),t._v(" "),a("li",[a("code",[t._v("oldbuckets")]),t._v("指向原有的桶数组")]),t._v(" "),a("li",[a("code",[t._v("buckets")]),t._v("指向新的桶数组")]),t._v(" "),a("li",[a("code",[t._v("map")]),t._v("标记为扩容状态")])]),t._v(" "),a("p",[t._v("源码：")]),t._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hashGrow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("t "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("maptype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" h "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("hmap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// If we've hit the load factor, get bigger.")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Otherwise, there are too many overflow buckets,")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// so keep the same number of buckets and "grow" laterally.')]),t._v("\n\tbigger "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("uint8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("overLoadFactor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("h"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" h"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("B"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tbigger "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n\t\th"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("flags "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|=")]),t._v(" sameSizeGrow\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\toldbuckets "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" h"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("buckets\n\tnewbuckets"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nextOverflow "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("makeBucketArray")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" h"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("B"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("bigger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\tflags "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" h"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("flags "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&^")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("iterator "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" oldIterator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" h"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("flags"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("iterator "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tflags "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|=")]),t._v(" oldIterator\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// commit the grow (atomic wrt gc)")]),t._v("\n\th"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("B "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" bigger\n\th"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("flags "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" flags\n\th"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("oldbuckets "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" oldbuckets\n\th"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("buckets "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" newbuckets\n\th"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nevacuate "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n\th"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("noverflow "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" h"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("extra "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" h"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("extra"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("overflow "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Promote current overflow buckets to the old generation.")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" h"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("extra"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("oldoverflow "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("throw")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"oldoverflow is not nil"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\th"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("extra"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("oldoverflow "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" h"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("extra"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("overflow\n\t\th"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("extra"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("overflow "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" nextOverflow "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" h"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("extra "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\th"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("extra "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("new")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mapextra"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\th"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("extra"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nextOverflow "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nextOverflow\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// the actual copying of the hash table data is done incrementally")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// by growWork() and evacuate().")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br"),a("span",{staticClass:"line-number"},[t._v("33")]),a("br"),a("span",{staticClass:"line-number"},[t._v("34")]),a("br"),a("span",{staticClass:"line-number"},[t._v("35")]),a("br"),a("span",{staticClass:"line-number"},[t._v("36")]),a("br"),a("span",{staticClass:"line-number"},[t._v("37")]),a("br"),a("span",{staticClass:"line-number"},[t._v("38")]),a("br"),a("span",{staticClass:"line-number"},[t._v("39")]),a("br"),a("span",{staticClass:"line-number"},[t._v("40")]),a("br"),a("span",{staticClass:"line-number"},[t._v("41")]),a("br"),a("span",{staticClass:"line-number"},[t._v("42")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4021/20220717142728.png",alt:"grow"}})]),t._v(" "),a("h3",{attrs:{id:"步骤二"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#步骤二"}},[t._v("#")]),t._v(" 步骤二")]),t._v(" "),a("ul",[a("li",[t._v("将所有的数据从旧桶驱逐到新桶")]),t._v(" "),a("li",[t._v("采用渐进式驱逐")]),t._v(" "),a("li",[t._v("每次操作一个旧桶时，将旧桶数据驱逐到新桶")]),t._v(" "),a("li",[t._v("读取时不进行驱逐，只判断读取新桶还是旧桶")])]),t._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 驱逐方法")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("growWork")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("t "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("maptype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" h "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("hmap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bucket "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uintptr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// make sure we evacuate the oldbucket corresponding")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// to the bucket we're about to use")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("evacuate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" h"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bucket"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("h"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("oldbucketmask")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// evacuate one more oldbucket to make progress on growing")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" h"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("growing")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("evacuate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" h"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" h"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nevacuate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])]),a("h3",{attrs:{id:"步骤三"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#步骤三"}},[t._v("#")]),t._v(" 步骤三")]),t._v(" "),a("ul",[a("li",[t._v("所有旧桶驱逐完成后")]),t._v(" "),a("li",[a("code",[t._v("oldbuckets")]),t._v("回收")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/4021/20220717144128.png",alt:"回收"}})]),t._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("ul",[a("li",[t._v("装载系数或者溢出桶的增加，会触发"),a("code",[t._v("map")]),t._v("扩容")]),t._v(" "),a("li",[t._v("扩容可能并不是增加桶数、而是整理")]),t._v(" "),a("li",[a("code",[t._v("map")]),t._v("的扩容采用渐进式，而不是一次性完成；桶被操作时才会重新分配")])])])}),[],!1,null,null,null);s.default=e.exports}}]);