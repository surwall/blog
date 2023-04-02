import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
  title: '前端学习',
  description: 'stay awesome',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: 'java',
        items: [{ text: '配置环境', link: '' }],
      },
      {
        text: '前端',
        items: [
          { text: '环境配置', link: '/front-end/env/' },
          { text: 'js系列', link: '/front-end/js/' },
        ],
      },
      {
        text: '运维',
        items: [{ text: '环境配置', link: 'devops/env/' }],
      },
      {
        text: '安卓',
        items: [{ text: '环境配置', link: '/android/env/' }],
      },
      {
        text: 'ios',
        items: [{ text: '环境配置', link: '/ios/env/' }],
      },
    ],

    sidebar: {
      // 前端
      '/front-end/env': [{ text: '', link: '/front-end/' }],
      '/front-end/js': [{ text: 'promise详解', link: '/front-end/js/promise' }],
      '/android/env': [{ text: '工具安装', link: '/android/env/toolchain' }],
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/surwall' }],
  },
})
