(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{547:function(e,v,t){"use strict";t.r(v);var _=t(16),r=Object(_.a)({},(function(){var e=this,v=e.$createElement,t=e._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"支持的数据类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#支持的数据类型"}},[e._v("#")]),e._v(" 支持的数据类型")]),e._v(" "),t("ul",[t("li",[e._v("String：最基本的类型")]),e._v(" "),t("li",[e._v("List：可以当成栈或者队列，使用链表实现")]),e._v(" "),t("li",[e._v("Hash：常用于存储个人信息，可以想象成 Java 的 HashMap")]),e._v(" "),t("li",[e._v("Set：存储不重复的元素")]),e._v(" "),t("li",[e._v("SortedSet：有序，按照字节排序，常用于排行榜数据")])]),e._v(" "),t("h3",{attrs:{id:"特性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#特性"}},[e._v("#")]),e._v(" 特性")]),e._v(" "),t("ul",[t("li",[e._v("Redis 的所有操作都是原子的")]),e._v(" "),t("li",[e._v("Redis 可以对 key 设置过期时间\n"),t("ul",[t("li",[e._v("定时删除")]),e._v(" "),t("li",[e._v("惰性删除：被动删除")]),e._v(" "),t("li",[e._v("定期删除：定期删除")])])]),e._v(" "),t("li",[e._v("Redis 支持两种持久化方式：RDB(快照、默认)【了解即可，基本不用】、AOF(保存命令)")])]),e._v(" "),t("h2",{attrs:{id:"redis-速度快的原因"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis-速度快的原因"}},[e._v("#")]),e._v(" redis 速度快的原因")]),e._v(" "),t("ul",[t("li",[e._v("完全基于内存")]),e._v(" "),t("li",[e._v("数据结构简单")]),e._v(" "),t("li",[e._v("单线程、没有切换")]),e._v(" "),t("li",[e._v("多路 IO 复用模型")])]),e._v(" "),t("h2",{attrs:{id:"缓存穿透和缓存雪崩的问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#缓存穿透和缓存雪崩的问题"}},[e._v("#")]),e._v(" 缓存穿透和缓存雪崩的问题")]),e._v(" "),t("blockquote",[t("p",[e._v("缓存穿透是指查询一个不存在的数据，但是由于"),t("code",[e._v("Cache")]),e._v("不命中，有需要去"),t("code",[e._v("db")]),e._v("中查询，造成的性能下降")])]),e._v(" "),t("p",[t("strong",[e._v("解决方案：给没有命中的"),t("code",[e._v("key")]),e._v('设定"没有意义的空值"')])]),e._v(" "),t("blockquote",[t("p",[e._v("缓存雪崩是指"),t("code",[e._v("Cache")]),e._v("设置相同的过期时间，导致"),t("code",[e._v("Cache")]),e._v("在同一时间失效，请求全部转发到"),t("code",[e._v("DB")]),e._v("，"),t("code",[e._v("DB")]),e._v("的瞬时压力过大，造成雪崩。")])]),e._v(" "),t("p",[t("strong",[e._v("解决方案：给"),t("code",[e._v("key")]),e._v("设定不同的(随机的)过期时间")])]),e._v(" "),t("h2",{attrs:{id:"redis-的-io-模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis-的-io-模型"}},[e._v("#")]),e._v(" Redis 的 IO 模型")]),e._v(" "),t("h3",{attrs:{id:"blocking-i-o"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#blocking-i-o"}},[e._v("#")]),e._v(" Blocking I/O")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/wxvirus/img/raw/master/img/20211107190631.png",alt:"blocking io模型"}})]),e._v(" "),t("p",[t("strong",[e._v("阻塞模型")]),e._v("的特点：当"),t("code",[e._v("read/write")]),e._v("对某一个文件描述符"),t("code",[e._v("fd")]),e._v("进行读写时，如果当前的"),t("code",[e._v("fd")]),e._v("不可读或不可写，则服务阻塞。")]),e._v(" "),t("h3",{attrs:{id:"i-o多路复用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#i-o多路复用"}},[e._v("#")]),e._v(" "),t("code",[e._v("I/O")]),e._v("多路复用")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/wxvirus/img/raw/master/img/20211107190823.png",alt:"IO多路复用"}})]),e._v(" "),t("p",[t("strong",[e._v("多路复用模型的特点")]),e._v("：同时监控"),t("code",[e._v("(select/epoll/poll)")]),e._v("多个文件描述符的可读写情况，当其中的某些文件描述符可读或者可写时，就范湖返回可读以及可写的文件描述符的个数。")]),e._v(" "),t("h3",{attrs:{id:"redis-的reactor设计模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis-的reactor设计模式"}},[e._v("#")]),e._v(" Redis 的"),t("code",[e._v("Reactor")]),e._v("设计模式")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/wxvirus/img/raw/master/img/20211107191625.png",alt:"Reactor"}})]),e._v(" "),t("p",[e._v("IO 即网络 IO，多路即多个"),t("code",[e._v("TCP")]),e._v("连接，复用即为共用一个线程或进程，这个模型最大的优势是系统开销小，不比创建也不必维护过多的线程或进程。")]),e._v(" "),t("p",[t("code",[e._v("Reactor")]),e._v("设计模式，有时也称之为异步阻塞 IO(异步指"),t("code",[e._v("socket")]),e._v("为"),t("code",[e._v("non-blocking")]),e._v("，堵塞指"),t("code",[e._v("select")]),e._v("堵塞)。")]),e._v(" "),t("p",[t("code",[e._v("Reactor")]),e._v("模式中一共有 5 个角色构成：")]),e._v(" "),t("ul",[t("li",[e._v("Handle(句柄或描述符)：本质上表示一种资源，或者就是文件描述符，是由操作系统提供的；该资源用于表示一个个的事件，事件既可以来自于外部，也可以来自于内部；外部的事件比如客户端的连接请求，客户端发送过来的数据等；内部事件比如操作系统产生的定时事件等。")]),e._v(" "),t("li",[t("code",[e._v("Synchronous Event Demultiplexer")]),e._v("同步事件分离器：它本身是一个系统调用，用于等待时间的发生(事件可能是一个，也可能是多个)。调用方在调用它的时候会被阻塞，一直阻塞到同步事件分离器上有事件产生为止。同步事件分离器对应的组件就是"),t("code",[e._v("Selector")]),e._v("；对应的阻塞方法就是"),t("code",[e._v("select")]),e._v("方法")]),e._v(" "),t("li",[t("code",[e._v("Event Handler")]),e._v("事件处理器：本身由多个回调方法构成，这些回调方法构成与应用相关的对于某个事件的反馈机制。")]),e._v(" "),t("li",[t("code",[e._v("Concrete Event Handler")]),e._v("(具体事件处理器)：是事件处理器的实现。它本身实现了事件处理器所提供的各种回调方法，从而实现了特定于业务的逻辑。它本质上就是我们所编写的一个个的处理器实现。")]),e._v(" "),t("li",[t("code",[e._v("Initiation Dispatcher")]),e._v("(初始分发器)：实际上就是 Reactor 角色。它本身定义了一些规范，这些规范用于控制事件的调度方式，同时又提供了应用进行事件处理器的注册、删除等设施。它本身是整个事件处理器的核心所在，Initiation Dispatcher 会通过 Synchronous Event Demultiplexer 来等待事件的发生。一旦事件发生，Initiation Dispatcher 首先会分离出每一个事件，然后调用事件处理器，最后调用相关的回调方法来处理这些事件。Netty 中 ChannelHandler 里的一个个回调方法都是由 bossGroup 或 workGroup 中的某个 EventLoop 来调用的。")])]),e._v(" "),t("p",[t("strong",[e._v("具体深入的话，还是得去研究 redis")])]),e._v(" "),t("h2",{attrs:{id:"reference"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#reference"}},[e._v("#")]),e._v(" reference")]),e._v(" "),t("p",[e._v("https://www.jianshu.com/p/0ab40a6da2d9")])])}),[],!1,null,null,null);v.default=r.exports}}]);