import{_ as t,D as o,V as r,W as l,Y as s,Z as a,$ as n,a0 as i}from"./framework-8e76daeb.js";const p={},c=s("p",null,"最近使用终端 git 的时候觉得速度有点慢，考虑一下是不是可以通过让终端走代理的方式来加快速度，尝试了一下以后确实是可以的。如果只是为了设置 git 的话可以直接在文章最后找到 git 的设置代理的方法。",-1),d=s("h2",{id:"前期准备",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#前期准备","aria-hidden":"true"},"#"),a(" 前期准备:")],-1),u=s("p",null,"认识代理的方式:代理是通过客户端与服务端通信,传输服务端能够访问到的资源文件,再由服务端客户端通信返回给客户端,从而间接访问服务端能访问的资源.",-1),h=s("p",null,"以 socket5 通信为例子,我们通过客户端(自己想一想酸酸乳)向服务端发送 socket 通信,服务端访问资源再由 socket 通信返回给客户端.但是这里面的通信设置必须通过端口来进行通信,类似 switchyomega 设置过程一样,我们会设定走的代理方式是 127.0.0.1:1080;这个意思就是通过本地的 1080 端口来进行通信.具体在终端上如何使用呢?",-1),b=s("p",null,"如果默认是 socket5 通信且端口是 1080,即 127.0.01:1080 的方式 使用如下两种方式",-1),v=s("p",null,"socks5://192.168.2.10:1080 这里无关自己代理客户端是不是酸酸乳或酸酸只要是通过 socket 通信即可,前提是满足已经能够正常代理访问.",-1),g={href:"http://192.168.2.10:7890",target:"_blank",rel:"noopener noreferrer"},_=s("h2",{id:"方法一-推荐使用",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#方法一-推荐使用","aria-hidden":"true"},"#"),a(" 方法一：（推荐使用）")],-1),k=s("p",null,"为什么说这个方法推荐使用呢？因为他只作用于当前终端中，不会影响环境，而且命令比较简单 在终端中直接运行：",-1),m={href:"http://proxyAddress",target:"_blank",rel:"noopener noreferrer"},x={href:"http://192.168.2.10:7890",target:"_blank",rel:"noopener noreferrer"},f={href:"http://192.168.2.10:7890",target:"_blank",rel:"noopener noreferrer"},y=i(`<h2 id="方法二" tabindex="-1"><a class="header-anchor" href="#方法二" aria-hidden="true">#</a> 方法二 ：</h2><p>这个办法的好处是把代理服务器永久保存了，下次就可以直接用了 把代理服务器地址写入 shell 配置文件.bashrc 或者.zshrc 直接在.bashrc 或者.zshrc 添加下面内容</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">http_proxy</span><span class="token operator">=</span><span class="token string">&quot;http://192.168.2.10:7890&quot;</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">https_proxy</span><span class="token operator">=</span><span class="token string">&quot;http://192.168.2.10:7890&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>或者走 socket5 协议（ss,ssr）的话，代理端口是 1080</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">http_proxy</span><span class="token operator">=</span><span class="token string">&quot;socks5://192.168.2.10:7890&quot;</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">https_proxy</span><span class="token operator">=</span><span class="token string">&quot;socks5://192.168.2.10:7890&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>或者干脆直接设置 ALL_PROXY</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">ALL_PROXY</span><span class="token operator">=</span>socks5://192.168.2.10:7890
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>最后在执行如下命令应用设置</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">source</span> ~/.bashrc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或者通过设置 alias 简写来简化操作，每次要用的时候输入 setproxy，不用了就 unsetproxy。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">alias</span> <span class="token assign-left variable">setproxy</span><span class="token operator">=</span><span class="token string">&quot;export ALL_PROXY=socks5://192.168.2.10:7890&quot;</span> <span class="token builtin class-name">alias</span> <span class="token assign-left variable">unsetproxy</span><span class="token operator">=</span><span class="token string">&quot;unset ALL_PROXY&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="方法三" tabindex="-1"><a class="header-anchor" href="#方法三" aria-hidden="true">#</a> 方法三:</h2><p>改相应工具的配置，比如 apt 的配置</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">vim</span> /etc/apt/apt.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在文件末尾加入下面这行</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Acquire::http::Proxy &quot;http://proxyAddress:port&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>重点来了！！如果说经常使用 git 对于其他方面都不是经常使用，可以直接配置 git 的命令。 使用 ss/ssr 来加快 git 的速度 直接输入这个命令就好了</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> http.proxy <span class="token string">&#39;socks5://192.168.2.10:7890&#39;</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> https.proxy <span class="token string">&#39;socks5://192.168.2.10:7890&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,18);function q(L,A){const e=o("ExternalLinkIcon");return r(),l("div",null,[c,d,u,h,b,v,s("p",null,[a("第二种是 http 代理,即通信方式为 http 而不是 socket "),s("a",g,[a("http://192.168.2.10:7890"),n(e)])]),_,k,s("p",null,[a("export http_proxy="),s("a",m,[a("http://proxyAddress"),n(e)]),a(":port 如果你是 SSR,并且走的 http 的代理端口是 12333，想执行 wget 或者 curl 来下载国外的东西，可以使用如下命令：")]),s("p",null,[a("export http_proxy="),s("a",x,[a("http://192.168.2.10:7890"),n(e)]),a(" 如果是 https 那么就经过如下命令：")]),s("p",null,[a("export https_proxy="),s("a",f,[a("http://192.168.2.10:7890"),n(e)])]),y])}const R=t(p,[["render",q],["__file","linux_set_proxy.html.vue"]]);export{R as default};
