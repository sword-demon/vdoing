(window.webpackJsonp=window.webpackJsonp||[]).push([[281],{723:function(s,t,a){"use strict";a.r(t);var n=a(16),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[s._v("#")]),s._v(" 介绍")]),s._v(" "),a("p",[s._v("核心功能：")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("Service Registry(服务注册)")])]),s._v(" "),a("li",[a("code",[s._v("Service Discovery(服务发现)")])])]),s._v(" "),a("h2",{attrs:{id:"基本架构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本架构"}},[s._v("#")]),s._v(" 基本架构")]),s._v(" "),a("p",[s._v("Eureka 由 3 个角色组成")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("Eureka Server，提供服务注册与发现")])]),s._v(" "),a("li",[a("strong",[s._v("Service Provider，服务提供方，将自身服务注册到 Eureka Server 上，从而让 Eureka Server 持有服务的元信息，让其他的服务消费方能够找到当前服务")])]),s._v(" "),a("li",[a("strong",[s._v("Service Consumer，服务消费方，从 Eureka Server 上获取注册服务列表，从而能够消费服务")])]),s._v(" "),a("li",[a("strong",[s._v("Service Provider/Consumer 相对于 Server，都叫做 Eureka Client")])])]),s._v(" "),a("h2",{attrs:{id:"eureka-高可用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eureka-高可用"}},[s._v("#")]),s._v(" Eureka 高可用")]),s._v(" "),a("blockquote",[a("p",[a("strong",[s._v("问题说明：单节点的 Eureka Server 虽然能够实现基础功能，但是存在单点故障的问题，不能实现高可用。因为 Eureka Server 中存储了整个系统中所有的微服务的元数据信息，单节点一旦挂了，所有的服务信息都会丢失，造成整个系统的瘫痪。")])])]),s._v(" "),a("p",[a("strong",[s._v("解决办法：搭建 Eureka Server 集群，让各个 Server 节点之间互相注册，从而实现微服务元数据的复制/备份，即使单个节点失效，其他的 Server 节点仍可以继续提供服务")])]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 优先加载")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 模拟多个实例")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spring")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("application")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" coupon"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("eureka\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("profiles")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" server1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("server")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8000")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("eureka")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("instance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 需要指定修改本机 hosts 指定的ip地址")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("hostname")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" server1\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# SpringCloud不允许通过同一个ip地址的来配置相同的多个实例，这里需要改为false")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 因为每一台单机，体现不出来高可用")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("prefer-ip-address")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("false")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("client")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("service-url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 发现另外两个地址 实现互相注册的目的")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("defaultZone")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("//server2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("8001/eureka/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("//server3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("8002/eureka/\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("---")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spring")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("application")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" coupon"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("eureka\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("profiles")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" server2\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("server")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8001")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("eureka")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("instance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("hostname")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" server2\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("prefer-ip-address")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("false")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("client")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("service-url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("defaultZone")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("//server1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("8000/eureka/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("//server3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("8002/eureka/\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("---")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spring")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("application")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" coupon"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("eureka\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("profiles")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" server3\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("server")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8002")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("eureka")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("instance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("hostname")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" server3\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("prefer-ip-address")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("false")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("client")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("service-url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("defaultZone")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("//server1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("8000/eureka/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("//server2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("8001/eureka/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br")])]),a("p",[s._v("上述即为简单在本机实现多实例。")])])}),[],!1,null,null,null);t.default=e.exports}}]);