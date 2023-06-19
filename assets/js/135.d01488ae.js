(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{576:function(t,s,a){"use strict";a.r(s);var e=a(16),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"登录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#登录"}},[t._v("#")]),t._v(" 登录")]),t._v(" "),a("p",[t._v("登录：")]),t._v(" "),a("ol",[a("li",[t._v("前端输入用户名密码")]),t._v(" "),a("li",[t._v("校验用户名密码")]),t._v(" "),a("li",[t._v("生成登录标识("),a("code",[t._v("token")]),t._v(")")]),t._v(" "),a("li",[t._v("后端保存"),a("code",[t._v("token")])]),t._v(" "),a("li",[t._v("前端保存"),a("code",[t._v("token")])])]),t._v(" "),a("p",[t._v("校验：")]),t._v(" "),a("ol",[a("li",[t._v("前端请求时，带上"),a("code",[t._v("token")]),t._v("，"),a("strong",[t._v("并不是所有的接口都需要带上"),a("code",[t._v("token")]),t._v("一般是放在"),a("code",[t._v("header")]),t._v("里")])]),t._v(" "),a("li",[t._v("登录拦截器，校验"),a("code",[t._v("token")]),t._v("（到"),a("code",[t._v("redis")]),t._v("获取"),a("code",[t._v("token")]),t._v("）")]),t._v(" "),a("li",[t._v("校验成功则继续后面的业务")]),t._v(" "),a("li",[t._v("校验失败则回到登录页面")])]),t._v(" "),a("p",[t._v("登录标识：就是令牌，就是"),a("code",[t._v("token")]),t._v("，就是一串唯一的字符串")]),t._v(" "),a("h2",{attrs:{id:"单点登录系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单点登录系统"}},[t._v("#")]),t._v(" 单点登录系统")]),t._v(" "),a("blockquote",[a("p",[t._v("如果你的公司有很多系统，每个系统都单独做一个登录，就会很费事费力，还不能达到统一。一般会再做一个另外的单点登录系统。")])]),t._v(" "),a("p",[t._v("比如：现在有"),a("code",[t._v("A B C")]),t._v("三个系统，另外一个单点登录系统为："),a("code",[t._v("SSO")])]),t._v(" "),a("p",[t._v("第一种方式：")]),t._v(" "),a("p",[a("code",[t._v("A")]),t._v("网站要登录的时候，去访问一下"),a("code",[t._v("SSO")]),t._v("，它提供登录界面和功能，登录直接跳到"),a("code",[t._v("SSO")]),t._v("登录完成后，再回到"),a("code",[t._v("A")])]),t._v(" "),a("p",[t._v("第二种方式：")]),t._v(" "),a("p",[t._v("登录界面，"),a("code",[t._v("A B C")]),t._v("各自都有，但是登录接口是由"),a("code",[t._v("SSO")]),t._v("来提供的，它不提供页面，只提供接口。")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[a("strong",[t._v("单点 != 单个节点")])]),t._v(" "),a("p",[t._v("为了支持全部系统的登录功能，所以这个"),a("code",[t._v("SSO")]),t._v("还是要很高效稳定的，所以有可能会布个 10 个节点或 100 个节点")])]),t._v(" "),a("hr"),t._v(" "),a("p",[a("code",[t._v("SSO")]),t._v("主要功能点：")]),t._v(" "),a("ul",[a("li",[t._v("用户管理")]),t._v(" "),a("li",[t._v("登录")]),t._v(" "),a("li",[t._v("登录校验")]),t._v(" "),a("li",[t._v("退出登录")]),t._v(" "),a("li",[t._v("或是注册，有可能只提供接口，也可能包含页面")])]),t._v(" "),a("h2",{attrs:{id:"token-与-jwt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#token-与-jwt"}},[t._v("#")]),t._v(" token 与 JWT")]),t._v(" "),a("p",[a("code",[t._v("token + redis")]),t._v("组合："),a("code",[t._v("token")]),t._v("是无意义的，我们可以用 MD5 字符串，可以用时间戳等等。")]),t._v(" "),a("p",[t._v("JWT："),a("code",[t._v("token")]),t._v("是有意义的，是加密的，是包含业务信息的，就是把业务信息加密起来，业务信息基本也就是用户信息，可以被解密出来。它不需要存储到"),a("code",[t._v("redis")]),t._v("。")]),t._v(" "),a("p",[t._v("网址： "),a("a",{attrs:{href:"https://jwt.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("jwt.io"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("code",[t._v("Maven")]),t._v("依赖")]),t._v(" "),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("com.auth0"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("java-jwt"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("3.5.0"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("它有比较重要的 2 个方法："),a("code",[t._v("JwtUtil.sign")]),t._v("和"),a("code",[t._v("JwtUtil.verity")])])])}),[],!1,null,null,null);s.default=n.exports}}]);