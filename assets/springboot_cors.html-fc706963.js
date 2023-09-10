import{_ as n,V as s,W as a,a0 as t}from"./framework-80bf61a6.js";const p={},e=t(`<h2 id="问题背景" tabindex="-1"><a class="header-anchor" href="#问题背景" aria-hidden="true">#</a> 问题背景：</h2><p>Same Origin Policy，译为“同源策略”。它是对于客户端脚本（尤其是 JavaScript）的重要安全度量标准，其目的在于防止某个文档或者脚本从多个不同“origin”（源）装载。 它认为自任何站点装载的信赖内容是不安全的。 当被浏览器半信半疑的脚本运行在沙箱时，它们应该只被允许访问来自同一站点的资源，而不是那些来自其它站点可能怀有恶意的资源。 注：具有相同的 Origin，也即是拥有相同的协议、主机地址以及端口。一旦这三项数据中有一项不同，那么该资源就将被认为是从不同的 Origin 得来的，进而不被允许访问。 CORS 就是为了解决 SOP 问题而生的，当然 CORS 不是唯一的解决方案，不过这里不赘述其他解决办法了。</p><h2 id="cors-简介" tabindex="-1"><a class="header-anchor" href="#cors-简介" aria-hidden="true">#</a> CORS 简介:</h2><p>CORS 是一个 W3C 标准，全称是&quot;跨域资源共享”（Cross-origin resource sharing）。它允许浏览器向跨源(协议 + 域名 + 端口)服务器，发出 XMLHttpRequest 请求，从而克服了 AJAX 只能同源使用的限制。 CORS 需要浏览器和服务器同时支持。它的通信过程，都是浏览器自动完成，不需要用户参与。</p><p>对于开发者来说，CORS 通信与同源的 AJAX/Fetch 通信没有差别，代码完全一样。浏览器一旦发现请求跨源，就会自动添加一些附加的头信息，有时还会多出一次附加的请求，但用户不会有感觉。 因此，实现 CORS 通信的关键是服务器。只要服务器实现了 CORS 接口，就可以跨源通信。</p><h2 id="浏览器将-cors-请求分成两类-简单请求-simple-request-和非简单请求-not-so-simple-request-。" tabindex="-1"><a class="header-anchor" href="#浏览器将-cors-请求分成两类-简单请求-simple-request-和非简单请求-not-so-simple-request-。" aria-hidden="true">#</a> 浏览器将 CORS 请求分成两类：简单请求（simple request）和非简单请求（not-so-simple request）。</h2><p>浏览器发出 CORS 简单请求，只需要在头信息之中增加一个 Origin 字段。</p><p>浏览器发出 CORS 非简单请求，会在正式通信之前，增加一次 OPTIONS 查询请求，称为&quot;预检&quot;请求（preflight）。浏览器先询问服务器，当前网页所在的域名是否在服务器的许可名单之中，以及可以使用哪些 HTTP 动词和头信息字段。只有得到肯定答复，浏览器才会发出正式的 XMLHttpRequest 请求，否则就报错。</p><p>简单请求就是 HEAD、GET、POST 请求，并且 HTTP 的头信息不超出以下几种字段 Accept、Accept-Language、Content-Language、Last-Event-ID、Content-Type 注：Content-Type：只限于三个值 application/x-www-form-urlencoded、multipart/form-data、text/plain</p><p>反之，就是非简单请求。</p><p>其实实现 CORS 很简单，就是在服务端加一些响应头，并且这样做对前端来说是无感知的，很方便。</p><h2 id="详解响应头" tabindex="-1"><a class="header-anchor" href="#详解响应头" aria-hidden="true">#</a> 详解响应头：</h2><ul><li>Access-Control-Allow-Origin 该字段必填。它的值要么是请求时 Origin 字段的具体值，要么是一个*，表示接受任意域名的请求。</li><li>Access-Control-Allow-Methods 该字段必填。它的值是逗号分隔的一个具体的字符串或者*，表明服务器支持的所有跨域请求的方法。注意，返回的是所有支持的方法，而不单是浏览器请求的那个方法。这是为了避免多次&quot;预检&quot;请求。</li><li>Access-Control-Expose-Headers 该字段可选。CORS 请求时，XMLHttpRequest 对象的 getResponseHeader()方法只能拿到 6 个基本字段：Cache-Control、Content-Language、Content-Type、Expires、Last-Modified、Pragma。如果想拿到其他字段，就必须在 Access-Control-Expose-Headers 里面指定。</li><li>Access-Control-Allow-Credentials 该字段可选。它的值是一个布尔值，表示是否允许发送 Cookie.默认情况下，不发生 Cookie，即：false。对服务器有特殊要求的请求，比如请求方法是 PUT 或 DELETE，或者 Content-Type 字段的类型是 application/json，这个值只能设为 true。如果服务器不要浏览器发送 Cookie，删除该字段即可。</li><li>Access-Control-Max-Age 该字段可选，用来指定本次预检请求的有效期，单位为秒。在有效期间，不用发出另一条预检请求。 顺便提一下，如果在开发中，发现每次发起请求都是两条，一次 OPTIONS，一次正常请求，注意是每次，那么就需要配置 Access-Control-Max-Age，避免每次都发出预检请求。</li></ul><h2 id="解决办法" tabindex="-1"><a class="header-anchor" href="#解决办法" aria-hidden="true">#</a> 解决办法：</h2><h3 id="第一种办法-支持-springboot-最低版本-1-3-0-release" tabindex="-1"><a class="header-anchor" href="#第一种办法-支持-springboot-最低版本-1-3-0-release" aria-hidden="true">#</a> 第一种办法:(支持 springboot 最低版本 1.3.0.RELEASE)</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Configuration</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>config<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">CorsRegistry</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>config<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">WebMvcConfigurer</span></span><span class="token punctuation">;</span>
<span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CorsConfig</span> <span class="token keyword">implements</span> <span class="token class-name">WebMvcConfigurer</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addCorsMappings</span><span class="token punctuation">(</span><span class="token class-name">CorsRegistry</span> registry<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        registry<span class="token punctuation">.</span><span class="token function">addMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/**&quot;</span><span class="token punctuation">)</span>
                <span class="token comment">// .allowedOrigins(&quot;*&quot;)</span>
                <span class="token punctuation">.</span><span class="token function">allowedOriginPatterns</span><span class="token punctuation">(</span><span class="token string">&quot;*&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">allowedMethods</span><span class="token punctuation">(</span><span class="token string">&quot;GET&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;HEAD&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;POST&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;PUT&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;DELETE&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;OPTIONS&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">allowCredentials</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">maxAge</span><span class="token punctuation">(</span><span class="token number">3600</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">allowedHeaders</span><span class="token punctuation">(</span><span class="token string">&quot;*&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种方式是全局配置的，网上也大都是这种解决办法，但是很多都是基于旧的 spring 版本，比如 WebMvcConfigurerAdapter 在 spring5.0 已经被标记为 Deprecated，点开源码可以看到：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * An implementation of <span class="token punctuation">{</span><span class="token keyword">@link</span> <span class="token reference"><span class="token class-name">WebMvcConfigurer</span></span><span class="token punctuation">}</span> with empty methods allowing
 * subclasses to override only the methods they&#39;re interested in.
 *
 * <span class="token keyword">@author</span> Rossen Stoyanchev
 * <span class="token keyword">@since</span> 3.1
 * <span class="token keyword">@deprecated</span> as of 5.0 <span class="token punctuation">{</span><span class="token keyword">@link</span> <span class="token reference"><span class="token class-name">WebMvcConfigurer</span></span><span class="token punctuation">}</span> has default methods (made
 * possible by a Java 8 baseline) and can be implemented directly without the
 * need for this adapter
 */</span>
<span class="token annotation punctuation">@Deprecated</span>
<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">WebMvcConfigurerAdapter</span> <span class="token keyword">implements</span> <span class="token class-name">WebMvcConfigurer</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>spring5 最低支持到 jdk1.8，所以注释中明确表明，你可以直接实现 WebMvcConfigurer 接口，无需再用这个适配器，因为 jdk1.8 支持接口中存在 default-method。</p><h3 id="第二种办法-支持-springboot-全版本" tabindex="-1"><a class="header-anchor" href="#第二种办法-支持-springboot-全版本" aria-hidden="true">#</a> 第二种办法:(支持 springboot 全版本)</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Configuration</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">WebFilter</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>http<span class="token punctuation">.</span></span><span class="token class-name">HttpServletResponse</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span>
<span class="token annotation punctuation">@WebFilter</span><span class="token punctuation">(</span>filterName <span class="token operator">=</span> <span class="token string">&quot;CorsFilter &quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CorsFilter</span> <span class="token keyword">implements</span> <span class="token class-name">Filter</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">doFilter</span><span class="token punctuation">(</span><span class="token class-name">ServletRequest</span> req<span class="token punctuation">,</span> <span class="token class-name">ServletResponse</span> res<span class="token punctuation">,</span> <span class="token class-name">FilterChain</span> chain<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span><span class="token punctuation">,</span> <span class="token class-name">ServletException</span> <span class="token punctuation">{</span>
        <span class="token class-name">HttpServletResponse</span> response <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">HttpServletResponse</span><span class="token punctuation">)</span> res<span class="token punctuation">;</span>
        response<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">&quot;Access-Control-Allow-Origin&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;*&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        response<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">&quot;Access-Control-Allow-Credentials&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;true&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        response<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">&quot;Access-Control-Allow-Methods&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;POST, GET, PATCH, DELETE, PUT&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        response<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">&quot;Access-Control-Max-Age&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;3600&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        response<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">&quot;Access-Control-Allow-Headers&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Origin, X-Requested-With, Content-Type, Accept&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        chain<span class="token punctuation">.</span><span class="token function">doFilter</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种办法，是基于过滤器的方式，方式简单明了，就是在 response 中写入这些响应头，也支持 springmvc。好多文章都是第一种和第二种方式都叫你配置，其实这是没有必要的，只需要一种即可。</p><h3 id="第三种办法-支持-springboot-最低版本-1-3-0-release" tabindex="-1"><a class="header-anchor" href="#第三种办法-支持-springboot-最低版本-1-3-0-release" aria-hidden="true">#</a> 第三种办法：(支持 springboot 最低版本 1.3.0.RELEASE)</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">GoodsController</span> <span class="token punctuation">{</span>
<span class="token annotation punctuation">@CrossOrigin</span><span class="token punctuation">(</span>origins <span class="token operator">=</span> <span class="token string">&quot;http://localhost:4000&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;goods-url&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">Response</span> <span class="token function">queryGoodsWithGoodsUrl</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestParam</span> <span class="token class-name">String</span> goodsUrl<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>没错就是@CrossOrigin 注解，点开注解</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">METHOD</span><span class="token punctuation">,</span> <span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">TYPE</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Documented</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">CrossOrigin</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从元注解@Target 可以看出，注解可以放在 method、class 等上面，类似 RequestMapping，也就是说，整个 controller 下面的方法可以都受控制，也可以单个方法受控制。</p><p>也可以得知，这个是最小粒度的 cors 控制办法了，精确到单个请求级别。</p><p>以上三种方法都可以解决问题，最常用的应该是第一种、第二种，控制在自家几个域名范围下足以，一般没必要搞得太细。</p><p>这三种配置方式都用了的话，谁生效呢，类似 css 中样式，就近原则，</p><h3 id="第四种办法-nginx-反向代理" tabindex="-1"><a class="header-anchor" href="#第四种办法-nginx-反向代理" aria-hidden="true">#</a> 第四种办法:Nginx(反向代理)</h3><p>Nginx 处理跨域的方式其实就是反向反向代理。那什么是反向代理呢？通俗一点说就是我们不能直接访问到目标服务器，这个时候我们就需要通过代理的方式实现，这种对于用户还是我们开发来说都是无感的，因为这些处理都是 nginx 帮我们处理好了。配置代码如下</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>http {

    ...

    server {
        listen       8000;
        server_name  localhost;
        location / {
            proxy_pass http://localhost:5500;
            root   html;
            index  index.html index.htm;
        }
        location ^~/api {
           rewrite ^/api/(.*)$ /$1 break;
           proxy_pass http://localhost:3000/;
      }
    }

    ...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如何理解呢， 所有的请求对于浏览器来说都是请求了 localhost:8000，就不会出现跨域问题，但是 nginx 其实帮我们分别请求了 localhost:5500 和 localhost:3000，这样就能解决跨域问题了。</p><p>代理前，前台地址是<code>http://127.0.0.1:5500/</code>，后台地址是<code>http://127.0.0.1:3000/</code>。 代理后，前台地址是<code>http://127.0.0.1:8000/</code>，后台地址是<code>http://127.0.0.1:8000/api</code>。</p><h3 id="第五种办法-node-服务端代理" tabindex="-1"><a class="header-anchor" href="#第五种办法-node-服务端代理" aria-hidden="true">#</a> 第五种办法:Node 服务端代理</h3><ol><li>koa-server-http-proxy 是 koa2 的中间件</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> Koa <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;koa&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Koa</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> proxy <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;koa-server-http-proxy&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">ctx<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  ctx<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&quot;Access-Control-Allow-Origin&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;*&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  ctx<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>
    <span class="token string">&quot;Access-Control-Allow-Headers&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild&quot;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  ctx<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&quot;Access-Control-Allow-Methods&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;PUT, POST, GET, DELETE, OPTIONS&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">.</span>method <span class="token operator">==</span> <span class="token string">&quot;OPTIONS&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    ctx<span class="token punctuation">.</span>body <span class="token operator">=</span> <span class="token number">200</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">await</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
  <span class="token function">proxy</span><span class="token punctuation">(</span><span class="token string">&quot;/api&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&quot;http://127.0.0.1:3000&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">pathRewrite</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token string-property property">&quot;^/api&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">8080</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代理前，后台地址是<code>http://127.0.0.1:3000/</code>。 代理后，后台地址是<code>http://127.0.0.1:8000/api</code>。</p><ol start="2"><li>http-proxy-middleware 是 node.js 提供的代理方式</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;express&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> createProxyMiddleware <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;http-proxy-middleware&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">header</span><span class="token punctuation">(</span><span class="token string">&quot;Access-Control-Allow-Origin&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;*&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  res<span class="token punctuation">.</span><span class="token function">header</span><span class="token punctuation">(</span>
    <span class="token string">&quot;Access-Control-Allow-Headers&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;Origin, X-Requested-With, Content-Type, Accept, Authorization, *&quot;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  res<span class="token punctuation">.</span><span class="token function">header</span><span class="token punctuation">(</span><span class="token string">&quot;Access-Control-Allow-Methods&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;GET, PUT, POST, DELETE, OPTIONS&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
  <span class="token function">createProxyMiddleware</span><span class="token punctuation">(</span><span class="token string">&quot;/api&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&quot;http://127.0.0.1:3000&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">pathRewrite</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token string-property property">&quot;^/api&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">8080</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

代理前，后台地址是<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">http://127.0.0.1:3000/</span><span class="token template-punctuation string">\`</span></span>。
代理后，后台地址是<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">http://127.0.0.1:8000/api</span><span class="token template-punctuation string">\`</span></span>。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,41),o=[e];function c(i,l){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","springboot_cors.html.vue"]]);export{r as default};