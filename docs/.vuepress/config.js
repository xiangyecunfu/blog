module.exports = {
  title: '一心只想回农村',
  description: '空闲时间分享前端相关知识，也是一个记录自己成长的地方',
  themeConfig: {
    // 导航栏
    nav: [
      { text: '首页', link: '/' },
      { 
        text: '个人博客', 
        items: [
          { text: 'GitHub', link: 'https://github.com/xiangyecunfu/blog' },
          { text: '掘金', link: 'https://juejin.cn/user/497418932333127' },
          { text: 'CSDN', link: 'https://blog.csdn.net/m0_61700044' },
        ]
      },
      
    ],

    // 侧边栏
    sidebar: [
      {
        title: "欢迎学习",
        path: "/",
        collapsable: false,
        children: [{title: '博客简介', path: '/'}]
      },
      {
        title: "面试相关",
        path: "/audition/README",
        collapsable: true,
        children: [
          { title: 'HTML', path: '/audition/HTML' },
          { title: 'CSS', path: '/audition/CSS' },
          { title: 'JavaScript', path: '/audition/JavaScript' },
          { title: 'Vue', path: '/audition/Vue' },
          { title: 'React', path: '/audition/React' },
        ]
      },
      {
        title: "sourceCode",
        path: "/sourceCode/README",
        collapsable: true,
        children: [
          {title: 'taro', path: '/sourceCode/taro/README'},
        ]
      }
    ]
  }
}