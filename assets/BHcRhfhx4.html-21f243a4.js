import{_ as a,V as s,W as e,a0 as n}from"./framework-73d9479b.js";const r={},t=n(`<p>cmd 运行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">--name</span> some-postgres <span class="token parameter variable">-e</span> <span class="token assign-left variable">POSTGRES_PASSWORD</span><span class="token operator">=</span>postgres <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">5432</span>:5432 postgres
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>持久化数据库</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">--name</span> some-postgres <span class="token parameter variable">-e</span> <span class="token assign-left variable">POSTGRES_PASSWORD</span><span class="token operator">=</span>postgres <span class="token parameter variable">-p</span> <span class="token number">5432</span>:5432 <span class="token parameter variable">-v</span> D:/docker/PostgreSql/data:/var/lib/postgresql/data <span class="token parameter variable">-d</span> postgres
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,4),p=[t];function l(o,c){return s(),e("div",null,p)}const d=a(r,[["render",l],["__file","BHcRhfhx4.html.vue"]]);export{d as default};