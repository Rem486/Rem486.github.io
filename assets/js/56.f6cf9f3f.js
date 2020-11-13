(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{404:function(e,s,n){"use strict";n.r(s);var a=n(43),r=Object(a.a)({},(function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"nginx-反向代理及cookie"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nginx-反向代理及cookie"}},[e._v("#")]),e._v(" nginx - 反向代理及Cookie")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("server {\n    listen       9001;\n    location /api {\n         add_header 'Access-Control-Allow-Origin' '*';\n         add_header 'Access-Control-Allow-Credentials' 'true';\n         add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';\n         add_header 'Access-Control-Allow-Headers' 'DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type';\n         proxy_set_header Host $host;\n         proxy_set_header X-Real-IP $remote_addr;\n         proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n         proxy_set_header Cookie $http_cookie; # 设置cookie\n         proxy_pass http://api.server/; # 代理的服务器地址\n         proxy_cookie_domain domino.server nginx.server;\n         proxy_redirect off;\n    }\n}\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br"),n("span",{staticClass:"line-number"},[e._v("15")]),n("br"),n("span",{staticClass:"line-number"},[e._v("16")]),n("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);