(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{515:function(v,_,e){"use strict";e.r(_);var t=e(16),o=Object(t.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("blockquote",[e("p",[v._v("K8s 是 Google 开源的一个容器编排引擎，它支持自动化部署、大规模可伸缩、应用容器化管理。在生产环境中部署一个应用程序时，通常要部署该应用的多个实例以便对应用请求进行负载均衡。")]),v._v(" "),e("p",[v._v("在 K8S 中，我们可以创建多个容器，每个容器里面运行一个应用实例，然后通过内置的负载均衡策略，实现对这一组应用实例的管理、发现、访问，而这些细节都不需要运维人员去进行复杂的手工配置和处理。")])]),v._v(" "),e("h2",{attrs:{id:"k8s-发展经历"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#k8s-发展经历"}},[v._v("#")]),v._v(" k8s 发展经历")]),v._v(" "),e("p",[v._v("K8S 官网："),e("a",{attrs:{href:"https://kubernetes.io/zh/docs/tutorials/kubernetes-basics/",target:"_blank",rel:"noopener noreferrer"}},[v._v("https://kubernetes.io/zh/docs/tutorials/kubernetes-basics/"),e("OutboundLink")],1)]),v._v(" "),e("ul",[e("li",[e("strong",[v._v("Apache MESOS")]),v._v("：开源的分布式资源管理框架 2019 年 5 月份 Twitter 转向 K8S")]),v._v(" "),e("li",[e("strong",[v._v("Docker Swarm")]),v._v("：对"),e("code",[v._v("docker")]),v._v("专门做的 2019 年 7 月份 阿里云宣布从阿里云的选择列表里剔除")]),v._v(" "),e("li",[e("strong",[v._v("Kubernetes")]),v._v("：Google 10 年前就开始容器化基础架构 组件："),e("code",[v._v("borg")]),v._v("系统，google 内部的 后来采用了"),e("code",[v._v("Go")]),v._v("语言使用"),e("code",[v._v("borg")]),v._v("的设计思路开发了 K8S 并且开源给了容器基金会")])]),v._v(" "),e("h3",{attrs:{id:"特点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#特点"}},[v._v("#")]),v._v(" 特点：")]),v._v(" "),e("ul",[e("li",[v._v("轻量级：消耗的资源小")]),v._v(" "),e("li",[v._v("开源")]),v._v(" "),e("li",[v._v("弹性伸缩")]),v._v(" "),e("li",[v._v("负载均衡：LVS")])]),v._v(" "),e("h2",{attrs:{id:"功能"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#功能"}},[v._v("#")]),v._v(" 功能")]),v._v(" "),e("ol",[e("li",[e("p",[v._v("自动装箱")]),v._v(" "),e("blockquote",[e("p",[v._v("基于容器对应运行环境的资源配置要求自动部署应用容器")])])]),v._v(" "),e("li",[e("p",[v._v("自动修复(自愈能力)")]),v._v(" "),e("blockquote",[e("p",[v._v("当容器失败时，会对容器进行重启")]),v._v(" "),e("p",[v._v("当所部署的节点有问题时，会对容器进行重新部署和重新调度")]),v._v(" "),e("p",[v._v("当容器未通过监控检查时，会关闭此容器直到容器正常运行时，才会对外提供服务")])])]),v._v(" "),e("li",[e("p",[v._v("水平扩展")]),v._v(" "),e("blockquote",[e("p",[v._v("通过简单的命令、用户 UI 界面或基于 CPU 等资源使用情况，对应用容器进行规模扩大或规模剪裁；")]),v._v(" "),e("p",[v._v("比如：双十一时会有大量请求，会进行扩大；等到活动结束之后会裁剪")])])]),v._v(" "),e("li",[e("p",[v._v("服务发现")]),v._v(" "),e("blockquote",[e("p",[v._v("用户不需要使用额外的服务发现机制，就能够基于 K8S 自身能力实现服务发现和负载均衡；对外服务有一个统一的入口："),e("code",[v._v("Service")]),v._v("，如果访问订单服务就只访问订单的节点等，还可以在这两者之间做负载均衡")])])]),v._v(" "),e("li",[e("p",[v._v("滚动更新")]),v._v(" "),e("blockquote",[e("p",[v._v("可以根据应用的变化，对应用容器运行的应用，进行一次性或批量式更新；对加进去的服务会进行检测，如果应用没有问题的时候，才会开始对外进行服务。")])])]),v._v(" "),e("li",[e("p",[v._v("版本回退")]),v._v(" "),e("blockquote",[e("p",[v._v("可以根据应用部署情况，对应应用容器运行的应用，进行历史版本即时回退")])])]),v._v(" "),e("li",[e("p",[v._v("秘钥和配置管理")]),v._v(" "),e("blockquote",[e("p",[v._v("在不需要重新构建镜像的情况下，可以部署和更新秘钥和应用配置，类似热部署")])])]),v._v(" "),e("li",[e("p",[v._v("存储编排")]),v._v(" "),e("blockquote",[e("p",[v._v("自动实现存储系统挂载及应用，特别对有状态应用实现数据持久化非常重要，存储系统可以来自于本地目录、网络存储(NFS、Gluster、Ceph 等)、公共云存储服务")])])]),v._v(" "),e("li",[e("p",[v._v("批处理")]),v._v(" "),e("blockquote",[e("p",[v._v("提供一次性任务、定时任务；满足批量数据处理和分析的场景")])])])])])}),[],!1,null,null,null);_.default=o.exports}}]);