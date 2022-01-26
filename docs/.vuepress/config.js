module.exports = {
    title: 'Max Blog',// 设置网站标题
    description: 'MaxWang的博客',
    base: '/',   // 设置站点根路径
    dest: './public',  // 设置输出目录 默认在.vuepress 目录下
    port: 8081,
    head: [['link', { rel: 'icon', href: '/umbrella.png' }]],
    plugins: [],
    markdown: {
        lineNumbers: true
    },
    theme:"reco",
    themeConfig: {
        // 右上角导航，可多层级
        nav: require("./nav"),
        // 左边的menu，配合导航切换
        sidebar: require("./sidebar"),
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
        searchMaxSuggestoins: 10,
        serviceWorker: {
            updatePopup: {
                message: "有新的内容.",
                buttonText: '更新'
            }
        },
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页 ！'
    }
}
