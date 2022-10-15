(window.webpackJsonp=window.webpackJsonp||[]).push([[201],{642:function(v,_,t){"use strict";t.r(_);var a=t(16),s=Object(a.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h2",{attrs:{id:"线性表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#线性表"}},[v._v("#")]),v._v(" 线性表")]),v._v(" "),t("blockquote",[t("p",[v._v("特点")])]),v._v(" "),t("p",[v._v("比如：我们在小时候出去春游的时候，总是排成一队，我们如何记住自己的位置呢，我们只需要记住自己前面的人即可。")]),v._v(" "),t("p",[v._v("我们也可以很快的请点人数，万一有人走丢，就可以最快时间知道是谁走丢了。")]),v._v(" "),t("p",[v._v("所以线性表就像它的名称一样具有线一样的性质的结构。")]),v._v(" "),t("blockquote",[t("p",[v._v("定义")])]),v._v(" "),t("p",[v._v("线性表：由"),t("strong",[v._v("0 个或多个数据元素")]),v._v("组成的"),t("strong",[v._v("有限序列")])]),v._v(" "),t("ul",[t("li",[v._v("首先它是一个序列，元素之间有先后顺序")]),v._v(" "),t("li",[v._v("若元素存在多个，则第一个元素没有前驱，而最后一个元素没有后继，其他元素都有且只有一个前驱和后继")]),v._v(" "),t("li",[v._v("线性表是有限的")])]),v._v(" "),t("blockquote",[t("p",[v._v("使用数学语言来定义")])]),v._v(" "),t("p",[t("code",[v._v("a1, ..., ai-1, ai, ai+1, ...an")])]),v._v(" "),t("p",[v._v("我们可以称呼"),t("code",[v._v("ai-1")]),v._v("是"),t("code",[v._v("ai")]),v._v("的直接前驱元素，"),t("code",[v._v("ai+1")]),v._v("是"),t("code",[v._v("ai")]),v._v("的直接后继元素。")]),v._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[v._v("提示")]),v._v(" "),t("p",[v._v("所以线性表元素的个数"),t("code",[v._v("n(n >= 0)")]),v._v("定义为线性表的长度，当"),t("code",[v._v("n = 0")]),v._v("时，成为空表。")])]),v._v(" "),t("h2",{attrs:{id:"考题模拟"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#考题模拟"}},[v._v("#")]),v._v(" 考题模拟")]),v._v(" "),t("ul",[t("li",[v._v("请问公司的组织架构属于线性架构么？（树）")]),v._v(" "),t("li",[v._v("分析：一般公司的总经理管理几个总监，每个总监管理几个经理，每个经理都有几个各自的下属和员工")]),v._v(" "),t("li",[v._v("所以这样的组织架构不是线性关系")])]),v._v(" "),t("ul",[t("li",[v._v("那么班级里的同学之间的友谊呢？（图）")]),v._v(" "),t("li",[v._v("当然也不是，因为每个人都会跟许多东西建立友谊关系")])]),v._v(" "),t("h2",{attrs:{id:"抽象数据类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#抽象数据类型"}},[v._v("#")]),v._v(" 抽象数据类型")]),v._v(" "),t("p",[v._v("数据类型：是指一组性质相同的值的集合以及定义在此集合上的一些操作的总称。")]),v._v(" "),t("blockquote",[t("p",[v._v("例如很多编程语言的浮点型、字符型这些指的就是数据类型。")])]),v._v(" "),t("p",[v._v("在 C 语言中，按照取值的不同，数据类型可以划分为两类：")]),v._v(" "),t("ul",[t("li",[v._v("原子类型：不可以再分解的基本类型，例如整型、浮点型、字符型等")]),v._v(" "),t("li",[v._v("结构类型：由若干个类型组合而成，是可以再分解的，例如整型数组是由若干个整型数据组成的。")])]),v._v(" "),t("blockquote",[t("p",[v._v("抽象：是指抽取出事物具有的普遍性的本质。它要求抽出问题的特征而忽略非本质的细节，是对具体事物的一个概括。抽象是一种思考问题的方式，它隐藏了繁杂的细节。")])]),v._v(" "),t("ul",[t("li",[t("p",[v._v("抽象数据类型(Abstract Data Type, ADT)是指一个数学模型以及定义在该模型的一组操作。")])]),v._v(" "),t("li",[t("p",[v._v("抽象数据类型的定义取决于它的一组逻辑特性，而与其在计算机内部如何表示和实现无关。")])])]),v._v(" "),t("p",[v._v("抽象数据类型的标准格式：")]),v._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[v._v("ADT 抽象数据类型名\nData\n\t数据元素之间逻辑关系的定义\nOperation\n\t操作\nendADT\n")])]),v._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[v._v("1")]),t("br"),t("span",{staticClass:"line-number"},[v._v("2")]),t("br"),t("span",{staticClass:"line-number"},[v._v("3")]),t("br"),t("span",{staticClass:"line-number"},[v._v("4")]),t("br"),t("span",{staticClass:"line-number"},[v._v("5")]),t("br"),t("span",{staticClass:"line-number"},[v._v("6")]),t("br")])])])}),[],!1,null,null,null);_.default=s.exports}}]);