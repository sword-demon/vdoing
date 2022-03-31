(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{481:function(v,_,t){"use strict";t.r(_);var o=t(16),e=Object(o.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h2",{attrs:{id:"为何使用消息系统"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为何使用消息系统"}},[v._v("#")]),v._v(" 为何使用消息系统")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("解耦")]),v._v(" "),t("blockquote",[t("p",[v._v("消息系统在处理过程中间插入了一个隐含的、基于数据的接口层，两边的处理过程都要实现这一接口。这允许你独立的扩展或修改两边的处理过程，只要确保他们遵守同样的接口约束。")]),v._v(" "),t("p",[v._v("而基于消息发布订阅的机制，可以联动多个业务下游子系统，能够不侵入的情况下分步编排和开发，来保证数据一致性。")])])]),v._v(" "),t("li",[t("p",[v._v("冗余")]),v._v(" "),t("blockquote",[t("p",[v._v("有些情况下，处理数据的过程会失败。除非数据被持久化，否则将造成丢失。消息队列把数据进行持久化直到它们已经被完全处理，通过这一方式规避了数据丢失风险。许多消息队列所采用的的”插入-获取-删除“ 范式中，在把一个消息从队列中删除之前，需要你的处理系统明确的指出该消息已经被处理完毕，从而确保你的数据被安全的保存直到你使用完毕。")])])]),v._v(" "),t("li",[t("p",[v._v("扩展性")]),v._v(" "),t("blockquote",[t("p",[v._v("因为消息队列解耦了你的处理过程，所以增大消息入队和处理的频率是很容易的，只要另外增加消费处理即可。不需要改变代码、不需要调解参数。扩展就像调大电力按钮一样简单。")])])]),v._v(" "),t("li",[t("p",[v._v("灵活性 & 峰值处理能力")]),v._v(" "),t("blockquote",[t("p",[v._v("在访问量剧增的情况下，应用仍然需要继续发挥作用，但是这样的突发流量并不常见；如果为以能处理这类峰值访问为标准来投入资源随时待命无疑是巨大的浪费。使用消息队列能够使关键组件顶住突发的访问压力，而不会因为突发的超负荷的请求而完全崩溃。")])])]),v._v(" "),t("li",[t("p",[v._v("可恢复性")]),v._v(" "),t("blockquote",[t("p",[v._v("系统的一部分组件失效时，不会影响到整个系统。消息队列降低了进程间的耦合度，所以即使一个处理消息的进程挂掉，加入队列中的消息仍然可以在系统恢复后被处理。")])])]),v._v(" "),t("li",[t("p",[v._v("顺序保证")]),v._v(" "),t("blockquote",[t("p",[v._v("在大多数使用场景下，数据处理的顺序都很重要。大部分消息队列本来就是排序的，并且能够保证数据会按照特定的顺序来处理。"),t("code",[v._v("Kafka")]),v._v("保证一个"),t("code",[v._v("Partition")]),v._v("内的消息的有序性")])])]),v._v(" "),t("li",[t("p",[v._v("缓冲")]),v._v(" "),t("blockquote",[t("p",[v._v("在任何重要的系统中，都会有需要不同的处理时间的元素。消息队列通过一个缓冲层来帮助任务最高效率的执行 ---- 写入队列的处理会尽可能的快速。该缓冲有助于控制和优化数据流经过系统的速度。")])])]),v._v(" "),t("li",[t("p",[v._v("异步通讯")]),v._v(" "),t("blockquote",[t("p",[v._v("很多时候，用户不想也不需要立即处理消息。消息队列提供了异步处理机制，允许用户把一个消息放入队列，但并不立即处理它。想向队列中放入多少消息就放多少，然后在需要的时候再去处理它们。")])])])]),v._v(" "),t("h2",{attrs:{id:"topic-partition"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#topic-partition"}},[v._v("#")]),v._v(" Topic & Partition")]),v._v(" "),t("blockquote",[t("p",[t("code",[v._v("Topic")]),v._v("在逻辑上可以被认为是一个"),t("code",[v._v("queue")]),v._v("，每条消息都必须指定它的"),t("code",[v._v("Topic")]),v._v("，可以简单理解为必须指明把这条消息放进哪个"),t("code",[v._v("queue")]),v._v("里。我们把一类消息按照主题来分类，有点类似于数据库中的表。")])]),v._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[v._v("提示")]),v._v(" "),t("p",[v._v("为了使得"),t("code",[v._v("Kafka")]),v._v("的吞吐量可以线性提高，物理上把"),t("code",[v._v("Topic")]),v._v("分成一个或多个"),t("code",[v._v("Partition")]),v._v("。对应到系统上就是有一个或若干个目录。")])])])}),[],!1,null,null,null);_.default=e.exports}}]);