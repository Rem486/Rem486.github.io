(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{230:function(t,e,i){"use strict";i.r(e);var a=i(1),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"git-配置修改远程仓库地址"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#git-配置修改远程仓库地址","aria-hidden":"true"}},[t._v("#")]),t._v(" git-配置修改远程仓库地址")]),t._v(" "),i("p",[t._v("创建时间：2019-02-16")]),t._v(" "),i("h3",{attrs:{id:"遇到的问题"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#遇到的问题","aria-hidden":"true"}},[t._v("#")]),t._v(" 遇到的问题")]),t._v(" "),i("p",[t._v("先在本地新建了项目，也 git init 初始化了git配置，然后才在github上新建仓库，这个时候就需要配置远程仓库的地址。")]),t._v(" "),i("h3",{attrs:{id:"解决方法"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#解决方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 解决方法")]),t._v(" "),i("ol",[i("li",[t._v("直接添加 origin 地址")])]),t._v(" "),i("div",{staticClass:"language- line-numbers-mode"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("git remote add origin [url]\n// git remote add origin https://github.com/Rem486/Rem486.github.io.git\n")])]),t._v(" "),i("div",{staticClass:"line-numbers-wrapper"},[i("span",{staticClass:"line-number"},[t._v("1")]),i("br"),i("span",{staticClass:"line-number"},[t._v("2")]),i("br")])]),i("ol",{attrs:{start:"2"}},[i("li",[t._v("如果已经存在了可以先删除再添加")])]),t._v(" "),i("div",{staticClass:"language- line-numbers-mode"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("git remote rm origin\ngit remote add origin [url]\n// git remote add origin https://github.com/Rem486/Rem486.github.io.git\n")])]),t._v(" "),i("div",{staticClass:"line-numbers-wrapper"},[i("span",{staticClass:"line-number"},[t._v("1")]),i("br"),i("span",{staticClass:"line-number"},[t._v("2")]),i("br"),i("span",{staticClass:"line-number"},[t._v("3")]),i("br")])]),i("ol",{attrs:{start:"3"}},[i("li",[t._v("已经存在 origin 的，也可以直接修改")])]),t._v(" "),i("div",{staticClass:"language- line-numbers-mode"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("git remote set-url origin [url]\n// git remote set-url origin https://github.com/Rem486/Rem486.github.io.git\n")])]),t._v(" "),i("div",{staticClass:"line-numbers-wrapper"},[i("span",{staticClass:"line-number"},[t._v("1")]),i("br"),i("span",{staticClass:"line-number"},[t._v("2")]),i("br")])]),i("p",[t._v("tips：如果没有 origin 地址的，直接修改会提示 "),i("code",[t._v("fatal: No such remote 'origin'")])])])}),[],!1,null,null,null);e.default=s.exports}}]);