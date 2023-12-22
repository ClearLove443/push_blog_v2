import{_ as e,D as t,V as c,W as l,Y as a,Z as n,$ as r,a0 as i}from"./framework-0db4e8b6.js";const o={},p=a("h1",{id:"场景一-镜像下载、运行及删除",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#场景一-镜像下载、运行及删除","aria-hidden":"true"},"#"),n(" 场景一：镜像下载、运行及删除")],-1),m=a("p",null,[n('| COMMAND | DESC | | :---------------------------------------------------------------------- | :-------------------------------------------------------------- | --- | | 查看 | | | docker images | 列出所有镜像(images) | | docker ps | 列出正在运行的容器(containers) | | docker ps -a | 列出所有的容器 | | docker pull centos | 下载 centos 镜像 | | docker top ‘container’ | 查看容器内部运行程序 | | 镜像 | | | docker rmi [image-id] | 删除镜像 | | docker rmi $(docker images -q) | 删除所有镜像 | | docker rmi $(sudo docker images --filter "dangling=true" -q --no-trunc) | 删除无用镜像 | | docker build -t wp-api . | 构建 1 个镜像,-t(镜像的名字及标签) wp-api(镜像名) .(构建的目录) | | docker run -i -t wp-api | -t -i 以交互伪终端模式运行,可以查看输出信息 | | docker run -d -p 80:80 wp-api | 镜像端口 -d 后台模式运行镜像 | | ocker run --help | 帮助 | s | | 容器 | | | docker kill ‘container’ | 停止正在运行的容器 | | docker rm ‘container’ | 删除没有运行的容器 | | docker exec -it 容器 ID sh | 进入容器 | | docker stop ‘container’ | 停止一个正在运行的容器，‘container’可以是容器 ID 或名称 | | docker start ‘container’ | 启动一个已经停止的容器 | | docker restart ‘container’ | 重启容器 | | docker run -i -t -p :80 LAMP /bin/bash | 运行容器并做 http 端口转发 | | docker exec -it ‘container’ /bin/bash | 进入 ubuntu 类容器的 bash | | docker exec -it /bin/sh | 进入 alpine 类容器的 sh | | docker rm docker ps -a -q | 删除所有已经停止的容器 | | docker kill '),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mo",{stretchy:"false"},"("),a("mi",null,"d"),a("mi",null,"o"),a("mi",null,"c"),a("mi",null,"k"),a("mi",null,"e"),a("mi",null,"r"),a("mi",null,"p"),a("mi",null,"s"),a("mo",null,"−"),a("mi",null,"a"),a("mo",null,"−"),a("mi",null,"q"),a("mo",{stretchy:"false"},")"),a("mi",{mathvariant:"normal"},"∣"),a("mtext",null,"杀死所有正在运行的容器，")]),a("annotation",{encoding:"application/x-tex"},"(docker ps -a -q) | 杀死所有正在运行的容器，")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),a("span",{class:"mopen"},"("),a("span",{class:"mord mathnormal"},"d"),a("span",{class:"mord mathnormal"},"oc"),a("span",{class:"mord mathnormal",style:{"margin-right":"0.03148em"}},"k"),a("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"er"),a("span",{class:"mord mathnormal"},"p"),a("span",{class:"mord mathnormal"},"s"),a("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),a("span",{class:"mbin"},"−"),a("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6667em","vertical-align":"-0.0833em"}}),a("span",{class:"mord mathnormal"},"a"),a("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),a("span",{class:"mbin"},"−"),a("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),a("span",{class:"base"},[a("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),a("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"q"),a("span",{class:"mclose"},")"),a("span",{class:"mord"},"∣"),a("span",{class:"mord cjk_fallback"},"杀死所有正在运行的容器，")])])]),n("()功能同`` |")],-1),d={href:"https://www.runoob.com/docker/docker-command-manual.html",target:"_blank",rel:"noopener noreferrer"},u=i(`<h1 id="场景二-下载镜像并直接运行" tabindex="-1"><a class="header-anchor" href="#场景二-下载镜像并直接运行" aria-hidden="true">#</a> 场景二：下载镜像并直接运行</h1><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run  <span class="token parameter variable">--name</span> ubuntu <span class="token parameter variable">-it</span> ubuntu <span class="token function">bash</span>
<span class="token function">docker</span> <span class="token function">cp</span> <span class="token function">dd</span> ubuntu:tmp/ <span class="token comment">#复制文件dd 到容器的/tmp 目录</span>
Ctrl-p Ctrl-q  <span class="token comment">#退出</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="修改镜像-并保存到私有仓库" tabindex="-1"><a class="header-anchor" href="#修改镜像-并保存到私有仓库" aria-hidden="true">#</a> 修改镜像，并保存到私有仓库</h1><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> ubuntu <span class="token function">bash</span>
<span class="token function">apt-get</span> update
<span class="token function">apt-get</span> <span class="token function">install</span> apache2
Ctrl-p Ctrl-q  <span class="token comment">#退出</span>
<span class="token function">docker</span> commit <span class="token parameter variable">-a</span> <span class="token string">&quot;mir355&quot;</span> <span class="token parameter variable">-m</span> <span class="token string">&quot;ubuntu add apache2&quot;</span> <span class="token punctuation">{</span>ID<span class="token punctuation">}</span>  private/ubuntu_apache:v1   <span class="token comment">#保存镜像</span>
<span class="token function">docker</span> stop ubuntu
<span class="token function">docker</span> <span class="token function">rm</span> ubuntu
<span class="token function">docker</span> run <span class="token parameter variable">-i</span> <span class="token parameter variable">-t</span> <span class="token parameter variable">--name</span> apache2 <span class="token parameter variable">-p</span> <span class="token number">8080</span>:80 private/ubuntu_apache:v1 /bin/bash
/etc/init.d/apache2 start
Ctrl-p Ctrl-q  <span class="token comment">#退出</span>
<span class="token comment">#通过 docker tag重命名镜像，使之与registry匹配</span>
<span class="token function">docker</span> tag private/ubuntu_apache:v1 <span class="token number">127.0</span>.0.1:5000/private/ubuntu_apache:v1
<span class="token comment">#保存到私有仓库</span>
<span class="token function">docker</span> push <span class="token number">127.0</span>.0.1:5000/private/ubuntu_apache:v1
<span class="token function">curl</span> http://127.0.0.1:5000/v2/_catalog

<span class="token comment">#下载镜像</span>
<span class="token function">docker</span> pull <span class="token number">127.0</span>.0.1:5000/private/ubuntu_apache:v1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function k(h,b){const s=t("ExternalLinkIcon");return c(),l("div",null,[p,m,a("p",null,[n("更多命令查看"),a("a",d,[n("Docker 命令大全 | 菜鸟教程"),r(s)])]),u])}const g=e(o,[["render",k],["__file","Ec4h0aLBU.html.vue"]]);export{g as default};