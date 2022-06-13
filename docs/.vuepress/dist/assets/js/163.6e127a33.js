(window.webpackJsonp=window.webpackJsonp||[]).push([[163],{605:function(s,t,a){"use strict";a.r(t);var e=a(16),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"分布式事务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分布式事务"}},[s._v("#")]),s._v(" 分布式事务")]),s._v(" "),a("p",[s._v("讲到事务，基本就是经典的转账问题")]),s._v(" "),a("p",[s._v("支付宝账户表："),a("code",[s._v("A(id, user_id, amount)")])]),s._v(" "),a("p",[s._v("余额宝账户表："),a("code",[s._v("B(id, user_id, amount)")])]),s._v(" "),a("p",[s._v("用户的"),a("code",[s._v("user_id = 1")]),s._v("，从支付宝转账 1 万到余额宝分为 2 个步骤：")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("支付宝表扣除 1 万：")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("update")]),s._v(" A "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" amount "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" amount "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10000")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" user_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("余额宝表增加 1 万：")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("update")]),s._v(" B "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" amount "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" amount "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10000")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" user_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])]),s._v(" "),a("p",[a("strong",[s._v("如何保证一致性呢？")])]),s._v(" "),a("blockquote",[a("p",[s._v("单个数据库，我们保证"),a("code",[s._v("ACID")]),s._v("使用数据库事务")])]),s._v(" "),a("hr"),s._v(" "),a("p",[s._v("随着系统变大，进行了微服务架构的改造，因为每个微服务独占了一个数据库实例，从"),a("code",[s._v("user_id = 1")]),s._v("发起的转账动作，跨越了两个微服务："),a("code",[s._v("pay")]),s._v("和"),a("code",[s._v("balance")]),s._v("服务。")]),s._v(" "),a("p",[s._v("我们需要保证，跨多个服务的步骤数据一致性：")]),s._v(" "),a("ol",[a("li",[s._v("微服务"),a("code",[s._v("pay")]),s._v("的支付宝表扣除 1 万")]),s._v(" "),a("li",[s._v("微服务"),a("code",[s._v("balance")]),s._v("的余额宝的表增加 1 万")])]),s._v(" "),a("blockquote",[a("p",[s._v("每个系统都对应一个独立的数据源，且可能位于不同机房，同时调用多个服务很难保证同时成功，这就是跨服务分布式事务的问题。")])]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),a("p",[s._v("我们系统应该能保证每个服务自身的"),a("code",[s._v("ACID")]),s._v("，基于这个假设，我们事务消息解决分布式事务的问题。")])]),s._v(" "),a("h3",{attrs:{id:"事务消息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事务消息"}},[s._v("#")]),s._v(" 事务消息")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),a("p",[s._v("在很多的麻辣烫的店，你点了份麻辣烫并付了钱，他们并不会直接把你点的东西给你，而是给你一个类似号码的手串给你，然后让你拿着号码牌到出货区排队去取。")]),s._v(" "),a("p",[s._v("为什么餐饮店要将付钱和取货 2 个动作分开呢？原因很多，其中一个很重要的原因是为了使他们的接待能力增加(程序里的说法就是并发量更高)。")]),s._v(" "),a("p",[s._v("只要这张号码牌在，你最终是能拿到麻辣烫的。同理，转账服务也是如此。")])]),s._v(" "),a("blockquote",[a("p",[s._v("当支付宝账户扣除 1 万元后，我们只要生成一个凭证(消息)即可，这个凭证(消息)上写着要余额宝增加 1 万，只要这个消息能可靠的保存，我们最终是可以拿到这个凭证(消息)让余额宝账号增加 1 万的，即我们能依靠这个凭证(消息)完成最终一致性。")])]),s._v(" "),a("h3",{attrs:{id:"如何保存可靠的消息凭证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何保存可靠的消息凭证"}},[s._v("#")]),s._v(" 如何保存可靠的消息凭证")]),s._v(" "),a("blockquote",[a("p",[s._v("要解决消息可靠存储，实际上需要解决的是本地的"),a("code",[s._v("mysql")]),s._v("存储和"),a("code",[s._v("message")]),s._v("存储的一致性问题。")])]),s._v(" "),a("p",[s._v("解决办法：")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("Transactional outbox")])]),s._v(" "),a("li",[a("code",[s._v("Polling publisher")])]),s._v(" "),a("li",[a("code",[s._v("Transaction log tailing")])]),s._v(" "),a("li",[a("code",[s._v("2PC Message Queue")])])]),s._v(" "),a("p",[a("strong",[s._v("事务消息一旦被可靠的持久化，我们整个分布式事务，便完成了最终一致性，消息的消费才能保障最终业务数据的完整性，所以我们要尽最大努力，把消息送达到下游的业务消费方，成为"),a("code",[s._v("Best Effort")]),s._v("。只有消息被消费，整个交易才能算是完整完结。")])]),s._v(" "),a("h3",{attrs:{id:"best-effort"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#best-effort"}},[s._v("#")]),s._v(" Best Effort")]),s._v(" "),a("p",[s._v("即尽最大努力交付，主要用于这样一种场景：")]),s._v(" "),a("p",[s._v("不同的服务凭条之间的事务性保证。")]),s._v(" "),a("p",[s._v("比如我们使用电商购物时，使用的第三方的支付平台进行支付的时候。")]),s._v(" "),a("blockquote",[a("p",[s._v("做过支付宝交易接口的都知道，我们一般会在支付宝的回调页面和接口里，解密参数，然后调用系统中更新交易状态相关的业务，将订单更新为付款成功。")]),s._v(" "),a("p",[s._v("同时，只有当我们回调页面中输出了"),a("code",[s._v("success")]),s._v("字样或者标识业务处理成功相应状态码时，支付宝才会停止回调请求。否则，它会轮训来向客户方发起回调请求，知道输出成功标识为止。")])]),s._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[s._v("警告")]),s._v(" "),a("p",[s._v("在对于这样的一个有重试或者回调的业务，如果对方至少调一次，意味着可能会调很多次 ，一定要处理好同一笔交易如何避免多次加钱或者发放多次道具，这就是一个业务幂等的一个问题。")])]),s._v(" "),a("h3",{attrs:{id:"transactional-outbox"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transactional-outbox"}},[s._v("#")]),s._v(" Transactional outbox")]),s._v(" "),a("p",[a("code",[s._v("Transactional outbox")]),s._v("，支付宝在完成扣款的同时，同时记录消息数据，这个消息数据与业务数据保存在同一数据库实例里(消息记录表表名为"),a("code",[s._v("msg")]),s._v(")。")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("begin")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("transaction")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("update")]),s._v(" A "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" amount "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" amount "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10000")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" user_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("user_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" amount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("status")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("values")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("transaction")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("commit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("上述事务能保证只要支付宝账户里面扣了钱，消息一定能保存下来。当上述事务提交成功后，我们想办法将此消息通知余额宝，余额宝处理成功后发送回复成功消息，支付宝收到回复后删除该消息数据。")]),s._v(" "),a("h3",{attrs:{id:"polling-publisher"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#polling-publisher"}},[s._v("#")]),s._v(" Polling publisher")]),s._v(" "),a("p",[a("code",[s._v("Polling publisher")]),s._v("，我们定时的轮训"),a("code",[s._v("msg")]),s._v("表，把"),a("code",[s._v("status = 1")]),s._v("的消息统统拿出来消费，可以按照自增"),a("code",[s._v("id")]),s._v("排序，保证顺序消费。独立建立了一个"),a("code",[s._v("pay_task")]),s._v("的任务，把拖出来的消息"),a("code",[s._v("publish")]),s._v("给我们的消息队列，"),a("code",[s._v("balance")]),s._v("服务自己来消费队列，或者直接"),a("code",[s._v("rpc")]),s._v("发送给"),a("code",[s._v("balance")]),s._v("服务。")]),s._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),a("p",[a("code",[s._v("Pull")]),s._v("的模型，从延迟来说不够好，"),a("code",[s._v("Pull")]),s._v("太猛对"),a("code",[s._v("Database")]),s._v("有一定的压力，"),a("code",[s._v("Pull")]),s._v("频次太低了，延迟比较高。")])]),s._v(" "),a("h3",{attrs:{id:"transaction-log-tailing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transaction-log-tailing"}},[s._v("#")]),s._v(" Transaction log tailing")]),s._v(" "),a("blockquote",[a("p",[s._v("上述保存消息的方式，使得消息数据和业务数据紧耦合在一起，从架构上来看不够优雅，而且容易诱发其他问题。")]),s._v(" "),a("p",[s._v("有一些业务场景，可以直接使用主表被"),a("code",[s._v("canal")]),s._v("订阅使用，有一些业务场景自带这类"),a("code",[s._v("message")]),s._v("表，比如订单或者交易流水，可以直接使用这类流水表作为"),a("code",[s._v("message")]),s._v("表使用。")])]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),a("p",[s._v("使用"),a("code",[s._v("canal")]),s._v("订阅后，是实时流式消费数据，在消费者"),a("code",[s._v("balance")]),s._v("或者"),a("code",[s._v("balance-job")]),s._v("必须努力送达到。")]),s._v(" "),a("p",[s._v("发现所有努力送达的模型，必须是先预扣款(预占资源)的做法。")]),s._v(" "),a("p",[a("strong",[s._v("一定是先付钱，后发道具；一定是先扣钱，后加钱")])])]),s._v(" "),a("h3",{attrs:{id:"幂等"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#幂等"}},[s._v("#")]),s._v(" 幂等")]),s._v(" "),a("p",[s._v("还有一个比较严重的问题就是消息重复投递，如果相同的消息被重复投递了两次，name 我们余额宝账户里将会增加 2 万而不是 1 万了。")]),s._v(" "),a("p",[s._v("为什么会这样呢？当余额宝处理完消息"),a("code",[s._v("msg")]),s._v("后，发送了处理成功的消息给支付宝，正常情况下支付宝应该要删除消息"),a("code",[s._v("msg")]),s._v("，但如果支付宝这个时候悲剧的挂了，重启后一看消息"),a("code",[s._v("msg")]),s._v("还在，就会继续发送消息"),a("code",[s._v("msg")]),s._v("。")]),s._v(" "),a("p",[s._v("解决办法：")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("全局唯一 ID + 去重表")]),s._v(" "),a("blockquote",[a("p",[s._v("在余额宝这边增加消息应用状态表"),a("code",[s._v("message_apply")]),s._v("，通俗的来说就是个账本，用于记录消息的消费情况，每次来一个消息，在真正执行前，先去消费应用状态表中查询一番，如果找到说明是重复消息，丢弃即可，如果没找到才执行，同时插入到消息应用状态表(同一事务下)。")])]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" each msg "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("in")]),s._v(" queue\n\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("begin")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("transaction")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("count")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" cnt "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" message_apply "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" msg_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("msg_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" cn "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("update")]),s._v(" B "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" amount "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" amount "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10000")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" user_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" message_apply"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("msg_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("values")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("msg_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("transaction")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("commit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("版本号")])])]),s._v(" "),a("h3",{attrs:{id:"_2pc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2pc"}},[s._v("#")]),s._v(" 2PC")]),s._v(" "),a("blockquote",[a("p",[s._v("两阶段提交协议（Two Phase Commitment Protocol）中，涉及两种角色")])]),s._v(" "),a("ul",[a("li",[s._v("一个事务协调者(coordinator)：负责协调多个参与者进行事务投票及提交(回滚)")]),s._v(" "),a("li",[s._v("多个事务参与者(participants)：即本地事务执行者")])]),s._v(" "),a("p",[s._v("总共处理步骤有 2 个：")]),s._v(" "),a("ol",[a("li",[s._v("投票阶段(votine phase)：协调者将通知事务参与者准备提交或取消事务，然后进入表决过程。参与者将告知协调者自己的决策：同意(事务参与者本地事务执行成功，但未提交)或取消(本地事务执行故障)。")]),s._v(" "),a("li",[s._v("提交阶段(comimt phase)：受到参与者的通知后，协调者再向参与者发出通知，根据反馈的情况决定各参与者是否要提交还是回滚。")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://sword-demon.github.io/vue-blog/assets/images/image-20211025222336214.png",alt:"image-20211025222336214"}})]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),a("p",[s._v("这是一个从数据库层面看到的二阶段提交，其实这种不符合微服务所谓的每人独占数据库的这种模型，但是这种思路是可以借鉴的。")])]),s._v(" "),a("h3",{attrs:{id:"_2pc-message-queue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2pc-message-queue"}},[s._v("#")]),s._v(" 2PC Message Queue")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://sword-demon.github.io/vue-blog/assets/images/image-20211025222928607.png",alt:"image-20211025222928607"}})]),s._v(" "),a("h3",{attrs:{id:"seata-2pc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#seata-2pc"}},[s._v("#")]),s._v(" Seata 2PC")]),s._v(" "),a("blockquote",[a("p",[s._v("阿里开源的。多说无益。牛逼就是了。")])]),s._v(" "),a("h3",{attrs:{id:"tcc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tcc"}},[s._v("#")]),s._v(" TCC")]),s._v(" "),a("p",[s._v("TCC 是"),a("code",[s._v("try confirm cancel")]),s._v("三个词语的缩写，TCC 要求每个分支事务实现三个操作：预处理 Try、确认 Confirm、撤销 Cancel。")]),s._v(" "),a("blockquote",[a("p",[s._v("Try 操作做业务检查及资源预留，Confirm 做业务确认操作，Cancel 实现一个与 Try 相反的操作即回滚操作。")]),s._v(" "),a("p",[s._v("TM 首先发起所有的分支事务的 Try 操作，任何一个认知事务的 Try 的操作执行失败，TM 将会发起所有分支事务的 Cancel 操作，若 Try 操作全部成功，TM 将会发起所有分支事务的 Confrim 操作，其中 Comfrim/Cancel 操作若执行失败，TM 会进行重试。")])]),s._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[s._v("警告")]),s._v(" "),a("p",[s._v("需要注意：")]),s._v(" "),a("ul",[a("li",[s._v("空回滚")]),s._v(" "),a("li",[s._v("防悬挂")])])]),s._v(" "),a("p",[s._v("同样还是我们支付转账的场景：")]),s._v(" "),a("p",[s._v("第一步是"),a("code",[s._v("check & try")])]),s._v(" "),a("p",[s._v("给 A 表加了一个"),a("code",[s._v("frozen_amount")]),s._v("的字段，它是一个冻结的金额，也就是第一步的资源预留。比较好理解的场景：去银行预授权，然后钱要先冻结，比如财产证明，证明我有 30 万，先做一个证明，然后会把这笔钱冻结了，然后你的资产证明上面有一个时间戳，到了时间戳结束了以后呢，这个钱又可以给你还回来。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 支付宝表\nid\nuser_id\namount\t\t\t-10000 扣钱\nfrozen_amount\t+10000 加钱\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[a("code",[s._v("Cancel")]),s._v("和这是反的，就是让上面的加和减换一下。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 余额宝表\nid\nuser_id\namount\nfrozen_amount   +10000\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("余额宝的"),a("code",[s._v("try")]),s._v("操作，加钱，给冻结的字段加钱。")]),s._v(" "),a("p",[a("strong",[s._v("任何一个分支的事务 try 操作失败，事务控制器 TM(transaction manager)会发起所有的分支事务回滚，也就是 Cancel 操作，会发生如下操作：")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 支付宝表\nid\nuser_id\namount\t\t\t+10000 加钱\nfrozen_amount\t-10000 减钱\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 余额宝表\nid\nuser_id\namount\nfrozen_amount   -10000 减钱\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[a("strong",[s._v("如果所有分支操作都成功了，就会发起 Confirm 操作，如果 Confirm 操作发生失败，它会进行重试直到成功。")])]),s._v(" "),a("p",[s._v("最终状态为:")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 支付宝表\nid\nuser_id\namount\nfrozen_amount\t-10000 减钱\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 余额宝表\nid\nuser_id\namount\t\t\t+10000 加钱\nfrozen_amount   -10000 减钱\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"reference"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reference"}},[s._v("#")]),s._v(" Reference")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/hosaos/article/details/89136666",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://blog.csdn.net/hosaos/article/details/89136666"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/183753774",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://zhuanlan.zhihu.com/p/183753774"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("a",{attrs:{href:"https://www.cnblogs.com/dyzcs/p/13780668.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.cnblogs.com/dyzcs/p/13780668.html"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/bjweimengshu/article/details/79607522",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://blog.csdn.net/bjweimengshu/article/details/79607522"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("a",{attrs:{href:"https://microservices.io/patterns/data/event-sourcing.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://microservices.io/patterns/data/event-sourcing.html"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("a",{attrs:{href:"https://microservices.io/patterns/data/saga.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://microservices.io/patterns/data/saga.html"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("a",{attrs:{href:"https://microservices.io/patterns/data/polling-publisher.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://microservices.io/patterns/data/polling-publisher.html"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("a",{attrs:{href:"https://microservices.io/patterns/data/polling-publisher.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://microservices.io/patterns/data/polling-publisher.html"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("a",{attrs:{href:"https://microservices.io/patterns/data/transaction-log-tailing.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://microservices.io/patterns/data/transaction-log-tailing.html"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);