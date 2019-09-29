(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{222:function(s,a,e){"use strict";e.r(a);var t=e(1),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"webpack-零碎知识"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#webpack-零碎知识","aria-hidden":"true"}},[s._v("#")]),s._v(" webpack-零碎知识")]),s._v(" "),e("p",[s._v("创建时间：2019-09-25")]),s._v(" "),e("h3",{attrs:{id:"webpack-dev-server"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#webpack-dev-server","aria-hidden":"true"}},[s._v("#")]),s._v(" webpack-dev-server")]),s._v(" "),e("h4",{attrs:{id:"_1-错误提示-invalid-host-header"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-错误提示-invalid-host-header","aria-hidden":"true"}},[s._v("#")]),s._v(" 1. 错误提示 "),e("code",[s._v("invalid host header")])]),s._v(" "),e("p",[e("strong",[s._v("问题原因")]),s._v("\nwebpack-dev-server 增加了对 "),e("code",[s._v("host header")]),s._v(" 正确性的检测，以屏蔽未经授权的访问。开发者需要在执行 webpack-dev-server 命令时手动添加 –public 选项，取值为授权的 host，否则就会出现这个问题，也就是“Invalid Host Header”。\n"),e("strong",[s._v("解决方案")])]),s._v(" "),e("ol",[e("li",[s._v("执行 webpack-dev-server 命令时手动添加 –public 选项，取值为授权的\nhost，这是官方建议的做法，目的是为了安全。")]),s._v(" "),e("li",[s._v("设置 webpack-dev-server 的配置项 disableHostCheck为 true 以禁用这一检测，如果开发者使用了代理，或在开发环境中不 care 这些安全问题，该设置可以直接斩草除根。")])]),s._v(" "),e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"devServer"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"disableHostCheck"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("blockquote",[e("p",[s._v("host 为 localhost 或 127.0.0.1 时不会受阻。\n只有使用 webpack-dev-server 或webpack-dev-middleware 时会进行该项检测，webpack 和 打包后的代码不受此影响。")])]),s._v(" "),e("h4",{attrs:{id:"_2-不能使用-ip-访问"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-不能使用-ip-访问","aria-hidden":"true"}},[s._v("#")]),s._v(" 2. 不能使用 "),e("code",[s._v("ip")]),s._v(" 访问")]),s._v(" "),e("p",[e("strong",[s._v("问题描述")]),s._v("\nwebpack-dev-server 服务启动后，我们可以直接在 "),e("code",[s._v("http://localhost:端口")]),s._v(" 进行访问，但是如果内网内其他客户端如果想要访问的话，换成 "),e("code",[s._v("http://ip:端口")]),s._v(" 却无法访问。\n"),e("strong",[s._v("解决方案")])]),s._v(" "),e("ol",[e("li",[s._v("在执行 "),e("code",[s._v("webpack-dev-server")]),s._v(" 命令的时候加上参数 "),e("code",[s._v("--host 0,0,0,0")]),s._v(" 。以 vue 项目为栗，修改 "),e("code",[s._v("package.json")]),s._v("：")])]),s._v(" "),e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"dev"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"webpack-dev-server --inline --progress --config build/webpack.dev.conf.js"')]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"dev"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"webpack-dev-server --inline --host 0.0.0.0 --progress --config build/webpack.dev.conf.js"')]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("ol",{attrs:{start:"2"}},[e("li",[s._v("设置 webpack-dev-server 的配置项的 host 为 本机ip")])]),s._v(" "),e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"devServer"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"host"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"192.168.1.111"')]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("修改后，重启，就可以使用 "),e("code",[s._v("http://192.168.1.111:端口")]),s._v(" 进行访问。")]),s._v(" "),e("blockquote",[e("p",[s._v("缺点：ip 不一样，每次都要换。")])]),s._v(" "),e("blockquote",[e("p",[s._v("友情提示：ip 访问，一定要确保设备在同一个网络。")])])])}),[],!1,null,null,null);a.default=n.exports}}]);