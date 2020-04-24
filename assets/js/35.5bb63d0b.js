(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{289:function(s,a,t){"use strict";t.r(a);var n=t(30),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"npm-常用操作技巧"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npm-常用操作技巧"}},[s._v("#")]),s._v(" npm-常用操作技巧")]),s._v(" "),t("p",[s._v("创建时间：2019-07-16")]),s._v(" "),t("p",[s._v("现在用 npm / yarn 管理构建项目已经是前端的标配了(2019-07-16)，但是目前对于 npm 可能很多还是仅限于基本的 "),t("code",[s._v("npm i")]),s._v(" , "),t("code",[s._v("npm run dev")]),s._v(" 操作。记录一下常用操作技巧。")]),s._v(" "),t("h2",{attrs:{id:"_1-基本操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-基本操作"}},[s._v("#")]),s._v(" 1.基本操作")]),s._v(" "),t("ul",[t("li",[s._v("安装  -  常规："),t("code",[s._v("npm install")]),s._v("，简写："),t("code",[s._v("npm i")]),s._v("。")]),s._v(" "),t("li",[s._v("测试  -  常规："),t("code",[s._v("npm test")]),s._v("，简写："),t("code",[s._v("npm t")]),s._v("。")]),s._v(" "),t("li",[s._v("帮助  -  常规："),t("code",[s._v("npm --help")]),s._v("，简写："),t("code",[s._v("npm -h")]),s._v("。")]),s._v(" "),t("li",[s._v("全局标志 -  常规："),t("code",[s._v("--global")]),s._v("，简写："),t("code",[s._v("-g")]),s._v("。")]),s._v(" "),t("li",[s._v("保存为开发依赖 - 常规： "),t("code",[s._v("--save-dev")]),s._v("，简写："),t("code",[s._v("-D")]),s._v("。")]),s._v(" "),t("li",[s._v("npm init 默认值 - 常规："),t("code",[s._v("npm init --yes")]),s._v(" 或 "),t("code",[s._v("npm init --force")]),s._v("，简写："),t("code",[s._v("npm init -y")]),s._v(" 或 "),t("code",[s._v("npm init -f")])])]),s._v(" "),t("p",[s._v("我们知道使用-save或-S来保存包，但现在这是个已经是默认值。要安装一个包而不保存它，可以使用 "),t("code",[s._v("--no-save")]),s._v("标志。")]),s._v(" "),t("h2",{attrs:{id:"_2-不太常见操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-不太常见操作"}},[s._v("#")]),s._v(" 2.不太常见操作")]),s._v(" "),t("ul",[t("li",[s._v("精确安装指定模块版本  -  常规："),t("code",[s._v("--save-optional")]),s._v("，简写："),t("code",[s._v("-O")])])]),s._v(" "),t("h2",{attrs:{id:"_3-设置-npm-init-属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-设置-npm-init-属性"}},[s._v("#")]),s._v(" 3.设置 npm init 属性")]),s._v(" "),t("p",[s._v("当运行npm init开始一个新项目时，可能会需要配置很多细节。有时为了节省时间，可以为一些字段设置默认值，如下所示：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" init.author.name "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rem486"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" init.author.email "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rem486@xx.com"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" init.author.url "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rem486.com"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" init.license "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"MIT"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("配置完了可以在终端输入 "),t("code",[s._v("npm config edit")]),s._v(" 查看配置文件信息。\n也可以编辑全局的 "),t("code",[s._v("npm")]),s._v(" 信息，使用 "),t("code",[s._v("npm config edit -g")]),s._v("。\n重置用户默认配置：第一行用空字符串替换配置文件，第二行用默认设置重新填充配置文件。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config get userconfig"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config edit\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("重置全局默认配置")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config get globalconfig"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config --global edit\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"_4-npm-脚本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-npm-脚本"}},[s._v("#")]),s._v(" 4.npm 脚本")]),s._v(" "),t("p",[s._v("脚本功能是 npm 最强大、最常用的功能之一。")]),s._v(" "),t("p",[s._v("npm 脚本的原理非常简单。每当执行 "),t("code",[s._v("npm run")]),s._v("，就会自动新建一个 Shell，在这个 Shell 里面执行指定的脚本命令。因此，只要是 Shell（一般是 Bash）可以运行的命令，就可以写在 npm 脚本里面。")]),s._v(" "),t("p",[s._v("比较特别的是，"),t("code",[s._v("npm run")]),s._v(" 新建的这个 Shell，会将当前目录的 "),t("code",[s._v("node_modules/.bin")]),s._v(" 子目录加入PATH变量，执行结束后，再将PATH变量恢复原样。")]),s._v(" "),t("p",[s._v("这意味着，当前目录的 "),t("code",[s._v("node_modules/.bin")]),s._v(" 子目录里面的所有脚本，都可以直接用脚本名调用，而不必加上路径。比如，当前项目的依赖里面有 Mocha，只要直接写 mocha test 就可以了。")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"script"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"test"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mocha test"')]),s._v("  \n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h2",{attrs:{id:"_5-脚本跨平台兼容"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-脚本跨平台兼容"}},[s._v("#")]),s._v(" 5.脚本跨平台兼容")]),s._v(" "),t("p",[s._v("任何在命令行上运行的代码都有兼容性问题的风险，特别是在Windows和基于unix的系统(包括Mac和Linux)之间。幸好解决方案比较简单，可以使用 "),t("code",[s._v("cross-env")]),s._v(" 依赖包。")]),s._v(" "),t("p",[s._v("使用 "),t("code",[s._v("npm i -D cross-env")]),s._v(" 将其安装为开发依赖项，然后在脚本里面任何环境变量之前加上关键字 "),t("code",[s._v("cross-env")]),s._v(":")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"build"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cross-env NODE_ENV=production webpack --config build/wepack.config.js"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h2",{attrs:{id:"_6-并行运行脚本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-并行运行脚本"}},[s._v("#")]),s._v(" 6.并行运行脚本")]),s._v(" "),t("p",[s._v("依次运行脚本的话，我们可以使用 "),t("code",[s._v("&&")]),s._v(" 来连接。并行运行则可以通过 "),t("a",{attrs:{href:"https://www.npmjs.com/package/concurrently",target:"_blank",rel:"noopener noreferrer"}},[s._v("concurrently"),t("OutboundLink")],1),s._v(" 和 "),t("a",{attrs:{href:"https://www.npmjs.com/package/npm-run-all",target:"_blank",rel:"noopener noreferrer"}},[s._v("npm-run-all"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("首先通过 "),t("code",[s._v("npm i -D concurrently")]),s._v(" 安装开发依赖，然后脚本使用如下格式进行书写：")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"start"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"concurrently \\"command1 arg\\" \\"command2 arg\\""')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"_7-在不同目录运行脚本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-在不同目录运行脚本"}},[s._v("#")]),s._v(" 7.在不同目录运行脚本")]),s._v(" "),t("p",[s._v("有时候脚本可能放在了不同文件目录，要运行脚本就需要先导航到对应文件夹，有两种方法可以执行此操作：")]),s._v(" "),t("ol",[t("li",[s._v("第一种是手动 cd 到对应文件夹：")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" path/to/your/folder "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" start "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v("更优雅的方案，使用 "),t("code",[s._v("--prefix")]),s._v(" 指定路径：")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" start --prefix path/to/your/folder\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"_8-延迟运行脚本，知道端口准备就绪"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-延迟运行脚本，知道端口准备就绪"}},[s._v("#")]),s._v(" 8.延迟运行脚本，知道端口准备就绪")]),s._v(" "),t("p",[s._v("使用 "),t("code",[s._v("wait-on")]),s._v("，只有在 "),t("code",[s._v("http://localhost:3000")]),s._v(" 启动好，才会打开 Electron 窗口")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dev"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"concurrently '),t("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v("cross-env BROWSER=none npm run start"),t("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v("wait-on http://localhost:3000 && electron ."),t("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v('"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"_9-查看可用脚本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-查看可用脚本"}},[s._v("#")]),s._v(" 9.查看可用脚本")]),s._v(" "),t("p",[s._v("列出 "),t("code",[s._v("package.json")]),s._v(" 文件中可用的脚本："),t("code",[s._v("npm run")])]),s._v(" "),t("p",[s._v("更方便的方法：使用 "),t("code",[s._v("ntl")]),s._v(" (Npm Task List)，先全局安装，然后在项目文件夹中运行 "),t("code",[s._v("ntl")]),s._v(" 命令，可以获得一个可用脚本列表，并可以选择其中一个运行。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i ntl -g\n$ ntl\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  Npm Task List - v3.2.4")]),s._v("\n? Select a task to run:\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" dev\n     build\n     deploy\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h2",{attrs:{id:"_10-钩子"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_10-钩子"}},[s._v("#")]),s._v(" 10.钩子")]),s._v(" "),t("p",[s._v("npm 脚本有 "),t("code",[s._v("pre")]),s._v(" 和 "),t("code",[s._v("post")]),s._v(" 两个钩子。栗子："),t("code",[s._v("build")]),s._v(" 脚本命令的钩子就是 "),t("code",[s._v("prebuild")]),s._v(" 和 "),t("code",[s._v("postbuild")]),s._v("。")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"script"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"prebuild"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"echo I run before the build script"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"build"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cross-env NODE_ENV=production webpack"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"postbuild"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"echo I run after the build script"')]),s._v("  \n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("当执行 "),t("code",[s._v("npm run build")]),s._v(" 的时候，就会自动按照下面的顺序进行执行。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run prebuild "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run build "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run postbuild\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("npm 提供一个 "),t("code",[s._v("npm_lifecycle_event")]),s._v(" 变量，返回正在运行的脚本名称。")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("TARGET")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" process"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("env"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("npm_lifecycle_event"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"_11-变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_11-变量"}},[s._v("#")]),s._v(" 11.变量")]),s._v(" "),t("p",[s._v("npm 脚本可以使用 npm 的内部变量。\n首先，通过 "),t("code",[s._v("npm_package_")]),s._v(" 前缀，npm 脚本可以拿到 "),t("code",[s._v("package.json")]),s._v(" 里面的字段。栗子，下面 "),t("code",[s._v("package.json")])]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"foo"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"version"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.2.5"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"view"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"node view.js"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("变量 "),t("code",[s._v("npm_package_name")]),s._v(" 返回 "),t("code",[s._v("foo")]),s._v("，变量 "),t("code",[s._v("npm_package_version")]),s._v(" 返回 "),t("code",[s._v("1.2.5")]),s._v("。")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// view.js")]),s._v("\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("process"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("env"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("npm_package_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// foo")]),s._v("\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("process"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("env"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("npm_package_version"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 1.2.5")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("在 bash 脚本，可以用 "),t("code",[s._v("$npm_package_name")]),s._v(" 进行取值。")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"foo"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"view"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"echo $npm_package_name"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h2",{attrs:{id:"_12-控制应用程序版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_12-控制应用程序版本"}},[s._v("#")]),s._v(" 12.控制应用程序版本")]),s._v(" "),t("ul",[t("li",[s._v("手动修改")]),s._v(" "),t("li",[t("code",[s._v("npm version")]),s._v(" 加上 patch, minor, major")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("// 当前版本 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),s._v(".0\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" version patch // "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),s._v(".1\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" version minor // "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.1")]),s._v(".0\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" version major // "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.0")]),s._v(".0\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("更多详细介绍参考"),t("RouterLink",{attrs:{to:"/web/tool/npm-管理项目版本号.html"}},[s._v("npm-管理项目版本号")])],1),s._v(" "),t("h2",{attrs:{id:"_13-模块调试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_13-模块调试"}},[s._v("#")]),s._v(" 13.模块调试")]),s._v(" "),t("blockquote",[t("p",[s._v("新开发或修改的 npm 模块，如何在项目中试验？")])]),s._v(" "),t("p",[s._v("我们假设项目是 my-project, 需要用到一个独立的 my-utils 模块。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 先去到模块目录，把它 link 到全局")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" path/to/my-utils\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("link")]),s._v("\n$\n$ "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 再去项目目录通过包名来 link")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" path/to/my-project\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("link")]),s._v(" my-utils\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("去掉 link")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" unlink my-utils\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("blockquote",[t("p",[s._v("先使用 "),t("code",[s._v("npm install")]),s._v(" 安装过 my-utils 的话，可能会提示 "),t("code",[s._v("module is not found")]),s._v(" ，先删除 package-lock.json ，然后重新 "),t("code",[s._v("npm install")]),s._v(" 一次。")])]),s._v(" "),t("h3",{attrs:{id:"参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://juejin.im/post/5d1d40ea6fb9a07eb94fa7df",target:"_blank",rel:"noopener noreferrer"}},[s._v("13 个 npm 快速开发技巧"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2016/10/npm_scripts.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("npm scripts 使用指南"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/atian25/blog/issues/17",target:"_blank",rel:"noopener noreferrer"}},[s._v("你所不知道的模块调试技巧 - npm link"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=e.exports}}]);