import{_ as p,D as o,V as i,W as l,Y as n,Z as s,$ as e,a0 as t}from"./framework-0db4e8b6.js";const r={},c=t(`<p>2019 年 1 月，TypeScirpt 官方决定全面采用 ESLint 作为代码检查的工具，并创建了一个新项目 typescript-eslint，提供了 TypeScript 文件的解析器 @typescript-eslint/parser 和相关的配置选项 @typescript-eslint/eslint-plugin 等。而之前的两个 lint 解决方案都将弃用：</p><ul><li>typescript-eslint-parser 已停止维护</li><li>TSLint 将提供迁移工具，并在 typescript-eslint 的功能足够完整后停止维护 TSLint（Once we consider ESLint feature-complete w.r.t. TSLint, we will deprecate TSLint and help users migrate to ESLint1） 综上所述，目前以及将来的 TypeScript 的代码检查方案就是 typescript-eslint。</li></ul><h2 id="什么是代码检查" tabindex="-1"><a class="header-anchor" href="#什么是代码检查" aria-hidden="true">#</a> 什么是代码检查</h2><p>代码检查主要是用来发现代码错误、统一代码风格。</p><p>在 JavaScript 项目中，我们一般使用 ESLint 来进行代码检查，它通过插件化的特性极大的丰富了适用范围，搭配 typescript-eslint 之后，甚至可以用来检查 TypeScript 代码。</p><h2 id="为什么需要代码检查" tabindex="-1"><a class="header-anchor" href="#为什么需要代码检查" aria-hidden="true">#</a> 为什么需要代码检查</h2><p>有人会觉得，JavaScript 非常灵活，所以需要代码检查。而 TypeScript 已经能够在编译阶段检查出很多问题了，为什么还需要代码检查呢？</p><p>因为 TypeScript 关注的重心是类型的检查，而不是代码风格。当团队的人员越来越多时，同样的逻辑不同的人写出来可能会有很大的区别：</p><p>-- 缩进应该是四个空格还是两个空格？ -- 是否应该禁用 var？ -- 接口名是否应该以 I 开头？ -- 是否应该强制使用 === 而不是 ==？</p><p>这些问题 TypeScript 不会关注，但是却影响到多人协作开发时的效率、代码的可理解性以及可维护性。</p><p>eslint 能够发现出一些 tsc 不会关心的错误，检查出一些潜在的问题，所以代码检查还是非常重要的。</p><h2 id="在-typescript-中使用-eslint" tabindex="-1"><a class="header-anchor" href="#在-typescript-中使用-eslint" aria-hidden="true">#</a> 在 TypeScript 中使用 ESLint</h2><h3 id="安装-eslint§" tabindex="-1"><a class="header-anchor" href="#安装-eslint§" aria-hidden="true">#</a> 安装 ESLint§</h3><p>ESLint 可以安装在当前项目中或全局环境下，因为代码检查是项目的重要组成部分，所以我们一般会将它安装在当前项目中。可以运行下面的脚本来安装。 由于 ESLint 默认使用 Espree 进行语法解析，无法识别 TypeScript 的一些语法，故我们需要安装 @typescript-eslint/parser，替代掉默认的解析器，别忘了同时安装 typescript。 接下来需要安装对应的插件 @typescript-eslint/eslint-plugin 它作为 eslint 默认规则的补充，提供了一些额外的适用于 ts 语法的规则。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save-dev eslint typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-config-google
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="创建配置文件" tabindex="-1"><a class="header-anchor" href="#创建配置文件" aria-hidden="true">#</a> 创建配置文件</h2><p>ESLint 需要一个配置文件来决定对哪些规则进行检查，配置文件的名称一般是 .eslintrc.js 或 .eslintrc.json</p><p>当运行 ESLint 的时候检查一个文件的时候，它会首先尝试读取该文件的目录下的配置文件，然后再一级一级往上查找，将所找到的配置合并起来，作为当前被检查文件的配置。</p><p>我们在项目的根目录下创建一个 .eslintrc.js，内容如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">env</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">browser</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">es2021</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;google&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">parser</span><span class="token operator">:</span> <span class="token string">&quot;@typescript-eslint/parser&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">parserOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">ecmaVersion</span><span class="token operator">:</span> <span class="token number">13</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sourceType</span><span class="token operator">:</span> <span class="token string">&quot;module&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;@typescript-eslint&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;no-var&quot;</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;@typescript-eslint/no-explicit-any&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;@typescript-eslint/consistent-type-definitions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;interface&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上配置中，我们指定了两个规则，其中 no-var 是 ESLint 原生的规则，@typescript-eslint/consistent-type-definitions 是 @typescript-eslint/eslint-plugin 新增的规则。</p><p>规则的取值一般是一个数组（上例中的 @typescript-eslint/consistent-type-definitions），其中第一项是 off、warn 或 error 中的一个，表示关闭、警告和报错。后面的项都是该规则的其他配置。</p><p>如果没有其他配置的话，则可以将规则的取值简写为数组中的第一项（上例中的 no-var）。</p><p>关闭、警告和报错的含义如下：</p><ul><li>关闭：禁用此规则</li><li>警告：代码检查时输出错误信息，但是不会影响到 exit code</li><li>报错：发现错误时，不仅会输出错误信息，而且 exit code 将被设为 1（一般 exit code 不为 0 则表示执行出现错误）</li></ul><h2 id="检查一个-ts-文件" tabindex="-1"><a class="header-anchor" href="#检查一个-ts-文件" aria-hidden="true">#</a> 检查一个 ts 文件</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./node_modules/.bin/eslint index.ts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>需要注意的是，我们使用的是 ./node_modules/.bin/eslint，而不是全局的 eslint 脚本，这是因为代码检查是项目的重要组成部分，所以我们一般会将它安装在当前项目中。</p><p>可是每次执行这么长一段脚本颇有不便，我们可以通过在 package.json 中添加一个 script 来创建一个 npm script 来简化这个步骤：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;eslint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eslint index.ts&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这时只需执行 <code>npm run eslint</code> 即可。</p><h2 id="检查所有文件" tabindex="-1"><a class="header-anchor" href="#检查所有文件" aria-hidden="true">#</a> 检查所有文件</h2><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;eslint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eslint src --ext .ts&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="在-vscode-中集成-eslint-检查" tabindex="-1"><a class="header-anchor" href="#在-vscode-中集成-eslint-检查" aria-hidden="true">#</a> 在 VSCode 中集成 ESLint 检查</h2><p>在编辑器中集成 ESLint 检查，可以在开发过程中就发现错误，甚至可以在保存时自动修复错误，极大的增加了开发效率。</p><p>要在 VSCode 中集成 ESLint 检查，我们需要先安装 ESLint 插件，点击「扩展」按钮，搜索 ESLint，然后安装即可。</p><p>我们还可以开启保存时自动修复的功能，通过配置, 就可以在保存文件后，自动修复为。</p><p>VSCode 中的 ESLint 插件默认是不会检查 .ts 后缀的，需要在「文件 =&gt; 首选项 =&gt; 设置 =&gt; 工作区」中（也可以在项目根目录下创建一个配置文件 .vscode/settings.json），添加以下配置：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;[typescript]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dbaeumer.vscode-eslint&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;eslint.autoFixOnSave&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;eslint.validate&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;javascript&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;javascriptreact&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;typescript&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;typescript.tsdk&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node_modules/typescript/lib&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用-prettier-修复格式错误" tabindex="-1"><a class="header-anchor" href="#使用-prettier-修复格式错误" aria-hidden="true">#</a> 使用 Prettier 修复格式错误</h2><p>ESLint 包含了一些代码格式的检查，比如空格、分号等。但前端社区中有一个更先进的工具可以用来格式化代码，那就是 Prettier。</p><p>Prettier 聚焦于代码的格式化，通过语法分析，重新整理代码的格式，让所有人的代码都保持同样的风格。</p><p>首先需要安装 Prettier：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save-dev prettier
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后创建一个 prettier.config.js 文件，里面包含 Prettier 的配置项。Prettier 的配置项很少，这里我推荐大家一个配置规则，作为参考：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// prettier.config.js or .prettierrc.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 一行最多 100 字符</span>
  <span class="token literal-property property">printWidth</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  <span class="token comment">// 使用 4 个空格缩进</span>
  <span class="token literal-property property">tabWidth</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token comment">// 不使用缩进符，而使用空格</span>
  <span class="token literal-property property">useTabs</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// 行尾需要有分号</span>
  <span class="token literal-property property">semi</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// 使用单引号</span>
  <span class="token literal-property property">singleQuote</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// 对象的 key 仅在必要时用引号</span>
  <span class="token literal-property property">quoteProps</span><span class="token operator">:</span> <span class="token string">&quot;as-needed&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// jsx 不使用单引号，而使用双引号</span>
  <span class="token literal-property property">jsxSingleQuote</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// 末尾不需要逗号</span>
  <span class="token literal-property property">trailingComma</span><span class="token operator">:</span> <span class="token string">&quot;none&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// 大括号内的首尾需要空格</span>
  <span class="token literal-property property">bracketSpacing</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// jsx 标签的反尖括号需要换行</span>
  <span class="token literal-property property">jsxBracketSameLine</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// 箭头函数，只有一个参数的时候，也需要括号</span>
  <span class="token literal-property property">arrowParens</span><span class="token operator">:</span> <span class="token string">&quot;always&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// 每个文件格式化的范围是文件的全部内容</span>
  <span class="token literal-property property">rangeStart</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token literal-property property">rangeEnd</span><span class="token operator">:</span> <span class="token number">Infinity</span><span class="token punctuation">,</span>
  <span class="token comment">// 不需要写文件开头的 @prettier</span>
  <span class="token literal-property property">requirePragma</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// 不需要自动在文件开头插入 @prettier</span>
  <span class="token literal-property property">insertPragma</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// 使用默认的折行标准</span>
  <span class="token literal-property property">proseWrap</span><span class="token operator">:</span> <span class="token string">&quot;preserve&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// 根据显示样式决定 html 要不要折行</span>
  <span class="token literal-property property">htmlWhitespaceSensitivity</span><span class="token operator">:</span> <span class="token string">&quot;css&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// 换行符使用 lf</span>
  <span class="token literal-property property">endOfLine</span><span class="token operator">:</span> <span class="token string">&quot;lf&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来安装 VSCode 中的 Prettier 插件，然后修改 .vscode/settings.json：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;files.eol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\\n&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editor.tabSize&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editor.formatOnSave&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;eslint.autoFixOnSave&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;eslint.validate&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;javascript&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;javascriptreact&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;language&quot;</span><span class="token operator">:</span> <span class="token string">&quot;typescript&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;autoFix&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;typescript.tsdk&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node_modules/typescript/lib&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样就实现了保存文件时自动格式化并且自动修复 ESLint 错误。</p><p>需要注意的是，由于 ESLint 也可以检查一些代码格式的问题，所以在和 Prettier 配合使用时，我们一般会把 ESLint 中的代码格式相关的规则禁用掉，否则就会有冲突了</p><h2 id="使用-alloyteam-的-eslint-配置" tabindex="-1"><a class="header-anchor" href="#使用-alloyteam-的-eslint-配置" aria-hidden="true">#</a> 使用 AlloyTeam 的 ESLint 配置</h2><p>ESLint 原生的规则和 @typescript-eslint/eslint-plugin 的规则太多了，而且原生的规则有一些在 TypeScript 中支持的不好，需要禁用掉。</p><p>这里我推荐使用 AlloyTeam ESLint 规则中的 TypeScript 版本，它已经为我们提供了一套完善的配置规则，并且与 Prettier 是完全兼容的（eslint-config-alloy 不包含任何代码格式的规则，代码格式的问题交给更专业的 Prettier 去处理）。</p><p>安装：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save-dev eslint typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-config-alloy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在你的项目根目录下创建 .eslintrc.js，并将以下内容复制到文件中即可：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;alloy&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;alloy/typescript&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">env</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 您的环境变量（包含多个预定义的全局变量）</span>
    <span class="token comment">// Your environments (which contains several predefined global variables)</span>
    <span class="token comment">//</span>
    <span class="token comment">// browser: true,</span>
    <span class="token comment">// node: true,</span>
    <span class="token comment">// mocha: true,</span>
    <span class="token comment">// jest: true,</span>
    <span class="token comment">// jquery: true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">globals</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 您的全局变量（设置为 false 表示它不允许被重新赋值）</span>
    <span class="token comment">// Your global variables (setting to false means it&#39;s not allowed to be reassigned)</span>
    <span class="token comment">//</span>
    <span class="token comment">// myGlobal: false</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 自定义您的规则</span>
    <span class="token comment">// Customize your rules</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,57),u={href:"https://github.com/AlloyTeam/eslint-config-alloy",target:"_blank",rel:"noopener noreferrer"},d=t(`<h2 id="使用-eslint-检查-tsx-文件§" tabindex="-1"><a class="header-anchor" href="#使用-eslint-检查-tsx-文件§" aria-hidden="true">#</a> 使用 ESLint 检查 tsx 文件§</h2><p>如果需要同时支持对 tsx 文件的检查，则需要对以上步骤做一些调整：</p><h3 id="安装-eslint-plugin-react§" tabindex="-1"><a class="header-anchor" href="#安装-eslint-plugin-react§" aria-hidden="true">#</a> 安装 eslint-plugin-react§</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save-dev eslint-plugin-react
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>package.json 中的 scripts.eslint 添加 .tsx 后缀§</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;eslint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eslint src --ext .ts,.tsx&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vscode-的配置中新增-typescriptreact-检查" tabindex="-1"><a class="header-anchor" href="#vscode-的配置中新增-typescriptreact-检查" aria-hidden="true">#</a> VSCode 的配置中新增 typescriptreact 检查</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;files.eol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\\n&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editor.tabSize&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editor.formatOnSave&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;eslint.autoFixOnSave&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;eslint.validate&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;javascript&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;javascriptreact&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;language&quot;</span><span class="token operator">:</span> <span class="token string">&quot;typescript&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;autoFix&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;language&quot;</span><span class="token operator">:</span> <span class="token string">&quot;typescriptreact&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;autoFix&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;typescript.tsdk&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node_modules/typescript/lib&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),v={href:"https://github.com/AlloyTeam/eslint-config-alloy#typescript-react",target:"_blank",rel:"noopener noreferrer"},k=t(`<h2 id="troubleshootings§" tabindex="-1"><a class="header-anchor" href="#troubleshootings§" aria-hidden="true">#</a> Troubleshootings§</h2><p>Cannot find module &#39;@typescript-eslint/parser&#39; 你运行的是全局的 eslint，需要改为运行 ./node_modules/.bin/eslint。</p><h2 id="vscode-没有显示出-eslint-的报错" tabindex="-1"><a class="header-anchor" href="#vscode-没有显示出-eslint-的报错" aria-hidden="true">#</a> VSCode 没有显示出 ESLint 的报错</h2><ul><li>检查「文件 =&gt; 首选项 =&gt; 设置」中有没有配置正确</li><li>检查必要的 npm 包有没有安装</li><li>检查 .eslintrc.js 有没有配置</li><li>检查文件是不是在 .eslintignore 中</li><li>如果以上步骤都不奏效，则可以在「文件 =&gt; 首选项 =&gt; 设置」中配置 &quot;eslint.trace.server&quot;: &quot;messages&quot;，按 Ctrl+Shift+U 打开输出面板，然后选择 ESLint 输出，查看具体错误。</li></ul><h2 id="为什么有些定义了的变量-比如使用-enum-定义的变量-未使用-eslint-却没有报错-§" tabindex="-1"><a class="header-anchor" href="#为什么有些定义了的变量-比如使用-enum-定义的变量-未使用-eslint-却没有报错-§" aria-hidden="true">#</a> 为什么有些定义了的变量（比如使用 enum 定义的变量）未使用，ESLint 却没有报错？§</h2><p>因为无法支持这种变量定义的检查。建议在 tsconfig.json 中添加以下配置，使 tsc 编译过程能够检查出定义了未使用的变量：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;noUnusedLocals&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;noUnusedParameters&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),m={href:"https://github.com/Microsoft/TypeScript/issues/9458",target:"_blank",rel:"noopener noreferrer"};function b(y,g){const a=o("ExternalLinkIcon");return i(),l("div",null,[c,n("p",null,[s("更多的使用方法，请参考 "),n("a",u,[s("AlloyTeam ESLint 规则"),e(a)])]),d,n("p",null,[s("使用 AlloyTeam ESLint 规则中的 TypeScript React 版本§ "),n("a",v,[s("AlloyTeam ESLint 规则中的 TypeScript React 版本"),e(a)])]),k,n("p",null,[s("启用了 noUnusedParameters 之后，只使用了第二个参数，但是又必须传入第一个参数，这就会报错了§ 第一个参数以下划线开头即可，参考 "),n("a",m,[s("https://github.com/Microsoft/TypeScript/issues/9458"),e(a)])])])}const q=p(r,[["render",b],["__file","typescript_type_check.html.vue"]]);export{q as default};