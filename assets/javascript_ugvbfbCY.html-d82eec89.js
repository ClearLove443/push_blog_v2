import{_ as s,V as n,W as a,a0 as t}from"./framework-8e76daeb.js";const e={},p=t(`<p>方法一</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">!</span><span class="token punctuation">(</span><span class="token string">&quot;key&quot;</span> <span class="token keyword">in</span> obj<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//结果为false，表示不包含；否则表示包含</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>方法二</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>obj<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span><span class="token string">&quot;key&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//obj表示对象，结果为false表示不包含；否则表示包含</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>模糊查找对象的 key some(): 对数组中的每个元素都执行一次指定的函数（callback），直到此函数返回 true，如果发现这个元素，some 将返回 true，如果回调函数对每个元素执行后都返回 false ，some 将返回 false。它只对数组中的非空元素执行指定的函数，没有赋值或者已经删除的元素将被忽略</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    <span class="token keyword">var</span> typeTexts <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&#39;task&#39;</span><span class="token operator">:</span> <span class="token string">&#39;任务消息&#39;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&#39;item&#39;</span><span class="token operator">:</span><span class="token string">&#39;项目消息&#39;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&#39;system&#39;</span><span class="token operator">:</span> <span class="token string">&#39;系统消息&#39;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&#39;schedule&#39;</span><span class="token operator">:</span> <span class="token string">&#39;日程消息&#39;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&#39;people&#39;</span><span class="token operator">:</span> <span class="token string">&#39;成员消息&#39;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> isTask <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>typeTexts<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">some</span><span class="token punctuation">(</span><span class="token parameter">key</span> <span class="token operator">=&gt;</span> key<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&#39;task&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token template-punctuation string">\`</span></span>\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),o=[p];function c(l,i){return n(),a("div",null,o)}const u=s(e,[["render",c],["__file","javascript_ugvbfbCY.html.vue"]]);export{u as default};
