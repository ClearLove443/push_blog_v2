import{_ as n,V as s,W as a,a0 as t}from"./framework-8e76daeb.js";const p={},e=t(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>a <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;2&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;3&#39;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="_1-遍历-key-值" tabindex="-1"><a class="header-anchor" href="#_1-遍历-key-值" aria-hidden="true">#</a> （1）遍历 key 值</h1><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">for</span> key <span class="token keyword">in</span> a<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>key<span class="token operator">+</span><span class="token string">&#39;:&#39;</span><span class="token operator">+</span>a<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token keyword">for</span> key <span class="token keyword">in</span> a<span class="token punctuation">.</span>keys<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>key<span class="token operator">+</span><span class="token string">&#39;:&#39;</span><span class="token operator">+</span>a<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_2-遍历-value-值" tabindex="-1"><a class="header-anchor" href="#_2-遍历-value-值" aria-hidden="true">#</a> （2）遍历 value 值</h1><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">for</span> value <span class="token keyword">in</span> a<span class="token punctuation">.</span>values<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_3-遍历字典项" tabindex="-1"><a class="header-anchor" href="#_3-遍历字典项" aria-hidden="true">#</a> （3）遍历字典项</h1><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">for</span> kv <span class="token keyword">in</span> a<span class="token punctuation">.</span>items<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>kv<span class="token punctuation">)</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;2&#39;</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token string">&#39;c&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;3&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_4-遍历字典健值" tabindex="-1"><a class="header-anchor" href="#_4-遍历字典健值" aria-hidden="true">#</a> （4）遍历字典健值</h1><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">for</span> key<span class="token punctuation">,</span>value <span class="token keyword">in</span> a<span class="token punctuation">.</span>items<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>key<span class="token operator">+</span><span class="token string">&#39;:&#39;</span><span class="token operator">+</span>value<span class="token punctuation">)</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span>key<span class="token punctuation">,</span>value<span class="token punctuation">)</span> <span class="token keyword">in</span> a<span class="token punctuation">.</span>items<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>key<span class="token operator">+</span><span class="token string">&#39;:&#39;</span><span class="token operator">+</span>value<span class="token punctuation">)</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span>a<span class="token punctuation">:</span><span class="token number">1</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span>b<span class="token punctuation">:</span><span class="token number">2</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span>c<span class="token punctuation">:</span><span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),o=[e];function c(i,l){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","python_traversal_map.html.vue"]]);export{r as default};
