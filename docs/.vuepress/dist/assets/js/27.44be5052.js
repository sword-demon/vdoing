(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{468:function(s,a,e){"use strict";e.r(a);var t=e(16),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"redis-介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redis-介绍"}},[s._v("#")]),s._v(" redis 介绍")]),s._v(" "),e("p",[s._v("Redis 是一个高性能的"),e("code",[s._v("key-value")]),s._v("数据格式的内存缓存，"),e("code",[s._v("NoSQL")]),s._v("数据库。"),e("code",[s._v("NoSQL")]),s._v(":"),e("code",[s._v("not only sql")]),s._v("，泛指非关系型数据库。")]),s._v(" "),e("p",[s._v("关系型数据库有：MySQL、Oracle、SQL Server、Sqlite")]),s._v(" "),e("p",[s._v("非关系型数据库：redis、hadoop、mangoDB")]),s._v(" "),e("ul",[e("li",[s._v("没有数据表的概念，不用的 nosql 数据库存放数据位置不同")]),s._v(" "),e("li",[s._v("nosql 数据库没有通用操作语言")]),s._v(" "),e("li",[s._v("基本不支持事务，"),e("strong",[s._v("redis 支持简单事务")])])]),s._v(" "),e("hr"),s._v(" "),e("p",[s._v("它的存储类型有：")]),s._v(" "),e("ul",[e("li",[s._v("string 字符串")]),s._v(" "),e("li",[s._v("list 链表")]),s._v(" "),e("li",[s._v("set 集合")]),s._v(" "),e("li",[s._v("zset （sorted set 有序集合）")]),s._v(" "),e("li",[s._v("hash 哈希类型")])]),s._v(" "),e("blockquote",[e("p",[s._v("这些数据类型都支持"),e("code",[s._v("push/pop、add/remove")]),s._v("及取交集并集和差集以及丰富的操作。而且这些操作是原子性的。在此基础上，redis 支持各种不同方式的排序。与"),e("code",[s._v("memcached")]),s._v("一样，为了保证效率，数据都是缓存在内存中。区别的是"),e("code",[s._v("redis")]),s._v("会周期性的把更新的数据写入磁盘或者把修改的操作写入追加的记录文件，并且在此基础上实现了"),e("code",[s._v("master-slave")]),s._v("(主从)同步。redis 是一款基于"),e("code",[s._v("CS")]),s._v("架构的数据库，所以 redis 有客户端，也有服务端。其中，客户端可以使用"),e("code",[s._v("python")]),s._v("等编程语言，也可以使用终端命令行工具。")])]),s._v(" "),e("h3",{attrs:{id:"优点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#优点"}},[s._v("#")]),s._v(" 优点")]),s._v(" "),e("ul",[e("li",[s._v("异常快速：redis 是非常快的，每秒可以执行大约 110000 设置操作，81000 个/秒的读取操作")]),s._v(" "),e("li",[s._v("支持丰富的数据类型")]),s._v(" "),e("li",[s._v("原子性：redis 的所有操作都是原子性的，意思就是要么成功执行，要么失败完全不执行。当个操作时原子性的。多个操作也支持事务，即原子性，通过"),e("code",[s._v("MULTI")]),s._v("和"),e("code",[s._v("EXEC")]),s._v("指令包起来。")]),s._v(" "),e("li",[s._v("redis 是一个多功能实用工具，可以再很多如，消息队列中实用（redis 原生支持发布/订阅）")]),s._v(" "),e("li",[s._v("单线程特性，秒杀系统，基于 redis 是单线程特征，防止出现数据库“爆破”")])]),s._v(" "),e("h2",{attrs:{id:"典型应用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#典型应用"}},[s._v("#")]),s._v(" 典型应用")]),s._v(" "),e("h3",{attrs:{id:"一、性能"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、性能"}},[s._v("#")]),s._v(" 一、性能")]),s._v(" "),e("p",[s._v("redis 中缓存热点数据，能够保护数据库，提高查询效率。当我们碰到需要执行耗时特别久，且结果不频繁变动的 SQL，就特别适合将运行结果放入缓存，这样，后面的请求就去缓存中读取，使得请求能够迅速响应。")]),s._v(" "),e("h3",{attrs:{id:"二、并发"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、并发"}},[s._v("#")]),s._v(" 二、并发")]),s._v(" "),e("p",[s._v("在大量并发的情况下，所有的请求直接访问数据库，数据库会出现连接异常。这个时候，就需要使用 redis 做一个缓冲的操作，让请求先访问到 redis，而不是直接访问数据库。")]),s._v(" "),e("h2",{attrs:{id:"安装-redis"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装-redis"}},[s._v("#")]),s._v(" 安装 redis")]),s._v(" "),e("ul",[e("li",[s._v("系统：Ubuntu")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" redis-server\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("ul",[e("li",[e("p",[s._v("MacOS")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("brew "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" redis-cli\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("windows")]),s._v(" "),e("p",[s._v("直接去找 redis 的客户端 exe 下载安装就完了。")])])]),s._v(" "),e("p",[e("strong",[s._v("启动 redis")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入到redis安装目录")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# linux")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动")]),s._v("\nredis-server  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 服务端")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看是否正在运行")]),s._v("\nredis-cli   "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 客户端")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将会打开一个redis提示符")]),s._v("\nredis "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 输入 ping")]),s._v("\n应答：PONG "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 说明成功地在计算机上安装了redis")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br")])]),e("p",[s._v("简单案例")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("➜  ~ redis-cli\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" name wujie\nOK\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" get name\n"),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"wujie"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);