import{_ as u}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as g,o as i,c as l,f as o,a as e,F as h,g as v,b as r,u as y,e as c,d as p,t as _,h as k,i as b,j as t}from"./app-CWauSZoO.js";const f=e("p",null,[e("code",null,"more"),c(" 注释之前的内容被视为文章摘要。")],-1),B=p(`<h2 id="页面标题" tabindex="-1"><a class="header-anchor" href="#页面标题"><span>页面标题</span></a></h2><p>The first H1 title in Markdown will be regarded as page title.</p><p>Markdown 中的第一个 H1 标题会被视为页面标题。</p><p>你可以在 Markdown 的 Frontmatter 中设置页面标题。</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">title</span><span class="token punctuation">:</span> 页面标题</span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="页面信息" tabindex="-1"><a class="header-anchor" href="#页面信息"><span>页面信息</span></a></h2><p>你可以在 Markdown 的 Frontmatter 中设置页面信息。</p><ul><li>作者设置为 Ms.Hope。</li><li>写作日期为 2020 年 1 月 1 日</li><li>分类为 “使用指南”</li><li>标签为 “页面配置” 和 “使用指南”</li></ul><h2 id="页面内容" tabindex="-1"><a class="header-anchor" href="#页面内容"><span>页面内容</span></a></h2><p>你可以自由在这里书写你的 Markdown。</p><div class="hint-container tip"><p class="hint-container-title">图片引入</p><ul><li>你可以将图片和 Markdown 文件放置在一起使用相对路径进行引用。</li><li>对于 <code>.vuepress/public</code> 文件夹的图片，请使用绝对链接 <code>/</code> 进行引用。</li></ul></div><h2 id="组件" tabindex="-1"><a class="header-anchor" href="#组件"><span>组件</span></a></h2><p>每个 Markdown 页面都会被转换为一个 Vue 组件，这意味着你可以在 Markdown 中使用 Vue 语法：</p><p>2</p>`,14),w=e("p",null,"你也可以创建并引入你自己的组件。",-1),M=e("hr",null,null,-1),x=e("p",null,"主题包含一些有用的组件。这里是一些例子:",-1),E=p(`<li><p>一个卡片:</p><div class="language-component line-numbers-mode" data-ext="component" data-title="component"><pre class="language-component"><code>title: Mr.Hope
desc: Where there is light, there is hope
logo: https://mister-hope.com/logo.svg
link: https://mister-hope.com
background: rgba(253, 230, 138, 0.15)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,1),T={__name:"page.html",setup(H){const d=k({setup(){const a=b("Hello world!"),s=n=>{a.value=n.target.value};return()=>[t("p",[t("span","输入: "),t("input",{value:a.value,onInput:s})]),t("p",[t("span","输出: "),a.value])]}});return(a,s)=>{const n=g("Badge");return i(),l("div",null,[f,o(" more "),B,o(" markdownlint-disable MD033 "),e("ul",null,[(i(),l(h,null,v(3,m=>e("li",null,_(m),1)),64))]),o(" markdownlint-enable MD033 "),w,r(y(d)),M,x,e("ul",null,[e("li",null,[e("p",null,[c("文字结尾应该有深蓝色的 徽章文字 徽章。 "),r(n,{text:"徽章文字",color:"#242378"})])]),E])])}}},j=u(T,[["__file","page.html.vue"]]),C=JSON.parse('{"path":"/%E6%96%B0%E5%BB%BA%E6%96%87%E4%BB%B6%E5%A4%B9/demo/page.html","title":"页面配置","lang":"zh-CN","frontmatter":{"title":"页面配置","cover":"/assets/images/cover1.jpg","icon":"file","order":3,"author":"Ms.Hope","date":"2020-01-01T00:00:00.000Z","category":["使用指南"],"tag":["页面配置","使用指南"],"sticky":true,"star":true,"footer":"这是测试显示的页脚","copyright":"无版权","description":"more 注释之前的内容被视为文章摘要。","head":[["meta",{"property":"og:url","content":"https://gitee.com/oucystong/mydocs/%E6%96%B0%E5%BB%BA%E6%96%87%E4%BB%B6%E5%A4%B9/demo/page.html"}],["meta",{"property":"og:site_name","content":"无暇の学习笔记"}],["meta",{"property":"og:title","content":"页面配置"}],["meta",{"property":"og:description","content":"more 注释之前的内容被视为文章摘要。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://gitee.com/oucystong/mydocs/assets/images/cover1.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-03T09:40:02.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://gitee.com/oucystong/mydocs/assets/images/cover1.jpg"}],["meta",{"name":"twitter:image:alt","content":"页面配置"}],["meta",{"property":"article:author","content":"Ms.Hope"}],["meta",{"property":"article:tag","content":"页面配置"}],["meta",{"property":"article:tag","content":"使用指南"}],["meta",{"property":"article:published_time","content":"2020-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-03T09:40:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"页面配置\\",\\"image\\":[\\"https://gitee.com/oucystong/mydocs/assets/images/cover1.jpg\\"],\\"datePublished\\":\\"2020-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-03T09:40:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Ms.Hope\\"}]}"]]},"headers":[{"level":2,"title":"页面标题","slug":"页面标题","link":"#页面标题","children":[]},{"level":2,"title":"页面信息","slug":"页面信息","link":"#页面信息","children":[]},{"level":2,"title":"页面内容","slug":"页面内容","link":"#页面内容","children":[]},{"level":2,"title":"组件","slug":"组件","link":"#组件","children":[]}],"git":{"createdTime":1714729202000,"updatedTime":1714729202000,"contributors":[{"name":"欧阳德颐","email":"183754092@qq.com","commits":1}]},"readingTime":{"minutes":1.76,"words":529},"filePathRelative":"新建文件夹/demo/page.md","localizedDate":"2020年1月1日","excerpt":"<p><code>more</code> 注释之前的内容被视为文章摘要。</p>\\n","autoDesc":true}');export{j as comp,C as data};