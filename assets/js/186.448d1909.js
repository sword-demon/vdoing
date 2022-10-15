(window.webpackJsonp=window.webpackJsonp||[]).push([[186],{628:function(s,a,n){"use strict";n.r(a);var e=n(16),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"目录"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#目录"}},[s._v("#")]),s._v(" 目录")]),s._v(" "),n("ul",[n("li",[n("p",[n("a",{attrs:{href:"#%E4%B8%8B%E8%BD%BDlinux%E7%9A%84mysql%E5%8C%85"}},[s._v("下载 Linux 的 MySQL 包")])])]),s._v(" "),n("li",[n("p",[n("a",{attrs:{href:"#%E5%AE%89%E8%A3%85%E4%B8%8A%E4%BC%A0%E6%96%87%E4%BB%B6%E7%9A%84%E5%91%BD%E4%BB%A4"}},[s._v("安装上传文件的命令")])])])]),s._v(" "),n("h1",{attrs:{id:"linux-安装-mysql8-0"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#linux-安装-mysql8-0"}},[s._v("#")]),s._v(" Linux 安装 MySQL8.0")]),s._v(" "),n("h2",{attrs:{id:"下载-linux-的-mysql-包"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#下载-linux-的-mysql-包"}},[s._v("#")]),s._v(" 下载 Linux 的 MySQL 包")]),s._v(" "),n("blockquote",[n("p",[s._v("可以先在自己的 windows 或者 mac 里下载好，或者你本身就是 Linux，下载好对应的包即可")])]),s._v(" "),n("p",[s._v("我这里是"),n("code",[s._v("mysql-8.0.19-el7-x86_64.tar.gz")])]),s._v(" "),n("h2",{attrs:{id:"安装上传文件的命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装上传文件的命令"}},[s._v("#")]),s._v(" 安装上传文件的命令")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("yum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y lrzsz\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ul",[n("li",[n("p",[s._v("rz：上传")])]),s._v(" "),n("li",[n("p",[s._v("sz：下载")])])]),s._v(" "),n("p",[s._v("我们先在 Linux 下操作如下命令")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/src\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("我们把文件上传到此目录下")]),s._v(" "),n("blockquote",[n("p",[s._v("我们可以使用"),n("code",[s._v("rz")]),s._v("命令，在 windows 打开文件上传的窗口选择对应下载好的文件上传即可")])]),s._v(" "),n("p",[s._v("对压缩文件进行解压")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" zxvf mysql-8.0.19-el7-x86_64.tar.gz\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("如果此时不是"),n("code",[s._v("root")]),s._v("用户的话，记得"),n("code",[s._v("su")]),s._v("切换到"),n("code",[s._v("root")]),s._v("用户")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" mysql-8.0.19-el7-x86_64 /usr/local/mysql\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("添加"),n("code",[s._v("mysql")]),s._v("用户")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("useradd")]),s._v(" mysql -s /sbin/nologin\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 赋予权限")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" -R mysql.mysql /usr/local/mysql/\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 赋予可执行权限")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" +w /usr/local/mysql\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建tmp和data目录")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /usr/local/mysql/tmp\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /usr/local/mysql/data\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更改所属用户")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" -R mysql.mysql /usrl/local/mysql\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("p",[s._v("初始化数据库和设置初始密码")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("/usr/local/mysql/bin/mysqld --initialize --user"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mysql --basedir"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/mysql/ --datadir"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/mysql/data/\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("如果你出现以下问题:")]),s._v(" "),n("blockquote",[n("p",[s._v("/usr/local/mysql/bin/mysqld: error while loading shared libraries: libaio.so.1: cannot open shared object file: No such file or directory")])]),s._v(" "),n("p",[s._v("意思就是缺少"),n("code",[s._v("libaio")]),s._v("这个库，安装一下即可")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("yum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" libaio*\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("如果是"),n("code",[s._v("ubuntu")])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" libaio-dev\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("然后继续执行上面的初始化命令即可")]),s._v(" "),n("p",[s._v("如果出现以下内容")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2022")]),s._v("-08-06T14:21:00.039371Z "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Note"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("MY-010454"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Server"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" A temporary password is generated "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" root@localhost: "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("dblgu08h6uG\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("这个"),n("code",[s._v("!dblgu08h6uG")]),s._v("：就是它默认给你初始化的密码，我们需要先记下来，这是临时密码，不然你马上 mysql 进不去。")]),s._v(" "),n("p",[s._v("然后编辑"),n("code",[s._v("my.cnf")]),s._v("文件")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/my.cnf\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("div",{staticClass:"language-text line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("[mysqld]\nuser = mysql\nport = 3306\nserver_id = 1\nbasedir = /usr/local/mysql/\ndatadir=/usr/local/mysql/data/\nmysqlx_port = 33060\nmysqlx_socket = /usr/local/mysql/mysql/mysql.sock\nsocket=/usr/local/mysql/tmp/mysql.sock\npid-file=/usr/local/mysql/tmp/mysqld.pid\nlog-error = error.log\nlog-bin   = bin.log\nrelay-log = relay.log\n#服务器编码\ncharacter-set-server  = utf8\ncollation-server = utf8_general_ci\ninit_connect     = 'SET NAMES utf8'\nlog_timestamps   = SYSTEM\n#身份验证插件\ndefault-authentication-plugin = mysql_native_password\n#默认存储引擎\ndefault-storage-engine = INNODB\n#开启慢查询日志\nslow_query_log = 1\nslow_query_log_file = /usr/local/mysql/txt/slow_query_log.txt\nlong_query_time = 3\n#关闭mysql8的严格模式\nsql_mode = NO_ENGINE_SUBSTITUTION,STRICT_TRANS_TABLES\n# Disabling symbolic-links is recommended to prevent assorted security risks\nsymbolic-links=0\n# Settings user and group are ignored when systemd is used.\n# If you need to run mysqld under a different user or group,\n# customize your systemd unit file for mariadb according to the\n# instructions in http://fedoraproject.org/wiki/Systemd\n\n[mysqld_safe]\nlog-error=/usr/local/mysql/tmp/mysqld.log\npid-file=/usr/local/mysql/tmp/mysqld.pid\n\n[client]\nsocket=/usr/local/mysql/tmp/mysql.sock\ndefault-character-set=utf8\n#\n# include all files from the config directory\n#\n!includedir /etc/my.cnf.d\n\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br")])]),n("p",[n("code",[s._v("mysql")]),s._v("的配置的一些性能调优")]),s._v(" "),n("div",{staticClass:"language-text line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("#性能调休\n#禁用dns解析\nskip-name-resolve\nwait_timeout针对非交互式连接 ，通过jdbc连接数据库是非交互式连接。\n指定一个请求的最大连接时间，对于4GB左右的内存服务器来说，可以将其设置为5-10。\nwait_timeout = 10\n针对交互式连接，即在mysql_real_connect()函数中使用了CLIENT_INTERACTIVE选项通过mysql客户端连接数据库是交互式连接\ninteractive_timeout = 2880000\n来限制并发线程的数量，一旦执行线程的数量达到这个限制，额外的线程在被放置到对队列中之前，会睡眠数微秒\ninnodb_thread_concurrency=8\n\n为每个session 分配的内存，在事务过程中用来存储二进制日志的缓存。 提高记录bin-log的效率\nbinlog_cache_size = 256K\n连接线程的优化\nthread_stack =512K\n连表缓冲大小 多表join\njoin_buffer_size = 8192K\n用户可以创建的内存表(memory table)的大小.这个值用来计算内存表的最大行数值\nmax_heap_table_size = 1024M\n跳过外部锁定 多进程条件下为MyISAM数据表进行锁定\nskip-external-locking\n控制内存最大占用\nperformance_schema_max_table_instances=400\n代表MySQL可以缓存的表定义的数量\ntable_definition_cache=400\n参数值的代表MySQL可以缓存的打开表时候的最大文件描述符。\ntable_open_cache = 1024\n指定索引缓冲区的大小，它决定索引处理的速度，尤其是索引读的速度。通过检查状态值Key_read_requests和Key_reads，可以知道key_buffer_size设置是否合理\nkey_buffer_size = 512M\nmysql根据配置文件会限制server接受的数据包大小。\n有时候大的插入和更新会受max_allowed_packet 参数限制，导致写入或者更新失败。\nmax_allowed_packet = 100G\n增加sort_buffer_size 来加速ORDER BY 或者GROUP BY 操作,不能通过查询或者索引优化的。\nsort_buffer_size = 2048K\n官方建议使用mysqlpump 通信时缓存数据的大小.\nnet_buffer_length = 8K\n是MySQL读入缓冲区大小。对表进行顺序扫描的请求将分配一个读入缓冲区，MySQL会为它分配一段内存缓冲区。\nread_buffer_size = 2048K\n是MySQL的随机读缓冲区大小，当按任意顺序读取行时（列如按照排序顺序）将分配一个随机读取缓冲区，进行排序查询时，MySQL会首先扫描一遍该缓冲，以避免磁盘搜索，提高查询速度，如果需要大量数据可适当的调整该值\nread_rnd_buffer_size = 1024K\nMySQL重建索引时所允许的最大临时文件的大小\nmyisam_max_sort_file_size=64G\nMyISAM表发生变化时重新排序所需的缓冲。一般64M足矣。\nmyisam_sort_buffer_size = 64M\n缓存可重用的线程数 通常至少设置为16\nthread_cache_size = 192\n开启查询缓存 mysql8 已放弃\nquery_cache_type = 1\n指定MySQL查询结果缓冲区的大小。如果应用程序有大量读，而且没有应用程序级别的缓存，那么这很有用。不过不要设置太大，因为维护它也需要不少开销，这会导致MySQL变慢。\nquery_cache_size = 256M\n内部内存临时表的大小\ntmp_table_size = 1024M\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br")])]),n("p",[s._v("我们编辑完"),n("code",[s._v("my.cnf")]),s._v("之后进行保存，再开一个终端进来")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" /usr/local/mysql/support-files/mysql.server /etc/init.d/mysqld\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/init.d/mysqld\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("找到如下 2 句，修改成这样")]),s._v(" "),n("div",{staticClass:"language-text line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("basedir=/usr/local/mysql\ndatadir=/usr/local/mysql/data\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("然后给它设置权限")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" a+x /etc/init.d/mysqld\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加软链")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" -s /usr/local/mysql/bin/mysql /usr/bin\n\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/mysql/tmp/\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v(" mysqld.log\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" -R mysql.mysql /usr/local/mysql/\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 执行")]),s._v("\n/usr/local/mysql/bin/mysql_safe --user"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mysql "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("p",[s._v("如果出现以下错误：")]),s._v(" "),n("blockquote",[n("p",[s._v("[root@10 tmp]# 2022-08-06T14:36:24.675170Z mysqld_safe error: log-error set to '/var/log/mariadb/mariadb.log', however file don't exists. Create writable for user 'mysql'.")])]),s._v(" "),n("p",[s._v("这可能是我们前面修改"),n("code",[s._v("my.cnf")])]),s._v(" "),n("p",[s._v("忘了修改如下内容的地址")]),s._v(" "),n("div",{staticClass:"language-text line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("[mysqld_safe]\nlog-error=/usr/local/mysql/tmp/mysqld.log\npid-file=/usr/local/mysql/tmp/mysqld.pid\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("然后我们再继续来执行上面那一个命令")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("/usr/local/mysql/bin/mysql_safe --user"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mysql "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("出现如下内容即可：")]),s._v(" "),n("blockquote",[n("p",[s._v("[root@10 tmp]# 2022-08-06T14:46:04.116955Z mysqld_safe Logging to '/usr/local/mysql/tmp/mysqld.log'.\n2022-08-06T14:46:04.162116Z mysqld_safe Starting mysqld daemon with databases from /usr/local/mysql/data")])]),s._v(" "),n("p",[s._v("最后我们再开一个终端来测试一下：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@10 vagrant"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# service mysqld restart")]),s._v("\nShutting down MySQL. SUCCESS"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\nStarting MySQL"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". SUCCESS"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("这就代表我们设置成功了。")]),s._v(" "),n("p",[s._v("然后我们使用正常的命令链接"),n("code",[s._v("mysql")])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("mysql -uroot -p\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("输入上面我们记住的一个临时密码即可")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@10 vagrant"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mysql -uroot -p")]),s._v("\nEnter password:\nWelcome to the MySQL monitor.  Commands end with "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" or "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("g.\nYour MySQL connection "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),s._v(" is "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v("\nServer version: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8.0")]),s._v(".19\n\nCopyright "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("c"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2000")]),s._v(", "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v(", Oracle and/or its affiliates. All rights reserved.\n\nOracle is a registered trademark of Oracle Corporation and/or its\naffiliates. Other names may be trademarks of their respective\nowners.\n\nType "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'help;'")]),s._v(" or "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\h'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" help. Type "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\c'")]),s._v(" to "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("clear")]),s._v(" the current input statement.\n\nmysql"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br")])]),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("mysql"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" ALTER user "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),s._v("@localhost identified by "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),s._v("\n    -"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nQuery OK, "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" rows affected "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.02")]),s._v(" sec"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("使用上述命令来修改密码为："),n("code",[s._v("root")])]),s._v(" "),n("p",[s._v("然后我们再退出重新使用"),n("code",[s._v("root")]),s._v("密码进行登录测试，如果成功了，就代表完美结束了。")])])}),[],!1,null,null,null);a.default=t.exports}}]);