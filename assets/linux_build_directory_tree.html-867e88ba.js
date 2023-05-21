import{_ as t,V as n,W as l,a0 as s}from"./framework-8e76daeb.js";const a={},i=s(`<p>Linux tree 命令用于以树状图列出目录的内容。</p><p>执行 tree 指令，它会列出指定目录下的所有文件，包括子目录里的文件。</p><p>语法</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>tree <span class="token punctuation">[</span>-aACdDfFgilnNpqstux<span class="token punctuation">]</span><span class="token punctuation">[</span>-I <span class="token operator">&lt;</span>范本样式<span class="token operator">&gt;</span><span class="token punctuation">]</span><span class="token punctuation">[</span>-P <span class="token operator">&lt;</span>范本样式<span class="token operator">&gt;</span><span class="token punctuation">]</span><span class="token punctuation">[</span>目录<span class="token punctuation">..</span>.<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>参数说明：</p><ul><li>-a 显示所有文件和目录。</li><li>-A 使用 ASNI 绘图字符显示树状图而非以 ASCII 字符组合。</li><li>-C 在文件和目录清单加上色彩，便于区分各种类型。</li><li>-d 显示目录名称而非内容。</li><li>-D 列出文件或目录的更改时间。</li><li>-f 在每个文件或目录之前，显示完整的相对路径名称。</li><li>-F 在执行文件，目录，Socket，符号连接，管道名称名称，各自加上&quot;*&quot;,&quot;/&quot;,&quot;=&quot;,&quot;@&quot;,&quot;|&quot;号。</li><li>-g 列出文件或目录的所属群组名称，没有对应的名称时，则显示群组识别码。</li><li>-i 不以阶梯状列出文件或目录名称。</li><li>-L level 限制目录显示层级。</li><li>-l 如遇到性质为符号连接的目录，直接列出该连接所指向的原始目录。</li><li>-n 不在文件和目录清单加上色彩。</li><li>-N 直接列出文件和目录名称，包括控制字符。</li><li>-p 列出权限标示。</li><li>-P&lt;范本样式&gt; 只显示符合范本样式的文件或目录名称。</li><li>-q 用&quot;?&quot;号取代控制字符，列出文件和目录名称。</li><li>-s 列出文件或目录大小。</li><li>-t 用文件和目录的更改时间排序。</li><li>-u 列出文件或目录的拥有者名称，没有对应的名称时，则显示用户识别码。</li><li>-x 将范围局限在现行的文件系统中，若指定目录下的某些子目录，其存放于另一个文件系统上，则将该子目录予以排除在寻找范围外。</li></ul>`,6),e=[i];function o(p,u){return n(),l("div",null,e)}const r=t(a,[["render",o],["__file","linux_build_directory_tree.html.vue"]]);export{r as default};
