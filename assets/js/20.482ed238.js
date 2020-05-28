(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{266:function(e,n,r){"use strict";r.r(n);var t=r(30),s=Object(t.a)({},(function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"mongodb-逻辑操作符-or-and-not-nor"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mongodb-逻辑操作符-or-and-not-nor"}},[e._v("#")]),e._v(" mongodb-逻辑操作符$or,$and,$not,$nor")]),e._v(" "),r("p",[e._v("创建时间：2020-05-20")]),e._v(" "),r("p",[e._v("介绍 mongodb 里面的四种逻辑操作符")]),e._v(" "),r("h2",{attrs:{id:"or-或"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#or-或"}},[e._v("#")]),e._v(" $or 或")]),e._v(" "),r("p",[e._v("$or是一个逻辑or操作符操作在一个数据或者多个表达式并且需要选择至少一个满足条件的表达式，$or有至少以下表达式：")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("{ $or: [ { <expression1> }, { <expression2> }, ... , { <expressionN> } ] }\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("p",[e._v("考虑下面的例子：")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("db.inventory.find( { $or: [ { quantity: { $lt: 20 } }, { price: 10 } ] } )\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("p",[e._v("上面的例子会查询集合inventory中所有字段quantity小于20或者price等于10的所有文档。")]),e._v(" "),r("p",[e._v("使用$or条件评估条款，MongoDB会扫描整个文档集合，如果所有的条件支持索引，MongoDB进行索引扫描，因此MongoDB使用索引执行$or表达式，$or中的所有表达式必须支持索引，否则的话MongoDB就会扫描整个集合。")]),e._v(" "),r("p",[e._v("当使用$or查询并且使用索引时，每个$or的条件表达式都可以使用自己的索引，考虑下面的查询：")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("db.inventory.find( { $or: [ { quantity: { $lt: 20 } }, { price: 10 } ] } )\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("p",[e._v("支持上面的查询你不需要创建一个符合索引，而是在字段quantity上创建一个索引，在price上创建一个索引。")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("db.inventory.createIndex( { quantity: 1 } )\ndb.inventory.createIndex( { price: 1 } )\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br")])]),r("p",[e._v("$or和sort()操作\n当使用$or执行sort()查询时，MongoDB可以使用支持$or查询条件的索引。之前的版本不支持索引。")]),e._v(" "),r("p",[e._v("$or与$in")]),e._v(" "),r("p",[e._v("使用$or操作比较字段的值是否等于某个值时可以使用$in替换$or操作；例如查询集合inventory中字段quantity的值等于20或者50的所有文档，使用$in操作：")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("db.inventory.find ( { quantity: { $in: [20, 50] } } )\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("h2",{attrs:{id:"and"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#and"}},[e._v("#")]),e._v(" $and")]),e._v(" "),r("p",[e._v("语法："),r("code",[e._v("{ $and: [ { <expression1> }, { <expression2> } , ... , {<expressionN> } ] }")])]),e._v(" "),r("p",[e._v("$and执行一个逻辑and操作在一个或者多个表达式上，并且查询数组中指定的所有表达式指定的文档document,$and使用短路求值，如果第一个表达式的结果是false，MongoDB将不会执行剩余的表达式；")]),e._v(" "),r("p",[e._v("例如：and查询指定同一个字段的多个查询条件")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("db.inventory.find( { $and: [ { price: { $ne: 1.99 } }, { price: { $exists: true } } ] } )\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("p",[e._v("这个查询会选择集合inventory中的所有文档，条件是price不等于1.99并且price字段存在；\n以上查询还可以使用隐式AND操作，如下：")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("db.inventory.find( { price: { $ne: 1.99, $exists: true } } )\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("p",[e._v("AND查询使用多个表达式指定相同的操作：")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("db.inventory.find( {\n    $and : [\n        { $or : [ { price : 0.99 }, { price : 1.99 } ] },\n        { $or : [ { sale : true }, { qty : { $lt : 20 } } ] }\n    ]\n} )\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br"),r("span",{staticClass:"line-number"},[e._v("4")]),r("br"),r("span",{staticClass:"line-number"},[e._v("5")]),r("br"),r("span",{staticClass:"line-number"},[e._v("6")]),r("br")])]),r("p",[e._v("以上字段将会查询price字段值等于0.99或1.99并且sale字段值为true或者qty小于20的所有文档；\n使用隐式AND操作无法构建此查询，因为它不止一次使用$or操作；")]),e._v(" "),r("h2",{attrs:{id:"not"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#not"}},[e._v("#")]),e._v(" $not")]),e._v(" "),r("p",[e._v("语法： "),r("code",[e._v("{ field: { $not: { <operator-expression> } } }")])]),e._v(" "),r("p",[e._v("$not执行一个逻辑not操作在指定的表达式并查询到不匹配表达式的文档，这包含不包括字段的文档；")]),e._v(" "),r("p",[e._v("考虑如下操作：\ndb.inventory.find( { price: { $not: { $gt: 1.99 } } } )\n此查询将会查询inventory集合中的文档，条件如下：price字段小于等于1.99或者price不存在。\n{ $not: { $gt: 1.99 } } 不同于$lte操作，{ $lte: 1.99 }操作只会返回price字段存在并且小于等于1.99的字段。")]),e._v(" "),r("p",[e._v("记住$not操作符只会影响其他操作符不能独立检查字段和文档，因此使用$not做逻辑析取和$ne操作测试字段内容；")]),e._v(" "),r("p",[e._v("使用$not操作时考虑如下操作：")]),e._v(" "),r("p",[e._v("操作$not操作符和其它操作符一致但是会产生一些意想不到的结果，比如数组之类的数据类型；")]),e._v(" "),r("p",[e._v("$not操作符不支持$regex正则表达式操作，使用//或者你的驱动接口代替，使用语言的正则表达式功能创建正则表达式对象；")]),e._v(" "),r("p",[e._v("考虑下面的例子使用模式匹配//:")]),e._v(" "),r("p",[e._v("db.inventory.find( { item: { $not: /^p.*/ } } )")]),e._v(" "),r("p",[e._v("此查询将会查询inventory集合中item字段不是以p开头的所有文档；")]),e._v(" "),r("h2",{attrs:{id:"nor"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#nor"}},[e._v("#")]),e._v(" $nor")]),e._v(" "),r("p",[r("code",[e._v("{ $nor: [ { <expression1> }, { <expression2> }, ... { <expressionN> } ] }")]),e._v("\n考虑如下操作：")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("db.inventory.find( { $nor: [ { price: 1.99 }, { sale: true } ]  } )\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("p",[e._v("查询返回所有的文档，条件是：")]),e._v(" "),r("p",[e._v("包含字段price值不等于1.99，包含字段sale值不等于true,或者包含字段price值不等于1.99，不包含字段sale；或者不包含字段price,包含字段sale值不等于true;或者不包含字段price，不包含字段sale;")]),e._v(" "),r("p",[e._v("$nor额外比较")]),e._v(" "),r("p",[e._v("考虑如下操作：")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("db.inventory.find( { $nor: [ { price: 1.99 }, { qty: { $lt: 20 } }, { sale: true } ] }\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("p",[e._v("inventory集合查询所有的文档，条件如下：\n字段price不等于1.99，字段qty不小于20，字段sale不等于true;查询的结果包含不存在的字段；")]),e._v(" "),r("h3",{attrs:{id:"参考"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[e._v("#")]),e._v(" 参考")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://blog.csdn.net/yaomingyang/article/details/75103480",target:"_blank",rel:"noopener noreferrer"}},[e._v("MongoDB逻辑操作符$or, $and,$not,$nor"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);n.default=s.exports}}]);