(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{386:function(s,t,a){"use strict";a.r(t);var e=a(43),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"babel-preset-env和polyfill"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#babel-preset-env和polyfill"}},[s._v("#")]),s._v(" babel - preset-env和polyfill")]),s._v(" "),a("p",[s._v("@babel/preset-env + @babel/polyfill 可以完全实现 ES 基础语法的转译 + 新 API 的转译，让低端运行环境（浏览器和node）能够识别和运行较新的语法规范(ES6/ES7/ES8/ES99)。")]),s._v(" "),a("h2",{attrs:{id:"babel-preset-env"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#babel-preset-env"}},[s._v("#")]),s._v(" @babel/preset-env")]),s._v(" "),a("p",[s._v("主要完成基本语法转义。或者说语法糖：箭头函数，"),a("code",[s._v("async")])]),s._v(" "),a("p",[s._v("在之前，需要使用 "),a("code",[s._v("preset-es20**")]),s._v(" 系列的 babel 预设，所以有个问题就是，每增加一个新的提案，就需要加一个。。现在只用一个就可以了。")]),s._v(" "),a("blockquote",[a("p",[s._v("Babel 默认只转换新的 JavaScript 句法（syntax），而不转换新的 API，比如 Iterator、Generator、Set、Maps、Proxy、Reflect、Symbol、Promise 等全局对象，以及一些定义在全局对象上的方法（比如 Object.assign）都不会转码。")])]),s._v(" "),a("ol",[a("li",[s._v("安装")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" @babel/preset-env -D\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("添加配置")])]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"presets"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n       "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@babel/preset-env"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n       "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n         "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"modules"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v(" \n       "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"plugins"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("blockquote",[a("p",[s._v("modules:false 对ES6的模块文件不做转化，以便使用tree shaking、sideEffects等")])]),s._v(" "),a("h2",{attrs:{id:"babel-polyfill"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#babel-polyfill"}},[s._v("#")]),s._v(" @babel/polyfill")]),s._v(" "),a("p",[s._v("主要完成新增 API 的转义。")]),s._v(" "),a("blockquote",[a("p",[s._v("本质上 @babel/polyfill 是 core-js 库的别名。core-js@3 之后，需要使用 core-js + regenerator-runtime 的方式来引入了。")])]),s._v(" "),a("ol",[a("li",[s._v("安装")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" @babel/polyfill\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("添加配置")])]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"presets"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@babel/preset-env"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"useBuiltIns"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"entry"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"modules"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"corejs"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("blockquote",[a("p",[s._v('"corejs": 2 新版本的@babel/polyfill包含了 core-js@2 和 core-js@3 版本，所以需要声明版本，否则webpack运行时会报warning，此处暂时使用core-js@2版本')])]),s._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[s._v("配置参数\n"),a("ul",[a("li",[s._v("modules："),a("code",[s._v('"amd" | "umd" | "systemjs" | "commonjs" | "cjs" | "auto" | false')]),s._v("，默认值是 auto。"),a("br"),s._v("\n用来转换 ES6 的模块语法。如果使用 false，将不会对文件的模块语法进行转化。"),a("br"),s._v("\n如果要使用 webpack 中的一些新特性，比如 tree shaking 和 sideEffects，就需要设置为 false，对 ES6 的模块文件不做转化，因为这些特性只对 ES6 的模块有效。")]),s._v(" "),a("li",[s._v("useBuiltIns："),a("code",[s._v('"usage" | "entry" | false')]),s._v("，默认值是 false。"),a("br"),s._v(" "),a("ul",[a("li",[s._v("false：需要在 js 代码第一行主动 import '@babel/polyfill'，会将@babel/polyfill 整个包全部导入。"),a("br"),s._v("\n（能覆盖到所有 API 的转译，打包后体积最大）")]),s._v(" "),a("li",[s._v("entry：需要在 js 代码第一行主动 import '@babel/polyfill'，会将 browserslist 环境不支持的所有垫片都导入。"),a("br"),s._v("\n（能够覆盖到 "),a("code",[s._v("'hello'.includes('h')")]),s._v(" 这种句法（待验证），足够安全，代码体积不是特别大）")]),s._v(" "),a("li",[s._v("usage：项目里不用主动 import，会自动将代码里已使用到的、且 browserslist 环境不支持的垫片导入。"),a("br"),s._v("\n（检测不到 "),a("code",[s._v("'hello'.includes('h')")]),s._v(" 这种句法，对这类原型链上的句法问题不会做转译，书写代码需注意，体积最小）")])])]),s._v(" "),a("li",[s._v("targets：用来配置需要支持的的环境，不仅支持浏览器，还支持 node。如果没有配置 targets 选项，就会读取项目中的 browserslist 配置项。")]),s._v(" "),a("li",[s._v("loose：默认 false，babel 输出模式，宽松模式下，输出代码更像手写的（大概少了很多类型兼容判断）。如果 preset-env 中包含的 plugin 支持 loose 的设置，那么可以通过这个字段来做统一的设置。")])])])]),s._v(" "),a("p",[s._v("使用 "),a("code",[s._v("@babel/polyfill")]),s._v(" 的方式，会在全局挂载新 API，会污染全局命名空间，不推荐在工具库中使用这种方式。")]),s._v(" "),a("h2",{attrs:{id:"corejs-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#corejs-3"}},[s._v("#")]),s._v(" corejs@3")]),s._v(" "),a("p",[s._v("替换 @babel/polyfill 方案。")]),s._v(" "),a("p",[s._v("原因:")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/zloirock/core-js/blob/master/docs/2019-03-19-core-js-3-babel-and-a-look-into-the-future.md",target:"_blank",rel:"noopener noreferrer"}},[s._v("core-js@3 解释"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://babeljs.io/blog/2019/03/19/7.4.0",target:"_blank",rel:"noopener noreferrer"}},[s._v("babel@7.4.0 更新内容及使用建议"),a("OutboundLink")],1)])]),s._v(" "),a("blockquote",[a("p",[s._v("babel-loader > 8.0.0\n@babel/core > 7.4.0")])]),s._v(" "),a("ol",[a("li",[s._v("安装依赖")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" babel-loader @babel/core @babel/preset-env -D\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" core-js regenerator-runtime\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v(".babelrc 配置")])]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"presets"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@babel/preset-env"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"modules"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"useBuiltIns"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"entry"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"corejs"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"version"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n          "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"proposals"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("引入依赖")])]),s._v(" "),a("p",[s._v("根据 "),a("code",[s._v("useBuiltIns")]),s._v(" 的选择来若修改。参考上面 "),a("a",{attrs:{href:"#babel-polyfill"}},[s._v("@babel/polyfill")]),s._v(" 配置参数的介绍。")]),s._v(" "),a("p",[s._v("在代码头部入口("),a("code",[s._v("app.js")]),s._v(")，做修改：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'core-js/stable'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'regenerator-runtime/runtime'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("core-js@3废弃了 @babel/polyfill ，实现了完全无污染的API转译，但是其暂时会增加打包体积。")]),s._v(" "),a("h2",{attrs:{id:"babel-plugin-transform-runtime"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#babel-plugin-transform-runtime"}},[s._v("#")]),s._v(" @babel/plugin-transform-runtime")]),s._v(" "),a("p",[s._v("按需加载 API 转义。")]),s._v(" "),a("blockquote",[a("p",[s._v("特点是：不会污染原型链。适用于在开发第三方 js 库时使用。")])]),s._v(" "),a("ol",[a("li",[s._v("安装依赖")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" babel-loader @babel/core @babel/preset-env @babel/plugin-transform-runtime -D\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" @babel/runtime-corejs3\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v(".babelrc 文件配置")])]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"presets"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@babel/preset-env"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"modules"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"plugins"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@babel/plugin-transform-runtime"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"corejs"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"version"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"proposals"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"useESModules"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("配置参数")])]),s._v(" "),a("ul",[a("li",[a("p",[a("code",[s._v("corejs")]),s._v("："),a("code",[s._v("false | 2 | 3 | { version: 2 | 3, proposals: boolean }")]),s._v("，默认是 "),a("code",[s._v("false")]),s._v("；使用 "),a("code",[s._v("corejs:3")]),s._v("的时候，可以设置 "),a("code",[s._v("proposals: true")]),s._v(" 来启用 polyfill 提案。")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("version")]),s._v(" 决定了 "),a("code",[s._v("runtime")]),s._v(" 的版本；")])])]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[a("code",[s._v("corejs")])]),s._v(" "),a("th",[s._v("Install command")]),s._v(" "),a("th",[s._v("效果")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[a("code",[s._v("false")])]),s._v(" "),a("td",[a("code",[s._v("npm install --save @babel/runtime")])]),s._v(" "),a("td",[s._v("只做语法转换")])]),s._v(" "),a("tr",[a("td",[a("code",[s._v("2")])]),s._v(" "),a("td",[a("code",[s._v("npm install --save @babel/runtime-corejs2")])]),s._v(" "),a("td",[s._v("语法转换，新 API 的 polyfill")])]),s._v(" "),a("tr",[a("td",[a("code",[s._v("3")])]),s._v(" "),a("td",[a("code",[s._v("npm install --save @babel/runtime-corejs3")])]),s._v(" "),a("td",[s._v("语法转换，无污染的 API 转义，增删了功能")])])])]),s._v(" "),a("ul",[a("li",[a("code",[s._v("helpers")]),s._v(" 默认值 true，用来开启是否使用 helper 函数来重写语法转换的函数。")]),s._v(" "),a("li",[a("code",[s._v("useESModules")]),s._v(" 默认值 false，是否对文件使用 ES 的模块语法，使用 ES 的模块语法可以减少文件的大小。")])]),s._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[s._v("transform-runtime 使用 core-js@3")])]),s._v(" "),a("ul",[a("li",[s._v("在之前的版本中，无法模拟实例上的方法，比如数组的 includes 方法就无法被 polyfill，只能完整加载才可以。在 core-js@3 的版本中，所有的实例方法都可以被 polyfill 了。")]),s._v(" "),a("li",[s._v("不污染原型，使用沙盒（sandbox）模式引入。")]),s._v(" "),a("li",[s._v("支持对 ECMAScript 提案的 API 进行模拟，"),a("code",[s._v("proposals: true")]),s._v(" 来启用 polyfill 提案。")])]),s._v(" "),a("h3",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://babeljs.io/docs/en/next/babel-polyfill.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("@babel/polyfill"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://segmentfault.com/a/1190000020237779",target:"_blank",rel:"noopener noreferrer"}},[s._v("Babel7 转码（二） - @babel/preset-env + @babel/polyfill"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://segmentfault.com/a/1190000020237817",target:"_blank",rel:"noopener noreferrer"}},[s._v("Babel7 转码（五）- corejs3 的更新"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://webpack.eleven.net.cn/content/babel/polyfill-or-runtime.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("@babel/polyfill 还是 @babel/plugin-transform-runtime"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://segmentfault.com/a/1190000021188054",target:"_blank",rel:"noopener noreferrer"}},[s._v("@babel/preset-env 与@babel/plugin-transform-runtime 使用及场景区别"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/creeperyang/blog/issues/25",target:"_blank",rel:"noopener noreferrer"}},[s._v("了解 Babel 6 & 7 生态"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=n.exports}}]);