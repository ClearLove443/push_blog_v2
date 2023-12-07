import{_ as a,V as n,W as s,a0 as e}from"./framework-73d9479b.js";const t={},i=e(`<p>Spring Boot 框架提供了用于运行 Spring Boot 应用程序的默认嵌入式服务器(Tomcat)。它在端口 8080 上运行。可以在 Spring Boot 中更改端口。</p><p>我们可以在 Spring Boot 中更改端口。通过使用以下接口和属性文件:</p><ul><li>使用 application.properties 文件</li><li>使用 application.yml 文件</li><li>使用 maven spring-boot plugin</li><li>命令行中指定启动端口</li><li>传入虚拟机系统属性</li><li>使用 EmbeddedServletContainerCustomizer 接口</li><li>使用 WebServerFactoryCustomizer 界面</li></ul><h2 id="设置系统属性" tabindex="-1"><a class="header-anchor" href="#设置系统属性" aria-hidden="true">#</a> 设置系统属性</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>示例
server.port=8082
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用-application-properties-文件" tabindex="-1"><a class="header-anchor" href="#使用-application-properties-文件" aria-hidden="true">#</a> 使用 application.properties 文件</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token comment">// 示例</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">setProperty</span><span class="token punctuation">(</span><span class="token string">&quot;server.port&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;8082&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>我们还可以将 port 属性设置为 0。它将扫描应用程序的随机端口。每当我们重新启动应用程序时，它都会使用一个新端口。</p><h2 id="使用-application-yml-文件" tabindex="-1"><a class="header-anchor" href="#使用-application-yml-文件" aria-hidden="true">#</a> 使用 application.yml 文件</h2><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>示例
<span class="token key atrule">server</span><span class="token punctuation">:</span>
      port<span class="token punctuation">:</span><span class="token number">8082</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用-maven-spring-boot-plugin-springboot2-x" tabindex="-1"><a class="header-anchor" href="#使用-maven-spring-boot-plugin-springboot2-x" aria-hidden="true">#</a> 使用 maven spring-boot plugin(springboot2.X)</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mvn clean spring-boot:run -Dspring-boot.run.jvmArguments<span class="token operator">=</span><span class="token string">&#39;-Dserver.port=8088 -Dspring.profiles.active=uat2&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="命令行中指定启动端口" tabindex="-1"><a class="header-anchor" href="#命令行中指定启动端口" aria-hidden="true">#</a> 命令行中指定启动端口</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">java</span> <span class="token parameter variable">-jar</span> bootsample. jar <span class="token parameter variable">--server.port</span><span class="token operator">=</span><span class="token number">9000</span> <span class="token parameter variable">--spring.profiles.active</span><span class="token operator">=</span>dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="传入虚拟机系统属性" tabindex="-1"><a class="header-anchor" href="#传入虚拟机系统属性" aria-hidden="true">#</a> 传入虚拟机系统属性</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">java</span> - <span class="token assign-left variable">Dserver.port</span><span class="token operator">=</span><span class="token number">9000</span> <span class="token parameter variable">-Dspring.profiles.active</span><span class="token operator">=</span>uat2 <span class="token parameter variable">-jar</span> bootsample.jar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="使用-embeddedservletcontainercustomizer-接口" tabindex="-1"><a class="header-anchor" href="#使用-embeddedservletcontainercustomizer-接口" aria-hidden="true">#</a> 使用 EmbeddedServletContainerCustomizer 接口</h2><p>如果您使用的是 Spring Boot 1.x 版本，它将提供一个接口 EmbeddedServletContainerCustomizer 更改默认端口。</p><h3 id="embeddedservletcontainercustomizer-接口" tabindex="-1"><a class="header-anchor" href="#embeddedservletcontainercustomizer-接口" aria-hidden="true">#</a> EmbeddedServletContainerCustomizer 接口</h3><p>通过使用 EmbeddedServletContainerCustomizer，我们可以自定义自动配置的嵌入式 Servlet 容器。在启动容器本身之前，所有这种类型的 Bean 都会通过容器工厂获得回调。因此，我们可以设置 端口，地址和 均匀错误页面。它在 org.springframework.boot.context.embedded 包中定义</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>示例
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ServerCustomizer</span> <span class="token keyword">implements</span> <span class="token class-name">EmbeddedServletContainerCustomizer</span>
<span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">customize</span><span class="token punctuation">(</span><span class="token class-name">ConfigurableEmbeddedServletContainer</span> container<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        container<span class="token punctuation">.</span><span class="token function">setPort</span><span class="token punctuation">(</span><span class="token number">8097</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用-webserverfactorycustomizer-接口" tabindex="-1"><a class="header-anchor" href="#使用-webserverfactorycustomizer-接口" aria-hidden="true">#</a> 使用 WebServerFactoryCustomizer 接口</h2><p>Spring Boot 2.x 版本提供了 WebServerFactoryCustomizer 接口来更改默认端口。它在包 org.springframework.boot.web.server 中定义。它解析 Web 服务器工厂类型的参数 T</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>示例
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ServerCustomizer</span> <span class="token keyword">implements</span> <span class="token class-name">WebServerFactoryCustomizer</span><span class="token operator">&lt;</span> <span class="token class-name">ConfigurableWebServerFactory</span> <span class="token operator">&lt;</span>
<span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">customize</span><span class="token punctuation">(</span><span class="token class-name">ConfigurableWebServerFactory</span> factory<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        factory<span class="token punctuation">.</span><span class="token function">setPort</span><span class="token punctuation">(</span><span class="token number">9001</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24),r=[i];function o(p,l){return n(),s("div",null,r)}const d=a(t,[["render",o],["__file","springboot_server_port.html.vue"]]);export{d as default};