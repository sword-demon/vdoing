(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{576:function(e,v,_){"use strict";_.r(v);var t=_(16),s=Object(t.a)({},(function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h1",{attrs:{id:"redis-数据类型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#redis-数据类型"}},[e._v("#")]),e._v(" Redis 数据类型")]),e._v(" "),_("h2",{attrs:{id:"介绍"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[e._v("#")]),e._v(" 介绍")]),e._v(" "),_("p",[_("code",[e._v("Redis")]),e._v("存储的是"),_("code",[e._v("key-value")]),e._v("结构的数据，其中"),_("code",[e._v("key")]),e._v("是字符串类型，"),_("code",[e._v("value")]),e._v("有 5 种常用的数据类型：")]),e._v(" "),_("ul",[_("li",[e._v("字符串 "),_("code",[e._v("string")]),e._v(" 普通字符串，常用")]),e._v(" "),_("li",[e._v("哈希 "),_("code",[e._v("hash")]),e._v("；适合存储对象")]),e._v(" "),_("li",[e._v("列表 "),_("code",[e._v("list")]),e._v(" 按照插入顺序排序，可以有重复元素，可以用作任务队列，先进来的先处理")]),e._v(" "),_("li",[e._v("集合 "),_("code",[e._v("set")]),e._v(" 无序集合，没有重复元素")]),e._v(" "),_("li",[e._v("有序集合 "),_("code",[e._v("sorted set")]),e._v(" 有序集合，没有重复元素")])]),e._v(" "),_("h2",{attrs:{id:"常用命令"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[e._v("#")]),e._v(" 常用命令")]),e._v(" "),_("h3",{attrs:{id:"字符串操作命令"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#字符串操作命令"}},[e._v("#")]),e._v(" 字符串操作命令")]),e._v(" "),_("ul",[_("li",[_("code",[e._v("SET key value")]),e._v("：设置指定"),_("code",[e._v("key")]),e._v("的值")]),e._v(" "),_("li",[_("code",[e._v("GET key")]),e._v("：获取指定"),_("code",[e._v("key")]),e._v("的值，获取一个不存在的"),_("code",[e._v("key")]),e._v("，返回"),_("code",[e._v("nil")]),e._v("，说明获取的值不存在")]),e._v(" "),_("li",[_("code",[e._v("SETEX key seconds value")]),e._v("：设置指定"),_("code",[e._v("key")]),e._v("的值，并将"),_("code",[e._v("key")]),e._v("的过期时间设置为"),_("code",[e._v("seconds")]),e._v("秒，【典型应用场景：手机验证码】")]),e._v(" "),_("li",[_("code",[e._v("SETNX key value")]),e._v("：只有在"),_("code",[e._v("key")]),e._v("不存在时设置"),_("code",[e._v("key")]),e._v("的值；【用于分布式锁】；返回 1 代表成功，返回 0 代表不成功")]),e._v(" "),_("li",[e._v("更多命令："),_("a",{attrs:{href:"https://www.redis.net.cn",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.redis.net.cn"),_("OutboundLink")],1)])])])}),[],!1,null,null,null);v.default=s.exports}}]);