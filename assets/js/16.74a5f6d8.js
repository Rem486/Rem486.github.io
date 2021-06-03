(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{362:function(t,s,a){"use strict";a.r(s);var e=a(40),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_2021-06-问题记录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2021-06-问题记录"}},[t._v("#")]),t._v(" 2021-06 问题记录")]),t._v(" "),a("p",[a("strong",[t._v("2021/6/2 周三")])]),t._v(" "),a("h2",{attrs:{id:"nuxt-添加-eslint-和-prettier"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nuxt-添加-eslint-和-prettier"}},[t._v("#")]),t._v(" nuxt 添加 eslint 和 prettier")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/web/tool/eslint-prettier-nuxt.html"}},[t._v("nuxt 添加 eslint 和 prettier")])],1),t._v(" "),a("hr"),t._v(" "),a("p",[a("strong",[t._v("2021/6/3 周四")])]),t._v(" "),a("h2",{attrs:{id:"eslint-prettier-基于-husky-来格式化代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eslint-prettier-基于-husky-来格式化代码"}},[t._v("#")]),t._v(" ESLint + Prettier 基于 husky 来格式化代码")]),t._v(" "),a("h3",{attrs:{id:"安装依赖-husky"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装依赖-husky"}},[t._v("#")]),t._v(" 安装依赖 husky")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("npx husky-init "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# npm")]),t._v("\nnpx husky-init "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v("              "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Yarn 1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" dlx husky-init --yarn2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Yarn 2")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i lint-staged -D "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 对 git 提交的代码使用 linter")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[a("code",[t._v("husky-init")]),t._v(" 是一个一次性命令，可以快速初始化项目的 husky 配置。会修改 "),a("code",[t._v("package.json")]),t._v("，并且创建一个 "),a("code",[t._v("pre-commit")]),t._v(" 的示例（提交 commit 的时候执行 "),a("code",[t._v("npm test")]),t._v("）。"),a("a",{attrs:{href:"https://typicode.github.io/husky/#/",target:"_blank",rel:"noopener noreferrer"}},[t._v("husky"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("code",[t._v("lint-staged")]),t._v(" 可以减少每次 lint 的操作范围，减少操作，把影响降低。因为我们有可能是项目途中才引入的 prettier，对一些早已经编写完成的代码进行格式化，可能会造成冲突或者一些不可预知的问题，降低项目稳定性。因此仅对本次提交的代码进行格式化，确保不会影响到其它未测试的代码。")]),t._v(" "),a("h3",{attrs:{id:"修改配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改配置"}},[t._v("#")]),t._v(" 修改配置")]),t._v(" "),a("ul",[a("li",[t._v("编辑 "),a("code",[t._v("pacakge.json")]),t._v("，添加 scripts "),a("code",[t._v('"pre-commit-lint": "lint-staged"')])]),t._v(" "),a("li",[t._v("编辑 "),a("code",[t._v(".husky/pre-commit")]),t._v("，添加 "),a("code",[t._v("npm run pre-commit-lint")])]),t._v(" "),a("li",[t._v("添加 "),a("code",[t._v("lint-staged")]),t._v(" 配置")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .lintstagedrc.js")]),t._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'*.{js,jsx,ts,tsx}'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'prettier --write'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'eslint --fix'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'{!(package)*.json,*.code-snippets}'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'prettier --write--parser json'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'package.json'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'prettier --write'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'*.vue'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'prettier --write'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'eslint --fix'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'*.{scss,less,styl,css,html}'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'prettier --write'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'*.md'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'prettier --write'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("p",[a("a",{attrs:{href:"https://github.com/typicode/husky/issues/949",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"eslint-和-prettier-区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eslint-和-prettier-区别"}},[t._v("#")]),t._v(" eslint 和 prettier 区别")]),t._v(" "),a("ul",[a("li",[t._v("eslint（包括其他一些 lint 工具）的主要功能包含代码格式的校验，代码质量的校验。")]),t._v(" "),a("li",[t._v("prettier 只是代码格式的校验（并格式化代码），不会对代码质量进行校验。")])]),t._v(" "),a("p",[t._v("代码格式问题通常指的是：单行代码长度、tab长度、空格、逗号表达式等问题。而代码质量问题指的是：未使用变量、三等号、全局变量声明等问题")]),t._v(" "),a("h3",{attrs:{id:"eslint-和-prettier-配合"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eslint-和-prettier-配合"}},[t._v("#")]),t._v(" eslint 和 prettier 配合")]),t._v(" "),a("p",[t._v("一般还是先使用 prettier 格式化再使用 eslint 校验。避免格式化后提交的代码在下一次或者别人 checkout 代码后通不过 eslint 校验的情况，以及一些可能存在的格式问题。\n"),a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/68026905",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考"),a("OutboundLink")],1)]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"babel-jest-不支持-babel7-的解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#babel-jest-不支持-babel7-的解决方案"}},[t._v("#")]),t._v(" babel-jest 不支持 babel7 的解决方案")]),t._v(" "),a("p",[t._v("jest 本身不支持 es6 语法，需要使用 babel-jest 插件进行转换。")]),t._v(" "),a("p",[t._v("babel-jest 需要依赖 "),a("code",[t._v("babel-core")]),t._v("。 babel7 好像不支持(babel-jest@24.1.0)。可以使用 "),a("code",[t._v("babel-core@^7.0.0-bridge.0")])]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i babel-core@^7.0.0-bridge.0 -D\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("blockquote",[a("p",[t._v("可以认为 babel-core@^7.0.0-bridge.0 插件是将 babel6 衔接到 babel7 的一个桥梁")])])])}),[],!1,null,null,null);s.default=n.exports}}]);