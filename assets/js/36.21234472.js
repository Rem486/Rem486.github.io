(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{282:function(t,e,s){"use strict";s.r(e);var a=s(30),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"websocket-入门"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#websocket-入门"}},[t._v("#")]),t._v(" webSocket - 入门")]),t._v(" "),s("h3",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),s("p",[t._v("我们都知道，现在web应用的信息交互过程，就是客户端通过浏览器发出一个请求，然后服务器端在接受和审核请求后,进行处理并将结果返回给客户端，最后由客户端的浏览器将信息呈现出来。")]),t._v(" "),s("p",[t._v("随着web页面的体验的升级，出现了越来越多的对实时行要求高，海量数据并发的应用。在这些应用里面通过客户端不停发送请求的通信机制就显得捉襟见肘了。比如，网页游戏，运行监控，证券交易网站，实时聊天对话。")]),t._v(" "),s("p",[t._v("为了满足这些场景，出现了各种方案，主要有这几个：")]),t._v(" "),s("ol",[s("li",[t._v("短轮询（Polling）")]),t._v(" "),s("li",[t._v("长轮询（Long-Polling）")]),t._v(" "),s("li",[t._v("流技术（iframe）")])]),t._v(" "),s("h2",{attrs:{id:"短轮询（polling）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#短轮询（polling）"}},[t._v("#")]),t._v(" 短轮询（Polling）")]),t._v(" "),s("p",[t._v("HTTP 协议有一个缺陷：通信只能由客户端发起。\n举例来说，我们想了解今天的天气，只能客户端向服务器发出请求，服务器返回查询结果。HTTP 协议做不到服务器主动向客户端推送信息。这种单向请求的特点，注定了如果服务器有连续的状态变化，客户端要获知就非常麻烦。")]),t._v(" "),s("p",[t._v("针对这个特点，短轮询就是：客户端和服务器之间一直进行连接，每隔一段时间就询问一次。")]),t._v(" "),s("p",[t._v("优点：\n服务端无需做调整，在收到请求之后，不论是否有数据更新，都直接进行响应。在服务端响应完成，就会关闭这个 TCP 连接。\n客户进行简单调整 setInterval 循环不停的进行请求即可。")]),t._v(" "),s("p",[t._v("缺点：\n因为是间隔请求，肯定有一小段时间内数据是不同步的。\n会有大量无效的请求")]),t._v(" "),s("h2",{attrs:{id:"长轮询（long-polling）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#长轮询（long-polling）"}},[t._v("#")]),t._v(" 长轮询（Long-Polling）")]),t._v(" "),s("p",[t._v("长轮询是对普通轮序的改进和提高。短轮询，每隔一段时间就请求一次，而服务端的数据可能并没有更新，造成的很多大量浪费。")]),t._v(" "),s("p",[t._v("为了减少无效的网络传输，当服务器端没有数据更新时，链接会保持一段时间，直到数据或状态发生改变或连接时间过期，通过这种机制我们就可以减少很多无效的客户端和服务器间的交互。当然，如果服务器端的数据变更非常频繁的话，这种机制并没有有效的提高性能，和普通轮询没有太大的区别，且长轮询也会耗费更多的资源，比如CPU,内存,带宽等。")]),t._v(" "),s("p",[t._v("优点：\n对短轮询做了优化，有较好的时效性。")]),t._v(" "),s("p",[t._v("缺点：\n保持连接会消耗资源;\n服务器没有返回有效数据，程序超时。")]),t._v(" "),s("h2",{attrs:{id:"流技术（iframe）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#流技术（iframe）"}},[t._v("#")]),t._v(" 流技术（iframe）")]),t._v(" "),s("p",[t._v("iframe流方式是在页面中插入一个隐藏的iframe，利用其src属性在服务器和客户端之间创建一条长连接，服务器向iframe传输数据（通常是HTML，内有负责插入信息的javascript），来实时更新页面。")]),t._v(" "),s("p",[t._v("通过这种机制就可以将服务器端的信息不断传向客户端，从而保证信息的时效性。")]),t._v(" "),s("p",[t._v("优点：\n消息能够实时到达。")]),t._v(" "),s("p",[t._v("缺点：\n服务器，源源不断向客户端发送数据，维护一个长连接会增加开销;\nIE、chrome、Firefox会显示加载没有完成，图标会不停旋转。")]),t._v(" "),s("h2",{attrs:{id:"什么是websocket"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是websocket"}},[t._v("#")]),t._v(" 什么是WebSocket")]),t._v(" "),s("p",[t._v("WebSocket 协议在2008年诞生，2011年成为国际标准。所有浏览器都已经支持了。")]),t._v(" "),s("p",[t._v("WebSocket是一种全新的协议，它将TCP的Socket（套接字）应用在了webpage上，从而使通信双方建立起一个保持在活动状态连接通道。\n它的最大特点就是，服务器可以主动向客户端推送信息，客户端也可以主动向服务器发送信息，是真正的双向平等对话，属于服务器推送技术的一种。\n由于是建立在HTTP基础上的协议，因此连接的发起方仍是客户端，而一旦确立WebSocket通信连接，不论服务器还是客户端，任意一方都可直接向对方发送报文。\n还具有以下特点：")]),t._v(" "),s("p",[t._v("（1）建立在 TCP 协议之上，服务器端的实现比较容易。\n（2）与 HTTP 协议有着良好的兼容性。默认端口也是80和443，并且握手阶段采用 HTTP 协议，因此握手时不容易屏蔽，能通过各种 HTTP 代理服务器。\n（3）数据格式比较轻量，性能开销小，通信高效。\n（4）可以发送文本，也可以发送二进制数据。\n（5）没有同源限制，客户端可以与任意服务器通信。\n（6）协议标识符是ws（如果加密，则为wss），服务器网址就是 URL。")]),t._v(" "),s("h2",{attrs:{id:"心跳保活"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#心跳保活"}},[t._v("#")]),t._v(" 心跳保活")]),t._v(" "),s("p",[t._v("在实际使用 WebSocket 中，长时间不通消息可能会出现一些连接不稳定的情况，这些未知情况导致的连接中断会影响客户端与服务端之前的通信。")]),t._v(" "),s("p",[t._v("为了防止这种的情况的出现，有一种心跳保活的方法：客户端就像心跳一样每隔固定的时间发送一次 ping ，来告诉服务器，我还活着，而服务器也会返回 pong ，来告诉客户端，服务器还活着。ping/pong 其实是一条与业务无关的假消息，也称为心跳包。")]),t._v(" "),s("p",[t._v("可以在连接成功之后，每隔一个固定时间发送心跳包，比如 60s:")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setInterval")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n  ws"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'这是一条心跳包消息'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("60000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("长连接：一个连接上可以连续发送多个数据包，在连接期间，如果没有数据包发送，需要双方发链路检查包。")]),t._v(" "),s("p",[t._v("TCP/IP：TCP/IP属于传输层，主要解决数据在网络中的传输问题，只管传输数据。但是那样对传输的数据没有一个规范的封装、解析等处理，使得传输的数据就很难识别，所以才有了应用层协议对数据的封装、解析等，如HTTP协议。")]),t._v(" "),s("p",[t._v("HTTP：HTTP是应用层协议，封装解析传输的数据。\n从HTTP1.1开始其实就默认开启了长连接，也就是请求header中看到的Connection:Keep-alive。但是这个长连接只是说保持了（服务器可以告诉客户端保持时间Keep-Alive:timeout=200;max=20;）这个TCP通道，直接Request - Response，而不需要再创建一个连接通道，做到了一个性能优化。但是HTTP通讯本身还是Request - Response。")]),t._v(" "),s("p",[t._v("socket：与HTTP不一样，socket不是协议，它是在程序层面上对传输层协议（可以主要理解为TCP/IP）的接口封装。\n我们知道传输层的协议，是解决数据在网络中传输的，那么socket就是传输通道两端的接口。所以对于前端而言，socket也可以简单的理解为对TCP/IP的抽象协议。")]),t._v(" "),s("p",[t._v("WebSocket：\nWebSocket是包装成了一个应用层协议作为socket,从而能够让客户端和远程服务端通过web建立全双工通信。websocket提供ws和wss两种URL方案。协议英文文档和中文翻译")]),t._v(" "),s("p",[t._v("事件\n//创建WebSocket实例，可以使用ws和wss。第二个参数可以选填自定义协议，如果多协议，可以以数组方式\nvar socket = new WebSocket('ws://demos.kaazing.com/echo');")]),t._v(" "),s("p",[t._v("轮询：客户端定时向服务器发送Ajax请求，服务器接到请求后马上返回响应信息并关闭连接。优点：后端程序编写比较容易。缺点：请求中有大半是无用，浪费带宽和服务器资源。实例：适于小型应用。")]),t._v(" "),s("p",[t._v("长轮询：客户端向服务器发送Ajax请求，服务器接到请求后hold住连接，直到有新消息才返回响应信息并关闭连接，客户端处理完响应信息后再向服务器发送新的请求。优点：在无消息的情况下不会频繁的请求。缺点：服务器hold连接会消耗资源。实例：WebQQ、Hi网页版、Facebook IM。另外，对于长连接和socket连接也有区分：")]),t._v(" "),s("p",[t._v("长连接：在页面里嵌入一个隐蔵iframe，将这个隐蔵iframe的src属性设为对一个长连接的请求，服务器端就能源源不断地往客户端输入数据。优点：消息即时到达，不发无用请求。缺点：服务器维护一个长连接会增加开销。实例：Gmail聊天Flash")]),t._v(" "),s("p",[t._v("Socket：在页面中内嵌入一个使用了Socket类的 Flash 程序JavaScript通过调用此Flash程序提供的Socket接口与服务器端的Socket接口进行通信，JavaScript在收到服务器端传送的信息后控制页面的显示。优点：实现真正的即时通信，而不是伪即时。缺点：客户端必须安装Flash插件；非HTTP协议，无法自动穿越防火墙。实例：网络互动游戏。")]),t._v(" "),s("h3",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://juejin.im/post/5a1bdf676fb9a045055dd99d",target:"_blank",rel:"noopener noreferrer"}},[t._v("WebSocket探秘"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=n.exports}}]);