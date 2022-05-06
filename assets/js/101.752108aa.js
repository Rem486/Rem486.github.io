(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{451:function(s,t,e){"use strict";e.r(t);var a=e(40),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"http-time-wait-close-wait异常"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http-time-wait-close-wait异常"}},[s._v("#")]),s._v(" http - TIME_WAIT，CLOSE_WAIT异常")]),s._v(" "),e("h3",{attrs:{id:"遇到的问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#遇到的问题"}},[s._v("#")]),s._v(" 遇到的问题")]),s._v(" "),e("p",[e("code",[s._v("request.js")]),s._v(" 在启用 proxy 来爬取数据的时候，进程的 "),e("code",[s._v("active handle")]),s._v(" 一直在增加。")]),s._v(" "),e("h3",{attrs:{id:"排查问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#排查问题"}},[s._v("#")]),s._v(" 排查问题")]),s._v(" "),e("ol",[e("li",[s._v("使用 "),e("code",[s._v("netstat")]),s._v(" 命令查看当前 tcp 链接情况")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("netstat")]),s._v(" -na "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/^tcp/ {++S["),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$NF")]),s._v("]} END {for(a in S) print a, S[a]}'")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#LAST_ACK 4")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#LISTEN 16")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#CLOSE_WAIT 92 // 很多!!!")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#ESTABLISHED 18")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#FIN_WAIT1 3")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#FIN_WAIT2 3")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#TIME_WAIT 98 // 很多!!!")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#SYN_SENT 14")]),s._v("\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("p",[s._v("常用的三个状态是：ESTABLISHED 表示正在通信，TIME_WAIT 表示主动关闭，CLOSE_WAIT 表示被动关闭。")]),s._v(" "),e("blockquote",[e("p",[s._v("CLOSED  表示socket连接没被使用。"),e("br"),s._v("\nLISTENING  表示正在监听进入的连接。"),e("br"),s._v("\nSYN_SENT  表示正在试着建立连接。"),e("br"),s._v("\nSYN_RECEIVED  进行连接初始同步。"),e("br"),s._v("\nESTABLISHED  表示连接已被建立。"),e("br"),s._v("\nCLOSE_WAIT  表示远程计算机关闭连接，正在等待socket连接的关闭。"),e("br"),s._v("\nFIN_WAIT_1  表示socket连接关闭，正在关闭连接。"),e("br"),s._v("\nCLOSING  先关闭本地socket连接，然后关闭远程socket连接，最后等待确认信息。"),e("br"),s._v("\nLAST_ACK  远程计算机关闭后，等待确认信号。"),e("br"),s._v("\nFIN_WAIT_2  socket连接关闭后，等待来自远程计算机的关闭信号。"),e("br"),s._v("\nTIME_WAIT  连接关闭后，等待远程计算机关闭重发。")])]),s._v(" "),e("p",[s._v("可以看到，有很多的连接是 "),e("code",[s._v("TIME_WAIT")]),s._v(" 和 "),e("code",[s._v("CLOSE_WAIT")]),s._v("，并且存在很久，导致 pm2 看到内存占用越来越大，active handle 也越来越多。")]),s._v(" "),e("h3",{attrs:{id:"解决流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解决流程"}},[s._v("#")]),s._v(" 解决流程")]),s._v(" "),e("p",[e("strong",[s._v("1. "),e("code",[s._v("TIME_WAIT")]),s._v("：")])]),s._v(" "),e("blockquote",[e("p",[s._v("这种情况比较常见，一些"),e("code",[s._v("爬虫服务器")]),s._v("或者"),e("code",[s._v("WEB服务器")]),s._v("（如果网管在安装的时候没有做内核参数优化的话）上经常会遇到这个问题。")])]),s._v(" "),e("p",[s._v("TIME_WAIT是主动关闭连接的一方保持的状态，对于爬虫服务器来说他本身就是“客户端”，在完成一个爬取任务之后，他就会发起主动关闭连接，从而进入TIME_WAIT的状态，然后在保持这个状态2MSL（max segment lifetime）时间之后，彻底关闭回收资源。为什么要这么做？明明就已经主动关闭连接了为啥还要保持资源一段时间呢？这个是TCP/IP的设计者规定的，主要出于以下两个方面的考虑：")]),s._v(" "),e("p",[s._v("a. 防止上一次连接中的包，迷路后重新出现，影响新连接（经过2MSL，上一次连接中所有的重复包都会消失）\nb. 可靠的关闭TCP连接。在主动关闭方发送的最后一个 ack(fin) ，有可能丢失，这时被动方会重新发fin, 如果这时主动方处于 CLOSED 状态 ，就会响应 rst 而不是 ack。所以主动方要处于 TIME_WAIT 状态，而不能是 CLOSED 。另外这么设计TIME_WAIT 会定时的回收资源，并不会占用很大资源的，除非短时间内接受大量请求或者受到攻击。")]),s._v(" "),e("p",[s._v("解决思路很简单，就是让服务器能够快速回收和重用那些TIME_WAIT的资源。")]),s._v(" "),e("p",[s._v("修改 "),e("code",[s._v("/etc/sysctl.conf")]),s._v(" 文件配置，没有这个文件就新建一个：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("net.ipv4.tcp_keepalive_time = 200\nnet.ipv4.tcp_keepalive_probes = 3\nnet.ipv4.tcp_keepalive_intvl = 15\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("修改之后执行 "),e("code",[s._v("/sbin/sysctl -p")]),s._v(" 使参数生效。")]),s._v(" "),e("p",[e("strong",[s._v("2. "),e("code",[s._v("CLOSE_WAIT")]),s._v("：")])]),s._v(" "),e("p",[s._v("TIME_WAIT状态可以通过优化服务器参数得到解决，因为发生TIME_WAIT的情况是服务器自己可控的，要么就是对方连接的异常，要么就是自己没有迅速回收资源，总之不是由于自己程序错误导致的。")]),s._v(" "),e("p",[s._v("但是CLOSE_WAIT就不一样了，从上面的图可以看出来，如果一直保持在CLOSE_WAIT状态，那么只有一种情况，就是在对方关闭连接之后服务器程序自己没有进一步发出ack信号。换句话说，就是在对方连接关闭之后，程序里没有检测到，或者程序压根就忘记了这个时候需要关闭连接，于是这个资源就一直被程序占着。")]),s._v(" "),e("p",[e("strong",[s._v("所以，最后检查代码，是代码层面的问题")])]),s._v(" "),e("p",[s._v("考虑到本次问题一个很明晰的特点就是，使用了代理服务器去请求 "),e("code",[s._v("https")]),s._v(" 的请求。所以就重点关注了 "),e("code",[s._v("request")]),s._v(" 库 socket,https,proxy 相关的问题，最后找到了一个 "),e("a",{attrs:{href:"https://github.com/request/request/issues/3100",target:"_blank",rel:"noopener noreferrer"}},[s._v("issue"),e("OutboundLink")],1),s._v("。其实一开始就看到了issue，但是不知道为什么没有注意？？？蒸腾了1，2天之后再次看到它 - - 😢")]),s._v(" "),e("p",[s._v("p.s "),e("a",{attrs:{href:"https://github.com/request/request/issues/2047#issuecomment-532753784",target:"_blank",rel:"noopener noreferrer"}},[s._v("Error: socket hang up"),e("OutboundLink")],1),s._v(" 看到一个配置，请求的 header 里面，默认是 "),e("code",[s._v("keepAlive:true")]),s._v(",这个时候，可能保持很多socket请求。所有可以配置")]),s._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" HttpsAgent "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'agentkeepalive'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("HttpsAgent"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" agent "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HttpsAgent")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    freeSocketTimeout"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4000")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("h3",{attrs:{id:"解决方案"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[s._v("#")]),s._v(" 解决方案")]),s._v(" "),e("p",[s._v("最终解决方案，")]),s._v(" "),e("ol",[e("li",[s._v("针对 "),e("code",[s._v("TIME_WAIT")]),s._v(" 修改服务器配置")]),s._v(" "),e("li",[s._v("针对 "),e("code",[s._v("CLOSE_WAIT")]),s._v(" 请求的时候设置 headers 的 "),e("code",[s._v("Connection: 'close''")])])]),s._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" rp "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'request-promise'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("rp")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  url"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'https://www.example.com'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  proxy"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://1.1.1.1:8888'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  headers"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    Connection"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'close'")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])]),e("h4",{attrs:{id:"补充"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#补充"}},[s._v("#")]),s._v(" 补充")]),s._v(" "),e("p",[s._v("一个小插曲，针对 "),e("code",[s._v("TIME_WAIT")]),s._v(" 其实都没有去进行服务器配置的修改，但是早上突然发现还有大量 "),e("code",[s._v("LAST_ACK")]),s._v(" 的状态。度娘了一下，发现好像被针对了 - -。遂进行了一番学习和配置。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# 当keepalive打开的情况下，TCP发送keepalive消息的频率。(默认值是7200(2小时)，服务器建议设为1800)\nnet.ipv4.tcp_keepalive_time = 200\n# 在近端丢弃TCP连接之前﹐要进行多少次重试。默认值是7个﹐在大负载服务器上建议调整为3)\nnet.ipv4.tcp_keepalive_probes = 3\n# 探测消息发送的频率，乘以tcp_keepalive_probes就得到对于从开始探测以来没有响应的连接杀除的时间。(默认值为75秒，推荐设为15秒)\nnet.ipv4.tcp_keepalive_intvl = 15\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("p",[s._v("最后还配置了 ip 限制，针对发送请求的几个 ip 段。")]),s._v(" "),e("h3",{attrs:{id:"参考"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://blog.csdn.net/gisredevelopment/article/details/54930111",target:"_blank",rel:"noopener noreferrer"}},[s._v("20170208大量Http请求close_wait的问题"),e("OutboundLink")],1)]),s._v(" "),e("li",[e("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Connection",target:"_blank",rel:"noopener noreferrer"}},[s._v("Connection"),e("OutboundLink")],1)]),s._v(" "),e("li",[e("a",{attrs:{href:"https://blog.csdn.net/shootyou/article/details/6622226",target:"_blank",rel:"noopener noreferrer"}},[s._v("再谈应用环境下的TIME_WAIT和CLOSE_WAIT"),e("OutboundLink")],1)]),s._v(" "),e("li",[e("a",{attrs:{href:"https://juejin.im/post/5c0cf1ed6fb9a04a08217fcc",target:"_blank",rel:"noopener noreferrer"}},[s._v("线上大量CLOSE_WAIT的原因深入分析"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=n.exports}}]);