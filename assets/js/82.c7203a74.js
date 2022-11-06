(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{521:function(s,a,e){"use strict";e.r(a);var r=e(16),t=Object(r.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"快速部署-rancher2-和-k8s-集群"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#快速部署-rancher2-和-k8s-集群"}},[s._v("#")]),s._v(" 快速部署 Rancher2 和 K8S 集群")]),s._v(" "),e("h2",{attrs:{id:"准备工作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#准备工作"}},[s._v("#")]),s._v(" 准备工作")]),s._v(" "),e("ol",[e("li",[e("p",[s._v("非必须")]),s._v(" "),e("ol",[e("li",[e("p",[s._v("停止所有容器")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("docker stop "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("docker "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -a -q"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("删除所有容器")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("docker "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("docker "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -a -q"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])])])]),s._v(" "),e("li",[e("p",[s._v("必须")]),s._v(" "),e("ol",[e("li",[e("p",[s._v("关闭防火墙，如果有"),e("code",[s._v("iptables")]),s._v("也全部干掉")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("systemctl stop firewalld "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" systemctl disable firewalld\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("关闭"),e("code",[s._v("selinux")])]),s._v(" "),e("ol",[e("li",[e("code",[s._v("setenforce 0")])]),s._v(" "),e("li",[e("code",[s._v("set -i's/SELINUX=enforcing/SELINUX=disabled/g' /etc/selinux/config")])])])]),s._v(" "),e("li",[e("p",[s._v("关闭"),e("code",[s._v("swap")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("swapoff -a\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])])])]),s._v(" "),e("li",[e("p",[s._v("重启"),e("code",[s._v("docker")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl daemon-reload\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl restart docker\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])])])]),s._v(" "),e("h2",{attrs:{id:"rancher-安装-k8s-集群"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rancher-安装-k8s-集群"}},[s._v("#")]),s._v(" rancher 安装 K8S 集群")]),s._v(" "),e("p",[s._v("由于一些原因，使用官方镜像源安装慢，可以使用如下命令进行安装，不过")]),s._v(" "),e("p",[e("code",[s._v("-v /home/wxvirus/rancher:/var/lib/rancher")]),s._v("前面部分换成自己的路径，这里使用的是国内的，比较快。")]),s._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),e("p",[s._v("一定要在你的用户目录下新建一个"),e("code",[s._v("rancher")]),s._v("目录")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("docker run -itd --privileged  -p "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v(":80 -p "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("8443")]),s._v(":443 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-v /home/wxvirus/rancher:/var/lib/rancher "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--restart"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("unless-stopped  -e "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CATTLE_AGENT_IMAGE")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"registry.cn-hangzhou.aliyuncs.com/rancher/rancher-agent:v2.4.8"')]),s._v("  registry.cn-hangzhou.aliyuncs.com/rancher/rancher:v2.4.8\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[e("img",{attrs:{src:"https://virusoss.oss-cn-shanghai.aliyuncs.com/images/20221023010945.png",alt:""}})]),s._v(" "),e("p",[s._v("我们在浏览器中输入"),e("code",[s._v("192.168.0.110:8080")]),s._v("，它会自动跳转到"),e("code",[s._v("8443")]),s._v("端口，如果出现什么安全警告，点击继续前往即可。")]),s._v(" "),e("blockquote",[e("p",[s._v("第一次进入会让你修改密码，输入你自己的密码，然后点击统一继续即可。")])]),s._v(" "),e("p",[e("img",{attrs:{src:"https://virusoss.oss-cn-shanghai.aliyuncs.com/images/20221023011211.png",alt:""}})]),s._v(" "),e("p",[s._v("这里一般需要配置你的内网的"),e("code",[s._v("ip")]),s._v("地址，我这是虚拟机，我还是直接填入得了。")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://virusoss.oss-cn-shanghai.aliyuncs.com/images/image-20221023012324250.png",alt:"image-20221023012324250"}})]),s._v(" "),e("p",[s._v("可以通过下面的语言进行调整为中文。")]),s._v(" "),e("p",[s._v("我们点击新建集群")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://virusoss.oss-cn-shanghai.aliyuncs.com/images/image-20221023012141248.png",alt:"image-20221023012141248"}})]),s._v(" "),e("p",[s._v("只输入一个集群名称，即可，什么都不用改别的，然后直接下一步；")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://virusoss.oss-cn-shanghai.aliyuncs.com/images/20221023012231.png",alt:""}})]),s._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),e("p",[s._v("需要将上面三个都勾选上，然后复制下面的命令在主节点进行运行，当前的还是"),e("code",[s._v("rancher")]),s._v("节点，只是安装"),e("code",[s._v("rancher")]),s._v("的")])]),s._v(" "),e("p",[e("code",[s._v("master-node")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" docker run -d --privileged --restart"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("unless-stopped --net"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("host -v /etc/kubernetes:/etc/kubernetes -v /var/run:/var/run registry.cn-hangzhou.aliyuncs.com/rancher/rancher-agent:v2.4.8 --server https://192.168.0.110:8443 --token t4qmt4j6hcfqt2j8pmw4pmfwtrp8wgp575rl5zdhlq5hwqvf9vg8gg --ca-checksum 89e4df5af647ae28d467cc54e426a5ea771ff48a29f953a42712a373305e1e88 --etcd --controlplane --worker\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("下面是"),e("code",[s._v("worker")]),s._v("节点，把上面的，除了"),e("code",[s._v("Worker")]),s._v("以外的都勾选掉，来"),e("code",[s._v("worker")]),s._v("节点进行运行")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" docker run -d --privileged --restart"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("unless-stopped --net"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("host -v /etc/kubernetes:/etc/kubernetes -v /var/run:/var/run registry.cn-hangzhou.aliyuncs.com/rancher/rancher-agent:v2.4.8 --server https://192.168.0.110:8443 --token t4qmt4j6hcfqt2j8pmw4pmfwtrp8wgp575rl5zdhlq5hwqvf9vg8gg --ca-checksum 89e4df5af647ae28d467cc54e426a5ea771ff48a29f953a42712a373305e1e88 --worker\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("然后静静等待安装，会有很多镜像需要下载，等到出现以下内容")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://virusoss.oss-cn-shanghai.aliyuncs.com/images/20221023013549.png",alt:""}})]),s._v(" "),e("p",[s._v("看到一个明显的"),e("code",[s._v("active")]),s._v("就代表可以了。")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://virusoss.oss-cn-shanghai.aliyuncs.com/images/20221023013751.png",alt:""}})]),s._v(" "),e("p",[s._v("我这还是有点警告内容的，磁盘压力大，看来还是虚拟机不得劲。")]),s._v(" "),e("p",[s._v("如果正常情况来整，你会看到主机有 3 个绿色的"),e("code",[s._v("active")]),s._v("状态即可。")]),s._v(" "),e("h2",{attrs:{id:"主节点启动-rancher-第二大节的文字描述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#主节点启动-rancher-第二大节的文字描述"}},[s._v("#")]),s._v(" 主节点启动 rancher[第二大节的文字描述]")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" docker run -d --restart"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("unless-stopped -p "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v(":80 -p "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("8443")]),s._v(":443 -v /home/username/rancher:/var/lib/rancher/ rancher/rancher:stable\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("容器端口 80 和 443 是固定的，同时需要在阿里云或者 XX 云或者别的什么开启访问端口。")]),s._v(" "),e("p",[e("code",[s._v("/home/username/rancher")]),s._v("，自己用户目录下一定要创建一个空的文件夹。")]),s._v(" "),e("p",[s._v("启动完毕之后，第一次安装可能需要久一点，然后使用对应的机器的公网 IP 加上 8080 端口进行访问，有点耐心等一会，如果出现什么私密链接，点击高级，然后点击继续前往即可。")]),s._v(" "),e("p",[s._v("第一次启动的时候，会让你设置新密码，然后同意继续即可。")]),s._v(" "),e("p",[s._v("到了设置"),e("code",[s._v("Rancher Server URL")]),s._v("的页面的时候，需要填写你对应的内网 IP 加 8443 端口")]),s._v(" "),e("p",[s._v("进入主界面之后，我们点击集群，点击自定义，输入集群名称，其他什么都不用干，全部使用默认配置，点击下一步，针对主机，"),e("code",[s._v("master")]),s._v("节点，"),e("code",[s._v("etcd、Control、Worker")]),s._v("三个角色都要勾选上。然后复制它给的命令在主机上执行即可。")]),s._v(" "),e("p",[s._v("然后在自己的"),e("code",[s._v("worker")]),s._v("节点机器上，我们把"),e("code",[s._v("Etcd和Control")]),s._v("勾选去掉，就留下"),e("code",[s._v("Worker")]),s._v("之后，复制对应的命令到"),e("code",[s._v("worker")]),s._v("节点机器上运行。")]),s._v(" "),e("p",[s._v("最后点击完成即可，需要稍微等一会，需要下载很多镜像。")]),s._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),e("p",[s._v("如果出现什么 etcd 的错误，我们到列表页，把上面新加的删除，等到它页面内容完全消失，然后再重复一遍上面的操作，等到下面有一个提示：“2 台新主机注册成功”的时候再点击完成，再继续等待")])]),s._v(" "),e("p",[s._v("如果集群列表的状态栏出现"),e("code",[s._v("active")]),s._v("，说明成功了，如果有感叹号提示节点 XX 没激活，继续等待即可，它还在注册当中，第一次整，可以去玩一会了。")])])}),[],!1,null,null,null);a.default=t.exports}}]);