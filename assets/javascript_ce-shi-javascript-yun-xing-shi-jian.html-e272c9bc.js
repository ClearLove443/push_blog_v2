import{_ as n,V as s,W as a,a0 as t}from"./framework-8e76daeb.js";const e={},o=t(`<h1 id="有时候需要知道指定的方法运行了多长时间-可以使用以下的方法。" tabindex="-1"><a class="header-anchor" href="#有时候需要知道指定的方法运行了多长时间-可以使用以下的方法。" aria-hidden="true">#</a> 有时候需要知道指定的方法运行了多长时间，可以使用以下的方法。</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">time</span><span class="token punctuation">(</span><span class="token string">&quot;测试 fn 速度: &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">testFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        console<span class="token punctuation">.</span><span class="token function">timeEnd</span><span class="token punctuation">(</span><span class="token string">&quot;测试 fn 速度: &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另外，console 还有其他比较有趣的方法。</p><ul><li>console.count(label) 输出运行次数</li><li>console.table(object|array) 输出表格形态的数据（在动态绘制的检查时用的较多）</li><li>console.group(label) 和 console.groupEnd(label) 将 console 结果进行分组（分类及减少输出版面，但也加大了我们的脑回路呀）（group = groupCollapsed 是一样的）</li><li>console.trace() 检测方法的调用来源，超级赞</li><li>console.profile(label) 和 console.profileEnd(label) 是 time 的升级版，不但测速，直接测性能了，需要到 profile 面板里面才能看到结果</li><li>console.assert(boolean, string) 提示报错可以少个判断</li></ul>`,4),c=[o];function l(i,p){return s(),a("div",null,c)}const r=n(e,[["render",l],["__file","javascript_ce-shi-javascript-yun-xing-shi-jian.html.vue"]]);export{r as default};
