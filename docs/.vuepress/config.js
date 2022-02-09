module.exports = {
    title: 'Max Blog',// 设置网站标题
    description: 'MaxWang的博客',
    base: '/MaxBlog/',   // 设置站点根路径
    // dest: './public',  // 设置输出目录 默认在.vuepress 目录下dist
    port: 8081,
    head: [['link', { rel: 'icon', href: '/umbrella.png' }]],
    plugins: [
        {
            '@vuepress/blog':
            {
                directories: [
                    {
                        // 当前分类的唯一 ID
                        id: 'post',
                        // 目标文件夹
                        dirname: '_posts',
                        // `entry page` (或者 `list page`) 的路径
                        path: '/',
                        pagination: {
                            lengthPerPage: 5
                        }
                    },
                ],
                frontmatters: [
                    {
                        // 当前分类的唯一ID
                        id: 'tag',
                        // 决定将 frontmatter 键值归到该类别下
                        keys: ['tag'],
                        // `entry page` (或者 `list page`) 的路径
                        path: '/tag/',
                        // `entry page` 的布局
                        layout: 'Tag',
                    },
                ],
            }
        }

    ],
    markdown: {
        lineNumbers: true
    },
    theme: "vdoing",
    themeConfig: {
        // 右上角导航，可多层级
        nav: require("./nav"),
        // 左边的menu，配合导航切换
        // sidebar: require("./sidebar"),
        sidebar: 'structuring',
        sidebarDepth: 2,
        lastUpdated: false,
        searchMaxSuggestoins: 10,
        repo: 'xugaoyi/vuepress-theme-vdoing', // 导航栏右侧生成Github链接
        serviceWorker: {
            updatePopup: {
                message: "有新的内容.",
                buttonText: '更新'
            }
        },
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页 ！',

        // 代码主题 prismjs
        /**
     * support for
     * 'default'
     * 'funky'
     * 'okaidia'
     * 'solarizedlight'
     * 'tomorrow'
     */
        //*** 以下是Vdoing主题相关配置，文档：https://doc.xugaoyi.com/pages/a20ce8/ ***//

        // category: false, // 是否打开分类功能，默认true
        // tag: false, // 是否打开标签功能，默认true
        // archive: false, // 是否打开归档功能，默认true
        // categoryText: '随笔', // 碎片化文章（_posts文件夹的文章）预设生成的分类值，默认'随笔'

        bodyBgImg: [
          'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175828.jpeg',
          'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175845.jpeg',
          'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175846.jpeg'
        ], // body背景大图，默认无。 单张图片 String | 多张图片 Array, 多张图片时每隔15秒换一张。
        // bodyBgImgOpacity: 0.5, // body背景图透明度，选值 0.1~ 1.0, 默认0.5
        // titleBadge: false, // 文章标题前的图标是否显示，默认true
        // titleBadgeIcons: [ // 文章标题前图标的地址，默认主题内置图标
        //   '图标地址1',
        //   '图标地址2'
        // ],
        // contentBgStyle: 1, // 文章内容块的背景风格，默认无. 1 方格 | 2 横线 | 3 竖线 | 4 左斜线 | 5 右斜线 | 6 点状

        // updateBar: { // 最近更新栏
        //   showToArticle: false, // 显示到文章页底部，默认true
        //   moreArticle: '/archives' // “更多文章”跳转的页面，默认'/archives'
        // },
        // rightMenuBar: false, // 是否显示右侧文章大纲栏，默认true (屏宽小于1300px下无论如何都不显示)
        // sidebarOpen: false, // 初始状态是否打开左侧边栏，默认true
        // pageButton: false, // 是否显示快捷翻页按钮，默认true

        // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | <自定义>    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页
        sidebar: 'structuring',

        // 文章默认的作者信息，(可在md文件中单独配置此信息) string | {name: string, link?: string}
        author: {
            name: 'MaxWang', // 必需
            link: 'https://github.com/xugaoyi', // 可选的
        },

        // 博主信息 (显示在首页侧边栏)
        blogger: {
            avatar: 'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200103123203.jpg',
            name: 'Max Wang',
            slogan: '前端界的小学生',
        },

        // 社交图标 (显示于博主信息栏和页脚栏。内置图标：https://doc.xugaoyi.com/pages/a20ce8/#social)
        social: {
            // iconfontCssFile: '//at.alicdn.com/t/xxx.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自己添加。阿里图片库：https://www.iconfont.cn/
            icons: [
                {
                    iconClass: 'icon-youjian',
                    title: '发邮件',
                    link: 'mailto:664137975@qq.com',
                },
                {
                    iconClass: 'icon-github',
                    title: 'GitHub',
                    link: 'https://github.com/xugaoyi',
                },
                {
                    iconClass: 'icon-erji',
                    title: '听音乐',
                    link: 'https://music.163.com/#/playlist?id=755597173',
                },
            ],
        },

        // 页脚信息
        footer: {
            createYear: 2019, // 博客创建年份
            copyrightInfo:
                'Evan Xu | <a href="https://github.com/xugaoyi/vuepress-theme-vdoing/blob/master/LICENSE" target="_blank">MIT License</a>', // 博客版权信息，支持a标签或换行标签</br>
        },
        
    },

}
