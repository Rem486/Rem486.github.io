(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{287:function(s,n,e){"use strict";e.r(n);var a=e(30),t=Object(a.a)({},(function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"npm-管理项目版本号"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#npm-管理项目版本号"}},[s._v("#")]),s._v(" npm-管理项目版本号")]),s._v(" "),e("p",[s._v("创建时间：2020-04-20")]),s._v(" "),e("h3",{attrs:{id:"遇到问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#遇到问题"}},[s._v("#")]),s._v(" 遇到问题")]),s._v(" "),e("p",[s._v("在使用 npm 管理项目的时候，"),e("code",[s._v("package.json")]),s._v(" 里面都有一个版本号。需要修改的时候，都是怎么操作的呢？可别再是手动修改了。npm 已经提供了非常方便的命令。")]),s._v(" "),e("h3",{attrs:{id:"解决方案"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[s._v("#")]),s._v(" 解决方案")]),s._v(" "),e("h4",{attrs:{id:"npm-命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#npm-命令"}},[s._v("#")]),s._v(" npm 命令")]),s._v(" "),e("p",[s._v("命令行输入 "),e("code",[s._v("npm version -h")]),s._v("，可以看到：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" version -h\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# npm version [<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease [--preid=<prerelease-id>] | from-git] (run in package dir)")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 'npm -v' or 'npm --version' to print npm version (6.4.1)")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 'npm view <pkg> version' to view a package's published version")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 'npm ls' to inspect current package/dependency versions")]),s._v("\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("p",[s._v("后面的参数可以看到，支持直接指定新版本，或者指定升级版本，先行版，测试版等。")]),s._v(" "),e("p",[s._v("举例说明🌰\n假如我们现在的版本号是 "),e("code",[s._v("version: 1.0.0")]),s._v("，下面我们依次运行下面代码")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" version major // 主版本号:当你做了不兼容的API修改\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# v2.0.0")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" version minor // 次版本号:当你做了向下兼容的功能性新增\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# v2.1.0")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" version patch // 补丁号:当你做了向下兼容的问题修正\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# v2.1.1")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" version premajor // 预备主版本\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# v3.0.0-0")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" version preminor // 预备次版本\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# v3.1.0-0")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" version prepatch // 预备补丁版本\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# v3.1.1-0")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" version prerelease // 预发布版本\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# v3.1.1-1")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" version prerelease --preid"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("alpha // 命名先行版,测试版用beta\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# v3.1.1.-alpha.0")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" version prerelease // 升级先行版\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# v3.1.1-alpha.1")]),s._v("\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br")])]),e("p",[s._v("补充说明，运行 "),e("code",[s._v("npm version")]),s._v(" 的时候，本地 "),e("code",[s._v("git status")]),s._v(" 需要是 "),e("code",[s._v("clear")]),s._v(" 的。因为运行命令之后会自动提交一个 "),e("code",[s._v("commit")]),s._v(" 并打上 "),e("code",[s._v("tag")]),s._v("。")]),s._v(" "),e("p",[s._v("也可以自定义 "),e("code",[s._v("commit message")]),s._v("。比如：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" version patch -m "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"升级到 %s: 演示自定义msg"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# v3.1.1")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[e("code",[s._v("message")]),s._v(" 中的 "),e("code",[s._v("s%")]),s._v(" 将会被替换为版本号。")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://s1.ax1x.com/2020/04/23/Ja3oSf.jpg",alt:"npm-version"}})]),s._v(" "),e("h4",{attrs:{id:"版本号策略"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#版本号策略"}},[s._v("#")]),s._v(" 版本号策略")]),s._v(" "),e("p",[s._v("我们需要根据改动来选择升级对应版本号。\n版本号格式：主版本号.次版本号.补丁号：")]),s._v(" "),e("ul",[e("li",[s._v("主版本号：当你做了不兼容的 API 修改;")]),s._v(" "),e("li",[s._v("次版本号：当你做了向下兼容的功能性新增;")]),s._v(" "),e("li",[s._v("补丁号：当你做了向下兼容的问题修正;")]),s._v(" "),e("li",[s._v("预发布版本号：还没有正式发布的版本")])]),s._v(" "),e("p",[s._v("版本号只能增加，禁止下降，代码的修改必须以新版形式更新。")]),s._v(" "),e("p",[s._v("特别是当你的代码已经是正式环境，而且有使用者依赖。升级的时候就需要仔细的注意不兼容性问题。")]),s._v(" "),e("p",[s._v("例子🌰：\n"),e("a",{attrs:{href:"https://github.com/beautify-web/js-beautify/issues/1783",target:"_blank",rel:"noopener noreferrer"}},[s._v("Node version requires at least 10"),e("OutboundLink")],1),s._v(" "),e("img",{attrs:{src:"https://s1.ax1x.com/2020/04/23/JaJ9Z4.jpg",alt:"mkdirp-version"}})]),s._v(" "),e("p",[s._v("背景这样的，项目里面依赖了 "),e("code",[s._v("js-beautify@^1.10.3")]),s._v(" 这个仓库，然后它又依赖了 "),e("code",[s._v("mkdirp@~0.5.1")]),s._v(" 。")]),s._v(" "),e("p",[s._v("然后，"),e("code",[s._v("mkdirp")]),s._v(" 的作者在前不久更新了对 "),e("code",[s._v("nodejs")]),s._v(" 版本的依赖，从 "),e("code",[s._v("node@8 -> node@10")]),s._v("。并升级版本到 "),e("code",[s._v("mkdirp@1.0.0")]),s._v(" "),e("a",{attrs:{href:"https://github.com/isaacs/node-mkdirp/commit/2ecfd4901c47692ffa04e495d9248d115b83de55#diff-b9cfc7f2cdf78a7f4b91a753d10865a2",target:"_blank",rel:"noopener noreferrer"}},[s._v("package updates"),e("OutboundLink")],1),s._v(" "),e("img",{attrs:{src:"https://s1.ax1x.com/2020/04/23/JaUzVS.jpg",alt:"mkdirp-update"}})]),s._v(" "),e("p",[s._v("然后，"),e("code",[s._v("js-beautify")]),s._v(" 升级到 "),e("code",[s._v("1.11.x")]),s._v(" 的时候，顺便也升级了 "),e("code",[s._v("mkdirp@~1.0.3")]),s._v("。")]),s._v(" "),e("p",[s._v("然后 "),e("code",[s._v("js-beautify")]),s._v(" 这次升级的是次版本号，所以在安装依赖的时候就会安装 "),e("code",[s._v("js-beautify@1.11.x")]),s._v("，进而安装 "),e("code",[s._v("mkdirp@~1.0.3")])]),s._v(" "),e("p",[s._v("最后，对 "),e("code",[s._v("nodejs")]),s._v(" 版本的依赖也就变成了 "),e("code",[s._v("node@10")]),s._v("。就会提示")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('error mkdirp@1.0.4: The engine "node" is incompatible with this module. Expected version ">=10". Got "8.x"\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("因为运行环境安装的还是 "),e("code",[s._v("node@8")]),s._v("，可能有同学就说那就升级一下 node 版本就好了。如果是我们本地开发环境，当然很 easy , n/nvm 都可以方便管理 node 版本。但是这个报错是在公司的 CI 服务器上，就很尴尬了。因为上面跑了很多项目，也没法说想升级就升级。")]),s._v(" "),e("p",[s._v("临时办法总还是有的，那就是 "),e("code",[s._v("yarn.lock")]),s._v("/"),e("code",[s._v("package-lock.json")]),s._v(" 里面锁定版本。"),e("code",[s._v("js-beautify to 1.10.3, mkdirp to 0.5.5")]),s._v("。")]),s._v(" "),e("p",[s._v("最后最后，我觉得 isaacs 在升级 node 依赖的时候的推特说的挺有道理的。因为 node@8 停止更新有段时间了，所以升级 node@10 ，后面评论里还补充了一句下次 node@10 停止的时候，又会再次考虑升级。\n"),e("img",{attrs:{src:"https://s1.ax1x.com/2020/04/23/JaLfMj.jpg",alt:"mkdirp-tt"}})]),s._v(" "),e("p",[s._v("让我想到了 某E ，我们应该支持这种升级。\n"),e("img",{attrs:{src:"https://s1.ax1x.com/2020/04/23/JaODl4.jpg",alt:"mkdirp-ie"}})]),s._v(" "),e("h3",{attrs:{id:"参考"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"http://buzhundong.com/post/%E7%89%88%E6%9C%AC%E5%8F%B7%E7%AE%A1%E7%90%86%E7%AD%96%E7%95%A5-%E4%BD%BF%E7%94%A8npm%E7%AE%A1%E7%90%86%E9%A1%B9%E7%9B%AE%E7%89%88%E6%9C%AC%E5%8F%B7.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("版本号管理策略&&使用npm管理项目版本号"),e("OutboundLink")],1)]),s._v(" "),e("li",[e("a",{attrs:{href:"https://docs.npmjs.com/cli/version#description",target:"_blank",rel:"noopener noreferrer"}},[s._v("npm-version"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);n.default=t.exports}}]);