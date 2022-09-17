(window.webpackJsonp=window.webpackJsonp||[]).push([[178],{618:function(e,o,t){"use strict";t.r(o);var s=t(16),a=Object(s.a)({},(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"docker-安装-yapi"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-安装-yapi"}},[e._v("#")]),e._v(" docker 安装 yapi")]),e._v(" "),t("p",[e._v("步骤")]),e._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/Ryan-Miao/docker-yapi.git\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 这个过程会比较慢")]),e._v("\ndocker-compose up\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br")])]),t("p",[e._v("不过在运行前先修改"),t("code",[e._v("docker-compose.yml")])]),e._v(" "),t("ul",[t("li",[e._v('去掉#号 command: "yapi server"')]),e._v(" "),t("li",[e._v('给命令 command: "node /my-yapi/vendors/server/app.js" 这个前面加#号')]),e._v(" "),t("li",[e._v("再去执行"),t("code",[e._v("docker-compose up")])]),e._v(" "),t("li",[e._v("访问 IP："),t("code",[e._v("127.0.0.1:9090")])])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/wxvirus/img/raw/master/img/20220221001247.png",alt:"yapi安装"}})]),e._v(" "),t("p",[e._v("默认部署位置："),t("code",[e._v("/my-yapi")])]),e._v(" "),t("p",[e._v("修改管理员邮箱(随意)")]),e._v(" "),t("p",[e._v("修改数据库地址为"),t("code",[e._v("mongo")]),e._v("或者修改为自己的"),t("code",[e._v("mongo")]),e._v("实例(docker-compose 配置的 mongo 服务名称叫 mongo)")]),e._v(" "),t("p",[e._v("这里点击数据库认证，默认的数据库用户名为："),t("code",[e._v("yapi(mongo配置的用户名，见mongo-conf/init-mongo.js)")]),e._v("，密码："),t("code",[e._v("yapi123456(见mongo-conf/init-mongo.js)")])]),e._v(" "),t("p",[e._v("这里部署版本最好选择低 2 个级别的，还有"),t("code",[e._v("node")]),e._v("版本最好选择 v12 的，最新的估计不太行。会有各种问题。")]),e._v(" "),t("h2",{attrs:{id:"linux-宝塔面板安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux-宝塔面板安装"}},[e._v("#")]),e._v(" linux 宝塔面板安装")]),e._v(" "),t("p",[e._v("可以借鉴下面的博客：")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://blog.csdn.net/BoYou233/article/details/109164464",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://blog.csdn.net/BoYou233/article/details/109164464"),t("OutboundLink")],1)])])}),[],!1,null,null,null);o.default=a.exports}}]);