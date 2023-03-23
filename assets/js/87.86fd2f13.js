(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{524:function(s,t,e){"use strict";e.r(t);var a=e(16),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"配置一台-nfs-服务进行跨主机文件共享"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置一台-nfs-服务进行跨主机文件共享"}},[s._v("#")]),s._v(" 配置一台 nfs 服务进行跨主机文件共享")]),s._v(" "),e("p",[s._v("主机操作("),e("code",[s._v("centos7.8")]),s._v(")")]),s._v(" "),e("p",[s._v("安装"),e("code",[s._v("nfs-utils")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y nfs-utils\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("配置")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/sysconfig/nfs\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("没有"),e("code",[s._v("vi")]),s._v("的可以安装一下"),e("code",[s._v("vim")])]),s._v(" "),e("p",[s._v("加入以下内容")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("LOCKD_TCPPORT=30001 #TCP锁使用端口\nLOCKD_UDPPORT=30002 #UDP锁使用端口\nMOUNTD_PORT=30003 #挂载使用端口\nSTATD_PORT=30004 #状态使用端口\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("blockquote",[e("p",[s._v("启动、重启服务")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl restart rpcbind.service\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl restart nfs-server.service\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("blockquote",[e("p",[s._v("设置开机启动")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v("  systemctl "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" rpcbind.service\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" nfs-server.service\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("blockquote",[e("p",[s._v("编辑共享目录")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/exports\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("写入一下内容")]),s._v(" "),e("p",[s._v("你所要设置的共享目录，以及对应的内网地址的网关")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("/home/wxvirus/goapi\t\t\t内网ip公共部分.0/24(rw,async)\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[s._v("参数")]),s._v(" "),e("th",{staticStyle:{"text-align":"center"}},[s._v("作用")])])]),s._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[s._v("ro")]),s._v(" "),e("td",{staticStyle:{"text-align":"center"}},[s._v("只读")])]),s._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[s._v("rw")]),s._v(" "),e("td",{staticStyle:{"text-align":"center"}},[s._v("读写")])]),s._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[s._v("root_squash")]),s._v(" "),e("td",{staticStyle:{"text-align":"center"}},[s._v("当 NFS 客户端以 root 管理员访问时，映射为 NFS 服务器的匿名用户")])]),s._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[s._v("no_root_squash")]),s._v(" "),e("td",{staticStyle:{"text-align":"center"}},[s._v("当 NFS 客户端以 root 管理员访问时，映射为 NFS 服务器的 root 管理员")])]),s._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[s._v("all_squash")]),s._v(" "),e("td",{staticStyle:{"text-align":"center"}},[s._v("无论 NFS 客户端使用什么访问，均映射为 NFS 服务器的匿名用户")])]),s._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[s._v("sync")]),s._v(" "),e("td",{staticStyle:{"text-align":"center"}},[s._v("同时将数据写入到内存与硬盘中，保证不丢失数据")])]),s._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[s._v("async")]),s._v(" "),e("td",{staticStyle:{"text-align":"center"}},[s._v("优先将数据保存到内存，然后再写入硬盘；这样效率更高，但可能会丢失数据")])])])]),s._v(" "),e("blockquote",[e("p",[s._v("查看挂载")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("showmount -e localhost\nExport list "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" localhost:\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("如果不重启服务，这里是没有的")]),s._v(" "),e("p",[s._v("再次重启"),e("code",[s._v("nfs")]),s._v("服务")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl restart nfs-server.service\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("再次执行查看挂载就会出现配置的内容")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("Export list "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" localhost:\n/home/wxvirus/goapi 个人内网ip.0/24\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("blockquote",[e("p",[s._v("到另外的主机也要安装一下"),e("code",[s._v("nfs-utils")]),s._v("，不需要启动"),e("code",[s._v("nfs")]),s._v("服务")])]),s._v(" "),e("p",[s._v("安装完了，直接执行查看挂载的命令")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("showmount -e 内网ip公共部分.xx\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("blockquote",[e("p",[s._v("尝试进行挂载")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mount")]),s._v(" -t nfs 内网ip:/home/wxvirus/goapi /home/wxvirus/goapi\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("后面的文件夹你随意，这里我们写成一样的。")]),s._v(" "),e("p",[s._v("这个时候我们再次进入"),e("code",[s._v("/home/wxvirus/goapi")]),s._v("查看是否有另外一个主机创建的"),e("code",[s._v("test.txt")]),s._v("文件，并查看内容是否一致。")]),s._v(" "),e("p",[s._v("可以使用"),e("code",[s._v("df -h")]),s._v("来查看挂载的盘符。可以使用"),e("code",[s._v("unmount /home/wxvirus/goapi")]),s._v("进行卸载。")])])}),[],!1,null,null,null);t.default=n.exports}}]);