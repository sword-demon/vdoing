(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{561:function(t,s,a){"use strict";a.r(s);var n=a(16),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"功能模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#功能模块"}},[t._v("#")]),t._v(" 功能模块")]),t._v(" "),a("blockquote",[a("p",[t._v("架构设计最重要的就是理解整个产品体系在系统中的定位。搞清楚系统背后的背景，才能做出最佳的设计和抽象。要理解业务背后的本质，事情的初衷。")])]),t._v(" "),a("ul",[a("li",[t._v("发布评论：支持回复楼层、楼中楼")]),t._v(" "),a("li",[t._v("读取评论：按照时间、热度排序")]),t._v(" "),a("li",[t._v("删除评论：用户删除、作者删除")]),t._v(" "),a("li",[t._v("管理评论：作者置顶、后台运营管理(搜索、删除、审核等)")])]),t._v(" "),a("blockquote",[a("p",[t._v("评论系统，往小里说就是评论系统，往大里做就是评论平台，可以接入各种业务形态。再大了做就是一个评论的中台。")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("在动手设计前，反复思考，真正编码的时间只有5%")])]),t._v(" "),a("blockquote",[a("p",[t._v("架构设计等同于数据设计、梳理清除数据的走向和逻辑。尽量避免环形依赖、数据双向请求等。")])]),t._v(" "),a("h2",{attrs:{id:"存储设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#存储设计"}},[t._v("#")]),t._v(" 存储设计")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("数据写入：事务更新 "),a("code",[t._v("comment_subject、comment_index、comment_content")]),t._v("三张表，其中"),a("code",[t._v("content")]),t._v("属于非强制需要一致性考虑的。可以先写入"),a("code",[t._v("content")]),t._v("，之后事务更新其他表。即便"),a("code",[t._v("content")]),t._v("先成功，后续失败仅仅存在一条"),a("code",[t._v("ghost")]),t._v("数据(就是没有和索引表关联上，写入失败的数据，即便内容存在了，也不会进行加载显示)。")])]),t._v(" "),a("li",[a("p",[t._v("数据读取：基于"),a("code",[t._v("obj_id")]),t._v("+"),a("code",[t._v("obj_type")]),t._v("在"),a("code",[t._v("comment_index")]),t._v("表找到评论列表，"),a("code",[t._v("WHERE root = 0 ORDER BY floor")]),t._v("。之后根据"),a("code",[t._v("comment_index")]),t._v("的"),a("code",[t._v("id")]),t._v("字段捞出"),a("code",[t._v("comment_content")]),t._v("的评论内容。对于二级的子楼层，"),a("code",[t._v("WHERE parent/root in (id...)")])])])]),t._v(" "),a("blockquote",[a("p",[t._v("因为产品形态上只存在二级列表，因此只需要迭代查询两次即可。对于嵌套层次多的，产品上，可以通过二次点击支持；每个主评论只显示前面2个子评论。")])]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("表SQL代码")]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 我这里简单写一下表字段和注释，不一定sql语句语法就对")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("create")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" comment_subject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\tid "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("not")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("primary")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("key")]),t._v(" INTERNAL_AUTO_INCREMENT "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("comment")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'主键'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tobj_id "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("not")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("comment")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'对象id'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tobj_type "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("not")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("comment")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'对象类型'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tmember_id "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("not")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("comment")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'作者用户id'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tcount "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("unsigned")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("not")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("comment")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'评论总数'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\troot_count "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("unsigned")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("not")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("comment")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'根评论总数'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tall_count "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("unsigned")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("not")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("comment")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'评论+回复总数'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tstate "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("unsigned")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("not")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("comment")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'状态 0-正常 1-隐藏'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tattrs "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("unsigned")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("not")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("comment")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'属性 0-运营置顶，1-up置顶，2-大数据过滤'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tcreate_time "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("timestamp")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("comment")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'创建时间'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tupdate_time "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TIMESTAMP")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("comment")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'修改时间'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("create")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" comment_index "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\tid "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("not")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("primary")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("key")]),t._v(" INTERNAL_AUTO_INCREMENT "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("comment")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'主键'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tobj_id "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("not")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("comment")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'对象id'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tobj_type "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("not")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("comment")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'对象类型'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tmember_id "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("not")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("comment")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'发表者有用户id'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\troot "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("not")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("comment")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'根评论id，不为0是回复评论'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tparent "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("not")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("comment")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'父评论，为0是root评论'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tfloor "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("not")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("comment")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'评论楼层'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tcount "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("not")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("comment")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'评论总数'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\troot_count "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("not")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("comment")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'根评论总数'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("like")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("not")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("comment")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'点赞数'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\thate "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("not")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("comment")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'点踩数'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tstate "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("not")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("comment")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'状态 0-正常 1隐藏'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tattrs "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("not")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("comment")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'属性'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tcreate_time "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TIMESTAMP")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("comment")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'创建时间'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tupdate_time "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TIMESTAMP")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("comment")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'修改时间'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("create")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" comment_content "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\tcomment_id "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("not")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("primary")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("key")]),t._v(" INTERNAL_AUTO_INCREMENT "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("comment")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'主键 和 comment_index的id对应'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tat_member_ids "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("not")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("comment")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'对象id'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tip "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("not")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("comment")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ip地址'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tplatform "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("not")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("comment")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'发表平台'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tdevice "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("not")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("comment")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'设备'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tmessage "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("not")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("comment")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'评论内容'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tmeta "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("text")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("comment")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'评论元数据：背景、字体'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tcreate_time "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TIMESTAMP")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("comment")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'创建时间'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tupdate_time "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TIMESTAMP")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("comment")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'修改时间'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br"),a("span",{staticClass:"line-number"},[t._v("33")]),a("br"),a("span",{staticClass:"line-number"},[t._v("34")]),a("br"),a("span",{staticClass:"line-number"},[t._v("35")]),a("br"),a("span",{staticClass:"line-number"},[t._v("36")]),a("br"),a("span",{staticClass:"line-number"},[t._v("37")]),a("br"),a("span",{staticClass:"line-number"},[t._v("38")]),a("br"),a("span",{staticClass:"line-number"},[t._v("39")]),a("br"),a("span",{staticClass:"line-number"},[t._v("40")]),a("br"),a("span",{staticClass:"line-number"},[t._v("41")]),a("br"),a("span",{staticClass:"line-number"},[t._v("42")]),a("br"),a("span",{staticClass:"line-number"},[t._v("43")]),a("br"),a("span",{staticClass:"line-number"},[t._v("44")]),a("br")])])]),t._v(" "),a("blockquote",[a("p",[t._v("这里牺牲了一部分写的性能，提升了读性能；有很多的数量的统计的字段做了拆分，在每次写的时候也会进行更新它的数量，避免"),a("code",[t._v("select count(*) where ...")]),t._v("这样一个高频的操作的场景里多次使用。")])]),t._v(" "),a("h3",{attrs:{id:"索引内容分离"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#索引内容分离"}},[t._v("#")]),t._v(" 索引内容分离")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("comment_index")]),t._v("：评论楼层的索引组织表，实际并不包含内容")]),t._v(" "),a("p",[a("code",[t._v("comment_content")]),t._v("：评论内容的表，包含评论的具体内容。")]),t._v(" "),a("p",[t._v("其中"),a("code",[t._v("comment_index")]),t._v("的"),a("code",[t._v("id")]),t._v("字段和"),a("code",[t._v("comment_content")]),t._v("的字段"),a("code",[t._v("comment_id")]),t._v("是一对一关系。")])]),t._v(" "),a("p",[t._v("包含了几种设计思想：")]),t._v(" "),a("ul",[a("li",[t._v("表都有主键，即"),a("code",[t._v("cluster index")]),t._v("，是物理组织形式存放的，"),a("code",[t._v("comment_content")]),t._v("没有id，是为了减少一次二级索引查找，直接基于主键检索，同时，"),a("code",[t._v("comment_id")]),t._v("在写入时要尽可能的顺序自增。")]),t._v(" "),a("li",[t._v("索引、内容分离，方便"),a("code",[t._v("mysql datapage")]),t._v("缓存更多的"),a("code",[t._v("row")]),t._v("，如果和"),a("code",[t._v("content")]),t._v("耦合，会导致大量的"),a("code",[t._v("IO")]),t._v("，长远来看"),a("code",[t._v("content")]),t._v("信息可以直接使用"),a("code",[t._v("KV storage")]),t._v("引擎存储。")])]),t._v(" "),a("h3",{attrs:{id:"缓存设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缓存设计"}},[t._v("#")]),t._v(" 缓存设计")]),t._v(" "),a("p",[a("strong",[t._v("comment_subject_cache[string]")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("key")]),t._v(" "),a("th",[t._v("string")]),t._v(" "),a("th",[t._v("old_type")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("value")]),t._v(" "),a("td",[t._v("int64")]),t._v(" "),a("td",[t._v("subject_marshal string")])]),t._v(" "),a("tr",[a("td",[t._v("expire")]),t._v(" "),a("td",[t._v("duration")]),t._v(" "),a("td",[t._v("24h")])])])]),t._v(" "),a("p",[t._v("对应主题的缓存，"),a("code",[t._v("value")]),t._v("使用"),a("code",[t._v("protobuf")]),t._v("序列化的方式存入。早期可能会使用"),a("code",[t._v("memcache")]),t._v("来进行缓存，因为"),a("code",[t._v("redis")]),t._v("早期单线程模型，吞吐能力不高。")]),t._v(" "),a("p",[a("strong",[t._v("comment_index_cache[sorted set]")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("key")]),t._v(" "),a("th",[t._v("string")]),t._v(" "),a("th",[t._v("cache key: old_type_sort 其中sort为排序方式 0：楼层 1：回复数量")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("member")]),t._v(" "),a("td",[t._v("int64")]),t._v(" "),a("td",[t._v("comment_id：评论id")])]),t._v(" "),a("tr",[a("td",[t._v("score")]),t._v(" "),a("td",[t._v("double")]),t._v(" "),a("td",[t._v("楼层号、回复数量、排序得分")])]),t._v(" "),a("tr",[a("td",[t._v("expire")]),t._v(" "),a("td",[t._v("duration")]),t._v(" "),a("td",[t._v("8h")])])])]),t._v(" "),a("p",[t._v("使用"),a("code",[t._v("redis sortedset")]),t._v("进行索引的缓存，索引即数据的组织顺序，而非数据内容。")]),t._v(" "),a("p",[t._v("百度贴吧使用的是自己研发的拉链存储来组织索引。毛大认为"),a("code",[t._v("mysql")]),t._v("作为主力存储，利用"),a("code",[t._v("redis")]),t._v("来做加速完全足够，因为"),a("code",[t._v("cache miss")]),t._v("的构建，使用"),a("code",[t._v("kafka")]),t._v("的消费者中处理，预加载少量数据，通过增量加载的方式主键预热填充缓存，而"),a("code",[t._v("redis sortedset skiplist")]),t._v("的实现，可以做到"),a("code",[t._v("O(logN) + O(M)")]),t._v("的时间复杂度，效率很高。")]),t._v(" "),a("p",[a("code",[t._v("sorted set")]),t._v("是要增量追加的，因此必须判断"),a("code",[t._v("key")]),t._v("存在才能"),a("code",[t._v("zadd")])]),t._v(" "),a("p",[a("strong",[t._v("comment_content_cache[string]")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("key")]),t._v(" "),a("th",[t._v("string")]),t._v(" "),a("th",[t._v("comment")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("value")]),t._v(" "),a("td",[t._v("int64")]),t._v(" "),a("td",[t._v("content")])]),t._v(" "),a("tr",[a("td",[t._v("expire")]),t._v(" "),a("td",[t._v("duration")]),t._v(" "),a("td",[t._v("24h")])])])]),t._v(" "),a("p",[a("code",[t._v("comment_content_cache")]),t._v("：对应评论内容的数据，使用"),a("code",[t._v("protobuf")]),t._v("序列化的方式存入。")]),t._v(" "),a("h2",{attrs:{id:"可用性设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#可用性设计"}},[t._v("#")]),t._v(" 可用性设计")]),t._v(" "),a("h3",{attrs:{id:"singleflight"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#singleflight"}},[t._v("#")]),t._v(" singleflight")]),t._v(" "),a("p",[t._v("对于热门的主题，如果存在缓存穿透的情况，会导致大量的同进程、跨进程的数据回源到存储层，可能会引起存储过载的情况。如何值交给同进程内，一个人去做加载存储？")]),t._v(" "),a("p",[a("strong",[t._v("使用归并回源的思路")]),t._v(" "),a("a",{attrs:{href:"https://pkg.go.dev/golang.org/x/sync/singleflight",target:"_blank",rel:"noopener noreferrer"}},[t._v("归并回源"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("同进程只交给一个人去获取"),a("code",[t._v("mysql")]),t._v("数据，然后批量返回。同时这个"),a("code",[t._v("lease owner")]),t._v("投递一个"),a("code",[t._v("kafka")]),t._v("消息，做"),a("code",[t._v("index cache")]),t._v("的"),a("code",[t._v("recovery")]),t._v("操作。这样可以大大减少"),a("code",[t._v("mysql")]),t._v("的压力，以及大量穿透导致的密集写"),a("code",[t._v("kafka")]),t._v("的问题。")]),t._v(" "),a("p",[t._v("更进一步的，后续连续的请求，仍然可能会短时间"),a("code",[t._v("cache miss")]),t._v("，可以在进程内设置一个"),a("code",[t._v("short-lived flag")]),t._v("，标记最近有一个人投递了"),a("code",[t._v("cached rebuild")]),t._v("的消息，直接"),a("code",[t._v("drop")])]),t._v(" "),a("h3",{attrs:{id:"热点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#热点"}},[t._v("#")]),t._v(" 热点")]),t._v(" "),a("p",[t._v("流量热点是因为突然热门的主题，被高频次的访问，因为底层"),a("code",[t._v("cache")]),t._v("的设计，一般是按照主题"),a("code",[t._v("key")]),t._v("进行一致性"),a("code",[t._v("hash")]),t._v("来进行分片，但是热点"),a("code",[t._v("key")]),t._v("一定命中某一个节点，这时候"),a("code",[t._v("remote cache")]),t._v("可能会变成瓶颈，因此做"),a("code",[t._v("cache")]),t._v("的升级"),a("code",[t._v("local cache")]),t._v("是必要的。一般使用单进程自适应发现热点的思路，附加一个短时的"),a("code",[t._v("ttl local cache")]),t._v("可以在进程内吞掉大量的读请求。")]),t._v(" "),a("p",[t._v("在内存中使用"),a("code",[t._v("hashmap")]),t._v("统计每个"),a("code",[t._v("key")]),t._v("的访问频次，这里使用滑动窗口统计，即每个窗口中，维护一个"),a("code",[t._v("hashmap")]),t._v("，之后统计所有未过去的"),a("code",[t._v("bucket")]),t._v("，汇总所有"),a("code",[t._v("key")]),t._v("的数据。")]),t._v(" "),a("p",[t._v("之后使用小堆计算"),a("code",[t._v("TopK")]),t._v("的数据，自动进行热点识别。")])])}),[],!1,null,null,null);s.default=e.exports}}]);