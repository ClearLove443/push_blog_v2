import{_ as n,V as s,W as a,a0 as t}from"./framework-0db4e8b6.js";const p={},e=t(`<p>在正常情况下，我们是不能直接将 ResultSet 记录集 rs 直接传递给前台的，因为 ResultSet 不仅无法进行循环遍历 （即只能每行遍历，从 0 至 end ，执行一次），而且在实际应用中，它还必须被关闭。当关闭后，rs 为 null ,结果不再存在。 在这时我们就需要将 ResultSet 对象进行遍历到 list 中。</p><p>以 java 连接 hive 为例</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token doc-comment comment">/**
     * jdbc 连接 hive
     *
     * <span class="token keyword">@return</span>
     * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">ClassNotFoundException</span></span>
     * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">SQLException</span></span>
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Map</span><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> <span class="token function">connectToHive</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ClassNotFoundException</span><span class="token punctuation">,</span> <span class="token class-name">SQLException</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> url <span class="token operator">=</span> <span class="token string">&quot;jdbc:hive2://110.40.137.191:10000/testdb&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> driver <span class="token operator">=</span> <span class="token string">&quot;org.apache.hive.jdbc.HiveDriver&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> username <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> password <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">&quot;select * from employee&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">Connection</span> connection <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span>driver<span class="token punctuation">)</span><span class="token punctuation">;</span>
        connection <span class="token operator">=</span> <span class="token class-name">DriverManager</span><span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> username<span class="token punctuation">,</span> password<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// Statement statement = connection.createStatement();</span>
        <span class="token comment">// ResultSet resultSet = statement.executeQuery(sql);</span>

        <span class="token class-name">PreparedStatement</span> pstmt <span class="token operator">=</span> connection<span class="token punctuation">.</span><span class="token function">prepareStatement</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// pstmt.setInt(1, 1);</span>
        <span class="token comment">// pstmt.setString(2, &quot;2&quot;);</span>
        <span class="token comment">// 将ResultSet结果集遍历到List中</span>
        <span class="token class-name">ResultSet</span> resultSet <span class="token operator">=</span> pstmt<span class="token punctuation">.</span><span class="token function">executeQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Map</span><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> resultList <span class="token operator">=</span> <span class="token function">convertList</span><span class="token punctuation">(</span>resultSet<span class="token punctuation">)</span><span class="token punctuation">;</span>
        resultSet<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        pstmt<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        connection<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> resultList<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 将ResultSet结果集遍历到List中
     *
     * <span class="token keyword">@param</span> <span class="token parameter">rs</span>
     * <span class="token keyword">@return</span>
     * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">SQLException</span></span>
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Map</span><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> <span class="token function">convertList</span><span class="token punctuation">(</span><span class="token class-name">ResultSet</span> rs<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">SQLException</span> <span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Map</span><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ResultSetMetaData</span> md <span class="token operator">=</span> rs<span class="token punctuation">.</span><span class="token function">getMetaData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 获取键名</span>
        <span class="token keyword">int</span> columnCount <span class="token operator">=</span> md<span class="token punctuation">.</span><span class="token function">getColumnCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 获取行的数量</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>rs<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> rowData <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 声明Map</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> columnCount<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                rowData<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>md<span class="token punctuation">.</span><span class="token function">getColumnName</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">,</span> rs<span class="token punctuation">.</span><span class="token function">getObject</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 获取键名及值</span>
            <span class="token punctuation">}</span>
            list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>rowData<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> list<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),c=[e];function o(l,i){return s(),a("div",null,c)}const k=n(p,[["render",o],["__file","java_traversal_ResultSet.html.vue"]]);export{k as default};