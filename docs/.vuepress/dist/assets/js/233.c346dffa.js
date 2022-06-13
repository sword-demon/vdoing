(window.webpackJsonp=window.webpackJsonp||[]).push([[233],{674:function(t,s,v){"use strict";v.r(s);var a=v(16),_=Object(a.a)({},(function(){var t=this,s=t.$createElement,v=t._self._c||s;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"多线程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#多线程"}},[t._v("#")]),t._v(" 多线程")]),t._v(" "),v("p",[t._v("生活中的案例：")]),t._v(" "),v("blockquote",[v("p",[t._v("原来公路是很窄的，慢慢因为车多了，道路堵塞，效率极低。")]),t._v(" "),v("p",[t._v("为了提高使用的效率，能够充分利用道路，于是加了多个车道。")])]),t._v(" "),v("h3",{attrs:{id:"普通方法调用和多线程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#普通方法调用和多线程"}},[t._v("#")]),t._v(" 普通方法调用和多线程")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://gitee.com/wxvirus/img/raw/master/img/20211106193339.png",alt:"普通方法执行"}})]),t._v(" "),v("p",[v("strong",[t._v("多线程的方式")])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://gitee.com/wxvirus/img/raw/master/img/20211106193626.png",alt:"多线程执行方式"}})]),t._v(" "),v("h2",{attrs:{id:"程序-进程-线程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#程序-进程-线程"}},[t._v("#")]),t._v(" 程序.进程.线程")]),t._v(" "),v("blockquote",[v("p",[t._v("在操作系统中运行的程序就是进程，比如你的 QQ、播放器、游戏、IDE 等等。。。")])]),t._v(" "),v("p",[t._v("比如一个播放器是一个进程，它里面有多个线程，一个负责播放声音，一个负责展示图像，一个负责展示字幕。")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://gitee.com/wxvirus/img/raw/master/img/20211106194038.png",alt:"进程展示案例"}})]),t._v(" "),v("hr"),t._v(" "),v("p",[v("strong",[t._v("Process 和 Thread")])]),t._v(" "),v("ul",[v("li",[t._v("说到进程就得说下程序，程序是指令和数据的有序集合，其本身没有任何运行的含义，是一个静态的概念。")]),t._v(" "),v("li",[t._v("而进程则是执行程序的一次执行过程，它是一个动态的概念。是系统资源分配的单位。")]),t._v(" "),v("li",[t._v("通常在一个进程中可以包含若干个线程，当然一个进程至少有一个线程，不然没有存在的意义。线程是 CPU 调度和执行的单位。")])]),t._v(" "),v("div",{staticClass:"custom-block warning"},[v("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),v("p",[t._v("注意：很多多线程都是模拟出来的，真正的多线程是指有多个 CPU，即多核，如服务器。如果是模拟出来的多线程，即在一个 CPU 的情况下，在同一时间点，CPU 只能执行一个代码，因为切换的很快，所以就有同时执行的错觉。")])]),t._v(" "),v("h2",{attrs:{id:"核心概念"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#核心概念"}},[t._v("#")]),t._v(" 核心概念")]),t._v(" "),v("ul",[v("li",[t._v("线程就是独立的执行路径")]),t._v(" "),v("li",[t._v("在程序运行前，即使没有自己创建线程，后台也会有多个线程，如：主线程、gc 线程")]),t._v(" "),v("li",[v("code",[t._v("main()")]),t._v("称之为主线程，为系统的入口，用于执行整个程序")]),t._v(" "),v("li",[t._v("在一个进程中，如果开辟了多个线程，线程运行由调度器安排调度，调度器是与操作系统紧密相关的，先后顺序是不能人为的干预的")]),t._v(" "),v("li",[t._v("对同一份资源操作时，会存在资源抢夺的问题，需要加入并发控制")]),t._v(" "),v("li",[t._v("线程会带来额外的开销，入 CPU 调度时间，并发控制开销")]),t._v(" "),v("li",[t._v("每个线程在自己的工作内存交互，内存控制不当会造成数据不一致")])])])}),[],!1,null,null,null);s.default=_.exports}}]);