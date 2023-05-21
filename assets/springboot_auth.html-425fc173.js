const e=JSON.parse(`{"key":"v-d86248ac","path":"/blogs/springboot/springboot_auth.html","title":"Spring Boot 实现通用 Auth 认证的 4 种方式","lang":"en-US","frontmatter":{"title":"Spring Boot 实现通用 Auth 认证的 4 种方式","date":"2021-11-11 17:24:38","tag":["SpringBoot","Auth"],"category":["back-end-java"],"published":true,"hideInList":false,"feature":null,"isTop":false,"description":"文章介绍了 spring-boot 中实现通用 auth 的四种方式，包括 传统 AOP、拦截器、参数解析器和过滤器，并提供了对应的实例代码，最后简单总结了下他们的执行顺序。 前言 最近一直被无尽的业务需求淹没，没时间喘息，终于接到一个能让我突破代码舒适区的活儿，解决它的过程非常曲折，一度让我怀疑人生，不过收获也很大，代码方面不明显，但感觉自己抹掉了 ...","head":[["meta",{"property":"og:url","content":"https://clearlove443.github.io.v2/blogs/springboot/springboot_auth.html"}],["meta",{"property":"og:site_name","content":"clearlove's blog"}],["meta",{"property":"og:title","content":"Spring Boot 实现通用 Auth 认证的 4 种方式"}],["meta",{"property":"og:description","content":"文章介绍了 spring-boot 中实现通用 auth 的四种方式，包括 传统 AOP、拦截器、参数解析器和过滤器，并提供了对应的实例代码，最后简单总结了下他们的执行顺序。 前言 最近一直被无尽的业务需求淹没，没时间喘息，终于接到一个能让我突破代码舒适区的活儿，解决它的过程非常曲折，一度让我怀疑人生，不过收获也很大，代码方面不明显，但感觉自己抹掉了 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-05-21T04:38:09.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"article:tag","content":"SpringBoot"}],["meta",{"property":"article:tag","content":"Auth"}],["meta",{"property":"article:published_time","content":"2021-11-11T17:24:38.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-21T04:38:09.000Z"}]]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"传统 AOP","slug":"传统-aop","link":"#传统-aop","children":[{"level":3,"title":"实现","slug":"实现","link":"#实现","children":[]},{"level":3,"title":"扩展","slug":"扩展","link":"#扩展","children":[]}]},{"level":2,"title":"Interceptor","slug":"interceptor","link":"#interceptor","children":[{"level":3,"title":"实现","slug":"实现-1","link":"#实现-1","children":[]},{"level":3,"title":"扩展","slug":"扩展-1","link":"#扩展-1","children":[]}]},{"level":2,"title":"ArgumentResolver","slug":"argumentresolver","link":"#argumentresolver","children":[{"level":3,"title":"实现","slug":"实现-2","link":"#实现-2","children":[]},{"level":3,"title":"扩展","slug":"扩展-2","link":"#扩展-2","children":[]}]},{"level":2,"title":"Filter","slug":"filter","link":"#filter","children":[{"level":3,"title":"扩展","slug":"扩展-3","link":"#扩展-3","children":[]}]},{"level":2,"title":"小结","slug":"小结","link":"#小结","children":[]}],"git":{"createdTime":1684643889000,"updatedTime":1684643889000,"contributors":[{"name":"ClearLove443","email":"1127280933@qq.com","commits":1}]},"readingTime":{"minutes":6.76,"words":2029},"filePathRelative":"blogs/springboot/springboot_auth.md","localizedDate":"November 11, 2021","autoDesc":true}`);export{e as data};
