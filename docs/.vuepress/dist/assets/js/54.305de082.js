(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{494:function(t,s,a){"use strict";a.r(s);var e=a(16),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"事务的隔离级别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事务的隔离级别"}},[t._v("#")]),t._v(" 事务的隔离级别")]),t._v(" "),a("blockquote",[a("p",[t._v("事务的隔离级别取决于如何控制并发用户读写数据的操作。数据库是运行多用户并发访问的，如果多个用户同时开启事务，并对同一数据进行读写操作的话，有可能会出现脏读、不可重复读和幻读的问题，所以 MySQL 中提供了四种隔离级别来解决上述问题。")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("事务的隔离级别从低到高依次为：")]),t._v(" "),a("ul",[a("li",[t._v("READ UNCOMMITTED")]),t._v(" "),a("li",[t._v("READ COMMITTED")]),t._v(" "),a("li",[t._v("REPEATABLE READ")]),t._v(" "),a("li",[t._v("SERIALIAZBLE")])]),t._v(" "),a("p",[t._v("隔离级别越低，越能支持高并发的数据库操作")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("隔离级别")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("脏读")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("不可重复读")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("幻读")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("READ UNCOMMITTED")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✔️")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✔️")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✔️")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("READ COMMITTED")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("×")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✔️")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✔️")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("REPEATABLE READ")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("×")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("×")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✔️")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("SERIALIAZBLE")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("×")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("×")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("×")])])])]),t._v(" "),a("ul",[a("li",[a("span",{staticStyle:{color:"red","font-size":"22px"}},[t._v("×")]),t._v("代表不会出问题 = 解决问题")]),t._v(" "),a("li",[a("span",{staticStyle:{color:"green"}},[t._v("✔️")]),t._v("代表会出问题")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("blockquote",[a("p",[t._v("一般使用"),a("code",[t._v("REPEATABLE READ")]),t._v("这比较多，且数据库的默认隔离级别是它。")])])]),t._v(" "),a("p",[a("strong",[t._v("查看默认的事务隔离级别")])]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看默认的事务隔离级别")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" @"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@transaction_isolation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置事务的隔离级别(加上session是设置当前会话的隔离级别)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("session")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("transaction")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("isolation")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("level")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("read")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("uncommitted")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("session")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("transaction")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("isolation")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("level")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("read")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("committed")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("session")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("transaction")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("isolation")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("level")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("repeatable")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("read")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("session")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("transaction")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("isolation")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("level")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("serializable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("h3",{attrs:{id:"模拟脏读"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模拟脏读"}},[t._v("#")]),t._v(" 模拟脏读")]),t._v(" "),a("p",[t._v("进程 1："),a("code",[t._v("navicat")]),t._v("客户端操作数据库")]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 第一步")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("start")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("transaction")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 第三步")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" account "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查询id=1的余额 当前余额 100")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 第五步")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" account "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 再次查询id=1的余额  现在 200")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("p",[t._v("进程 2："),a("code",[t._v("cmd")]),t._v("或"),a("code",[t._v("terminal")]),t._v("操作数据库")]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 第二步")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("start")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("transaction")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 第四步")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("update")]),t._v(" account "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" balance "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" balance "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# id=1的余额加100")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 第六步")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("rollback")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 事务回滚 ，修改的操作没用")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 第七步")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" account "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 100")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])]),a("p",[t._v("设置事务隔离级别为"),a("code",[t._v("read committed")])]),t._v(" "),a("p",[t._v("再进行一次流程。")]),t._v(" "),a("p",[t._v("这次从"),a("code",[t._v("cmd/shell/terminal/zsh")]),t._v("进行操作的修改的后一步，"),a("code",[t._v("navicat")]),t._v("查询的时候，不会查询到"),a("code",[t._v("+100")]),t._v("的之后的结果。")]),t._v(" "),a("p",[t._v("如果"),a("code",[t._v("cmd")]),t._v("进程进行提交"),a("code",[t._v("commit")]),t._v("，则"),a("code",[t._v("navicat")]),t._v("客户端再次查询就会变成"),a("code",[t._v("+100")]),t._v("之后的结果。")])])}),[],!1,null,null,null);s.default=n.exports}}]);