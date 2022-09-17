(window.webpackJsonp=window.webpackJsonp||[]).push([[203],{645:function(v,_,t){"use strict";t.r(_);var a=t(16),r=Object(a.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h2",{attrs:{id:"秒杀的目标与挑战"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#秒杀的目标与挑战"}},[v._v("#")]),v._v(" 秒杀的目标与挑战")]),v._v(" "),t("ul",[t("li",[v._v("系统目标\n"),t("ul",[t("li",[v._v("C 端目标\n"),t("ul",[t("li",[v._v("体验目标\n"),t("ul",[t("li",[v._v("页面操作流畅")]),v._v(" "),t("li",[v._v("无白屏")])])]),v._v(" "),t("li",[v._v("稳定性目标\n"),t("ul",[t("li",[v._v("接口稳定")]),v._v(" "),t("li",[v._v("始终一致")]),v._v(" "),t("li",[v._v("数据一致")])])])])]),v._v(" "),t("li",[v._v("B 端目标\n"),t("ul",[t("li",[v._v("价格隔离")]),v._v(" "),t("li",[v._v("不能超卖")]),v._v(" "),t("li",[v._v("活动保障")])])]),v._v(" "),t("li",[v._v("平台目标\n"),t("ul",[t("li",[v._v("流量隔离")]),v._v(" "),t("li",[v._v("系统稳定")]),v._v(" "),t("li",[v._v("风险隔离")])])])])]),v._v(" "),t("li",[v._v("目标特点\n"),t("ul",[t("li",[v._v("瞬时大流量")]),v._v(" "),t("li",[v._v("高并发")]),v._v(" "),t("li",[v._v("高可用")]),v._v(" "),t("li",[v._v("高性能")]),v._v(" "),t("li",[v._v("读多写少")]),v._v(" "),t("li",[v._v("一致性")])])]),v._v(" "),t("li",[v._v("技术挑战\n"),t("ul",[t("li",[v._v("前端\n"),t("ul",[t("li",[v._v("如何保证资源的加载速度")]),v._v(" "),t("li",[v._v("如何打散流量")]),v._v(" "),t("li",[v._v("如何保持始终一致性")])])]),v._v(" "),t("li",[v._v("后端\n"),t("ul",[t("li",[v._v("如何保证系统高可用")]),v._v(" "),t("li",[v._v("如何削峰限流")]),v._v(" "),t("li",[v._v("如何保证系统的响应速度")]),v._v(" "),t("li",[v._v("如何保证秒杀品不被超卖\n"),t("ul",[t("li",[v._v("库存扣减设计")])])]),v._v(" "),t("li",[v._v("如何隔离流量和风险")]),v._v(" "),t("li",[v._v("如何设计有效的缓存策略")]),v._v(" "),t("li",[v._v("如何对付黄牛和秒杀器")])])]),v._v(" "),t("li",[v._v("中间件\n"),t("ul",[t("li",[v._v("如何应对突增的流量")]),v._v(" "),t("li",[v._v("如何监控各环节状态和数据")])])])])])]),v._v(" "),t("h2",{attrs:{id:"秒杀系统的目标"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#秒杀系统的目标"}},[v._v("#")]),v._v(" 秒杀系统的目标")]),v._v(" "),t("blockquote",[t("p",[v._v("通常，我们把秒杀看做是高并发的典型场景，是"),t("strong",[v._v("大量请求")]),v._v("对"),t("strong",[v._v("有限资源")]),v._v("的"),t("strong",[v._v("瞬时争夺")]),v._v("，是用户对系统的发起的压力测试。然而，这话其实并不完全准确，秒杀与高并发的关系可疏可密。")]),v._v(" "),t("p",[v._v("因为，秒杀系统的核心目标是实现"),t("strong",[v._v("大流量对优先资源的瞬时争夺")]),v._v("。围绕这个核心目标，我们可以进一步将秒杀拆解为 3 个目标，分别是"),t("em",[v._v("C 端目标、B 端目标和平台目标")])])]),v._v(" "),t("h3",{attrs:{id:"c-端目标"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#c-端目标"}},[v._v("#")]),v._v(" C 端目标")]),v._v(" "),t("p",[t("strong",[v._v("C 端用户是上帝")]),v._v("。在秒杀过程中上帝的体验是否顺畅、数据是否无误至关重要，所以我们要首先保障用户的体验。")]),v._v(" "),t("p",[v._v("对于大部分用户来说，体验是最直观的感受，突然的卡顿和白屏或者 404 或者 502 是糟糕的体验，会导致用户逐渐失去对我们的眷顾，甚至对我们的技术能力产生怀疑。而能否秒杀成功倒是其次，大部分用户在秒杀时都默认自己抢不到，他们不会因为抢不到而大为恼火，反而会因为，页面失误导致自己连参与的机会都没有会大失所望。")]),v._v(" "),t("h3",{attrs:{id:"b-端目标"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#b-端目标"}},[v._v("#")]),v._v(" B 端目标")]),v._v(" "),t("p",[t("strong",[v._v("如果说 C 端用户是上帝，那么 B 端用户就是金主")]),v._v("，对于金主而言，在"),t("strong",[v._v("价格、数量和资金")]),v._v("上都不能出错。")]),v._v(" "),t("p",[v._v("首先是价格，秒杀品的价格一般有别于其他渠道的商品，哪怕是同样的商品，价格也会存在差异，所以在价格上我们要做到渠道隔离。其次是数量，也就是不能"),t("strong",[v._v("超卖")]),v._v("，超卖的后果很严重，会直接造成资损或服务无法兑现，客诉会接踵而至，甚至引发舆情。")]),v._v(" "),t("p",[v._v("最后是资金安全，除了超卖会导致资损外，还有一种情况也会造成资损，那就是"),t("strong",[v._v("恶意下单")]),v._v("。如果你的竞争对手或者某些恶意用户在瞬间下单了你的所有商品，但就是不付款，这种情况会导致 B 端因在秒杀活动中无法进账而引发资损，不仅活动前期的推广费用、活动费用无法回收，可能还会导致更为严重的连锁反应。")]),v._v(" "),t("h3",{attrs:{id:"平台目标"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#平台目标"}},[v._v("#")]),v._v(" 平台目标")]),v._v(" "),t("p",[v._v("平台的目标肯定是前面 2 个都得顺利实现，但是不能在保证了前面 2 个都顺利了，而导致整个平台的其他业务 崩溃，否则就一败涂地。")]),v._v(" "),t("p",[v._v("从秒杀系统的目标来看，可以总结出几个秒杀过程中的明显的特征：")]),v._v(" "),t("ul",[t("li",[v._v("瞬时大流量：从秒杀开始的前期，流量会逐渐聚集，在秒杀开始的一瞬间，流量会瞬间涌入，监控图上也会体现出瞬间跳起，竖起一根芒刺")]),v._v(" "),t("li",[v._v("高并发：虽然大流量并不一定意味着高并发，但在秒杀场景中，大流量将直接导致高并发。高并发系统的设计与普通系统的设计有着很多不同，即使提供同样的服务，两者在设计上也会有着天壤之别")]),v._v(" "),t("li",[v._v("高可用：在任何情况下，我们都不能让系统宕机，不能让 C 端用户失望。")]),v._v(" "),t("li",[v._v("高性能：即使在洪峰流量下，也要保证 C 端用户的流畅体验。")]),v._v(" "),t("li",[v._v("读多写少：大流量是”读“，只有在并发中竞争成功的才会涉及到”写“。然而，成功者毕竟是极少数，所以”读多写少“也是一个关键性特征。")]),v._v(" "),t("li",[v._v("数据强一致性：数据一致性体现在两个方面，一是所有 C 端用户所看到的秒杀开始时间、库存等信息一致，二是最终成单数量与库存一致，不可以存在超卖的情况。")])]),v._v(" "),t("h2",{attrs:{id:"秒杀系统的设计原则和方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#秒杀系统的设计原则和方法"}},[v._v("#")]),v._v(" 秒杀系统的设计原则和方法")]),v._v(" "),t("h3",{attrs:{id:"动静分离"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#动静分离"}},[v._v("#")]),v._v(" 动静分离")]),v._v(" "),t("ol",[t("li",[v._v("前后端资源分离")]),v._v(" "),t("li",[v._v("对变化快、调用频次高的数据进行识别，并通过设计独立的接口和其他数据进行隔离")])]),v._v(" "),t("h4",{attrs:{id:"前后端资源分离"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前后端资源分离"}},[v._v("#")]),v._v(" 前后端资源分离")]),v._v(" "),t("blockquote",[t("p",[v._v("前后端分离已经是比较普遍的做法了，前端资源走"),t("code",[v._v("CDN")]),v._v("，一般在前端构建的时候就可以构建完整的静态资源推送到"),t("code",[v._v("CDN")]),v._v("服务器。")])]),v._v(" "),t("h4",{attrs:{id:"动态数据和静态数据分离"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#动态数据和静态数据分离"}},[v._v("#")]),v._v(" 动态数据和静态数据分离")]),v._v(" "),t("blockquote",[t("p",[v._v("所谓动态数据指的是秒杀期间容易变更的数据，比如秒杀商品的品类、库存和上下架状态等。动态数据对时间极为敏感，变化只在一瞬间。而所谓静态数据的变化比较慢，比如秒杀结果以及个人相关的数据。之所以要将动态数据和静态数据进行分离，是因为不同的数据的更新频率会涉及到不同的架构设计和性能优化，分离后可以做到有的放矢。在某些场景下，服务端返回的静态数据也可以考虑推送到"),t("code",[v._v("CDN")])])]),v._v(" "),t("h4",{attrs:{id:"高频接口与低频接口分离"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#高频接口与低频接口分离"}},[v._v("#")]),v._v(" 高频接口与低频接口分离")]),v._v(" "),t("blockquote",[t("p",[v._v("高频与低频指的是调用频次。在所有的数据整合到一个接口中，并不总是好的主意。虽然这种做法可以降低 API 的请求次数，但是会提高单个接口的计算耗时，并增加它的脆弱性。在秒杀架构中，我们要注意对高频接口的识别，高频接口的数据量相对较少")])]),v._v(" "),t("h3",{attrs:{id:"削峰限流"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#削峰限流"}},[v._v("#")]),v._v(" 削峰限流")]),v._v(" "),t("h4",{attrs:{id:"客户端流量打散"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#客户端流量打散"}},[v._v("#")]),v._v(" 客户端流量打散")]),v._v(" "),t("blockquote",[t("p",[v._v("客户端包含对外透出的"),t("code",[v._v("H5")]),v._v("、"),t("code",[v._v("App")]),v._v("和小程序。作为流量的直接来源入口，前端可以通过"),t("strong",[v._v("答题、滑块和验证码")]),v._v("等方式将流量打散。在削峰限流中，这是非常有用的方式，可以减少服务端的流量的 QPS")])]),v._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[v._v("提示")]),v._v(" "),t("p",[v._v("在设计时，答题相对来说成本略高，需要设计题库和答案，相比之下，滑块和验证码则较为简单。当然，无论何种方式，都需要在接口设计上体现，而不是仅限于页面使用，要防止绕过页面直接请求。")])]),v._v(" "),t("h4",{attrs:{id:"服务端限流"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#服务端限流"}},[v._v("#")]),v._v(" 服务端限流")]),v._v(" "),t("p",[v._v("无论客户端是否采取了流量打散的措施，服务端都需要设置限流保护，有条件的还要进行流量清洗。根据限流的不同时机和链路位置，我们可以将服务端限流通常分为："),t("strong",[v._v("网关层限流和应用层限流")]),v._v("两种。")]),v._v(" "),t("p",[v._v("网关层限流指的是通过独立的中间件在流量入口对流量进行拦截，只有符合配置的流量才能通过，比如通过 Sentinel 在 Spring Cloud Gateway 中设置限流。"),t("a",{attrs:{href:"https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Falibaba%2FSentinel",target:"_blank",rel:"noopener noreferrer"}},[v._v("Sentinel"),t("OutboundLink")],1),v._v("由阿里开源，提供了流控规则、降级规则和热点规则等功能，配置也较为灵活。")]),v._v(" "),t("p",[v._v("通过独立的中间件限流是比较通用的做法，当然也需要一定的维护成本，小公司可能不具备这样的条件。相比之下，应用层限流则简单很多，就是在应用内自主限流。比如，Guava 中提供的 RateLimiter 就是一款不错的限流器。如果你的流量不是特别大，或者在应用内需要独立的限流处理，那么可以考虑这种方式。")]),v._v(" "),t("p",[v._v("在算法上，限流组件一般采用是计数器、漏桶和令牌桶等算法，如果我们有特殊的限流需求，也可以考虑根据算法自主实现，比如我们希望将通过概率向特定用户倾斜等。")]),v._v(" "),t("h4",{attrs:{id:"安全校验"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安全校验"}},[v._v("#")]),v._v(" 安全校验")]),v._v(" "),t("p",[v._v("如果说限流是随机拒绝的话，那么安全校验则是有针对性地识别和拒绝特定的流量，也就是流量清洗。"),t("strong",[v._v("通俗地讲，就是在秒杀活动中，我们要识别出哪些是人，哪些是“鬼”")]),v._v("。恶意竞对或者不怀好意可能会通过 CC 攻击破坏活动，造成服务资源枯竭；而一些普通用户为了提高成功率则可能会采用自动脚本强刷，不仅给服务端带来较大压力，对其他用户也不公平，比如成群结队的“黄牛党”。所以，人机识别和 CC 攻击是安全校验的主要功能。")]),v._v(" "),t("h4",{attrs:{id:"秒杀商品校验与资格校验"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#秒杀商品校验与资格校验"}},[v._v("#")]),v._v(" 秒杀商品校验与资格校验")]),v._v(" "),t("p",[v._v("通过限流与安全校验两个关卡之后，并不意味着用户就可以高枕无忧，它至少还要闯过秒杀商品校验和资格校验。比如：当前的秒杀活动是否已经结束、秒杀商品是否还有效，因为用户在客户端时秒杀商品依然有效，但是当请求到达服务端之后，活动可能已经结束，所以这一步的校验必不可少。")]),v._v(" "),t("p",[v._v("资格校验，即根据秒杀活动具体的业务来做的校验。比如：当前用户已经存在秒杀记录，那么此时是否还允许进行秒杀；又或者，部分用户已经秒杀过，通过替换马甲再次秒杀，那么此刻就需要加强身份证等唯一性校验。")])])}),[],!1,null,null,null);_.default=r.exports}}]);