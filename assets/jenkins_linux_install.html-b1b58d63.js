import{_ as e,V as n,W as a,a0 as s}from"./framework-8e76daeb.js";const i={},d=s(`<p>Jenkins 是一款开源自动化服务器，可用于轻松设置持续集成和持续交付（CI / CD）管道。</p><p>持续集成（CI）是 DevOps 的一种实践，团队成员定期将其代码更改提交到版本控制存储库，然后运行自动构建和测试。 持续交付（CD）是一系列的实践，代码更改会自动生成，测试并部署到生产中。</p><p>Jenkins 可以作为独立应用程序安装，也可以作为 Java servlet 容器（例如 Apache Tomcat ）中的 servlet 安装，也可以作为 Docker 容器运行。</p><p>本文介绍了如何在 Ubuntu 20.04 上将 Jenkins 作为独立服务安装</p><h1 id="安装-java" tabindex="-1"><a class="header-anchor" href="#安装-java" aria-hidden="true">#</a> 安装 Java</h1><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">apt</span> update
<span class="token function">apt</span> <span class="token function">install</span> openjdk-11-jdk
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>安装完成后，请检查 Java 版本:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">java</span> <span class="token parameter variable">-version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="安装-jenkins" tabindex="-1"><a class="header-anchor" href="#安装-jenkins" aria-hidden="true">#</a> 安装 Jenkins</h1><p>在 Ubuntu 上安装 Jenkins 相对简单。 我们将启用 Jenkins APT 存储库，导入存储库 GPG 密钥，并安装 Jenkins 软件包。</p><p>使用以下 wget 命令导入 Jenkins 存储库的 GPG 密钥：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> <span class="token parameter variable">-q</span> <span class="token parameter variable">-O</span> - https://pkg.jenkins.io/debian/jenkins.io.key <span class="token operator">|</span> <span class="token function">sudo</span> apt-key <span class="token function">add</span> -
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>接下来，使用以下命令将 Jenkins 存储库添加到系统中：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">sh</span> <span class="token parameter variable">-c</span> <span class="token string">&#39;echo deb http://pkg.jenkins.io/debian-stable binary/ &gt; /etc/apt/sources.list.d/jenkins.list&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>启用 Jenkins 存储库后，通过输入以下命令更新 apt 包列表并安装最新版本的 Jenkins:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">apt</span> update
<span class="token function">apt</span> <span class="token function">install</span> jenkins
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果收到错误消息：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Error: W: GPG error: https://pkg.jenkins.io/debian-stable binary/ Release: The following signatures couldn’t be verified because the public key is not available: NO_PUBKEY 9B7D32F2D50582E6&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>请将密钥导入：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> apt-key adv <span class="token parameter variable">--keyserver</span> keyserver.ubuntu.com --recv-keys 9B7D32F2D50582E6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Jenkins 服务将在安装过程完成后自动启动。 您可以通过打印服务状态进行验证：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl status jenkins
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>您应该看到类似以下的内容</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>● jenkins.service - LSB: Start Jenkins at boot <span class="token function">time</span>
     Loaded: loaded <span class="token punctuation">(</span>/etc/init.d/jenkins<span class="token punctuation">;</span> generated<span class="token punctuation">)</span>
     Active: active <span class="token punctuation">(</span>exited<span class="token punctuation">)</span> since Thu <span class="token number">2020</span>-07-16 <span class="token number">20</span>:22:12 UTC<span class="token punctuation">;</span> 15min ago
<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="调整防火墙" tabindex="-1"><a class="header-anchor" href="#调整防火墙" aria-hidden="true">#</a> 调整防火墙</h1><p>如果要在受防火墙保护的远程 Ubuntu 服务器上安装 Jenkins，则需要打开端口 8080。</p><p>通常，您只想允许从特定 IP 地址或 IP 范围访问 Jenkins 服务器。 例如，要仅允许来自“ 192.168.121.0/24”子网的连接，可以运行以下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> ufw allow proto tcp from <span class="token number">192.168</span>.121.0/24 to any port <span class="token number">8080</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果您需要允许从任何地方访问，请执行以下操作：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> ufw allow <span class="token number">8080</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="设置-jenkins" tabindex="-1"><a class="header-anchor" href="#设置-jenkins" aria-hidden="true">#</a> 设置 Jenkins</h1><p>要设置新安装的 Jenkins，请打开浏览器，键入域或 IP 地址，然后输入端口 8080，http://your_ip_or_domain:8080。</p><p>提示您输入在安装过程中创建的管理员密码：</p><p>使用 cat 在终端上显示密码：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">cat</span> /var/lib/jenkins/secrets/initialAdminPassword
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>您应该看到一个 32 个字符长的字母数字密码，如下所示：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>06cbf25d811a424bb236c76fd6e04c47
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>从终端复制密码，将其粘贴到“管理员密码”字段中，然后单击“继续”。</p><p>在下一个屏幕上，设置向导将询问您是否要安装建议的插件或要选择特定的插件。</p><p>点击“安装建议的插件 Install suggested plugins”选项，安装过程将立即开始。</p><p>安装了插件后，系统将提示您设置第一个管理员用户。 填写所有必填信息，然后单击“保存并继续”。</p><p>下一页将要求您设置 Jenkins 实例的 URL。 该字段将填充自动生成的网址。</p><p>通过单击 Save and Finish 按钮确认 URL，然后完成设置过程。</p><p>单击 Start using Jenkins 按钮，您将被重定向到以您在前面的步骤之一中创建的 admin 用户身份登录的 Jenkins 仪表板。</p><p>至此，您已经在服务器上成功安装了 Jenkins。</p><h1 id="修改-jenkins-配置文件" tabindex="-1"><a class="header-anchor" href="#修改-jenkins-配置文件" aria-hidden="true">#</a> 修改 Jenkins 配置文件</h1><p>停止 jenkins</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl stop jenkins
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="上传自定义的-ca-证书" tabindex="-1"><a class="header-anchor" href="#上传自定义的-ca-证书" aria-hidden="true">#</a> 上传自定义的 ca 证书</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> /opt/jenkins/update-center-rootCAs
<span class="token function">wget</span> https://cdn.jsdelivr.net/gh/lework/jenkins-update-center/rootCA/update-center.crt <span class="token parameter variable">-O</span> /opt/jenkins/update-center-rootCAs/update-center.crt
<span class="token function">chown</span> root.root <span class="token parameter variable">-R</span> /opt/jenkins/update-center-rootCAs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="修改默认执行用户" tabindex="-1"><a class="header-anchor" href="#修改默认执行用户" aria-hidden="true">#</a> 修改默认执行用户</h2><p>最近在需要在 jenkins 执行 shell 脚本，由于 Jenkins 之前是默认在线安装的，这样 jenkins 设置了默认用户 jenkins 权限 如果要执行 root 用户命令，则报权限错误</p><p>所以要更换 jenkins 为 root 用户 改变步骤如下： 首先查找在线安装 jenkins 的目录, 然后执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">find</span> / <span class="token parameter variable">-name</span> <span class="token string">&quot;jenkins&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>编辑文件 /etc/default/jenkins</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /etc/default/jenkins
<span class="token assign-left variable">JENKINS_USER</span><span class="token operator">=</span>root
<span class="token assign-left variable">JENKINS_GROUP</span><span class="token operator">=</span>root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="修改-jenkins-默认工作空间" tabindex="-1"><a class="header-anchor" href="#修改-jenkins-默认工作空间" aria-hidden="true">#</a> 修改 jenkins 默认工作空间</h2><p>在<code>/etc/profile</code>文件最后添加 JENKINS_HOME</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;export JENKINS_HOME=/opt/jenkins&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/profile
<span class="token builtin class-name">.</span> /etc/profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>重新启动 jenkins 服务</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl start jenkins
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>确认结果</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">top</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行 jenkins 的用户变成了 root</p><p>启动网页确认工作空间。</p><h2 id="修改插件下载地址" tabindex="-1"><a class="header-anchor" href="#修改插件下载地址" aria-hidden="true">#</a> 修改插件下载地址</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>https://cdn.jsdelivr.net/gh/lework/jenkins-update-center/updates/huawei/update-center.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,67),t=[d];function l(r,c){return n(),a("div",null,t)}const o=e(i,[["render",l],["__file","jenkins_linux_install.html.vue"]]);export{o as default};