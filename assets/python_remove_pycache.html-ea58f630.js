import{_ as e,V as a,W as s,a0 as n}from"./framework-8e76daeb.js";const o={},c=n(`<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><p>用 python 编写好一个工程，在第一次运行后，总会发现工程根目录下生成了一个<strong>pycache</strong>文件夹，里面是和 py 文件同名的各种 <code>*.pyc</code> 或者 <code>*.pyo</code> 文件。</p><p>先大概了解一下 python 基本运行机制。Python 程序运行时不需要编译成二进制代码，而直接从源码运行程序，简单来说是，Python 解释器将源码转换为字节码，然后再由解释器来执行这些字节码。</p><p>解释器的具体工作：</p><ol><li><p>完成模块的加载和链接；</p></li><li><p>将源代码编译为 PyCodeObject 对象(即字节码)，写入内存中，供 CPU 读取；</p></li><li><p>从内存中读取并执行，结束后将 PyCodeObject 写回硬盘当中，也就是复制到.pyc 或.pyo 文件中，以保存当前目录下所有脚本的字节码文件；</p></li><li><p>之后若再次执行该脚本，它先检查【本地是否有上述字节码文件】和【该字节码文件的修改时间是否与其脚本一致】。是就直接执行，否则重复上述步骤。</p></li></ol><p>pyc 文件的生成是什么情况下生成呢：</p><p>python 解释器会将 <code>*.py</code> 脚本文件进行编译，并将编译结果保存到<strong>pycache</strong>目录中。</p><p>下次再执行工程时，若解释器发现这个 <code>*.py</code> 脚本没有修改过，就会跳过编译这一步，直接运行以前生成的保存在 <code>__pycache__</code>文件夹里的<code>*.pyc</code> 文件。 这样工程较大时就可以大大缩短项目运行前的准备时间；如果你只需执行一个小工程，没关系 忽略这个文件夹就行。</p><h2 id="什么时候会出现pycache文件夹" tabindex="-1"><a class="header-anchor" href="#什么时候会出现pycache文件夹" aria-hidden="true">#</a> 什么时候会出现<strong>pycache</strong>文件夹？</h2><p>工程目录下有<strong>main</strong>.py 文件，和其他将要调用的模块时。如果只有当前运行的脚本 &quot;<strong>main</strong>&quot;，则不会生成 <strong>pycache</strong> 的文件。</p><p>当 import 导入另一个模块的时候会生成 python3 会生成 <strong>pycache</strong></p><h2 id="如何不生成编译文件呢" tabindex="-1"><a class="header-anchor" href="#如何不生成编译文件呢" aria-hidden="true">#</a> 如何不生成编译文件呢：</h2><ol><li>执行的时候 使用 -B 参数 即</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>python3 <span class="token parameter variable">-B</span> test.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>里面的包含的就不会生成 pyc 了</p><ol start="2"><li>设置环境变量</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">PYTHONDONTWRITEBYTECODE</span><span class="token operator">=</span><span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>在引入的地方写</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">import</span> sys
sys.dont_write_bytecode <span class="token operator">=</span> True
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>以上三种方式都可以实现不生成 pyc 文件。</p>`,20),p=[c];function t(i,r){return a(),s("div",null,p)}const l=e(o,[["render",t],["__file","python_remove_pycache.html.vue"]]);export{l as default};
