(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{526:function(s,a,t){"use strict";t.r(a);var n=t(16),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"k8s-上手"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#k8s-上手"}},[s._v("#")]),s._v(" K8S 上手")]),s._v(" "),t("blockquote",[t("p",[s._v("前置：这里使用的是"),t("code",[s._v("Rancher2")]),s._v("搭建的"),t("code",[s._v("K8S")]),s._v("集群来上手。")])]),s._v(" "),t("h2",{attrs:{id:"创建项目、namespace、初步部署-nginx、nodeport"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建项目、namespace、初步部署-nginx、nodeport"}},[s._v("#")]),s._v(" 创建项目、namespace、初步部署 nginx、nodeport")]),s._v(" "),t("p",[s._v("进入集群后，导航里有一个"),t("code",[s._v("project/namespace")]),s._v("，项目/命名空间的点开来。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://virusoss.oss-cn-shanghai.aliyuncs.com/images/image-20221111235418401.png",alt:"image-20221111235418401"}})]),s._v(" "),t("ul",[t("li",[t("code",[s._v("namespace")]),s._v("：是对一组资源和对象的抽象集合，用来将系统内部的对象划分为不同的项目组或用户组；常用来隔离不同的用户，比如"),t("code",[s._v("K8S")]),s._v("自带的服务一般运行在"),t("code",[s._v("kube-system namespace")]),s._v("中")])]),s._v(" "),t("hr"),s._v(" "),t("p",[s._v("然后我们点击创建项目，输入项目名称，其他都不选也不填，直接点击创建。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://virusoss.oss-cn-shanghai.aliyuncs.com/images/image-20221111235813759.png",alt:"image-20221111235813759"}})]),s._v(" "),t("p",[s._v("然后点击添加命名空间")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://virusoss.oss-cn-shanghai.aliyuncs.com/images/image-20221111235921518.png",alt:"image-20221111235921518"}})]),s._v(" "),t("p",[s._v("就填个名称，然后属于"),t("code",[s._v("myproject")]),s._v("项目，直接创建。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://virusoss.oss-cn-shanghai.aliyuncs.com/images/image-20221112000032683.png",alt:"image-20221112000032683"}})]),s._v(" "),t("p",[s._v("创建完成之后点进去")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://virusoss.oss-cn-shanghai.aliyuncs.com/images/image-20221112000059524.png",alt:"image-20221112000059524"}})]),s._v(" "),t("p",[s._v("我们创建的项目就会在"),t("code",[s._v("workloads")]),s._v("里创建。")]),s._v(" "),t("hr"),s._v(" "),t("h3",{attrs:{id:"workload"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#workload"}},[s._v("#")]),s._v(" workload")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://virusoss.oss-cn-shanghai.aliyuncs.com/images/image-20221112000158200.png",alt:"image-20221112000158200"}})]),s._v(" "),t("p",[t("code",[s._v("Pod")]),s._v("是所有业务类型的基础，也是"),t("code",[s._v("K8S")]),s._v("管理的最小单位级，可以理解为它是一个或多个容器的组合。")]),s._v(" "),t("p",[s._v("然后我们在"),t("code",[s._v("workloads")]),s._v("里部署一个"),t("code",[s._v("nginx")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://virusoss.oss-cn-shanghai.aliyuncs.com/images/image-20221112001137847.png",alt:"image-20221112001137847"}})]),s._v(" "),t("p",[s._v("这里的"),t("code",[s._v("Node Scheduling")]),s._v("要选择下面的，自动生成。")]),s._v(" "),t("p",[s._v("然后点击"),t("code",[s._v("Add Port")]),s._v("，输入名称，和容器内的端口，"),t("code",[s._v("nginx")]),s._v("内置的就是 80 端口，规则选择"),t("code",[s._v("TCP")]),s._v("，选择"),t("code",[s._v("NodePort")]),s._v("，最后一个会自动生成一个端口，在"),t("code",[s._v("30000~32767")]),s._v("范围内，在所有节点上开放一个特定的端口，任何发送到该端口的流量都被转发到对应服务。最后点击"),t("code",[s._v("Launch")]),s._v("，也是需要等一会的。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://virusoss.oss-cn-shanghai.aliyuncs.com/images/image-20221112001434322.png",alt:"image-20221112001434322"}})]),s._v(" "),t("p",[s._v("这里它自动帮我们生成了一个随机的端口"),t("code",[s._v("30370/tcp")]),s._v("而且地址是访问的内网地址。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://virusoss.oss-cn-shanghai.aliyuncs.com/images/image-20221112001609973.png",alt:"image-20221112001609973"}})]),s._v(" "),t("p",[s._v("可以看到主节点和另外一个节点都能进行访问。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://virusoss.oss-cn-shanghai.aliyuncs.com/images/image-20221112001648394.png",alt:"image-20221112001648394"}})]),s._v(" "),t("p",[s._v("点进去会发现，这个是部署在"),t("code",[s._v("k8s-node1")]),s._v("节点上的，"),t("code",[s._v("k8s-master1")]),s._v("节点上没有，但是此时 2 个都能进行访问。")]),s._v(" "),t("blockquote",[t("p",[s._v("使用第二台机器的内网地址进行访问，也是可以访问的。")])]),s._v(" "),t("h2",{attrs:{id:"部署一个-go-api-到-k8s-集群中"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#部署一个-go-api-到-k8s-集群中"}},[s._v("#")]),s._v(" 部署一个 go api 到 K8S 集群中")]),s._v(" "),t("p",[s._v("简单一个"),t("code",[s._v("gin")]),s._v("代码")]),s._v(" "),t("div",{staticClass:"language-go line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-go"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" main\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"github.com/gin-gonic/gin"')]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"log"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\tr "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" gin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Default")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\tr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Handle")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"GET"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("c "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("gin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Context"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\tc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("200")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"this is myweb"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\tr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Handle")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"GET"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/user"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("c "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("gin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Context"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\tc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("200")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"this is user 0.7"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\terr "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" r"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Run")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('":80"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" err "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("nil")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\tlog"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Fatalln")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("err"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br")])]),t("p",[s._v("使用交叉编译成"),t("code",[s._v("linux amd64")]),s._v("可以使用的二进制文件")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CGO_ENABLE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GOOS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("linux "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GOARCH")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("amd64 go build myserver.go\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("hr"),s._v(" "),t("p",[s._v("这次还是继续选择在"),t("code",[s._v("Rancher")]),s._v("中选择"),t("code",[s._v("Deploy")]),s._v("部署一个"),t("code",[s._v("mygo")]),s._v("的服务，不过这次使用"),t("code",[s._v("HostPort")]),s._v("，它是直接将容器的端口与所调度的节点上的端口进行映射。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://virusoss.oss-cn-shanghai.aliyuncs.com/images/image-20221113221312459.png",alt:"image-20221113221312459"}})]),s._v(" "),t("p",[s._v("如果你是别的什么云，可以选择主机端口为"),t("code",[s._v("8081")]),s._v("或者别的，我这个云有点特殊，和"),t("code",[s._v("web")]),s._v("相关的端口需要端口备案，所以选择了一个"),t("code",[s._v("9502")]),s._v("端口。")]),s._v(" "),t("hr"),s._v(" "),t("p",[s._v("然后你可以将语言换成中文，来进行选择")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://virusoss.oss-cn-shanghai.aliyuncs.com/images/image-20221113221544464.png",alt:"image-20221113221544464"}})]),s._v(" "),t("p",[s._v("选择数据卷：选择映射主机目录，卷名称随意，主机路径就和你即将编译后的那个"),t("code",[s._v("myweb")]),s._v("的路径有关，容器目录为"),t("code",[s._v("/app")])]),s._v(" "),t("p",[s._v("然后这里主机调度，选择指定主机，这里只想在主机上进行运行。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://virusoss.oss-cn-shanghai.aliyuncs.com/images/image-20221113221715655.png",alt:"image-20221113221715655"}})]),s._v(" "),t("p",[s._v("然后拉到最下面，点击显示高级选项：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://virusoss.oss-cn-shanghai.aliyuncs.com/images/image-20221113221936731.png",alt:"image-20221113221936731"}})]),s._v(" "),t("ul",[t("li",[t("p",[s._v("命令填上"),t("code",[s._v("./myserver")]),s._v("，这是启动"),t("code",[s._v("go")]),s._v("编译好的一个二进制文件运行的命令。")])]),s._v(" "),t("li",[t("p",[s._v("然后设置工作目录为我们设置好的容器映射的目录"),t("code",[s._v("/app")])])]),s._v(" "),t("li",[t("p",[s._v("控制台选择无")])]),s._v(" "),t("li",[t("p",[s._v("安全/主机设置：镜像拉取策略，这里因为我们使用的是"),t("code",[s._v("alpine:3.12")]),s._v("，我们本来不存在这个镜像，所以我们换成不存在则拉取，别的都不用动，最后点击启动。照样是要我们等一会，这个会很快的。")])])]),s._v(" "),t("p",[s._v("最终效果：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://virusoss.oss-cn-shanghai.aliyuncs.com/images/image-20221113230437734.png",alt:"image-20221113230437734"}})]),s._v(" "),t("hr"),s._v(" "),t("p",[s._v("如果是单机部署")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("docker pull alpine:3.12\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("docker run  -d  --name tt "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-v /home/wxvirus/myweb:/app "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-w /app "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8081")]),s._v(":80 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\nalpine:3.12 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n./myserver\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h2",{attrs:{id:"_2-个-go-api-进行负载均衡-ingress"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-个-go-api-进行负载均衡-ingress"}},[s._v("#")]),s._v(" 2 个 go api 进行负载均衡(ingress)")]),s._v(" "),t("p",[s._v("我们将上面部署的一个"),t("code",[s._v("mygo")]),s._v("进行编辑，选择部署 2 个节点，将"),t("code",[s._v("pod")]),s._v("编写成 2，把前面设置的端口映射的配置删掉，重新使用"),t("code",[s._v("NodePort")]),s._v("来进行部署，修改主机调度为每个"),t("code",[s._v("pod")]),s._v("自动匹配主机，最后保存即可。")]),s._v(" "),t("hr"),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),t("p",[s._v("中间过程偶有问题，【重启 + 删除部署 + 重新部署】是真的可以，然后再自己查看对应的日志内容，去解决即可。")])]),s._v(" "),t("div",{staticClass:"custom-block danger"},[t("p",{staticClass:"custom-block-title"},[s._v("我遇到的坑")]),s._v(" "),t("p",[s._v("首次修改保存之后，会产生大量的"),t("code",[s._v("Fail")]),s._v("的"),t("code",[s._v("Pod")]),s._v("，你删除的速度还没他增长的快。迫不得已，把这个"),t("code",[s._v("workloads")]),s._v("删了，重新部署；然后主节点可以了，"),t("code",[s._v("worker")]),s._v("节点又不行了，原因是"),t("code",[s._v("worker")]),s._v("节点上那个主机映射目录的可执行文件不存在，又整了一下，然后又发现可执行文件没有执行权限，最终"),t("code",[s._v("chmod +x myserver")]),s._v("，等待下一次"),t("code",[s._v("Pod")]),s._v("重启之后才 OK。")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://virusoss.oss-cn-shanghai.aliyuncs.com/images/image-20221113232921379.png",alt:"image-20221113232921379"}})]),s._v(" "),t("hr"),s._v(" "),t("h3",{attrs:{id:"ingress"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ingress"}},[s._v("#")]),s._v(" Ingress")]),s._v(" "),t("blockquote",[t("p",[s._v("它相当于一个 7 层负载均衡器，理解为进行反向代理并定义规则的一个"),t("code",[s._v("api")]),s._v("对象，"),t("code",[s._v("ingress Controller")]),s._v("通过监听"),t("code",[s._v("Ingress api")]),s._v("转化为各自的配置(常用的有"),t("code",[s._v("nginx + ingress")]),s._v("，"),t("code",[s._v("trafik-ingress")]),s._v(")")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://virusoss.oss-cn-shanghai.aliyuncs.com/images/image-20221113233618260.png",alt:"image-20221113233618260"}})]),s._v(" "),t("p",[s._v("然后出去选择负载均衡，添加规则，输入名称和命名空间，然后规则里选择兹定于域名，我这里没啥域名，就不测试了，你可以选自己的域名，然后端口设置为 80 即可，否则访问域名则还需要加上端口才能访问，这个时候，如果你想体现出有负载均衡的感觉，你可以将"),t("code",[s._v("myserver")]),s._v("的代码改动一下，将输出的内容换成各个节点的名称来测试。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://virusoss.oss-cn-shanghai.aliyuncs.com/images/image-20221113234143603.png",alt:"image-20221113234143603"}})])])}),[],!1,null,null,null);a.default=e.exports}}]);