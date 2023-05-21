const e=JSON.parse(`{"key":"v-13ecf676","path":"/blogs/springboot/springboot_cors.html","title":"解决跨域问题的若干种方案","lang":"en-US","frontmatter":{"title":"解决跨域问题的若干种方案","date":"2021-09-28 22:34:09","tag":["cors","spingboot","nginx","nodejs","middleware"],"category":["back-end-java"],"published":true,"hideInList":false,"feature":null,"isTop":false,"description":"问题背景： Same Origin Policy，译为“同源策略”。它是对于客户端脚本（尤其是 JavaScript）的重要安全度量标准，其目的在于防止某个文档或者脚本从多个不同“origin”（源）装载。 它认为自任何站点装载的信赖内容是不安全的。 当被浏览器半信半疑的脚本运行在沙箱时，它们应该只被允许访问来自同一站点的资源，而不是那些来自其它站点可...","head":[["meta",{"property":"og:url","content":"https://clearlove443.github.io.v2/v2/blogs/springboot/springboot_cors.html"}],["meta",{"property":"og:site_name","content":"clearlove's blog"}],["meta",{"property":"og:title","content":"解决跨域问题的若干种方案"}],["meta",{"property":"og:description","content":"问题背景： Same Origin Policy，译为“同源策略”。它是对于客户端脚本（尤其是 JavaScript）的重要安全度量标准，其目的在于防止某个文档或者脚本从多个不同“origin”（源）装载。 它认为自任何站点装载的信赖内容是不安全的。 当被浏览器半信半疑的脚本运行在沙箱时，它们应该只被允许访问来自同一站点的资源，而不是那些来自其它站点可..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-05-21T04:38:09.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"article:tag","content":"cors"}],["meta",{"property":"article:tag","content":"spingboot"}],["meta",{"property":"article:tag","content":"nginx"}],["meta",{"property":"article:tag","content":"nodejs"}],["meta",{"property":"article:tag","content":"middleware"}],["meta",{"property":"article:published_time","content":"2021-09-28T22:34:09.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-21T04:38:09.000Z"}]]},"headers":[{"level":2,"title":"问题背景：","slug":"问题背景","link":"#问题背景","children":[]},{"level":2,"title":"CORS 简介:","slug":"cors-简介","link":"#cors-简介","children":[]},{"level":2,"title":"浏览器将 CORS 请求分成两类：简单请求（simple request）和非简单请求（not-so-simple request）。","slug":"浏览器将-cors-请求分成两类-简单请求-simple-request-和非简单请求-not-so-simple-request-。","link":"#浏览器将-cors-请求分成两类-简单请求-simple-request-和非简单请求-not-so-simple-request-。","children":[]},{"level":2,"title":"详解响应头：","slug":"详解响应头","link":"#详解响应头","children":[]},{"level":2,"title":"解决办法：","slug":"解决办法","link":"#解决办法","children":[{"level":3,"title":"第一种办法:(支持 springboot 最低版本 1.3.0.RELEASE)","slug":"第一种办法-支持-springboot-最低版本-1-3-0-release","link":"#第一种办法-支持-springboot-最低版本-1-3-0-release","children":[]},{"level":3,"title":"第二种办法:(支持 springboot 全版本)","slug":"第二种办法-支持-springboot-全版本","link":"#第二种办法-支持-springboot-全版本","children":[]},{"level":3,"title":"第三种办法：(支持 springboot 最低版本 1.3.0.RELEASE)","slug":"第三种办法-支持-springboot-最低版本-1-3-0-release","link":"#第三种办法-支持-springboot-最低版本-1-3-0-release","children":[]},{"level":3,"title":"第四种办法:Nginx(反向代理)","slug":"第四种办法-nginx-反向代理","link":"#第四种办法-nginx-反向代理","children":[]},{"level":3,"title":"第五种办法:Node 服务端代理","slug":"第五种办法-node-服务端代理","link":"#第五种办法-node-服务端代理","children":[]}]}],"git":{"createdTime":1684643889000,"updatedTime":1684643889000,"contributors":[{"name":"ClearLove443","email":"1127280933@qq.com","commits":1}]},"readingTime":{"minutes":7.34,"words":2202},"filePathRelative":"blogs/springboot/springboot_cors.md","localizedDate":"September 28, 2021","autoDesc":true}`);export{e as data};