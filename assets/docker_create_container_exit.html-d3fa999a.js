import{_ as e,V as a,W as n,a0 as s}from"./framework-0db4e8b6.js";const t={},o=s(`<h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h2><p>通过自己编写的 docker-compose.yml 管理项目。 但是生成的容器却立刻退出</p><h2 id="解决" tabindex="-1"><a class="header-anchor" href="#解决" aria-hidden="true">#</a> 解决</h2><p>Docker 镜像的缺省命令是 bash，如果不加 -it,bash 命令执行了自动会退出，加-it 后 docker 命令会为容器分配一个伪终端，并接管其 stdin/stdout 支持交互操作，这时候 bash 命令不会自动退出 像不使用 docker-compose,我们会执行类似如下的命令 docker run -it --name node node 但 docker-compose 需要额外配置下 需要在 docker-compose.yml 中包含以下行:</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">stdin_open</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">tty</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>第一个对应于 docker run 中的 -i ,第二个对应于 -t .</p>`,6),c=[o];function r(d,i){return a(),n("div",null,c)}const p=e(t,[["render",r],["__file","docker_create_container_exit.html.vue"]]);export{p as default};