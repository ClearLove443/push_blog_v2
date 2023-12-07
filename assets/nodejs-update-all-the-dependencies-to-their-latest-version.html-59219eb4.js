import{_ as n,V as s,W as a,a0 as e}from"./framework-73d9479b.js";const p={},t=e(`<p>当使用 <code>npm install &lt;packagename&gt;</code> 安装软件包时，该软件包最新的可用版本会被下载并放入 node_modules 文件夹中，并且还会将相应的条目添加到当前文件夹中存在的 package.json 和 package-lock.json 文件中。</p><p>npm 会核计依赖，并安装这些依赖最新的可用版本。</p><p>假设要安装 cowsay 当 <code>npm install cowsay</code> 时，此条目会被添加到 package.json 文件中：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;dependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;cowsay&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^1.3.1&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以下是 package-lock.json 的片段，为方便查看，在其中删除了嵌套的依赖：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;requires&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;lockfileVersion&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">&quot;dependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;cowsay&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.3.1&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;resolved&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://registry.npmjs.org/cowsay/-/cowsay-1.3.1.tgz&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;integrity&quot;</span><span class="token operator">:</span> <span class="token string">&quot;sha512-3PVFe6FePVtPj1HTeLin9v8WyLl+VmM1l1H/5P+BTTDkMAjufp+0F9eLjzRnOHzVAYeIYFF5po5NjRrgefnRMQ==&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;requires&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;get-stdin&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^5.0.1&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;optimist&quot;</span><span class="token operator">:</span> <span class="token string">&quot;~0.6.1&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;string-width&quot;</span><span class="token operator">:</span> <span class="token string">&quot;~2.1.1&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;strip-eof&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^1.0.0&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在，这两个文件告诉我们，已安装了 cowsay 的 1.3.1 版本，并且更新的规则是 ^1.3.1（这对于 npm 版本控制规则意味着 npm 可以更新到补丁版本和次版本：即 1.3.2、1.4.0、依此类推）。</p><p>如果有新的次版本或补丁版本，并且输入了 <code>npm update</code>，则已安装的版本会被更新，并且 package-lock.json 文件会被新版本填充。</p><p><code>package.json</code> 则保持不变。</p><p>若要发觉软件包的新版本，则运行 <code>npm outdated</code>。</p><p>这些更新中有些是主版本。 运行 npm update 不会更新那些版本。 主版本永远不会被这种方式更新，因为它们（根据定义）会引入重大的更改，npm 希望为你减少麻烦。</p><p>若要将所有软件包更新到新的主版本，则全局地安装 npm-check-updates 软件包：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> npm-check-updates
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后运行：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ncu <span class="token parameter variable">-u</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这会升级 package.json 文件的 dependencies 和 devDependencies 中的所有版本，以便 npm 可以安装新的主版本。</p><p>现在可以运行更新了：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果只是下载了项目还没有安装 node_modules 依赖包，并且想先安装新的版本，则运行：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,20),o=[t];function c(i,l){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","nodejs-update-all-the-dependencies-to-their-latest-version.html.vue"]]);export{r as default};