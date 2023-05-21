import{_ as e,V as s,W as n,a0 as a}from"./framework-8e76daeb.js";const t={},i=a(`<p>You can connect to a Docker container using SSH (Secure Shell). Normally, SSH is used to connect remotely over a network to a server. The technology works the same when connecting to a virtual Docker container on your system.</p><h1 id="step-1-enable-ssh-on-system" tabindex="-1"><a class="header-anchor" href="#step-1-enable-ssh-on-system" aria-hidden="true">#</a> Step 1: Enable SSH on System</h1><p>Start by installing and enabling the SSH service:</p><h2 id="enable-ssh-on-ubuntu-18-04" tabindex="-1"><a class="header-anchor" href="#enable-ssh-on-ubuntu-18-04" aria-hidden="true">#</a> Enable SSH on Ubuntu 18.04:</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo apt-get install ssh
sudo systemctl ssh start
sudo systemctl ssh enable
service ssh status
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="enable-ssh-on-centos-7" tabindex="-1"><a class="header-anchor" href="#enable-ssh-on-centos-7" aria-hidden="true">#</a> Enable SSH on CentOS 7:</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum –y <span class="token function">install</span> openssh-server openssh-clients
<span class="token function">service</span> sshd start
<span class="token function">service</span> sshd <span class="token builtin class-name">enable</span>
<span class="token function">service</span> sshd status
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Step 2: Get IP Address of Container Get the container’s IP address by using the docker inspect command and filtering out the results.</p><p>For modern Docker engines, use the command:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">docker</span> inspect <span class="token parameter variable">-f</span> <span class="token string">&quot;{{ .NetworkSettings.IPAddress }}&quot;</span> container_name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>For older Docker engines, run:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> inspect <span class="token parameter variable">-f</span> <span class="token string">&#39;{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}&#39;</span> container_name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,12),r=[i];function o(c,d){return s(),n("div",null,r)}const u=e(t,[["render",o],["__file","s1Qy_PHb2.html.vue"]]);export{u as default};
