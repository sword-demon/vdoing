(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{589:function(s,a,e){"use strict";e.r(a);var r=e(16),t=Object(r.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"docker-安装-kafka"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-安装-kafka"}},[s._v("#")]),s._v(" docker 安装 kafka")]),s._v(" "),e("ol",[e("li",[e("p",[s._v("下载镜像")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("docker pull wurstmeister/zookeeper\ndocker pull wurstmeister/kafka\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("启动"),e("code",[s._v("zookeeper")]),s._v("容器")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("docker run -d --name zookeeper -p "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2181")]),s._v(":2181 -t wurstmeister/zookeeper\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("启动"),e("code",[s._v("kafka")]),s._v("容器")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("docker run  -d --name kafka -p "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("9092")]),s._v(":9092 -e "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("KAFKA_BROKER_ID")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" -e "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("KAFKA_ZOOKEEPER_CONNECT")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("ip:2181 -e "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("KAFKA_ADVERTISED_LISTENERS")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("PLAINTEXT://ip:9092 -e "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("KAFKA_LISTENERS")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("PLAINTEXT://0.0.0.0:9092 -t wurstmeister/kafka\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])])])])}),[],!1,null,null,null);a.default=t.exports}}]);