module.exports = [{
    text: '首页',
    link: '/'
}, {
    text: '前端',
    link: '/web/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
        // 说明：以下所有link的值只是在相应md文件头部定义的永久链接（不是什么特殊编码）。另外，注意结尾是有斜杠的
        {
            text: '前端文章',
            items: [
                { text: 'JavaScript', link: '/pages/8143cc480faf9a11/' },
            ],
        },
        {
            text: '学习笔记',
            items: [
                { text: '《JavaScript教程》', link: '/note/javascript/' },
                { text: '《JavaScript高级程序设计》', link: '/note/js/' },
                { text: '《ES6 教程》', link: '/note/es6/' },
                { text: '《Vue》', link: '/note/vue/' },
                { text: '《React》', link: '/note/react/' },
                {
                    text: '《TypeScript 从零实现 axios》',
                    link: '/note/typescript-axios/',
                },
                {
                    text: '《Git》',
                    link: '/note/git/',
                },
                {
                    text: 'TypeScript',
                    link: '/pages/51afd6/',
                },
                {
                    text: 'JS设计模式总结',
                    link: '/pages/4643cd/',
                },
            ],
        },
        {
            text: 'flutter',
            items: [
                { text: 'flutter', link: '/pages/a31231/' },
            ],
        },
    ],
}, {
    text: '页面',
    link: '/ui/',
    items: [
        {
            text: 'HTML',
            link: "/pages/d7e560/"
        },
        {
            text: 'CSS',
            link: "/pages/f3e6db/"
        },
    ]
}, {
    text: '更多',
    link: '/more/'
}, { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' }, {
    text: '工具箱',
    items: [
        {
            text: '在线编辑',
            items: [
                { text: '图片压缩', link: 'https://tinypng.com/' },
                { text: 'UTOOLS', link: 'https://u.tools/' },
                { text: 'DOEPAN', link: 'https://codepen.io/' },
                { text: '代码编辑', link: 'https://tool.lu/coderunner/' },
                { text: 'JSON', link: 'https://www.json.cn/' }
            ]
        },
        {
            text: '技术导航',
            items: [
                { text: '新闻', link: 'https://www.anyknew.com/' },
                { text: '编程导航', link: 'https://www.code-nav.cn/' },
                { text: 'ZDZN', link: 'https://www.zdzn.net/' },
                { text: '程序员导航', link: 'https://code.coolzhanweb.com/' },
                { text: '常用导航', link: 'https://www.mgnav.com/' },
                { text: 'CXY521', link: 'https://www.cxy521.com/' },
                { text: '前端导航', link: 'https://www.kwgg2020.com/' },
                { text: '杂货铺', link: 'https://adzhp.cn/' }
            ]
        },
        {
            text: '前端设计',
            items: [
                { text: 'VUE', link: 'https://cn.vuejs.org/' },
                { text: 'REACT', link: 'https://react.docschina.org/' },
                { text: 'TDesign', link: 'https://tdesign.tencent.com/' },
                { text: 'ELEMENT', link: 'https://element-plus.gitee.io/zh-CN/' },
                { text: 'ANT DESIGN', link: 'https://ant.design/index-cn' },
                { text: 'ECHARTS', link: 'https://echarts.apache.org/zh/index.html' },
                { text: 'MAKEAPIE', link: 'https://www.makeapie.com/explore.html' }
            ]
        },
        {
            text: '在线服务',
            items: [
                { text: '阿里云', link: 'https://www.aliyun.com/' },
                { text: '腾讯云', link: 'https://cloud.tencent.com/' }
            ]
        },
        {
            text: '博客指南',
            items: [
                { text: '掘金', link: 'https://juejin.im/' },
                { text: 'CSDN', link: 'https://blog.csdn.net/' },
                { text: '简书', link: 'https://www.jianshu.com/' },
                { text: '腾讯', link: 'https://how.ke.qq.com/' },
                { text: 'B站', link: 'https://space.bilibili.com/' },
            ]
        }
    ]
},]