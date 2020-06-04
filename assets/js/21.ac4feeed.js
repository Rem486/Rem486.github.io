(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{264:function(a,s,e){"use strict";e.r(s);var n=e(30),t=Object(n.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"mongodb-备忘录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mongodb-备忘录"}},[a._v("#")]),a._v(" mongodb - 备忘录")]),a._v(" "),e("h3",{attrs:{id:"好记性不如烂笔头"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#好记性不如烂笔头"}},[a._v("#")]),a._v(" 好记性不如烂笔头")]),a._v(" "),e("p",[a._v("因为用 mongodb 只是兴趣使然，所以偶尔要用的时候，经常记不住一些常用知识点。比如想不起日志在哪里 - -")]),a._v(" "),e("h2",{attrs:{id:"_1-日志系统"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-日志系统"}},[a._v("#")]),a._v(" 1.日志系统")]),a._v(" "),e("p",[a._v("mongodb 中主要有四种日志：系统日志，Journal日志，oplog日志，慢查询日志。")]),a._v(" "),e("h3",{attrs:{id:"系统日志"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#系统日志"}},[a._v("#")]),a._v(" 系统日志")]),a._v(" "),e("p",[a._v("系统日志，它记录 mongodb 启动和停止的操作，连接和删库(狗头)，以及服务器在运行过程中发生的任何异常信息；配置系统日志也非常简单，在运行 mongod 的时候增加一个参数 logpath，就可以设置；")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("mongod -logpath"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'/var/log/mongodb/mongod.log'")]),a._v(" -logappend.\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("也可以在 mongodb 的 config 文件中配置；linux 下 conf 位置 "),e("code",[a._v("/etc/mongod.conf")]),a._v("。")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("# where to write logging data.\nsystemLog:\n  destination: file\n  logAppend: true\n  path: /var/log/mongodb/mongod.log\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br")])]),e("h3",{attrs:{id:"journal日志"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#journal日志"}},[a._v("#")]),a._v(" Journal日志")]),a._v(" "),e("p",[a._v("开启 Journal 日志可以为 mongodb 增加额外的可靠性保障。开启后，mongodb 先在内存保存写操作，并记录 journal 日志到磁盘，然后定期集中提交（默认是100ms），最后在正式数据库执行更改。为了保证 journal 日志文件的一致性，写日志是一个原子操作。")]),a._v(" "),e("p",[a._v("如果开启了 journal 日志功能，mongodb 会在数据目录下创建一个 journal 文件夹，用来存放日志。同时这个目录也会有一个 last-sequence-number 文件。如果 mongodb 安全关闭的话，会自动删除此目录下的所有文件，如果是崩溃导致的关闭，不会删除日志文件。在MongoDB进程重启的过程中，journal日志文件用于自动修复数据到一个一致性的状态。")]),a._v(" "),e("p",[a._v("可以通过 "),e("code",[a._v("storage.smallFiles")]),a._v(" 参数来配置 journal 日志文件的大小。")]),a._v(" "),e("p",[a._v("开启方式：")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("mongod -journal\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("或者在 mongodb 的 config 文件中配置：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("# Where and how to store data.\nstorage:\n  journal:\n    enabled: true\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br")])]),e("h3",{attrs:{id:"oplog主从日志"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#oplog主从日志"}},[a._v("#")]),a._v(" Oplog主从日志")]),a._v(" "),e("p",[a._v("mongodb 的高可用复制策略有一个叫做 Replica Set. Replica Set 复制过程中有一个服务器充当主服务器，而一个或多个充当从服务器，主服务将更新写入一个本地的 collection 中，这个 collection 记录着发生在主服务器的更新操作。并将这些操作分发到从服务器上。这个日志是 Capped Collection 。利用如下命令可以配置："),e("code",[a._v("mongod -oplogSize=1024")]),a._v(" 单位是M")]),a._v(" "),e("h3",{attrs:{id:"慢查询日志"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#慢查询日志"}},[a._v("#")]),a._v(" 慢查询日志")]),a._v(" "),e("p",[a._v("慢查询记录了执行时间超过了所设定时间阀值的操作语句。慢查询日志对于发现性能有问题的语句很有帮助，建议开启此功能并经常分析该日志的内容。要配置这个功能只需要在 mongod 启动时候设置 profile 参数即可。例如想要将超过5s的操作都记录，可以使用如下语句：")]),a._v(" "),e("p",[e("code",[a._v("mongod --profile=1 --slowms=5")])]),a._v(" "),e("p",[a._v("profile 有三个值：0，1，2。它们表示的意义如下：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("0 – 不开启\n1 – 记录慢命令 (默认为>100ms)\n2 – 记录所有命令\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br")])]),e("p",[a._v("也可以在客户端调用 "),e("code",[a._v("db.setProfilingLevel(级别,时间)")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("db.setProfilingLevel( level , slowms );\ndb.setProfilingLevel( 1 , 10 );\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("h3",{attrs:{id:"参考"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[a._v("#")]),a._v(" 参考")]),a._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://blog.csdn.net/sxb0841901116/article/details/41654945",target:"_blank",rel:"noopener noreferrer"}},[a._v("【Monogdb】MongoDB的日志系统"),e("OutboundLink")],1)]),a._v(" "),e("li",[e("a",{attrs:{href:"https://www.ctolib.com/docs/sfile/Getting-Started-with-MongoDB/book/journal.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("Journaling日志机制"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=t.exports}}]);