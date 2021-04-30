(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{371:function(s,t,a){"use strict";a.r(t);var n=a(40),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"单-多行文本溢出省略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单-多行文本溢出省略"}},[s._v("#")]),s._v(" 单-多行文本溢出省略")]),s._v(" "),a("h3",{attrs:{id:"遇到问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#遇到问题"}},[s._v("#")]),s._v(" 遇到问题")]),s._v(" "),a("p",[s._v("文本溢出截断省略，在日常开发中是非常常见的一个业务场景。看似简单，又分为单行截断和多行截断。根据浏览器不同，在 IE 上又存在兼容性问题。所以总结一下常用解决方案。")]),s._v(" "),a("h3",{attrs:{id:"解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[s._v("#")]),s._v(" 解决方案")]),s._v(" "),a("h4",{attrs:{id:"_1-单行文本溢出省略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-单行文本溢出省略"}},[s._v("#")]),s._v(" 1. 单行文本溢出省略")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("纯 CSS 方案")]),s._v("\n核心 css 语句")])]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".ellipsis")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("overflow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" hidden"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" // 文字长度超出限定宽度，则隐藏超出的内容\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("white-space")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nowrap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" // 设置文字显示在一行，不能换行\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("text-overflow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ellipsis"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" // 规定当文本溢出时，显示省略符号来代表被修剪的文本\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h5",{attrs:{id:"优点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优点"}},[s._v("#")]),s._v(" 优点")]),s._v(" "),a("ol",[a("li",[s._v("无兼容问题")]),s._v(" "),a("li",[s._v("可以响应式截断")]),s._v(" "),a("li",[s._v("限定宽度，文本溢出范围才显示省略号，否则不显示省略号")]),s._v(" "),a("li",[s._v("省略号位置显示刚好")])]),s._v(" "),a("h5",{attrs:{id:"短板"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#短板"}},[s._v("#")]),s._v(" 短板")]),s._v(" "),a("ol",[a("li",[s._v("只支持单行文本截断")])]),s._v(" "),a("p",[s._v("Demo")]),s._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token style"}},[a("span",{pre:!0,attrs:{class:"token language-css"}},[s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".ellipsis")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("overflow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" hidden"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("white-space")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nowrap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("text-overflow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ellipsis"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("ellipsis"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token style-attr"}},[a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("style")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),a("span",{pre:!0,attrs:{class:"token style language-css"}},[a("span",{pre:!0,attrs:{class:"token property"}},[s._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 100px")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("这是一段很长很长的文本这是一段很长很长的文本这是一段很长很长的文本"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h5",{attrs:{id:"拓展"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#拓展"}},[s._v("#")]),s._v(" 拓展")]),s._v(" "),a("p",[s._v("text-overflow：取值clip | ellipsis | string;")]),s._v(" "),a("p",[s._v("text-overflow 属性规定当文本溢出包含元素时发生的事情。默认值clip，不会继承。")]),s._v(" "),a("ul",[a("li",[s._v("clip：修剪文本。仅隐藏超出的部分。")]),s._v(" "),a("li",[s._v("ellipsis：显示省略符号来代表被修剪的文本。超出部分隐藏，显示省略号。")]),s._v(" "),a("li",[s._v("string：用给定的字符串替换被修剪的文本。 // 兼容性不佳")])]),s._v(" "),a("h4",{attrs:{id:"_2-多行文本溢出省略-按行数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-多行文本溢出省略-按行数"}},[s._v("#")]),s._v(" 2. 多行文本溢出省略（按行数）")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("纯 CSS 方案")]),s._v("\n核心 CSS 语句")])]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".line-clamp-2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" -webkit-box"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" // 将元素的盒子模型设置为弹性盒子模型。\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("-webkit-line-clamp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" // 限制在一个块元素显示的文本的行数，2 表示最多显示2行。需要与其他 Webkit 属性同时使用。\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("-webkit-box-orient")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" vertical"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" // 设置检索弹性盒子的子元素排列方式。需要与其他 Webkit 属性同时使用。\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("overflow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" hidden"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" // 文字长度超出限定宽度，则隐藏超出的内容\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("text-overflow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ellipsis"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" // 多行文本的情况下，用省略号“…”隐藏溢出范围的文本\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h5",{attrs:{id:"优点-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优点-2"}},[s._v("#")]),s._v(" 优点")]),s._v(" "),a("ol",[a("li",[s._v("可以响应式截断")]),s._v(" "),a("li",[s._v("限定宽度，文本溢出范围才显示省略号，否则不显示省略号")]),s._v(" "),a("li",[s._v("省略号位置显示刚好")])]),s._v(" "),a("h5",{attrs:{id:"短板-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#短板-2"}},[s._v("#")]),s._v(" 短板")]),s._v(" "),a("ol",[a("li",[s._v("兼容性一般。移动端页面大都支持。-webkit-line-clamp 属性只有 WebKit 内核的浏览器才支持，IE 不支持。")])]),s._v(" "),a("p",[s._v("Demo")]),s._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token style"}},[a("span",{pre:!0,attrs:{class:"token language-css"}},[s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".line-clamp-2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("line-height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 18px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("max-height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 36px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" -webkit-box"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("-webkit-line-clamp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("-webkit-box-orient")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" vertical"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("overflow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" hidden"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("text-overflow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ellipsis"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("line-clamp-2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token style-attr"}},[a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("style")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),a("span",{pre:!0,attrs:{class:"token style language-css"}},[a("span",{pre:!0,attrs:{class:"token property"}},[s._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 100px")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("这是一段很长很长的文本这是一段很长很长的文本这是一段很长很长的文本"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("h5",{attrs:{id:"拓展-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#拓展-2"}},[s._v("#")]),s._v(" 拓展")]),s._v(" "),a("p",[s._v("box-flex 是 CSS3 新增加的盒子模型属性，在那个时候，仅Firefox/Chrome/Safari浏览器支持弹性盒子模型，且使用的时候，需要带上私有前缀，诸如-moz-,-webkit-。随着css3标准的更新，名字也在调整。但是多行溢出的时候，flex 不能完全替代（可能私有属性有一些不同的实现吧）。")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".flex")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" -webkit-box"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* Chrome 4+, Safari 3.1, iOS Safari 3.2+ */")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" -moz-box"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* Firefox 17- */")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" -webkit-flex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* Chrome 21+, Safari 6.1+, iOS Safari 7+, Opera 15/16 */")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" -moz-flex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* Firefox 18+ */")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" -ms-flexbox"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* IE 10 */")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" flex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* Chrome 29+, Firefox 22+, IE 11+, Opera 12.1/17/18, Android 4.4+ */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("ul",[a("li",[s._v("** js 方案 **\njs获取字符串长度，计算是否会超出，截取字符串加上省略号")])]),s._v(" "),a("h5",{attrs:{id:"优点-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优点-3"}},[s._v("#")]),s._v(" 优点")]),s._v(" "),a("ol",[a("li",[s._v("没有兼容性问题")]),s._v(" "),a("li",[s._v("可以响应式截断")]),s._v(" "),a("li",[s._v("限定宽度，文本溢出范围才显示省略号，否则不显示省略号")])]),s._v(" "),a("h5",{attrs:{id:"短板-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#短板-3"}},[s._v("#")]),s._v(" 短板")]),s._v(" "),a("ol",[a("li",[s._v("需要借助 js 实现，用起来相对麻烦")]),s._v(" "),a("li",[s._v("针对不同语言时，计算文字宽度可能会有偏差")])]),s._v(" "),a("p",[s._v("Demo")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" text "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'这是一个很长很长很长的文本这是一个很长很长很长的文本这是一个很长很长很长的文本这是一个很长很长很长的文本'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.zhihu.com/question/22991944",target:"_blank",rel:"noopener noreferrer"}},[s._v("CSS3 display:flex和display:box有什么区别？"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://juejin.im/post/5dc15b35f265da4d432a3d10",target:"_blank",rel:"noopener noreferrer"}},[s._v("可能是最全的 “文本溢出截断省略” 方案合集"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=e.exports}}]);