(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{534:function(t,s,a){"use strict";a.r(s);var n=a(16),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"想实现功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#想实现功能"}},[t._v("#")]),t._v(" 想实现功能")]),t._v(" "),a("blockquote",[a("p",[t._v("顾名思义 ，就是根据优惠券的模板去生成对应的优惠券，就是一个生产模具，模板也会携带大量的优惠券信息，比如：名称，有效期，优惠规则，面额等。模板本身也有创建人，状态等基本信息；当需要生成优惠券是，选择哪一个模板，在输入生成总数就可以了。")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("字段重复值较多")]),t._v(" "),a("p",[t._v("优惠券和优惠券模板的重复字段比较多，为什么不直接跳过模板的环节？")]),t._v(" "),a("ol",[a("li",[t._v("程序员都是懒人，主要是想逃过输入相同的模板信息，只需要输入一遍模板信息，就可以批量生产优惠券，提高效率")]),t._v(" "),a("li",[t._v("创建优惠券模板和领取优惠券是两类人做的事情，两类服务是需要进行隔离。")]),t._v(" "),a("li",[t._v("企业开发中，也是先有模板再有实现")])])]),t._v(" "),a("p",[t._v("主要步骤：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("根据运营人员"),a("strong",[t._v("设定的条件")]),t._v("构造"),a("strong",[t._v("优惠券模板")])])]),t._v(" "),a("li",[a("p",[t._v("条件：")]),t._v(" "),a("ol",[a("li",[t._v("名称")]),t._v(" "),a("li",[a("code",[t._v("logo")])]),t._v(" "),a("li",[t._v("分类")]),t._v(" "),a("li",[t._v("产品线")]),t._v(" "),a("li",[t._v("数量")]),t._v(" "),a("li",[t._v("规则")])])]),t._v(" "),a("li",[a("p",[t._v("模板规则即优惠券码规则：")]),t._v(" "),a("blockquote",[a("p",[t._v("优惠券码一共有 18 位，有两个要求")])]),t._v(" "),a("ol",[a("li",[t._v("不可以重复")]),t._v(" "),a("li",[t._v("有一定的识别性")])]),t._v(" "),a("p",[t._v("比如：")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("ul",[a("li",[t._v("前四位：产品线 + 类型")]),t._v(" "),a("li",[t._v("中间六位：日期随机：220101")]),t._v(" "),a("li",[t._v("后八位："),a("code",[t._v("0~9")]),t._v("的随机数")])])])])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("说明")]),t._v(" "),a("p",[t._v("规定优惠券必须有数量限制且优惠券(分发的)必须有优惠券码(优惠券的唯一识别性)")])]),t._v(" "),a("h2",{attrs:{id:"使用技术方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用技术方案"}},[t._v("#")]),t._v(" 使用技术方案")]),t._v(" "),a("h3",{attrs:{id:"给优惠券模板生成-优惠券码-并保存到redis-list-中。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#给优惠券模板生成-优惠券码-并保存到redis-list-中。"}},[t._v("#")]),t._v(" 给优惠券模板生成”优惠券码“并保存到"),a("code",[t._v("redis(list)")]),t._v("中。")]),t._v(" "),a("blockquote",[a("p",[t._v("优惠券码是在一个服务实例中预先生成的，并放到"),a("code",[t._v("redis")]),t._v("中，这样做的目的有：")])]),t._v(" "),a("ul",[a("li",[t._v("简单的解决优惠券码的一致性问题("),a("code",[t._v("redis")]),t._v("的"),a("code",[t._v("Set")]),t._v("数据结构)")]),t._v(" "),a("li",[t._v("不会造成优惠券码的超发")]),t._v(" "),a("li",[t._v("不需要考虑分发优惠券时的配额问题")])]),t._v(" "),a("p",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://gitee.com/wxvirus/img/raw/master/img/20220113214123.png",alt:"template_redis"}})]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("并发问题")]),t._v(" "),a("p",[a("code",[t._v("Redis")]),t._v("是单线程操作，我们直接从队列里获取一个优惠券码，这个操作时原子的，而且每个请求都是排队的，当然就不用考虑并发问题了。")])]),t._v(" "),a("h3",{attrs:{id:"清理过期的优惠券模板"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#清理过期的优惠券模板"}},[t._v("#")]),t._v(" 清理过期的优惠券模板")]),t._v(" "),a("p",[a("strong",[t._v("优惠券模板规定有使用期限，有两种过期策略：")])]),t._v(" "),a("ol",[a("li",[a("code",[t._v("template")]),t._v("模板自己的定期清理策略(定时任务)")]),t._v(" "),a("li",[t._v("使用"),a("code",[t._v("template")]),t._v("模块的其他模块自己校验(因为策略 1 存在延迟)")])]),t._v(" "),a("h2",{attrs:{id:"优惠券分发模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优惠券分发模块"}},[t._v("#")]),t._v(" 优惠券分发模块")]),t._v(" "),a("h3",{attrs:{id:"根据用户-id-和优惠券状态查找用户优惠券记录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#根据用户-id-和优惠券状态查找用户优惠券记录"}},[t._v("#")]),t._v(" 根据用户 id 和优惠券状态查找用户优惠券记录")]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("（用户相关的）优惠券状态有 3 类：可用的、已使用的、过期的(未被使用的)")])])]),t._v(" "),a("blockquote",[a("p",[t._v("用户查询的时候，首先应该判断是否存在过期的，但是没有被标记为过期的优惠券，如果存在，除了展示信息以外，还要进行额外的过期处理。")])]),t._v(" "),a("ol",[a("li",[t._v("用户通过优惠券状态从分发模块查询优惠券")]),t._v(" "),a("li",[t._v("分发模块从"),a("code",[t._v("redis")]),t._v("中检索(缓存穿透和雪崩)")]),t._v(" "),a("li",[t._v("过期优惠券的处理发送到"),a("code",[t._v("kafka")]),t._v("进行延迟过期处理策略，进行修改对应状态标识，回写"),a("code",[t._v("MySQL")])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("耗时操作")]),t._v(" "),a("ol",[a("li",[t._v("从数据库检索数据，所以我们使用"),a("code",[t._v("redis")]),t._v("缓存来处理")]),t._v(" "),a("li",[t._v("过期优惠券需要回写"),a("code",[t._v("MySQL")]),t._v("，所以我们需要将数据发送给"),a("code",[t._v("kafka")]),t._v("然后进行数据库交互")])])]),t._v(" "),a("h3",{attrs:{id:"根据用户-id-查找当前可以领取的优惠券模板"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#根据用户-id-查找当前可以领取的优惠券模板"}},[t._v("#")]),t._v(" 根据用户 id 查找当前可以领取的优惠券模板")]),t._v(" "),a("blockquote",[a("ol",[a("li",[t._v("优惠券模板从"),a("code",[t._v("template")]),t._v("模块处获取(熔断兜底策略，保证模块不挂掉)")]),t._v(" "),a("li",[t._v("根据优惠券的领取限制，比对当前用户所拥有的优惠券，做出判断")])])]),t._v(" "),a("p",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://gitee.com/wxvirus/img/raw/master/img/20220113220259.png",alt:"celue"}})]),t._v(" "),a("h3",{attrs:{id:"用户领取优惠券"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用户领取优惠券"}},[t._v("#")]),t._v(" 用户领取优惠券")]),t._v(" "),a("blockquote",[a("ol",[a("li",[t._v("优惠券模板从"),a("code",[t._v("template")]),t._v("模块处获取(熔断兜底策略，保证模块不挂掉)")]),t._v(" "),a("li",[t._v("根据优惠券的领取限制，比对当前用户所拥有的优惠券，做出判断是否可以领取")]),t._v(" "),a("li",[t._v("从"),a("code",[t._v("redis")]),t._v("中获取优惠券码")]),t._v(" "),a("li",[t._v("优惠券写入"),a("code",[t._v("MySQL")]),t._v("和"),a("code",[t._v("Redis")]),t._v("中")])])]),t._v(" "),a("p",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://gitee.com/wxvirus/img/raw/master/img/20220113220446.png",alt:"get_coupon"}})]),t._v(" "),a("h3",{attrs:{id:"结算-核销-优惠券"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#结算-核销-优惠券"}},[t._v("#")]),t._v(" 结算(核销)优惠券")]),t._v(" "),a("blockquote",[a("ol",[a("li",[t._v("校验需要结算的优惠券是否是”合法的(属于当前用户 && 可用的)“")]),t._v(" "),a("li",[t._v("使用结算微服务(settlement)计算结算数据")]),t._v(" "),a("li",[t._v("如果是核销，需要写回"),a("code",[t._v("MySQL")])])])]),t._v(" "),a("p",{attrs:{align:"center"}},[a("strong",[t._v("从redis中检索得到用户当前的优惠券")]),a("img",{attrs:{src:"https://gitee.com/wxvirus/img/raw/master/img/20220113220916.png",alt:"从redis中检索得到用户当前的优惠券"}})]),t._v(" "),a("h3",{attrs:{id:"根据优惠券类型结算优惠券"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#根据优惠券类型结算优惠券"}},[t._v("#")]),t._v(" 根据优惠券类型结算优惠券")]),t._v(" "),a("ol",[a("li",[t._v("优惠券是分类的(满减类、折扣类、立减类、组合类)，不同累的优惠券有不同的计算方法")]),t._v(" "),a("li",[t._v("不同类的优惠券可以组合，所以，也需要有不同的计算方法")])]),t._v(" "),a("p",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://gitee.com/wxvirus/img/raw/master/img/20220113222203.png",alt:"结算优惠券"}})]),t._v(" "),a("h2",{attrs:{id:"存储设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#存储设计"}},[t._v("#")]),t._v(" 存储设计")]),t._v(" "),a("p",[t._v("优惠券模板表："),a("code",[t._v("coupon_template")])]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("drop")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("exists")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("coupon_template"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("coupon_template"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("           "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("unsigned")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AUTO_INCREMENT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("available"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("tinyint")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("comment")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'是否可用'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("expired"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("tinyint")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("comment")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'表示模板是否过期'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("logo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("intro"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("category"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("product_line"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("          "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("comment")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'产品线'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("coupon_count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("          "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("create_time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("datetime")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("user_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bigint")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("comment")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'创建者'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("template_key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("128")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("comment")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'优惠券模板标识'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("          "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("comment")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'用途'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("rule")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("comment")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'规则 比如领取限制 个数限制 过期时间限制 存储为json'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("PRIMARY")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("KEY")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("UNIQUE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("KEY")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("coupon_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("USING")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BTREE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("KEY")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("category"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("category"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("KEY")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("user_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("user_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ENGINE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("InnoDB")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CHARSET")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" utf8mb4 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("comment")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'优惠券模板表'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br")])]),a("p",[a("code",[t._v("name")]),t._v("是唯一键")]),t._v(" "),a("p",[a("code",[t._v("category")]),t._v("和"),a("code",[t._v("user_id")]),t._v("建立了单列索引，都是为了方便去检索。")]),t._v(" "),a("p",[t._v("(用户)优惠券表："),a("code",[t._v("coupon")])]),t._v(" "),a("p",[t._v("记录用户所属的优惠券信息")]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("drop")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("exists")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("coupon"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("create")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" coupon "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    id "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("unsigned")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("not")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("auto_increment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    template_id "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("not")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("comment")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'对应模板表的逻辑外键'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    user_id "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bigint")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("not")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("comment")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'所属用户的id'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    coupon_code "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("not")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("comment")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'优惠券码'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    assign_time "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("datetime")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("not")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0000-01-01 00:00:00'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("comment")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'领取时间'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("status")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("not")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("comment")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'状态 可使用 已使用 过期的'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("primary")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("key")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("key")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("template_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("template_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("key")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("user_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("user_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("engine")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("InnoDB")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CHARSET")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("utf8mb4 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("comment")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'用户优惠券表'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br")])]),a("h2",{attrs:{id:"缓存设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缓存设计"}},[t._v("#")]),t._v(" 缓存设计")]),t._v(" "),a("h3",{attrs:{id:"优惠券码缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优惠券码缓存"}},[t._v("#")]),t._v(" 优惠券码缓存")]),t._v(" "),a("ol",[a("li",[t._v("优惠券系统使用"),a("code",[t._v("redis")]),t._v("做缓存，所以，都是"),a("code",[t._v("KV")]),t._v("类型")]),t._v(" "),a("li",[a("code",[t._v("Key")]),t._v("需要有意义，且不能与原有的"),a("code",[t._v("Key")]),t._v("冲突")]),t._v(" "),a("li",[t._v("优惠券码需要永久存在，不设定过期时间")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("KV 设计")]),t._v(" "),a("p",[a("code",[t._v("Key")]),t._v(" = 前缀(wxvirus"),a("em",[t._v("coupon_template_code")]),t._v(") + 后缀(优惠券模板数据表主键)")]),t._v(" "),a("p",[a("code",[t._v("Value")]),t._v("类型："),a("code",[t._v("list")])])]),t._v(" "),a("h3",{attrs:{id:"用户优惠券缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用户优惠券缓存"}},[t._v("#")]),t._v(" 用户优惠券缓存")]),t._v(" "),a("ol",[a("li",[t._v("用户优惠券根据状态分为(未使用、已使用、已过期)三类")]),t._v(" "),a("li",[t._v("用户数据保存在"),a("code",[t._v("MySQL")]),t._v("中，且数据量大，不适合长时间驻留在"),a("code",[t._v("redis")]),t._v("中，需要设置过期时间")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("KV 设计")]),t._v(" "),a("p",[a("code",[t._v("Key")]),t._v(" = 前缀("),a("code",[t._v("wxvirus_user_coupon_usable_")]),t._v("、"),a("code",[t._v("wxvirus_user_coupon_used_")]),t._v("、"),a("code",[t._v("wxvirus_user_coupon_expired_")]),t._v(") + 后缀(优惠券模板数据表主键)")]),t._v(" "),a("p",[a("code",[t._v("Value")]),t._v("类型："),a("code",[t._v("hash(key: 优惠券id； value: 优惠券信息)")])])]),t._v(" "),a("h2",{attrs:{id:"功能微服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#功能微服务"}},[t._v("#")]),t._v(" 功能微服务")]),t._v(" "),a("ul",[a("li",[t._v("面向运营的优惠券模板创建服务(template_module)")]),t._v(" "),a("li",[t._v("面向用户的优惠券分发服务(distribution_module)")]),t._v(" "),a("li",[t._v("结算服务(settlement_module)")])]),t._v(" "),a("p",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://gitee.com/wxvirus/img/raw/master/img/20220113225624.png",alt:"功能微服务设计"}})])])}),[],!1,null,null,null);s.default=e.exports}}]);