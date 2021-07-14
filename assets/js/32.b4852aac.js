(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{378:function(e,r,t){"use strict";t.r(r);var s=t(40),o=Object(s.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"docker-常见报错"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-常见报错"}},[e._v("#")]),e._v(" docker - 常见报错")]),e._v(" "),t("h2",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[e._v("#")]),e._v(" 安装")]),e._v(" "),t("h3",{attrs:{id:"docker-desktop-requires-the-server-service-to-be-enabled"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-desktop-requires-the-server-service-to-be-enabled"}},[e._v("#")]),e._v(" Docker Desktop requires the Server service to be enabled")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("在 win10 上，安装 Docker Desktop 的时候报错提示："),t("code",[e._v("Docker Desktop requires the Server service to be enabled")]),e._v("。\n"),t("img",{attrs:{src:"/img/docker-error-1.png",alt:"Docker Desktop requires the Server service to be enabled"}})])]),e._v(" "),t("li",[t("p",[e._v("启动 Docker Desktop 的时候闪退。")])])]),e._v(" "),t("p",[e._v("原因：Server 服务没有启动。")]),e._v(" "),t("p",[e._v("解决办法：")]),e._v(" "),t("ol",[t("li",[e._v("在命令行运行 cmd ，输入命令 services.msc 并回车;")]),e._v(" "),t("li",[e._v("在弹出的窗口中查找并选中 Server, 双击，将 Server 的 服务状态 设置为 “启动”：\n"),t("img",{attrs:{src:"/img/docker-error-2.png",alt:"启动 Server 服务"}})])]),e._v(" "),t("h3",{attrs:{id:"couldn-t-resolve-host-mirrors-tencentyun-com"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#couldn-t-resolve-host-mirrors-tencentyun-com"}},[e._v("#")]),e._v(" Couldn't resolve host 'mirrors.tencentyun.com'")]),e._v(" "),t("p",[e._v("在腾讯云的服务器上安装 docker 的时候，脚本报错，云服务器镜像问题。\n原因：腾讯云服务器内网yum源的域名 mirrors.tencentyun.com 需要有内网的DNS才能访问，但是实际情况下，我们会根据需要修改DNS，为了使用腾讯云内网快速稳定的内网源，我们需要把DNS恢复为内网DNS。"),t("a",{attrs:{href:"https://www.cnblogs.com/qiujun/p/7058947.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("DNS 地址参考"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("解决方法：")]),e._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("vim")]),e._v(" /etc/resolv.conf\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("添加DNS。")])])}),[],!1,null,null,null);r.default=o.exports}}]);