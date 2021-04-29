(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{365:function(t,s,a){"use strict";a.r(s);var e=a(42),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_2021-03-日常记录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2021-03-日常记录"}},[t._v("#")]),t._v(" 2021-03 日常记录")]),t._v(" "),a("p",[a("strong",[t._v("2021-03-12 周五")])]),t._v(" "),a("h2",{attrs:{id:"git-cant-push-or-pull-encountered-end-of-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-cant-push-or-pull-encountered-end-of-file"}},[t._v("#")]),t._v(" Git Cant push or pull encountered end of file")]),t._v(" "),a("p",[t._v("在云服务器上，突然无法拉取 github 仓库上的代码。报错 "),a("code",[t._v("fatal: unable to access xxx Encountered end of file")])]),t._v(" "),a("p",[t._v("执行 "),a("code",[t._v("GIT_CURL_VERBOSE=1 git push")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/img/2021-03-12_1.png",alt:"GIT_CURL_VERBOSE=1 git push"}})]),t._v(" "),a("p",[t._v("发现根本连不上 github 了，应该是上次把与服务器的 dns 改成默认值导致的。")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/web/env/linux-dns.html"}},[t._v("linux 修改方式")])],1),t._v(" "),a("hr"),t._v(" "),a("p",[a("strong",[t._v("2021-03-16 周二")])]),t._v(" "),a("h2",{attrs:{id:"commonjs-和-es-module-的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commonjs-和-es-module-的区别"}},[t._v("#")]),t._v(" CommonJS 和 ES Module 的区别")]),t._v(" "),a("p",[t._v("CommonJS 和 ES Module 都是解决下列问题的：")]),t._v(" "),a("ul",[a("li",[t._v("解决变量污染问题，每个文件都是独立的作用域，所以不存在变量污染")]),t._v(" "),a("li",[t._v("解决代码维护问题，一个文件里代码非常清晰")]),t._v(" "),a("li",[t._v("解决文件依赖问题，一个文件里可以清楚的看到依赖了那些其它文件")])]),t._v(" "),a("p",[t._v("区别在于：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("CommonJS：")]),t._v(" "),a("ul",[a("li",[t._v("CommonJS 可以动态加载语句，代码发生在运行时")]),t._v(" "),a("li",[t._v("CommonJS 混合导出，可以导出单个值，也可以导出引用对象，导出引用对象时之前的导出将被覆盖了")]),t._v(" "),a("li",[t._v("CommonJS 导出值是拷贝，可以修改导出的值，在代码出错时，不好排查，可能引起变量污染")])])]),t._v(" "),a("li",[a("p",[t._v("ES Module：")]),t._v(" "),a("ul",[a("li",[t._v("ES Module 是静态的，不可以动态加载语句，只能声明在该文件的最顶部，代码发生在编译时")]),t._v(" "),a("li",[t._v("ES Module 混合导出，单个导出，默认导出，完全互不影响")]),t._v(" "),a("li",[t._v("ES Module 导出是引用值之前都存在映射关系，并且值都是可读的，不能修改")])])])]),t._v(" "),a("hr"),t._v(" "),a("p",[a("strong",[t._v("2021-03-17 周三")])]),t._v(" "),a("h2",{attrs:{id:"fatal-unable-to-access-xx-tcp-connection-reset-by-peer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fatal-unable-to-access-xx-tcp-connection-reset-by-peer"}},[t._v("#")]),t._v(" fatal: unable to access xx: TCP connection reset by peer")]),t._v(" "),a("p",[t._v("云服务器上，又无法拉取 github 仓库上的代码了。报错 "),a("code",[t._v("fatal: unable to access 'https://github.com/xxx/': TCP connection reset by peer")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"说法一-有代理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#说法一-有代理"}},[t._v("#")]),t._v(" 说法一：有代理")]),t._v(" "),a("p",[a("code",[t._v("env | grep -i proxy")]),t._v(" 查看代理，如果有，使用命令移除 "),a("code",[t._v("unset https_proxy")]),t._v("。")]),t._v(" "),a("p",[a("code",[t._v("git config --global http.proxy")]),t._v(" 查看代理，如果有，使用命令移除 "),a("code",[t._v("git config --global --unset http.proxy")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"说法二-把-url-模式从-https-改为-ssh-可行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#说法二-把-url-模式从-https-改为-ssh-可行"}},[t._v("#")]),t._v(" 说法二：把 URL 模式从 HTTPS 改为 SSH （可行）")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("1.github 先配置 SSH Key")]),t._v(" "),a("ul",[a("li",[t._v("设置 git 的 user name 和 email")]),t._v(" "),a("li",[t._v("生成 SSH Key，有的话执行 "),a("code",[t._v("cat id_rsa.pub")]),t._v(" 来拷贝")]),t._v(" "),a("li",[t._v("github UserSetting 里面添加 SSH Key")])])]),t._v(" "),a("li",[a("ol",{attrs:{start:"2"}},[a("li",[t._v("修改仓库 URL\n"),a("a",{attrs:{href:"https://docs.github.com/en/github/using-git/changing-a-remotes-url",target:"_blank",rel:"noopener noreferrer"}},[t._v("Changing a remote's URL"),a("OutboundLink")],1)])])])]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote -v\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#> origin  git@github.com:USERNAME/REPOSITORY.git (fetch)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#> origin  git@github.com:USERNAME/REPOSITORY.git (push)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote set-url origin git@github.com:USERNAME/REPOSITORY.git\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Verify new remote URL")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote -v\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#> origin  git@github.com:USERNAME/REPOSITORY.git (fetch)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#> origin  git@github.com:USERNAME/REPOSITORY.git (push)")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("hr"),t._v(" "),a("p",[a("strong",[t._v("2021-03-19")])]),t._v(" "),a("h2",{attrs:{id:"为什么0-1-0-2不等于0-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么0-1-0-2不等于0-3"}},[t._v("#")]),t._v(" 为什么0.1+0.2不等于0.3")]),t._v(" "),a("p",[t._v("JavaScript 使用 Number 类型表示数字（整数和浮点数），遵循 "),a("a",{attrs:{href:"https://zh.wikipedia.org/wiki/IEEE_754",target:"_blank",rel:"noopener noreferrer"}},[t._v("IEEE 754"),a("OutboundLink")],1),t._v(" 标准，通过64位来表示一个数字。")]),t._v(" "),a("p",[t._v("数字在内存中的表示方式")]),t._v(" "),a("p",[a("img",{attrs:{src:"/img/2021-03-19_1.png",alt:"数字在内存中的表示方式"}})]),t._v(" "),a("p",[t._v("图片文字说明")]),t._v(" "),a("p",[t._v("第0位：符号位，0表示正数，1表示负数(s)\n第1位到第11位：储存指数部分（e）\n第12位到第63位：储存小数部分，即有效数字（f），52位")]),t._v(" "),a("p",[t._v("运算的时候，先转二进制，然后对阶运算。由于位数的限制，可能会存在精度损失，所以会得出不等于。\n"),a("strong",[t._v("精度损失可能出现在进制转化和对阶运算过程中。")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://juejin.cn/post/6844903680362151950",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考"),a("OutboundLink")],1)]),t._v(" "),a("hr"),t._v(" "),a("p",[a("strong",[t._v("2021-03-22 周一")])]),t._v(" "),a("h2",{attrs:{id:"mac-上-chrome-非-https-无法打开摄像头"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mac-上-chrome-非-https-无法打开摄像头"}},[t._v("#")]),t._v(" mac 上 Chrome 非 https 无法打开摄像头")]),t._v(" "),a("p",[t._v("地址栏输入 "),a("code",[t._v("chrome://flags/")]),t._v("，搜索 "),a("code",[t._v("unsafely")]),t._v("。选择 enabled ，并输入要授信的域名/ip。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/img/2021-03-22_1.png",alt:"chrome 设置"}})]),t._v(" "),a("hr"),t._v(" "),a("p",[a("strong",[t._v("2021-03-24 周三")])]),t._v(" "),a("h2",{attrs:{id:"koa-报错-413-payload-too-large-请求体过大"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#koa-报错-413-payload-too-large-请求体过大"}},[t._v("#")]),t._v(" koa 报错 413 Payload Too Large 请求体过大")]),t._v(" "),a("p",[t._v("koa 项目里面使用了 "),a("code",[t._v("koa-bodyparser")]),t._v(" 接受数据，默认对请求体的大小限制了：")]),t._v(" "),a("ul",[a("li",[t._v("formLimit: 表格限制默认 56kb")]),t._v(" "),a("li",[t._v("jsonLimit：json传输默认限制 1M")]),t._v(" "),a("li",[t._v("textLimit：文本传输默认限制 1M")])]),t._v(" "),a("p",[t._v("增加参数：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Koa "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'koa'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" bodyParser "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'koa-bodyparser'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" app "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Koa")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\napp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bodyParser")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'formLimit'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2mb'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'jsonLimit'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2mb'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'textLimit'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2mb'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("hr"),t._v(" "),a("p",[a("strong",[t._v("2021/3/25 周四")])]),t._v(" "),a("h2",{attrs:{id:"linux-查看-nginx-安装目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux-查看-nginx-安装目录"}},[t._v("#")]),t._v(" linux 查看 nginx 安装目录")]),t._v(" "),a("p",[t._v("在启动了 nginx 的情况下 "),a("code",[t._v("ps aux|grep nginx")]),t._v(" "),a("img",{attrs:{src:"/img/2021-03-25_1.png",alt:"nginx 运行情况"}})]),t._v(" "),a("h2",{attrs:{id:"apache-代理转发到-https"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#apache-代理转发到-https"}},[t._v("#")]),t._v(" Apache 代理转发到 https")]),t._v(" "),a("p",[t._v("需要配置")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("SSLProxyEngine on\nProxyPass /api https://exapmle.com/api\nProxyPassReverse /api https://exapmle.com/api\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("hr"),t._v(" "),a("p",[a("strong",[t._v("2021/3/26 周五")])]),t._v(" "),a("h2",{attrs:{id:"iframe-操作父页面报错"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iframe-操作父页面报错"}},[t._v("#")]),t._v(" iframe 操作父页面报错")]),t._v(" "),a("p",[t._v("报错 "),a("code",[t._v('Uncaught DOMException: Blocked a frame with origin "https://xx.com" from accessing a cross-origin frame.')])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("方案一：\n修改调用的方式，使用 "),a("a",{attrs:{href:"https://www.cnblogs.com/zhjh256/p/9923703.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("postMessage"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[t._v("方案二：\n"),a("s",[t._v("Response Headers 设置 "),a("code",[t._v("x-frame-options: SAMEORIGIN")])]),t._v(" 不是这个问题，与这个设置无关")])]),t._v(" "),a("li",[a("p",[t._v("方案三：\n设置 "),a("code",[t._v("document.domain = 'expamle.com'")]),t._v("，把两个站设置成一样的")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);