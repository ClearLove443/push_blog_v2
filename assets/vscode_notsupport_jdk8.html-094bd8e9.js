import{_ as n,V as s,W as a,a0 as t}from"./framework-8e76daeb.js";const o={},p=t(`<ul><li>解决方案 1</li></ul><p>如果不是必须使用 JDK8，可以选择更换为 JDK11 或更新</p><ul><li>解决方案 2</li></ul><p>官方说可以在 settings.json 中配置 java.configuration.runtimes，这个配置仍然支持 Java1.5 到 14 不过依旧需要安装 JDK11，用来启动 Java 语言服务器，具体的编译版本则可以自行选择</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;java.home&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/path/to/jdk-11&quot;</span><span class="token punctuation">,</span>
<span class="token property">&quot;java.configuration.runtimes&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;JavaSE-1.8&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/path/to/jdk-8&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;JavaSE-11&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/path/to/jdk-11&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>解决方案 3 照常使用以前版本，直接选中该拓展的设置–&gt;安装另一个版本–&gt;选择安装的版本：0.64.1</li></ul><p>然后关闭拓展更新： 在设置中关闭 Extensions: Auto Update</p>`,7),e=[p];function l(u,i){return s(),a("div",null,e)}const r=n(o,[["render",l],["__file","vscode_notsupport_jdk8.html.vue"]]);export{r as default};
