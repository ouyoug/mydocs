import { hopeTheme } from "vuepress-theme-hope";
//中文导航栏
import { zhNavbar } from "./navbar.js";
//中文侧边栏
import { zhSidebar } from "./sidebar.js";

// 主题设置
export default hopeTheme({
  // 当前网站部署到的域名
  hostname: "https://gitee.com/oucystong",

  // 文章显示的默认作者
  author: {
    name: "Mr.Tong",
    url: "https://gitee.com/oucystong",
  },

  // 使用官方提供的图标库-也可以构建自己的图标库
  iconAssets: "iconfont",

  // 网站图标
  logo: "/site_logo.png",

  // 导航栏上的个人仓库地址
  repo: "https://gitee.com/oucystong",

  // 自定义仓库链接文字-默认从repo中自动推断为"GitHub" / "GitLab" / "Gitee" / "Bitbucket" 其中之一，或是 "Source"。
  repoLabel: "Gitee",

  // 是否在导航栏内显示仓库链接-默认为true
  repoDisplay: true,

  // 导航栏布局
  navbarLayout: {
    start: ["Brand"],
    center: ["Links"],
    end: ["Language", "Repo", "Outlook", "Search"],
  },

  // 页面显示信息
  pageInfo: ["Category", "Tag", "ReadingTime"],

  // 路径导航
  breadcrumb: true,

  // 路径导航的图标显示
  breadcrumbIcon: true,

  // 用户可以自定义的多主题色
  themeColor: true,
  themeOptions: {
    yellow: "#FEC201",
    pink: "#EF699F",
    purple: "#684CCE",
    orange: "#FF8C3D",
  },
  // 暗黑模式切换-在深色模式和浅色模式中切换
  darkmode: "toggle",
  // 全屏按钮
  fullscreen: true,
  // 返回顶部按钮-下滑300px后显示
  backToTop: true,
  // 纯净模式-禁用
  pure: false,

  // 文章的最后更新时间
  lastUpdated: true,

  // 显示页面的贡献者
  contributors: false,

  // 文章所在仓库
  docsRepo: "https://gitee.com/oucystong/notes.git",

  // 文章所在分支
  docsBranch: "master",

  // 文章所在目录
  docsDir: "src",

  // 多语言设置
  locales: {
    "/": {
      // 导航栏
      navbar: zhNavbar,

      // 侧边栏
      sidebar: zhSidebar,

      // 全局设置页脚信息
      footer: "无暇の学习笔记",

      // 显示页脚
      displayFooter: false,

      // 页面配置信息
      metaLocales: {
        editLink: "在【Gitee】上编辑此页",
      },
    },
  },
  // 博客配置
  blog: {
    // 头像
    avatar: "/blog_head_logo.gif",
    // 名称
    name: "Mr.Tong",
    // 是否是圆形头像
    roundAvatar: false,
    // 个人描述
    description: "你是无意穿堂风 偏偏孤倨引山洪",
    // 社交媒体
    medias: {
      Gitee: "https://gitee.com/oucystong",
    },
    // 博客的侧边栏设置
    sidebarDisplay: "mobile",
    // 每页展示的文章数量
    articlePerPage: 7,
    timeline: "无暇の时光轴🍃",
  },
  plugins: {
    // 在MD文件中启用的组件
    components: {
      components: [
      // 为站点提供了在MD文档中自定义颜色的徽章
      "Badge",
      // 为站点提供了在MD文档中加载B站视频的功能，但是不建议使用
      "BiliBili",
      // 为站点提供了在MD文档中加载PDF阅读器的功能，但是不建议使用
      // 原因一：PDF书籍较大，上传到码云后会大量占用码云空间
      // 原因二：当PDF阅读器较多的时候，将MD文档渲染成HTML页面比较耗费性能，使页面加载速度变慢
      "PDF",
    ]},
    // 代码复制功能-vuepress-plugin-copy-code2
    copyCode: {
      // 在移动端也可以实现复制代码
      showInMobile: true,
      // 代码复制成功提示消息的时间-ms
      duration: 3000,
      // 纯净模式
      pure: false,
    },
    // MarkDown文件增强
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      hint: true,
      demo: true,
      echarts: true,
      flowchart: true,
      gfm: true,
      imgSize: true,
      include: true,
      katex: true,
      // lazyLoad: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      revealJs: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommanded",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommanded",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      // vpre: true,
      vuePlayground: true,
    },
    // 打开博客功能
    blog: {
      // 在文章列表页面自动提取文章的摘要进行显示
      // autoExcerpt: true,
    },
    // 开启git实现编辑此页面-最后更新时间-贡献者功能
    git: true,
    // 关闭sitemap插件
    sitemap: false,
  },
});


// import { hopeTheme } from "vuepress-theme-hope";
// import navbar from "./navbar.js";
// import sidebar from "./sidebar.js";

// export default hopeTheme({
//   hostname: "https://vuepress-theme-hope-docs-demo.netlify.app",

//   author: {
//     name: "Mr.Hope",
//     url: "https://mister-hope.com",
//   },

//   iconAssets: "fontawesome-with-brands",

//   logo: "https://theme-hope-assets.vuejs.press/logo.svg",

//   repo: "vuepress-theme-hope/vuepress-theme-hope",

//   docsDir: "src",

//   // 导航栏
//   navbar,

//   // 侧边栏
//   sidebar,

//   // 页脚
//   footer: "默认页脚",
//   displayFooter: true,

//   // 加密配置
//   encrypt: {
//     config: {
//       "/demo/encrypt.html": ["1234"],
//     },
//   },

//   // 多语言配置
//   metaLocales: {
//     editLink: "在 GitHub 上编辑此页",
//   },

//   // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
//   // hotReload: true,

//   // 在这里配置主题提供的插件
//   plugins: {
//     // 注意: 仅用于测试! 你必须自行生成并在生产环境中使用自己的评论服务
//     comment: {
//       provider: "Giscus",
//       repo: "vuepress-theme-hope/giscus-discussions",
//       repoId: "R_kgDOG_Pt2A",
//       category: "Announcements",
//       categoryId: "DIC_kwDOG_Pt2M4COD69",
//     },

//     components: {
//       components: ["Badge", "VPCard"],
//     },

//     // 此处开启了很多功能用于演示，你应仅保留用到的功能。
//     mdEnhance: {
//       align: true,
//       attrs: true,
//       codetabs: true,
//       component: true,
//       demo: true,
//       figure: true,
//       imgLazyload: true,
//       imgSize: true,
//       include: true,
//       mark: true,
//       stylize: [
//         {
//           matcher: "Recommended",
//           replacer: ({ tag }) => {
//             if (tag === "em")
//               return {
//                 tag: "Badge",
//                 attrs: { type: "tip" },
//                 content: "Recommended",
//               };
//           },
//         },
//       ],
//       sub: true,
//       sup: true,
//       tabs: true,
//       tasklist: true,
//       vPre: true,

//       // 在启用之前安装 chart.js
//       // chart: true,

//       // insert component easily

//       // 在启用之前安装 echarts
//       // echarts: true,

//       // 在启用之前安装 flowchart.ts
//       // flowchart: true,

//       // gfm requires mathjax-full to provide tex support
//       // gfm: true,

//       // 在启用之前安装 katex
//       // katex: true,

//       // 在启用之前安装 mathjax-full
//       // mathjax: true,

//       // 在启用之前安装 mermaid
//       // mermaid: true,

//       // playground: {
//       //   presets: ["ts", "vue"],
//       // },

//       // 在启用之前安装 reveal.js
//       // revealJs: {
//       //   plugins: ["highlight", "math", "search", "notes", "zoom"],
//       // },

//       // 在启用之前安装 @vue/repl
//       // vuePlayground: true,

//       // install sandpack-vue3 before enabling it
//       // sandpack: true,
//     },

//     // 如果你需要 PWA。安装 @vuepress/plugin-pwa 并取消下方注释
//     // pwa: {
//     //   favicon: "/favicon.ico",
//     //   cacheHTML: true,
//     //   cacheImage: true,
//     //   appendBase: true,
//     //   apple: {
//     //     icon: "/assets/icon/apple-icon-152.png",
//     //     statusBarColor: "black",
//     //   },
//     //   msTile: {
//     //     image: "/assets/icon/ms-icon-144.png",
//     //     color: "#ffffff",
//     //   },
//     //   manifest: {
//     //     icons: [
//     //       {
//     //         src: "/assets/icon/chrome-mask-512.png",
//     //         sizes: "512x512",
//     //         purpose: "maskable",
//     //         type: "image/png",
//     //       },
//     //       {
//     //         src: "/assets/icon/chrome-mask-192.png",
//     //         sizes: "192x192",
//     //         purpose: "maskable",
//     //         type: "image/png",
//     //       },
//     //       {
//     //         src: "/assets/icon/chrome-512.png",
//     //         sizes: "512x512",
//     //         type: "image/png",
//     //       },
//     //       {
//     //         src: "/assets/icon/chrome-192.png",
//     //         sizes: "192x192",
//     //         type: "image/png",
//     //       },
//     //     ],
//     //     shortcuts: [
//     //       {
//     //         name: "Demo",
//     //         short_name: "Demo",
//     //         url: "/demo/",
//     //         icons: [
//     //           {
//     //             src: "/assets/icon/guide-maskable.png",
//     //             sizes: "192x192",
//     //             purpose: "maskable",
//     //             type: "image/png",
//     //           },
//     //         ],
//     //       },
//     //     ],
//     //   },
//     // },
//   },
// });
