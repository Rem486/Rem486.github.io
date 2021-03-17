(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{366:function(t,s,a){"use strict";a.r(s);var n=a(42),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"chrome-自定义滚动条样式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chrome-自定义滚动条样式"}},[t._v("#")]),t._v(" chrome 自定义滚动条样式")]),t._v(" "),a("p",[t._v("对于 chrome 浏览器，它提供了修改滚动条样式的接口，可以修改原生滚动条的样式。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/img/chrome-scrollerbar-1.png",alt:"滚动条组成图解"}})]),t._v(" "),a("p",[t._v("先说一下滚动条的参数：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("::-webkit-scrollbar 1 滚动条整体部分，其中的属性有 width,height,background,border（就和一个块级元素一样）等\n::-webkit-scrollbar-button 2 滚动条两端的按钮，可以用 display:none 让其不显示，也可以添加背景图片，颜色改变显示效果。\n::-webkit-scrollbar-track 3 外层轨道，可以用 display:none 让其不显示，也可以添加背景图片，颜色改变显示效果。\n::-webkit-scrollbar-track-piece 4  内层滚动槽\n::-webkit-scrollbar-thumb 5 滚动的滑块\n::-webkit-scrollbar-corner 6 边角\n::-webkit-resizer 7 定义右下角拖动块的样式\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("p",[t._v("注意：对以上部分定义 width 和 height 时，有如下功能：")]),t._v(" "),a("p",[t._v("若是水平滚动条，则 width 属性不起作用，height 属性用来控制滚动条相应部分竖直方向高度；")]),t._v(" "),a("p",[t._v("若是竖直滚动条，则 height 属性不起作用，width 属性用来控制滚动条相应部分水平方向的宽度")]),t._v(" "),a("p",[t._v("下面是 css 样式，可以直接拷贝生效：")]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 设置滚动条的样式 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("::-webkit-scrollbar")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 8px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 8px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 滚动槽 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("::-webkit-scrollbar-track")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-box-shadow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" inset 0 0 6px "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rgba")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("0.2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-radius")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 8px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 滚动条滑块 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("::-webkit-scrollbar-thumb")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-radius")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 8px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #bbb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-box-shadow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" inset 0 0 6px "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rgba")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("0.25"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("::-webkit-scrollbar-thumb:window-inactive")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rgba")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("255"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("0.4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br")])]),a("h4",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://blog.51cto.com/dapengtalk/1867710",target:"_blank",rel:"noopener noreferrer"}},[t._v("自定义滚动条样式 --- 适用于webkit浏览器 Google Chrome 和 Opera"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.w3cways.com/1670.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("各浏览器中自定义滚动条的样式"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=r.exports}}]);