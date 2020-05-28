(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{298:function(s,e,a){"use strict";a.r(e);var t=a(30),n=Object(t.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"linux服务器-免密登录及设置多个key"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux服务器-免密登录及设置多个key"}},[s._v("#")]),s._v(" linux服务器-免密登录及设置多个key")]),s._v(" "),a("p",[s._v("创建时间：2019-07-10")]),s._v(" "),a("h3",{attrs:{id:"遇到问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#遇到问题"}},[s._v("#")]),s._v(" 遇到问题")]),s._v(" "),a("p",[s._v("在连接到远程服务器的时候，由于一般都是用终端进行连接的，经常需要输入密码，每次输入密码都得找一下。在使用 SSH 协议登录远程服务器时，默认要输入密码进行验证。而通过配置免密登录，就可以省去输入密码的步骤，直接登录了。")]),s._v(" "),a("h3",{attrs:{id:"解决方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决方法"}},[s._v("#")]),s._v(" 解决方法")]),s._v(" "),a("h2",{attrs:{id:"免密登录配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#免密登录配置"}},[s._v("#")]),s._v(" 免密登录配置")]),s._v(" "),a("p",[s._v("免密码登录基于非对称密码，即加密和解密使用不同的密钥，一个是公钥，另一个是私钥。")]),s._v(" "),a("p",[s._v("首先用公钥算法 RSA 生成一对密钥：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("ssh-keygen -t rsa\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("根据提示三次默认回车，就会在 $HOME/.ssh 目录下，会新生成两个文件 "),a("code",[s._v("id_rsa")]),s._v(" 和 "),a("code",[s._v("id_rsa.pub")]),s._v(" 。其中 "),a("code",[s._v("id_rsa")]),s._v(" 是私钥，而 "),a("code",[s._v("id_rsa.pub")]),s._v(" 是公钥。由于要设置多个 ssh key ，因此在"),a("code",[s._v("第一个提示")]),s._v("所要保存的路径时，可以将密钥名字改为 "),a("code",[s._v("xxx_rsa")]),s._v(" 。")]),s._v(" "),a("p",[s._v("插图")]),s._v(" "),a("p",[s._v("然后通过 "),a("code",[s._v("scp")]),s._v(" 将 "),a("code",[s._v("xxx_rsa.pub")]),s._v(" 上传到远程主机 "),a("code",[s._v("$HOME/.ssh")]),s._v("  目录下（如果没有，则新建一个）：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("scp xxx_rsa.pub <remote user>@<remote machine>:~/.ssh\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("然后在远程主机里将公钥复制到 "),a("code",[s._v("authorized_keys")]),s._v(" 文件里，并赋予相关的权限：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("chmod 700 ~/.ssh/\ncd ~/.ssh/\ntouch authorized_keys\ncat xxx_rsa.pub > authorized_keys\nchmod 600 authorized_keys\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("在远程主机的配置文件 "),a("code",[s._v("/etc/ssh/sshd_config")]),s._v(" 里，将 "),a("code",[s._v("PubkeyAuthentication yes")]),s._v(" 和 "),a("code",[s._v("RSAAuthentication yes")]),s._v(" 的注释去掉，然后重启远程主机的 SSH 服务（centos 7）：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("systemctl restart sshd.service\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("接下来就可以免密码登录了。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("ssh -p port user@hostname\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"设置多个-ssh-key"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置多个-ssh-key"}},[s._v("#")]),s._v(" 设置多个 ssh key")]),s._v(" "),a("p",[s._v("在设置完免密登录后，可以不用敲密码了。但是要登录不同的远程主机时，每个帐号参数配置可能不同，比如端口设置不同，这时候敲命令就很劳神费力了。SSH 提供了配置文件用来管理用户的 SSH 会话，该机制可以大大的方便用户登录。")]),s._v(" "),a("p",[s._v("SSH 的配置文件有两个：")]),s._v(" "),a("blockquote",[a("p",[s._v("$ ~/.ssh/config # 用户配置文件"),a("br"),s._v("\n$ /etc/ssh/ssh_config # 系统配置文件")])]),s._v(" "),a("p",[s._v("在 "),a("code",[s._v("~/.ssh/")]),s._v(" 新建 config 文件，其配置如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Host alias                      # 关键词\n    HostName hostname           # 主机地址\n    Port port                   # 指定端口\n    User root                   # 用户名\n    IdentityFile ~/.ssh/xxx_rsa # 认证文件\n    StrictHostKeyChecking no    # 关闭提示\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("若要设置多个 ssh key ，只需要在 config 文件中添加多个 HOST 即可。\n在 "),a("code",[s._v(".ssh/")]),s._v(" 目录下，还有一个文件是 "),a("code",[s._v("known_hosts")]),s._v(" ，该文件是已知的主机公钥名单。\n在第一次连接远程主机时，OpenSSH 会提示： "),a("code",[s._v("无法辨认主机的真实性，询问是否要继续连接")]),s._v(" 。手动输入 yes 之后 ssh 就会将远程主机地址及对应的公钥添加进 known_hosts 文件。下一次连接同一台远程主机时，OpenSSH 通过 known_hosts 文件识别出它的公钥已经保存在本地了，从而跳过提示。\n将 "),a("code",[s._v("StrictHostKeyChecking")]),s._v(" 设置成 no 后，在第一次连接时，ssh 将会自动添加远程主机的相关信息，省略了手动敲 yes 的步骤。\n最后在终端执行命令 "),a("code",[s._v("ssh alias")]),s._v(" 就可以了。")]),s._v(" "),a("h2",{attrs:{id:"单独应用某个配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单独应用某个配置"}},[s._v("#")]),s._v(" 单独应用某个配置")]),s._v(" "),a("ol",[a("li",[s._v("添加到ssh-agent。首先确定ssh-agent is enabled:")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# start the ssh-agent in the background")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("eval")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("ssh-agent -s"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Agent pid 59566")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("添加")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ ssh-add ~/.ssh/id_ecdsa\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("blockquote",[a("p",[s._v("说明 id_ecdsa是私钥，id_ecdsa.pub是公钥。私钥是不能外泄的，我们需要用到的是公钥")])]),s._v(" "),a("h3",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://mindclear.me/14874012084862.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("SSH 免密码登录配置及设置多个 ssh key"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://deepzz.com/post/how-to-setup-ssh-config.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("SSH Config 那些你所知道和不知道的事"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://deepzz.com/post/github-generate-ssh-key.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Github ssh key生成，免密登录服务器方法"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=n.exports}}]);