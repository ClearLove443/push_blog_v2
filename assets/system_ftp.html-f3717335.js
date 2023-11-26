import{_ as r,D as i,V as c,W as o,Y as e,Z as a,$ as n,a0 as l}from"./framework-b293865d.js";const t={},d=l(`<h2 id="网络通信协议分层" tabindex="-1"><a class="header-anchor" href="#网络通信协议分层" aria-hidden="true">#</a> 网络通信协议分层</h2><h3 id="应用层" tabindex="-1"><a class="header-anchor" href="#应用层" aria-hidden="true">#</a> 应用层：</h3><ul><li>HTTP（Hypertext Transfer Protocol 超文本传输协议，显示网页）</li><li>DNS（Domain Name System）</li><li>FTP（File Transfer Protocol）</li><li>SFTP（SSH File Transfer Protocol，和 FTP 不一样）</li><li>SCP（Secure copy，based on SSH）</li><li>SSH （Secure Shell）</li></ul><h3 id="通信层" tabindex="-1"><a class="header-anchor" href="#通信层" aria-hidden="true">#</a> 通信层：</h3><ul><li>TCP（Transmission Control Protocol 三次握手传输协议）</li><li>UDP</li></ul><h3 id="网络层" tabindex="-1"><a class="header-anchor" href="#网络层" aria-hidden="true">#</a> 网络层：</h3><ul><li>IP（Internet Protocol）</li><li>ICMP（Internet Control Message Protocol，主要用于路由发送错误报告）</li></ul><h3 id="链接层" tabindex="-1"><a class="header-anchor" href="#链接层" aria-hidden="true">#</a> 链接层：</h3><ul><li>MAC（media access control）</li></ul><h2 id="文件传输协议" tabindex="-1"><a class="header-anchor" href="#文件传输协议" aria-hidden="true">#</a> 文件传输协议</h2><h3 id="ftp-file-transfer-protocol" tabindex="-1"><a class="header-anchor" href="#ftp-file-transfer-protocol" aria-hidden="true">#</a> FTP（File Transfer Protocol）</h3><p>TCP/IP 网络上两台计算机传送文件的协议，FTP 是在 TCP/IP 网络和 INTERNET 上最早使用的协议之一，它属于网络协议组的应用层。FTP 客户机可以给服务器发出命令来下载文件，上载文件，创建或改变服务器上的目录。相比于 HTTP，FTP 协议要复杂得多。复杂的原因，是因为 FTP 协议要用到两个 TCP 连接，一个是命令链路，用来在 FTP 客户端与服务器之间传递命令；另一个是数据链路，用来上传或下载数据。FTP 是基于 TCP 协议的，因此 iptables 防火墙设置中只需要放开指定端口（21 + PASV 端口范围）的 TCP 协议即可。 FTP 工作模式： PORT（主动）方式的连接过程是：客户端向服务器的 FTP 端口（默认是 21）发送连接请求，服务器接受连接，建立一条命令链路。当需要传送数据时，客户端在命令链路上用 PORT 命令告诉服务器：“我打开了一个 1024+的随机端口，你过来连接我”。于是服务器从 20 端口向客户端的 1024+随机端口发送连接请求，建立一条数据链路来传送数据。 PASV（Passive 被动）方式的连接过程是：客户端向服务器的 FTP 端口（默认是 21）发送连接请求，服务器接受连接，建立一条命令链路。当需要传送数据时，服务器在命令链路上用 PASV 命令告诉客户端：“我打开了一个 1024+的随机端口，你过来连接我”。于是客户端向服务器的指定端口发送连接请求，建立一条数据链路来传送数据。 PORT 方式，服务器会主动连接客户端的指定端口，那么如果客户端通过代理服务器链接到 internet 上的网络的话，服务器端可能会连接不到客户端本机指定的端口，或者被客户端、代理服务器防火墙阻塞了连接，导致连接失败。PASV 方式，服务器端防火墙除了要放开 21 端口外，还要放开 PASV 配置指定的端口范围。</p><h3 id="sftp-secure-file-transfer-protocol" tabindex="-1"><a class="header-anchor" href="#sftp-secure-file-transfer-protocol" aria-hidden="true">#</a> SFTP（Secure File Transfer Protocol）</h3><p>安全文件传送协议。可以为传输文件提供一种安全的加密方法。SFTP 与 FTP 有着几乎一样的语法和功能。SFTP 为 SSH 的一部份，是一种传输文件到服务器的安全方式。在 SSH 软件包中，已经包含了一个叫作 SFTP(Secure File Transfer Protocol)的安全文件传输子系统，SFTP 本身没有单独的守护进程，它必须使用 sshd 守护进程（端口号默认是 22）来完成相应的连接操作，所以从某种意义上来说，SFTP 并不像一个服务器程序，而更像是一个客户端程序。SFTP 同样是使用加密传输认证信息和传输的数据，所以，使用 SFTP 是非常安全的。但是，由于这种传输方式使用了加密/解密技术，所以传输效率比普通的 FTP 要低得多，如果您对网络安全性要求更高时，可以使用 SFTP 代替 FTP</p><ul><li>连接到远程服务器</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#scp 命令使用端口号 22 默认 22 可省略</span>
<span class="token function">sftp</span> <span class="token parameter variable">-P</span> <span class="token number">22</span> ubuntu@192.168.2.72
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>当前服务器路径</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">pwd</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>当前本地路径</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>lpwd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>下载文件到本地</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>get filename
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>下载文件到本地</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>put filename
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,24),u={href:"https://docs.oracle.com/cd/E37934_01/html/E36614/remotehowtoaccess-14.html",target:"_blank",rel:"noopener noreferrer"},p=l(`<h3 id="scp-secure-copy" tabindex="-1"><a class="header-anchor" href="#scp-secure-copy" aria-hidden="true">#</a> SCP（Secure Copy）</h3><p>SCP 就是 Secure copy，是用来进行远程文件复制的，并且整个复制过程是加密的。数据传输使用 ssh，并且和使用和 ssh 相同的认证方式，提供相同的安全保证。</p><ul><li>文件从本地复制到远程</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#scp 命令使用端口号 4588 默认 22 可省略</span>
<span class="token function">scp</span> <span class="token parameter variable">-P</span> <span class="token number">4588</span> local_file remote_username@remote_ip:remote_folder
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>文件夹从本地复制到远程</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#scp 命令使用端口号 4588 默认 22 可省略</span>
<span class="token function">scp</span> <span class="token parameter variable">-P</span> <span class="token number">4588</span> <span class="token parameter variable">-r</span> local_folder remote_username@remote_ip:remote_folder
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>文件从远程复制到本地</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#scp 命令使用端口号 4588 默认 22 可省略</span>
<span class="token function">scp</span> <span class="token parameter variable">-P</span> <span class="token number">4588</span> remote_username@remote_ip:remote_folder local_file
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>文件夹从远程复制到本地</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#scp 命令使用端口号 4588 默认 22 可省略</span>
<span class="token function">scp</span> <span class="token parameter variable">-P</span> <span class="token number">4588</span> <span class="token parameter variable">-r</span> remote_username@remote_ip:remote_folder local_folder
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,10),h={href:"https://docs.oracle.com/cd/E37934_01/html/E36614/remotehowtoaccess-55154.html#remotehowtoaccess-46771",target:"_blank",rel:"noopener noreferrer"},m=e("h2",{id:"比较",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#比较","aria-hidden":"true"},"#"),a(" 比较：")],-1),b=e("ul",null,[e("li",null,"FTP 基于 TCP 来传输文件，明文传输用户信息和数据。"),e("li",null,"SFTP 基于 SSH 来加密传输文件，可靠性高，可断点续传。"),e("li",null,"SCP 是基于 SSH 来加密拷贝文件，但要知道详细目录，不可断点续传。")],-1);function v(P,f){const s=i("ExternalLinkIcon");return c(),o("div",null,[d,e("p",null,[a("具体参考"),e("a",u,[a("登录到远程系统以复制文件 (sftp)"),n(s)])]),p,e("p",null,[a("具体参考"),e("a",h,[a("如何在两个系统之间复制文件 (scp)"),n(s)])]),m,b])}const _=r(t,[["render",v],["__file","system_ftp.html.vue"]]);export{_ as default};