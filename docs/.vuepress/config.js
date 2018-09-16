module.exports = {
  base: '/notes/',
  title: '西城小生',
  description: 'Just playing around',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  host: '0.0.0.0',
  port: 8080,
  dest: 'docs/.vuepress/dist',
  evergreen: true,
  configureWebpack: {
    resolve: {
      alias: {
        '@base': 'static'
      }
    }
  },
  themeConfig: {
    sidebar: 'auto',
    sidebarDepth: 5,
    displayAllHeaders: true,
    lastUpdated: 'Last Updated',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/md/' },
      { text: 'External', link: 'https://google.com' },
      {
        text: 'Languages',
        items: [
          { text: 'Chinese', link: '/md/' },
          { text: 'Japanese', link: '/js/' }
        ]
      }
    ],
    repo: 'https://github.com/drzorm/notes',
    repoLabel: '查看源码',
    editLinks: true,
    editLinkText: '帮助我们改善此页面！'
  },
  markdown: {
    lineNumbers: true
  }
}