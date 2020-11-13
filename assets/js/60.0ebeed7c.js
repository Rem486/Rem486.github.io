(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{402:function(s,a,e){"use strict";e.r(a);var t=e(43),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"npm-一键更新依赖包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#npm-一键更新依赖包"}},[s._v("#")]),s._v(" npm - 一键更新依赖包")]),s._v(" "),e("blockquote",[e("p",[s._v("随着项目的迭代，依赖包可能也都升级了，如何快速的升级各种依赖到最新版本")])]),s._v(" "),e("p",[s._v("一个一个手动升级:")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# npm")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i vue@latest\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# yarn")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" vue@latest\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("批量操作")]),s._v(" "),e("h3",{attrs:{id:"npm-check"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#npm-check"}},[s._v("#")]),s._v(" npm-check")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i -g npm-check\nnpm-check -u\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("输出如下：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("? Choose which packages to update.\n Space to select. Enter to start upgrading. Control-C to cancel.\n\n Patch Update Backwards-compatible bug fixes.\n>( ) vue             2.6.11   ❯  2.6.12   https://github.com/vuejs/vue#readme\n\n Minor Update New backwards-compatible features.\n ( ) @vue/test-utils devDep   1.0.0-beta.29  ❯  1.1.1   https://github.com/vuejs/vue-test-utils#readme\n \n Major Update Potentially breaking API changes. Use caution.\n ( ) cross-env       5.2.1   ❯  7.0.2   https://github.com/kentcdodds/cross-env#readme\n\n Non-Semver Versions less than 1.0.0, caution.\n ( ) axios           0.18.1  ❯  0.21.0  https://github.com/axios/axios\n\n(Move up and down to reveal more choices)\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br")])]),e("p",[s._v("空格切换是否更新，Control + C 取消更新，回车执行更新。")]),s._v(" "),e("h3",{attrs:{id:"使用-yarn"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-yarn"}},[s._v("#")]),s._v(" 使用 yarn")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" upgrade-interactive --latest\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("输出如下：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('yarn upgrade-interactive v1.22.5\ninfo Color legend :\n "<red>"    : Major Update backward-incompatible updates\n "<yellow>" : Minor Update backward-compatible features\n "<green>"  : Patch Update backward-compatible bug fixes\n? Choose which packages to update. (Press <space> to select, <a> to toggle all, <i> to invert selection)\n devDependencies\n   name                    range   from       to      url\n>( ) @vue/test-utils         latest  1.0.0-beta.29  ❯  1.1.1   https://github.com/vuejs/vue-test-utils#readme\n\n dependencies\n   name                    range   from       to      url\n ( ) axios                   latest  0.18.1  ❯  0.21.0  https://github.com/axios/axios\n ( ) cross-env               latest  5.2.1   ❯  7.0.2   https://github.com/kentcdodds/cross-env#readme\n ( ) vue                     latest  2.6.11  ❯  2.6.12  https://github.com/vuejs/vue#readme\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br")])]),e("p",[s._v("操作一样，空格切换是否更新，Control + C 取消更新，回车执行更新。yarn 还提供了全选，按 A。")]),s._v(" "),e("p",[e("strong",[s._v("更新命令对照表")])]),s._v(" "),e("table",[e("thead",[e("tr",[e("th",[s._v("说明")]),s._v(" "),e("th",[s._v("yarn")]),s._v(" "),e("th",[s._v("npm-check")])])]),s._v(" "),e("tbody",[e("tr",[e("td",[s._v("更新项目依赖，没有交互")]),s._v(" "),e("td",[s._v("yarn upgrade --latest")]),s._v(" "),e("td",[s._v("npm-check -y")])]),s._v(" "),e("tr",[e("td",[s._v("更新项目依赖，有交互")]),s._v(" "),e("td",[s._v("yarn upgrade-interactive --latest")]),s._v(" "),e("td",[s._v("npm-check -u")])]),s._v(" "),e("tr",[e("td",[s._v("更新全局依赖，没有交互")]),s._v(" "),e("td",[s._v("yarn global upgrade --latest")]),s._v(" "),e("td",[s._v("npm-check -g -y")])]),s._v(" "),e("tr",[e("td",[s._v("更新全局依赖，有交互")]),s._v(" "),e("td",[s._v("yarn global upgrade-interactive --latest")]),s._v(" "),e("td",[s._v("npm-check -g -u")])])])]),s._v(" "),e("p",[e("strong",[s._v("检查原理")]),s._v("\nyarn 是根据 yarn.lock 文件来检测版本是否是最新的，所以项目是使用 npm 安装依赖包，更新前要运行 yarn install 一下。")]),s._v(" "),e("p",[s._v("npm-check 是检测 package.json 文件，项目存在 node_modules 文件夹即可更新。")]),s._v(" "),e("h3",{attrs:{id:"参考"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://www.cnblogs.com/stevexu/p/10744765.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("一行命令更新所有 npm 依赖包"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=n.exports}}]);