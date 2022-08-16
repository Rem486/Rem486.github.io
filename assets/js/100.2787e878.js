(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{447:function(s,a,t){"use strict";t.r(a);var n=t(40),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"git-删除远程分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git-删除远程分支"}},[s._v("#")]),s._v(" git - 删除远程分支")]),s._v(" "),t("h3",{attrs:{id:"遇到的问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#遇到的问题"}},[s._v("#")]),s._v(" 遇到的问题")]),s._v(" "),t("p",[s._v("新版版本稳定上线后，之前的开发分支都需要删掉，清理掉无用的分支。在 git 仓储的页面上删除了分支，本地还是可以通过git branch -a 看到之前的远程分支。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -a\n\n* develop\n  ie_resizable\n  test_optimize\n  remotes/origin/"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#2313 // 已经删掉了")]),s._v("\n  remotes/origin/HEAD -"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" origin/develop\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h3",{attrs:{id:"解决办法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决办法"}},[s._v("#")]),s._v(" 解决办法")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("从本地用命令行操作")]),s._v(" "),t("p",[s._v("先删除本地分支")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -D "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#2313")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("然后可以有两种方式，删除远程分支：")]),s._v(" "),t("ul",[t("li",[s._v("a.在Git v1.7.0 之后，可以使用这种语法删除远程分支：")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin --delete "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#2313 // <branchName>")]),s._v("\n\nTo https://github.com/rem486.git\n - "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("deleted"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("           "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#2313")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("ul",[t("li",[s._v("b.推送一个空的分支到远程分支，实现删除远程分支：")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#2313 ")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("从 网页端/其他人 删除了远程分支更新到本地")]),s._v(" "),t("p",[s._v("先删除本地分支，查看分支状态")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -D "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#2313")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote show origin\n\n* remote origin\n  Fetch URL: https://github.com/rem486.git\n  Push  URL: https://github/rem486.git\n  HEAD branch: develop\n  Remote branches:\n    develop                                                        tracked\n    master                                                         tracked\n    refs/remotes/origin/"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#2313                                      stale (use 'git remote prune' to remove)")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[s._v("可以看到 stale 说明已经被删除了，需要将其从本地仓库的记录中删除")]),s._v(" "),t("ul",[t("li",[s._v("a.")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote prune origin\nPruning origin\nURL: https://github.com/rem486.git\n * "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("pruned"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" origin/"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#2313")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("ul",[t("li",[s._v("b.")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote update origin --prune\nFetching origin\nFrom https://github.com/rem486.git\n - "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("deleted"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("           "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("none"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("     -"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" origin/"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#2313")]),s._v("\n * "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("new branch"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#2717 -> origin/#2717")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("ul",[t("li",[s._v("c.在fetch之后删除掉没有与远程分支对应的本地分支：")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" fetch -p\nFrom https://github.com/rem486.git\n - "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("deleted"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("           "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("none"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("     -"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" origin/"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#2313")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("ul",[t("li",[s._v("d.其它")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull -p\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])])])}),[],!1,null,null,null);a.default=e.exports}}]);