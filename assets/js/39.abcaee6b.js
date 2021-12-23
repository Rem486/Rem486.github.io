(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{385:function(s,a,t){"use strict";t.r(a);var n=t(40),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"linux-常用命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux-常用命令"}},[s._v("#")]),s._v(" linux - 常用命令")]),s._v(" "),t("h2",{attrs:{id:"_1-查看端口占用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-查看端口占用"}},[s._v("#")]),s._v(" 1.查看端口占用")]),s._v(" "),t("ol",[t("li",[s._v("使用 "),t("code",[s._v("lsof")])])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("lsof")]),s._v(" -i:端口号\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("lsof")]),s._v(" -i:9229 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看9229端口占用")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# COMMAND   PID USER   FD   TYPE  DEVICE SIZE/OFF NODE NAME")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# node    21848 root   22u  IPv4 9910325      0t0  TCP localhost:9229 (LISTEN)")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("lsof")]),s._v(" foo.txt "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示开启了foo.txt的进程")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("lsof")]),s._v(" -c abc "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示abc进程现在打开的文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("lsof")]),s._v(" -c -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1234")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 列出进程号为1234的进程所打开的文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("lsof")]),s._v(" -g gid "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示归属gid的进程情况")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("lsof")]),s._v(" +d /usr/local/ "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示目录下被进程开启的文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("lsof")]),s._v(" +D /usr/local/ "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 同上，但是会搜索目录下的目录，时间较长")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("lsof")]),s._v(" -d "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示使用fd为4的进程")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("lsof")]),s._v(" -i -U "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示所有打开的端口和UNIX domain文件")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v("使用 "),t("code",[s._v("netstat")])])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("netstat")]),s._v(" -anp"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# tcp        0      0 0.0.0.0:8000            0.0.0.0:*               LISTEN      1836/nginx: master")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# tcp        0      0 0.0.0.0:8001            0.0.0.0:*               LISTEN      1836/nginx: master")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# tcp        0      0 0.0.0.0:8002            0.0.0.0:*               LISTEN      1836/nginx: master")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# tcp        0      0 0.0.0.0:8003            0.0.0.0:*               LISTEN      1836/nginx: master")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# tcp        0      0 0.0.0.0:8004            0.0.0.0:*               LISTEN      1836/nginx: master")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# tcp        0      0 0.0.0.0:80              0.0.0.0:*               LISTEN      1836/nginx: master")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或者")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("netstat")]),s._v(" -tunlp "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("netstat")]),s._v(" -ntlp   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看当前所有tcp端口")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[s._v("参数介绍：")]),s._v(" "),t("ul",[t("li",[s._v("-t (tcp) 仅显示tcp相关选项")]),s._v(" "),t("li",[s._v("-u (udp)仅显示udp相关选项")]),s._v(" "),t("li",[s._v("-n 拒绝显示别名，能显示数字的全部转化为数字")]),s._v(" "),t("li",[s._v("-l 仅列出在Listen(监听)的服务状态")]),s._v(" "),t("li",[s._v("-p 显示建立相关链接的程序名")])]),s._v(" "),t("h2",{attrs:{id:"_2-查看和终止进程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-查看和终止进程"}},[s._v("#")]),s._v(" 2.查看和终止进程")]),s._v(" "),t("ol",[t("li",[t("code",[s._v("ps")]),s._v(" 查看进程，找到进程 pid")])]),s._v(" "),t("div",{staticClass:"language-shell script line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -ef "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" node\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看所有进程里 CMD 是 node 的进程信息")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -aux "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" node\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -aux 显示所有包含其他使用者的进程")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ps 命令用于查看当前正在运行的进程")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# grep 搜索")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("ol",{attrs:{start:"2"}},[t("li",[t("code",[s._v("kill")]),s._v(" 终止进程，通过 pid")])]),s._v(" "),t("div",{staticClass:"language-shell script line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" -9 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("pid"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -9 表示强制停止")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"_3-查看日志"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-查看日志"}},[s._v("#")]),s._v(" 3.查看日志")]),s._v(" "),t("div",{staticClass:"language-shell script line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查询最后100行日志")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tail")]),s._v(" -n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v(" info.log\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查询从100行之后的所有日志")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tail")]),s._v(" -n +100 info.log\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查询日志文件中的头10行日志;")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("head")]),s._v(" -n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" info.log\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查询日志文件除了最后10行的其他所有日志;")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("head")]),s._v(" -n -10 info.log\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取关键字的行号")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -n 显示行号")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" -n test.log "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"关键字"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查询超多日志")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1. 使用 more 和 less 命令，分页打印，然后空格翻页")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" -n info.log "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_id"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("more")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2. 使用 > xxx.txt 把输出的内容导入文件，然后拉下文件分析")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" -n info.log "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_id"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("xxx.txt\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br")])]),t("h2",{attrs:{id:"_4-查看内存占用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-查看内存占用"}},[s._v("#")]),s._v(" 4.查看内存占用")]),s._v(" "),t("div",{staticClass:"language-shell script line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看占用内存最大的10个进程")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -aux "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sort")]),s._v(" -k4nr "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("head")]),s._v(" -n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看内存占用最大的进程")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" aux"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -v "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"USER"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sort")]),s._v(" -n -r -k "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'NR==1{ print "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$0")]),s._v("}'")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 找到目标进程后，可以通过下面方式 kill")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" -9 "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" aux "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" 进程名 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -v "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{print "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$2")]),s._v("}'")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("h2",{attrs:{id:"_5-查看文件大小"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-查看文件大小"}},[s._v("#")]),s._v(" 5.查看文件大小")]),s._v(" "),t("ol",[t("li",[s._v("ls 方案")])]),s._v(" "),t("div",{staticClass:"language-shell script line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 列出当前目录下所有文件的大小，以及所有文件大小的统计总和。文件夹会显示 4k")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("  -lht\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# total 64K")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# drwxr-xr-x  3 root root 4.0K Jun 16 10:20 _back202006161020")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# drwxr-xr-x 10 root root 4.0K Jun 16 09:07 task")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# drwxr-xr-x  7 root root 4.0K Jun 15 22:58 blog")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# drwxr-xr-x  5 root root 4.0K Jun  4 10:50 deploy")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v("du 方案")])]),s._v(" "),t("div",{staticClass:"language-shell script line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 列出当前文件以及文件夹的大小")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("du")]),s._v(" -sh *\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 24M     blog")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 930M    back")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1.7M    deploy")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 334M    task")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("列出某个目录下文件大小的总和: "),t("code",[s._v("du -sh /data")])]),s._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[s._v("查看单个文件/目录大小")])]),s._v(" "),t("ul",[t("li",[t("code",[s._v("du -sh foo.sh")])]),s._v(" "),t("li",[t("code",[s._v("ls -lh foo.sh")])])]),s._v(" "),t("h2",{attrs:{id:"_6-拆分-log-文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-拆分-log-文件"}},[s._v("#")]),s._v(" 6.拆分 log 文件")]),s._v(" "),t("ol",[t("li",[s._v("指定拆分后文件行数")])]),s._v(" "),t("div",{staticClass:"language-shell script line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("split")]),s._v(" -l "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("300")]),s._v(" large_file.txt new_file_prefix\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v("指定拆分后文件大小")])]),s._v(" "),t("div",{staticClass:"language-shell script line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("split")]),s._v(" -b 10m server.log new_file_prefix\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"3"}},[t("li",[s._v("合并文件")])]),s._v(" "),t("div",{staticClass:"language-shell script line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" small_files* "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" large_file\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"_7-查看-linux-系统版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-查看-linux-系统版本"}},[s._v("#")]),s._v(" 7.查看 Linux 系统版本")]),s._v(" "),t("ol",[t("li",[s._v("列出所有版本信息")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("lsb_release -a\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# LSB Version:    :core-4.1-amd64:core-4.1-noarch")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Distributor ID: CentOS")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Description:    CentOS Linux release 7.4.1708 (Core) ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Release:        7.4.1708")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Codename:       Core")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("ol",{attrs:{start:"2"}},[t("li",[t("code",[s._v("cat /etc/redhat-release")])])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/redhat-release\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# CentOS Linux release 7.4.1708 (Core) ")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("ol",{attrs:{start:"3"}},[t("li",[s._v("据说适用于所有的Linux发行版，但是上面那个版本的服务器输出空白")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/issue\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# CentOS release 6.5 (Final)")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Kernel \\r on an \\m")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h3",{attrs:{id:"_8-查看-linux-内核版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-查看-linux-内核版本"}},[s._v("#")]),s._v(" 8.查看 Linux 内核版本")]),s._v(" "),t("ol",[t("li",[t("code",[s._v("cat /proc/version")])])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /proc/version\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Linux version 3.10.0-693.17.1.el7.x86_64 (xx) (gcc version 4.8.5 20150623 (Red Hat 4.8.5-16) (GCC) ) #1 SMP Thu Jan 25 20:13:58 UTC 2018")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("ol",{attrs:{start:"2"}},[t("li",[t("code",[s._v("uname -a")])])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("uname")]),s._v(" -a\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Linux xx 3.10.0-693.17.1.el7.x86_64 #1 SMP Thu Jan 25 20:13:58 UTC 2018 x86_64 x86_64 x86_64 GNU/Linux")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("ol",{attrs:{start:"3"}},[t("li",[t("code",[s._v("cat /proc/version")])])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /proc/version\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Linux version 3.10.0-693.17.1.el7.x86_64 (xxx) (gcc version 4.8.5 20150623 (Red Hat 4.8.5-16) (GCC) ) #1 SMP Thu Jan 25 20:13:58 UTC 2018")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("blockquote",[t("p",[s._v("/proc 文件系统。它不是普通的文件系统，而是系统内核的映像，也就是说，该目录中的文件是存放在系统内存之中的，它以文件系统的方式为访问系统内核数据的操作提供接口。而我们使用命令 "),t("code",[s._v("uname -a")]),s._v(" 的信息就是从该文件获取的，当然用 "),t("code",[s._v("cat /proc/version")]),s._v(' 方法直接查看它的内容也可以达到同等效果。另外，加上参数"-a"是获得详细信息，如果不加参数为查看系统名称。')])]),s._v(" "),t("h4",{attrs:{id:"参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.cnblogs.com/peida/archive/2012/12/19/2824418.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("每天一个linux命令（41）：ps命令"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://blog.csdn.net/sbtmbj2010/article/details/45097747",target:"_blank",rel:"noopener noreferrer"}},[s._v("解决linux服务器内存占用过大问题"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://www.cnblogs.com/ming-blogs/p/11101423.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Linux 查询端口被占用命令"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=e.exports}}]);