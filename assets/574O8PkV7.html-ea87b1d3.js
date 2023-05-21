import{_ as l,D as t,V as c,W as r,Y as n,Z as s,$ as e,a0 as i}from"./framework-8e76daeb.js";const o={},d=n("h2",{id:"windoww",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#windoww","aria-hidden":"true"},"#"),s(" windoww")],-1),u={href:"https://hub.docker.com/editions/community/docker-ce-desktop-windows",target:"_blank",rel:"noopener noreferrer"},p=i(`<li><p>开启 Hyper-V powershell 运行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Enable-WindowsOptionalFeature <span class="token parameter variable">-Online</span> <span class="token parameter variable">-FeatureName</span> Microsoft-Hyper-V <span class="token parameter variable">-All</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>检测是否安装成功 powershell 运行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run hello-world
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>`,2),v=i(`<h2 id="ubuntu-2204" tabindex="-1"><a class="header-anchor" href="#ubuntu-2204" aria-hidden="true">#</a> ubuntu(2204)</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> docker.io
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="wsl2、ubuntu" tabindex="-1"><a class="header-anchor" href="#wsl2、ubuntu" aria-hidden="true">#</a> wsl2、ubuntu</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Ensures not older packages are installed</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> remove <span class="token function">docker</span> docker-engine docker.io containerd runc

<span class="token comment"># Ensure pre-requisites are installed</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> update
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token punctuation">\\</span>
  apt-transport-https <span class="token punctuation">\\</span>
  ca-certificates <span class="token punctuation">\\</span>
  <span class="token function">curl</span> <span class="token punctuation">\\</span>
  gnupg <span class="token punctuation">\\</span>
  lsb-release <span class="token parameter variable">-y</span>

<span class="token comment"># Adds docker apt repository</span>
<span class="token builtin class-name">echo</span> <span class="token punctuation">\\</span>
    <span class="token string">&quot;deb [arch=<span class="token variable"><span class="token variable">$(</span>dpkg --print-architecture<span class="token variable">)</span></span> signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu <span class="token variable"><span class="token variable">$(</span>lsb_release <span class="token parameter variable">-cs</span><span class="token variable">)</span></span> stable&quot;</span> <span class="token operator">|</span>
    <span class="token function">sudo</span> <span class="token function">tee</span> /etc/apt/sources.list.d/docker.list <span class="token operator">&gt;</span> /dev/null

<span class="token comment"># Adds docker apt key</span>
<span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://download.docker.com/linux/ubuntu/gpg <span class="token operator">|</span>
    <span class="token function">sudo</span> gpg <span class="token parameter variable">--dearmor</span> <span class="token parameter variable">-o</span> /usr/share/keyrings/docker-archive-keyring.gpg

<span class="token comment"># Refreshes apt repos</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> update

<span class="token comment"># Installs Docker CE</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> docker-ce docker-ce-cli containerd.io <span class="token parameter variable">-y</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="debian-docker、centos-docker-安装" tabindex="-1"><a class="header-anchor" href="#debian-docker、centos-docker-安装" aria-hidden="true">#</a> Debian Docker、CentOS Docker 安装</h2><h3 id="使用官方安装脚本自动安装" tabindex="-1"><a class="header-anchor" href="#使用官方安装脚本自动安装" aria-hidden="true">#</a> 使用官方安装脚本自动安装</h3><ul><li>安装命令如下：</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-4fsSL</span> https://get.docker.com <span class="token operator">|</span> <span class="token function">bash</span> <span class="token parameter variable">-s</span> <span class="token function">docker</span> <span class="token parameter variable">--mirror</span> Aliyun
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>也可以使用国内 daocloud 一键安装命令：</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-sSL</span> https://get.daocloud.io/docker <span class="token operator">|</span> <span class="token function">sh</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="卸载-docker-debian-docker、ubuntu-docker" tabindex="-1"><a class="header-anchor" href="#卸载-docker-debian-docker、ubuntu-docker" aria-hidden="true">#</a> 卸载 docker（Debian Docker、Ubuntu Docker）</h2><ul><li>删除安装包：</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> purge docker-ce docker-ce-cli containerd.io
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>删除镜像、容器、配置文件等内容：</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/lib/docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="卸载-docker-centos-docker" tabindex="-1"><a class="header-anchor" href="#卸载-docker-centos-docker" aria-hidden="true">#</a> 卸载 docker（CentOS Docker）</h2><ul><li>删除安装包：</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum remove docker-ce
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>删除镜像、容器、配置文件等内容：</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/lib/docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="配置-docker-镜像源" tabindex="-1"><a class="header-anchor" href="#配置-docker-镜像源" aria-hidden="true">#</a> 配置 docker 镜像源</h2><p>创建或修改 /etc/docker/daemon.json 文件，并写入以下内容：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">vim</span> /etc/docker/daemon.json

<span class="token punctuation">{</span>
  <span class="token string">&quot;registry-mirrors&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
       <span class="token string">&quot;https://0hgxc31r.mirror.aliyuncs.com&quot;</span>,
       <span class="token string">&quot;https://docker.mirrors.ustc.edu.cn/&quot;</span>,
       <span class="token string">&quot;https://hub-mirror.c.163.com/&quot;</span>,
       <span class="token string">&quot;https://reg-mirror.qiniu.com&quot;</span>,
       <span class="token string">&quot;https://mirror.ccs.tencentyun.com&quot;</span>
  <span class="token punctuation">]</span>,
  <span class="token string">&quot;insecure-registries&quot;</span>:<span class="token punctuation">[</span>
          <span class="token string">&quot;http://192.168.2.10:5000&quot;</span>,
          <span class="token string">&quot;http://192.168.50.28:8082&quot;</span>,
          <span class="token string">&quot;http://192.168.50.28:8081&quot;</span>,
          <span class="token string">&quot;http://192.168.50.28:5000&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
<span class="token comment">#依次执行以下命令，重新启动 Docker 服务。</span>
<span class="token function">sudo</span> systemctl daemon-reload
<span class="token function">sudo</span> <span class="token function">service</span> <span class="token function">docker</span> restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装-docker-compose" tabindex="-1"><a class="header-anchor" href="#安装-docker-compose" aria-hidden="true">#</a> 安装 docker compose</h2>`,24),k={href:"https://clearlove443.github.io/blogs/docker/docker-compose-install.html",target:"_blank",rel:"noopener noreferrer"},b=i(`<h2 id="ubuntu修改ip" tabindex="-1"><a class="header-anchor" href="#ubuntu修改ip" aria-hidden="true">#</a> ubuntu修改ip</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /etc/netplan/

要配置静态 IP 代替 DHCP
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># This is the network config written by &#39;subiquity&#39;</span>
<span class="token key atrule">network</span><span class="token punctuation">:</span>
  <span class="token key atrule">ethernets</span><span class="token punctuation">:</span>
    <span class="token key atrule">enp0s3</span><span class="token punctuation">:</span>
      <span class="token key atrule">addresses</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> 192.168.2.201/24
      <span class="token key atrule">nameservers</span><span class="token punctuation">:</span>
        <span class="token key atrule">addresses</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>192.168.2.1<span class="token punctuation">]</span>
      <span class="token key atrule">routes</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">to</span><span class="token punctuation">:</span> default
          <span class="token key atrule">via</span><span class="token punctuation">:</span> 192.168.2.1
  <span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> netplan apply
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="添加用户到sudo-用户组" tabindex="-1"><a class="header-anchor" href="#添加用户到sudo-用户组" aria-hidden="true">#</a> 添加用户到sudo 用户组</h2>`,5),m={href:"https://clearlove443.github.io/blogs/linux/linux_user_add_delete.html",target:"_blank",rel:"noopener noreferrer"},h=n("h2",{id:"ssh免密码登录",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#ssh免密码登录","aria-hidden":"true"},"#"),s(" ssh免密码登录")],-1),g={href:"https://clearlove443.github.io/blogs/linux/linux_ssh_add_privtekey.html",target:"_blank",rel:"noopener noreferrer"};function f(_,x){const a=t("ExternalLinkIcon");return c(),r("div",null,[d,n("ul",null,[n("li",null,[n("p",null,[s("下载"),n("a",u,[s("Docker Desktop"),e(a)])])]),p]),v,n("p",null,[n("a",k,[s("安装 docker compose"),e(a)])]),b,n("p",null,[n("a",m,[s("添加用户到sudo 用户组"),e(a)])]),h,n("p",null,[n("a",g,[s("免密码登录"),e(a)])])])}const q=l(o,[["render",f],["__file","574O8PkV7.html.vue"]]);export{q as default};
