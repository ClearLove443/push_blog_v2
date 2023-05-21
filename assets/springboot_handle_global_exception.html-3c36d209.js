import{_ as a,D as t,V as e,W as p,Y as n,Z as o,$ as c,a0 as l}from"./framework-8e76daeb.js";const i={},u=l(`<p>当我们的后端应用出现异常时，通常会将异常状况包装之后再返回给调用方或者前端，在实际的项目中，不可能对每一个地方都做好异常处理，再优雅的代码也可能抛出异常，那么在 Spring 项目中，可以怎样优雅的处理这些异常呢?</p><p>本文将介绍一种全局异常处理方式，主要包括以下知识点</p><ul><li>@ControllerAdvice Controller 增强</li><li>@ExceptionHandler 异常捕获</li><li>@ResponseStatus 返回状态码</li><li>NoHandlerFoundException 处理（404 异常捕获）</li></ul><h2 id="异常处理" tabindex="-1"><a class="header-anchor" href="#异常处理" aria-hidden="true">#</a> 异常处理</h2><ol><li><code>@ControllerAdvice</code> 我们通常利用<code>@ControllerAdvice</code>配合注解<code>@ExceptionHandler</code>来实现全局异常捕获处理</li></ol><ul><li><code>@ControllerAdvice</code>为所有的<code>Controller</code>织入增强方法</li><li><code>@ExceptionHandler</code>标记在方法上，表示当出现对应的异常抛出到上层时（即没有被业务捕获），这个方法会被触发 下面我们通过实例进行功能演示</li></ul><h3 id="异常捕获" tabindex="-1"><a class="header-anchor" href="#异常捕获" aria-hidden="true">#</a> 异常捕获</h3><p>我们定义两个异常捕获的 case，一个是除 0，一个是数组越界异常</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Slf4j</span>
<span class="token annotation punctuation">@ControllerAdvice</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">GlobalExceptionHandler</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">getThrowableStackInfo</span><span class="token punctuation">(</span><span class="token class-name">Throwable</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ByteArrayOutputStream</span> buf <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ByteArrayOutputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span>PrintWriter</span><span class="token punctuation">(</span>buf<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> msg <span class="token operator">=</span> buf<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            buf<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> t<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> e<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> msg<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@ResponseBody</span>
    <span class="token annotation punctuation">@ExceptionHandler</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token class-name">ArithmeticException</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">handleArithmetic</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">,</span> <span class="token class-name">ArithmeticException</span> e<span class="token punctuation">)</span>
            <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;divide error!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">&quot;divide 0: &quot;</span> <span class="token operator">+</span> <span class="token function">getThrowableStackInfo</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@ResponseBody</span>
    <span class="token annotation punctuation">@ExceptionHandler</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token class-name">ArrayIndexOutOfBoundsException</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">handleArrayIndexOutBounds</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">,</span>
            <span class="token class-name">ArrayIndexOutOfBoundsException</span> e<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;array index out error!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">&quot;aryIndexOutOfBounds: &quot;</span> <span class="token operator">+</span> <span class="token function">getThrowableStackInfo</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的测试中，我们将异常堆栈返回调用方</p><h3 id="示例服务" tabindex="-1"><a class="header-anchor" href="#示例服务" aria-hidden="true">#</a> 示例服务</h3><p>增加几个测试方法</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Controller</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span>path <span class="token operator">=</span> <span class="token string">&quot;page&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ErrorPageRest</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@ResponseBody</span>
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span>path <span class="token operator">=</span> <span class="token string">&quot;divide&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">divide</span><span class="token punctuation">(</span><span class="token keyword">int</span> sub<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">1000</span> <span class="token operator">/</span> sub<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> ans <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token annotation punctuation">@ResponseBody</span>
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span>path <span class="token operator">=</span> <span class="token string">&quot;ary&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">ary</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> ans<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="测试说明" tabindex="-1"><a class="header-anchor" href="#测试说明" aria-hidden="true">#</a> 测试说明</h3><p>实例测试如下，上面我们声明捕获的两种异常被拦截并输出对应的堆栈信息；</p><p>但是需要注意</p><ul><li>404 和未捕获的 500 异常则显示的 SpringBoot 默认的错误页面；</li><li>此外我们捕获返回的 http 状态码是 200</li></ul><ol start="2"><li><code>@ResponseStatus</code> 上面的 case 中捕获的异常返回的状态码是 200，但是在某些 case 中，可能更希望返回更合适的 http 状态码，此时可以使用 ResponseStatus 来指定</li></ol><p>使用方式比较简单，加一个注解即可</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@ResponseBody</span>
<span class="token annotation punctuation">@ExceptionHandler</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token class-name">ArithmeticException</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@ResponseStatus</span><span class="token punctuation">(</span><span class="token class-name">HttpStatus</span><span class="token punctuation">.</span><span class="token constant">INTERNAL_SERVER_ERROR</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">handleArithmetic</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">,</span> <span class="token class-name">ArithmeticException</span> e<span class="token punctuation">)</span>
        <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
    log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;divide error!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token string">&quot;divide 0: &quot;</span> <span class="token operator">+</span> <span class="token function">getThrowableStackInfo</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>404 处理 通过<code>@ControllerAdvice</code>配合<code>@ExceptionHandler</code>可以拦截 500 异常，如果我希望 404 异常也可以拦截，可以如何处理？</li></ol><p>首先修改配置文件 application.properties，将 NoHandlerFoundException 抛出来</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># 出现错误时, 直接抛出异常</span>
spring.mvc.throw<span class="token punctuation">-</span>exception<span class="token punctuation">-</span>if<span class="token punctuation">-</span>no<span class="token punctuation">-</span>handler<span class="token punctuation">-</span>found=true
<span class="token comment"># 设置静态资源映射访问路径，下面两个二选一，</span>
spring.mvc.static<span class="token punctuation">-</span>path<span class="token punctuation">-</span>pattern=/statics/<span class="token important">**</span>
<span class="token comment"># spring.resources.add-mappings=false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其次是定义异常捕获</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@ResponseBody</span>
<span class="token annotation punctuation">@ExceptionHandler</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token class-name">NoHandlerFoundException</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@ResponseStatus</span><span class="token punctuation">(</span><span class="token class-name">HttpStatus</span><span class="token punctuation">.</span><span class="token constant">NOT_FOUND</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">handleNoHandlerError</span><span class="token punctuation">(</span><span class="token class-name">NoHandlerFoundException</span> e<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&quot;noHandlerFound: &quot;</span> <span class="token operator">+</span> <span class="token function">getThrowableStackInfo</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="项目源码" tabindex="-1"><a class="header-anchor" href="#项目源码" aria-hidden="true">#</a> 项目源码</h2>`,26),r={href:"https://gitee.com/ClearLove443/spring-boot-demo/tree/master/spring-boot/209-web-error",target:"_blank",rel:"noopener noreferrer"};function d(k,v){const s=t("ExternalLinkIcon");return e(),p("div",null,[u,n("p",null,[n("a",r,[o("项目:"),c(s)])])])}const b=a(i,[["render",d],["__file","springboot_handle_global_exception.html.vue"]]);export{b as default};
