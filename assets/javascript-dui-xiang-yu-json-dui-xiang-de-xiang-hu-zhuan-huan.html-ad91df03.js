import{_ as a,V as p,W as t,a0 as n,Y as s}from"./framework-8e76daeb.js";const e={},o=n(`<h1 id="一、全局-json-对象" tabindex="-1"><a class="header-anchor" href="#一、全局-json-对象" aria-hidden="true">#</a> 一、全局 JSON 对象</h1><p>ES5 定义了全局对象 JSON，对解析 JSON 的行为制定了规范。 JSON 对象有两个方法：stringify() 和 parse()。</p><h1 id="二、javascript-对象序列化为-json-对象" tabindex="-1"><a class="header-anchor" href="#二、javascript-对象序列化为-json-对象" aria-hidden="true">#</a> 二、JavaScript 对象序列化为 JSON 对象</h1><p>JSON.stringify( js 对象 [, 过滤器] [, 选项]) 二三参数可选，js 对象中的函数和原型成员将被忽略，值为 undefined 的属性也被跳过。 默认情况下，返回的 JSON 不包含任何空格字符和缩进。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> book <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;Professional JavaScript&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">authors</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;Nicholas C. Zakas&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">edition</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
  <span class="token literal-property property">year</span><span class="token operator">:</span> <span class="token number">2011</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> jsonText <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>book<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>过滤器为数组：JSON.stingify() 的结果只包含数组中列出的属性。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> book <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;Professional JavaScript&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">authors</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;Nicholas C. Zakas&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">edition</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
  <span class="token literal-property property">year</span><span class="token operator">:</span> <span class="token number">2011</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> jsonText <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>book<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&quot;title&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;edition&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),c=s("p",{"title:ProfessionalJavaScript,edition:3":""},"jsonText 的值为",-1),i=n(`<p>过滤器为函数：函数接收两个参数，键名和值(key, value)。函数体中根据键名处理对应的值。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> book <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;Professional JavaScript&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">authors</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;Nicholas C. Zakas&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">edition</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
  <span class="token literal-property property">year</span><span class="token operator">:</span> <span class="token number">2011</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> jsonText <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>book<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">switch</span> <span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token string">&quot;authors&quot;</span><span class="token operator">:</span>
      <span class="token keyword">return</span> value<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&quot;,&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token string">&quot;year&quot;</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token number">5000</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token string">&quot;edition&quot;</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
    <span class="token keyword">default</span><span class="token operator">:</span>
      <span class="token keyword">return</span> value<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),l=s("p",{"title:ProfessionalJavaScript,authors:NicholasC.Zakas,year:5000":""},"序列化后的 jsonText 值为：",-1),r=n(`<p>第三个参数用于控制结果的缩进： 参数为数值 ----- 表示缩进的空格数。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> book <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;Professional JavaScript&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">authors</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;Nicholas C. Zakas&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token literal-property property">edition</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
            <span class="token literal-property property">year</span><span class="token operator">:</span> <span class="token number">2011</span>
           <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> jsonText <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>book<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
jsonText 中的字符串：
<span class="token punctuation">{</span>
    <span class="token string">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Professional JavaScript&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;authors&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;Nicholas C. Zakas&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string">&quot;edition&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
    <span class="token string">&quot;year&quot;</span><span class="token operator">:</span> <span class="token number">2011</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参数为字符串 ----- 表示使用该字符串进行缩进。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> book <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;Professional JavaScript&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">authors</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;Nicholas C. Zakas&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token literal-property property">edition</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
            <span class="token literal-property property">year</span><span class="token operator">:</span> <span class="token number">2011</span>
           <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> jsonText <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>book<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token string">&quot; - -&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
jsonText 中的字符串：
<span class="token punctuation">{</span>
<span class="token operator">--</span><span class="token string">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Professional JavaScript&quot;</span><span class="token punctuation">,</span>
<span class="token operator">--</span><span class="token string">&quot;authors&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
<span class="token operator">--</span><span class="token operator">--</span><span class="token string">&quot;Nicholas C. Zakas&quot;</span>
<span class="token operator">--</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token operator">--</span><span class="token string">&quot;edition&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
<span class="token operator">--</span><span class="token string">&quot;year&quot;</span><span class="token operator">:</span> <span class="token number">2011</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（还可以为对象定义 toJSON() 方法，实现对其进行自定义序列化的需求。）</p><h1 id="三、json-对象解析为-javascript-对象" tabindex="-1"><a class="header-anchor" href="#三、json-对象解析为-javascript-对象" aria-hidden="true">#</a> 三、JSON 对象解析为  JavaScript 对象</h1><p>JSON.parse(json 对象 [, 还原函数]) 还原参数接收两个参数，键和值。如果返回 undefined，则表示从结果中删除相应的键；如果返回其他值，则将该值插入到结果中。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> book <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;Professional JavaScript&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">authors</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;Nicholas C. Zakas&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">edition</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
  <span class="token literal-property property">year</span><span class="token operator">:</span> <span class="token number">2011</span><span class="token punctuation">,</span>
  <span class="token literal-property property">releaseDate</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">2011</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> jsonText <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>book<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> bookCopy <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>jsonText<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>key <span class="token operator">==</span> <span class="token string">&quot;releaseDate&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> value<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),u=[o,c,i,l,r];function k(d,v){return p(),t("div",null,u)}const m=a(e,[["render",k],["__file","javascript-dui-xiang-yu-json-dui-xiang-de-xiang-hu-zhuan-huan.html.vue"]]);export{m as default};
