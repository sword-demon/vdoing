(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{509:function(s,t,a){"use strict";a.r(t);var n=a(16),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"简单判断算法的时间复杂度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简单判断算法的时间复杂度"}},[s._v("#")]),s._v(" 简单判断算法的时间复杂度")]),s._v(" "),a("ul",[a("li",[s._v("确定问题规模n")]),s._v(" "),a("li",[s._v("循环减半过程 "),a("code",[s._v("logn")])]),s._v(" "),a("li",[s._v("k层关于n的循环  n^k^(这边是n的k次方，可能渲染上有问题)")]),s._v(" "),a("li",[s._v("复杂情况：根据算法的执行过程判断")])]),s._v(" "),a("h2",{attrs:{id:"空间复杂度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#空间复杂度"}},[s._v("#")]),s._v(" 空间复杂度")]),s._v(" "),a("blockquote",[a("p",[s._v("用来评估算法内存占用大小的式子")])]),s._v(" "),a("p",[s._v("空间复杂度的表示方式和时间复杂度完全一样")]),s._v(" "),a("ul",[a("li",[s._v("算法使用了几个变量：O(1)")]),s._v(" "),a("li",[s._v("算法使用了长度为n的一维列表：O(n)")]),s._v(" "),a("li",[s._v("算法使用了m行n列的二维列表：O(mn)")])]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),a("p",[s._v("现在一般来说时间复杂度比较重要")]),s._v(" "),a("p",[s._v("所以大部分算法都有一个说法：“空间换时间”，比如：分布式的一个运算。")])]),s._v(" "),a("h2",{attrs:{id:"递归"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#递归"}},[s._v("#")]),s._v(" 递归")]),s._v(" "),a("p",[s._v("两个特点：")]),s._v(" "),a("ul",[a("li",[s._v("调用自身")]),s._v(" "),a("li",[s._v("结束条件")])]),s._v(" "),a("h3",{attrs:{id:"四个示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四个示例"}},[s._v("#")]),s._v(" 四个示例")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("func1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    func1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("blockquote",[a("p",[s._v("第一个没有结束条件！")])]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("func2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("：\n    \t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        func2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("blockquote",[a("p",[s._v("看似加了结束条件，但是递归条件是+1，不会有小于0的时候")])]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("func3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        func3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("blockquote",[a("p",[s._v("这是一个合法的递归。")])]),s._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("案例")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 传入")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("输出结果\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/sword-demon/image_store/blog/image-20211016213416730.png",alt:""}})])]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("func4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        func4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("blockquote",[a("p",[s._v("此函数是先递归后打印，函数执行过程还是从上往下的。")])]),s._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("案例")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 传入x = 3")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("输出\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/sword-demon/image_store/blog/image-20211016214151362.png",alt:""}})])]),s._v(" "),a("h3",{attrs:{id:"汉诺塔问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#汉诺塔问题"}},[s._v("#")]),s._v(" 汉诺塔问题")]),s._v(" "),a("p",[s._v("由来")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),a("p",[s._v("大梵天创造世界的时候做了3根金刚石柱子，在一根柱子上从下往上按照大小顺序摞着64片黄金圆盘。")]),s._v(" "),a("p",[s._v("他命令婆罗门把圆盘从下面开始按大小顺序重新摆放在另一根柱子上。")]),s._v(" "),a("p",[s._v("在小圆盘上不能放大圆盘，在三根柱子之间一次只能移动一个圆盘。")]),s._v(" "),a("p",[s._v("64根柱子移动完毕之日，就是 "),a("strong",[s._v("世界毁灭之时")]),s._v("。")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/sword-demon/image_store/blog/image-20211016214522745.png",alt:""}})]),s._v(" "),a("p",[s._v("这里把圆盘的个数记作：n")]),s._v(" "),a("p",[s._v("三个柱子分别代表：A,B,C")]),s._v(" "),a("hr"),s._v(" "),a("p",[s._v("n = 2时")]),s._v(" "),a("ul",[a("li",[s._v("把小圆盘从A移动到B")]),s._v(" "),a("li",[s._v("把大圆盘从A移动到C")]),s._v(" "),a("li",[s._v("把小圆盘从B移动到C")])]),s._v(" "),a("hr"),s._v(" "),a("p",[s._v("n个盘子时：")]),s._v(" "),a("ol",[a("li",[s._v("把n-1个盘子从A经过C移动到B")]),s._v(" "),a("li",[s._v("把第n个盘子从A移动到C")]),s._v(" "),a("li",[s._v("把n-1个盘子从B经过A移动到C")])]),s._v(" "),a("p",[s._v("代码：")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -*- coding: utf8 -*-")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# @Time    : 2021/10/16 21:52")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# @Author  : wxvirus")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# @File    : hanoi.py")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# @Software: PyCharm")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 汉诺塔算法")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("hanoi")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v('"""\n    汉诺塔算法\n    递归终止条件 n = 0 没有盘子了\n    默认参数是从a经过b到c\n    :param n: 盘子个数\n    :param a: 第一个柱子\n    :param b: 第二个柱子\n    :param c: 第三个柱子\n    :return:\n    """')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" n "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        hanoi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("n "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"moving from {} to {}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("format")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        hanoi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("n "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n\nhanoi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'A'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'B'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'C'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br")])]),a("blockquote",[a("p",[s._v("这里是一个数学公式啊，因为"),a("code",[s._v("vuepress")]),s._v("我还不会整如何显示数学公式的，可能下面的会多出来几个美元符。这里再写一个没有美元符的：")]),s._v(" "),a("p",[a("code",[s._v("h(x) = 2h(x - 1) + 1")])])]),s._v(" "),a("p",[a("strong",[s._v("汉诺塔移动次数的递推式：")]),s._v("\n$$\nh(x) = 2h(x - 1) + 1\n$$")]),s._v(" "),a("p",[a("em",[s._v("假设婆罗门每秒钟搬一个盘子，则总共需要5800亿年！")])]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# n = 3输出结果")]),s._v("\n\nmoving "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" A to C\nmoving "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" A to B\nmoving "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" C to B\nmoving "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" A to C\nmoving "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" B to A\nmoving "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" B to C\nmoving "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" A to C\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("画图理解步骤")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/sword-demon/image_store/blog/image-20211016220840224.png",alt:""}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/sword-demon/image_store/blog/image-20211016220918065.png",alt:""}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://sword-demon.github.io/vue-blog/assets/images/image-20211016220947230.png",alt:""}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://sword-demon.github.io/vue-blog/assets/images/image-20211016221020257.png",alt:"C_B"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://sword-demon.github.io/vue-blog/assets/images/image-20211016221042877.png",alt:"A_C"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://sword-demon.github.io/vue-blog/assets/images/image-20211016221105167.png",alt:"B_A"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://sword-demon.github.io/vue-blog/assets/images/image-20211016221128623.png",alt:"B_C"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/sword-demon/image_store/blog/image-20211016221245636.png",alt:""}})])])])}),[],!1,null,null,null);t.default=e.exports}}]);