import{_ as n,V as s,W as a,a0 as t}from"./framework-8e76daeb.js";const p={},e=t(`<h1 id="使用-ajax-获取的值作为函数的返回值" tabindex="-1"><a class="header-anchor" href="#使用-ajax-获取的值作为函数的返回值" aria-hidden="true">#</a> 使用 Ajax 获取的值作为函数的返回值</h1><p>ajax 默认使用异步方式，要将异步改为同步方式</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> errorMessage <span class="token operator">=</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token parameter">checkedCode<span class="token punctuation">,</span> checkedName<span class="token punctuation">,</span> subScreenId</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> errorMessage <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> request <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">checkedCode</span><span class="token operator">:</span> checkedCode<span class="token punctuation">,</span>
    <span class="token literal-property property">checkedName</span><span class="token operator">:</span> checkedName<span class="token punctuation">,</span>
    <span class="token literal-property property">subScreenId</span><span class="token operator">:</span> subScreenId<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  $<span class="token punctuation">.</span><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;post&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">dataType</span><span class="token operator">:</span> <span class="token string">&quot;json&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> request<span class="token punctuation">,</span>
    <span class="token literal-property property">async</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">//请求方式：同步</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">done</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> textStatus<span class="token punctuation">,</span> jqXHR</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      errorMessage <span class="token operator">=</span> data<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">fail</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">jqXHR<span class="token punctuation">,</span> textStatus<span class="token punctuation">,</span> errorThrown</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>errorThrown<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> errorMessage<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),o=[e];function c(l,u){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","jquery-ajax-shi-yong.html.vue"]]);export{r as default};
