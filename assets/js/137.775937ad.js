(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{581:function(a,e,s){"use strict";s.r(e);var v=s(16),_=Object(v.a)({},(function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"redis-持久化机制以及缓存过期和淘汰策略"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redis-持久化机制以及缓存过期和淘汰策略"}},[a._v("#")]),a._v(" redis 持久化机制以及缓存过期和淘汰策略")]),a._v(" "),s("h2",{attrs:{id:"持久化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#持久化"}},[a._v("#")]),a._v(" 持久化")]),a._v(" "),s("h3",{attrs:{id:"模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模式"}},[a._v("#")]),a._v(" 模式")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("rdb")]),a._v("：生成某一时刻的快照，然后保存到二进制文件中")]),a._v(" "),s("li",[s("code",[a._v("aof")]),a._v("：记录每一条写命令，追加到文件中，打开可以看到具体的操作记录")]),a._v(" "),s("li",[a._v("混合模式: 上面 2 种方式的结合")])]),a._v(" "),s("h3",{attrs:{id:"触发方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#触发方式"}},[a._v("#")]),a._v(" 触发方式")]),a._v(" "),s("ul",[s("li",[s("p",[s("code",[a._v("save")]),a._v("：会让"),s("code",[a._v("redis")]),a._v("处于阻塞状态，直到"),s("code",[a._v("rdb")]),a._v("持久化完成，线上环境需要谨慎使用")])]),a._v(" "),s("li",[s("p",[s("code",[a._v("bgsave")]),a._v("，它会"),s("code",[a._v("fork")]),a._v("出一个子进程，用来执行持久化，主进程继续响应客户端请求，有短暂的阻塞")])]),a._v(" "),s("li",[s("p",[a._v("自动触发：在"),s("code",[a._v("m")]),a._v("秒内，有"),s("code",[a._v("n")]),a._v("个"),s("code",[a._v("key")]),a._v("发生改变，就会触发；执行命令最终执行的是"),s("code",[a._v("bgsave")])]),a._v(" "),s("div",{staticClass:"language-ini line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-ini"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# after 900 sec (15 min) if at leaset 1 key changed")]),a._v("\nsave 900 1\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# after 300 sec (5 min) if at least 10 keys changed")]),a._v("\nsave 300 10\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# after 60 sec (1 min) if at least 10000 keys changed")]),a._v("\nsave 60 10000\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br")])])])]),a._v(" "),s("h3",{attrs:{id:"rdb-优缺点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rdb-优缺点"}},[a._v("#")]),a._v(" rdb 优缺点")]),a._v(" "),s("blockquote",[s("p",[a._v("优点")])]),a._v(" "),s("ul",[s("li",[a._v("容灾性好，方便备份")]),a._v(" "),s("li",[a._v("性能最大化，"),s("code",[a._v("fork")]),a._v("出一个子进程来操作，对主进程没有影响")]),a._v(" "),s("li",[a._v("数据比较多的时候，相对于"),s("code",[a._v("aof")]),a._v("启动效率比较高")])]),a._v(" "),s("blockquote",[s("p",[a._v("缺点")])]),a._v(" "),s("ul",[s("li",[a._v("会造成数据丢失，因为它是过一段时间触发一次持久化，假如中间发生点故障，会导致这个时间段的数据丢失")])]),a._v(" "),s("h3",{attrs:{id:"aof-的优缺点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#aof-的优缺点"}},[a._v("#")]),a._v(" aof 的优缺点")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://virusoss.oss-cn-shanghai.aliyuncs.com/images/image-20230104223948149.png",alt:"image-20230104223948149"}})]),a._v(" "),s("div",{staticClass:"language-mermaid line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-mermaid"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("graph")]),a._v(" TD\n   命令 "),s("span",{pre:!0,attrs:{class:"token arrow operator"}},[a._v("--\x3e")]),a._v(" AOF缓冲区 "),s("span",{pre:!0,attrs:{class:"token inter-arrow-label"}},[s("span",{pre:!0,attrs:{class:"token arrow-head arrow operator"}},[a._v("--")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token label property"}},[a._v("同步策略")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token arrow operator"}},[a._v("--\x3e")])]),a._v(" AOF文件 "),s("span",{pre:!0,attrs:{class:"token inter-arrow-label"}},[s("span",{pre:!0,attrs:{class:"token arrow-head arrow operator"}},[a._v("--")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token label property"}},[a._v("重写策略")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token arrow operator"}},[a._v("--\x3e")])]),a._v(" AOF文件\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("blockquote",[s("p",[a._v("同步策略")])]),a._v(" "),s("ul",[s("li",[s("code",[a._v("everysec")]),a._v("：每秒同步一次")]),a._v(" "),s("li",[s("code",[a._v("always")]),a._v("：每次操作之后都要同步一次")]),a._v(" "),s("li",[s("code",[a._v("no")]),a._v("：由操作系统调度进行同步")])]),a._v(" "),s("blockquote",[s("p",[a._v("重写策略")])]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" name aaa "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 追加一次aof中")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" name bbb "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 追加一次到aof中")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" name ccc "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 再次追加")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 最后获取")]),a._v("\nget name "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 得到 ccc 最后一次命令")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br")])]),s("p",[a._v("那么中间保存的"),s("code",[a._v("aaa")]),a._v("和"),s("code",[a._v("bbb")]),a._v("就没有意义了，"),s("code",[a._v("aof")]),a._v("在恢复的时候会一条条命令去执行，这样没有意义的占用的空间，所以"),s("code",[a._v("redis")]),a._v("就提供了一个重写的策略，当"),s("code",[a._v("aof")]),a._v("文件达到了一定大小的时候，就会来执行，把中间的这些过程删掉，只留下最后一条命令，这样"),s("code",[a._v("aof")]),a._v("文件就会小很多。")]),a._v(" "),s("ul",[s("li",[a._v("手动触发：执行"),s("code",[a._v("bgrewriteaof")]),a._v("命令")]),a._v(" "),s("li",[a._v("自动触发")])]),a._v(" "),s("p",[s("code",[a._v("auto-aof-rewrite-percentage")]),a._v("：当前"),s("code",[a._v("AOF")]),a._v("文件大小和最后一次重写的大小之间的比率等于或者等于指定的增长百分比，如 100 代表当前的"),s("code",[a._v("AOF")]),a._v("文件是上次重写的 2 倍时候才重写")]),a._v(" "),s("p",[s("code",[a._v("auto-aof-rewrite-min-size")]),a._v("：当"),s("code",[a._v("AOF")]),a._v("文件大小大于该值的时候才可能重写")]),a._v(" "),s("blockquote",[s("p",[a._v("优点")])]),a._v(" "),s("ul",[s("li",[a._v("数据安全，不会造成数据丢失")])]),a._v(" "),s("blockquote",[s("p",[a._v("缺点")])]),a._v(" "),s("ul",[s("li",[a._v("比"),s("code",[a._v("rdb")]),a._v("重启效率低；运行效率比"),s("code",[a._v("rdb")]),a._v("低，它是一条条保存的，恢复也是一条条执行的。")])]),a._v(" "),s("h2",{attrs:{id:"过期键删除策略"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#过期键删除策略"}},[a._v("#")]),a._v(" 过期键删除策略")]),a._v(" "),s("p",[s("code",[a._v("redis")]),a._v("设置"),s("code",[a._v("key")]),a._v("时，都会设置一个过期时间，那么当过期时间到了，"),s("code",[a._v("redis")]),a._v("就会同时使用惰性过期和定期过期。")]),a._v(" "),s("h3",{attrs:{id:"惰性过期"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#惰性过期"}},[a._v("#")]),a._v(" 惰性过期")]),a._v(" "),s("p",[a._v("只有当这个"),s("code",[a._v("key")]),a._v("被访问时，才会判断是否过期，过期则清理掉。它可以节省"),s("code",[a._v("cpu")]),a._v("的资源，但是会浪费内存的资源。会出现大量过期的"),s("code",[a._v("key")]),a._v("没有被访问过，从而不会被清除，导致内容占用越来越大。")]),a._v(" "),s("h3",{attrs:{id:"定期过期"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#定期过期"}},[a._v("#")]),a._v(" 定期过期")]),a._v(" "),s("p",[a._v("每间隔一段时间，"),s("strong",[a._v("扫描一定数量的")]),a._v("设置了过期时间的"),s("code",[a._v("key")]),a._v("，假如过期了则删除。")]),a._v(" "),s("p",[s("code",[a._v("redis")]),a._v("默认每秒进行 10 次过期扫描")]),a._v(" "),s("ol",[s("li",[a._v("从过期字典中随机 20 个"),s("code",[a._v("key")])]),a._v(" "),s("li",[a._v("删除这 20 个"),s("code",[a._v("key")]),a._v("中已经过期的")]),a._v(" "),s("li",[a._v("如果超过 25%的"),s("code",[a._v("key")]),a._v("过期，则重复第一步；同时，为了保证业务不受影响，"),s("code",[a._v("redis")]),a._v("还设置了扫描的时间上限，默认不会超过 25"),s("code",[a._v("ms")])])]),a._v(" "),s("h2",{attrs:{id:"内存淘汰策略"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内存淘汰策略"}},[a._v("#")]),a._v(" 内存淘汰策略")]),a._v(" "),s("p",[a._v("假如内存不足时，"),s("code",[a._v("redis")]),a._v("会根据设置的淘汰策略，删除一些不常用的数据，保证"),s("code",[a._v("redis")]),a._v("的正常使用。")]),a._v(" "),s("p",[a._v("配置项：")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("noeviction")]),a._v("：当内存使用超过配置的时候会返回错误，不会驱逐任何键")]),a._v(" "),s("li",[s("code",[a._v("allkeys-lru")]),a._v("：加入键的时候，如果过限，首先通过"),s("code",[a._v("LRU")]),a._v("算法驱逐最久没有使用的键")]),a._v(" "),s("li",[s("code",[a._v("volatile-lru")]),a._v("：加入键的时候如果过限，首先从设置了过期的键集合中驱逐最久没有使用的键")]),a._v(" "),s("li",[s("code",[a._v("allkeys-random")]),a._v("：加入键的时候如果过限，从所有"),s("code",[a._v("key")]),a._v("随机删除")]),a._v(" "),s("li",[s("code",[a._v("volatile-random")]),a._v("：加入键的时候如果过限，从过期键的集合中随机驱逐")]),a._v(" "),s("li",[s("code",[a._v("volatile-ttl")]),a._v("：从配置了过期时间的键中驱逐马上就要过期的键")]),a._v(" "),s("li",[s("code",[a._v("volatile-lfu")]),a._v("：从所有配置了过期时间的键中驱逐使用频率最少的键")]),a._v(" "),s("li",[s("code",[a._v("allkeys-lfu")]),a._v("：从所有键中驱逐使用频率最少的键")])]),a._v(" "),s("h3",{attrs:{id:"lru-最近最少使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lru-最近最少使用"}},[a._v("#")]),a._v(" LRU 最近最少使用")]),a._v(" "),s("p",[a._v("根据最近被使用的时间，离当前最远的数据优先被淘汰；")]),a._v(" "),s("p",[a._v("新加入和访问的键会放在队尾，未被使用的和即将淘汰的则会放在队头。")]),a._v(" "),s("p",[a._v("当有了很多个"),s("code",[a._v("key")]),a._v("的使用时间在头时，就需要去考虑使用次数的频率来判断谁应该优先淘汰，就产生了"),s("code",[a._v("LFU")])]),a._v(" "),s("h3",{attrs:{id:"lfu-最不经常使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lfu-最不经常使用"}},[a._v("#")]),a._v(" LFU 最不经常使用")]),a._v(" "),s("p",[a._v("最终还是要根据实际业务去选择哪个算法以及什么配置。")])])}),[],!1,null,null,null);e.default=_.exports}}]);