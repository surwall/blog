import { defineConfig } from 'vitepress'
import { withPwa } from '@vite-pwa/vitepress'

// https://vitepress.dev/reference/site-config
export default withPwa(
  defineConfig({
    lang: 'zh-CN',
    base: '/',
    lastUpdated: true,
    title: "surwall's blog",
    description: 'stay awesome',
    /* markdown 配置 */
    markdown: {
      lineNumbers: true,
    },
    pwa: {
      strategies: 'generateSW',
      registerType: 'prompt',
      manifest: {
        display: 'standalone',
        name: "surwall's blog",
        short_name: 'surwall',
        theme_color: '#bd34fe',
        icons: [
          {
            src: '/icons/icon-72x72.png',
            sizes: '72x72',
            type: 'image/png',
            purpose: 'maskable any',
          },
          {
            src: '/icons/icon-96x96.png',
            sizes: '96x96',
            type: 'image/png',
            purpose: 'maskable any',
          },
          {
            src: '/icons/icon-128x128.png',
            sizes: '128x128',
            type: 'image/png',
            purpose: 'maskable any',
          },
          {
            src: '/icons/icon-144x144.png',
            sizes: '144x144',
            type: 'image/png',
            purpose: 'maskable any',
          },
          {
            src: '/icons/icon-152x152.png',
            sizes: '152x152',
            type: 'image/png',
            purpose: 'maskable any',
          },
          {
            src: '/icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'maskable any',
          },
          {
            src: '/icons/icon-384x384.png',
            sizes: '384x384',
            type: 'image/png',
            purpose: 'maskable any',
          },
          {
            src: '/icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable any',
          },
        ],
      },
      workbox: {
        clientsClaim: true,
        skipWaiting: true,
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
      },
      devOptions: {
        enabled: true,
      },
    },
    head: [
      [
        'link',
        { rel: 'shortcut icon', href: '/favicon.ico', type: 'image/x-icon' },
      ],
    ],
    themeConfig: {
      // https://vitepress.dev/reference/default-theme-config
      docFooter: { prev: '上一页', next: '下一页' },
      returnToTopLabel: '回到顶部',
      outline: {
        label: '本页目录',
      },
      lastUpdatedText: '上次更新时间',
      logo: '/icons/logo.jpg',
      editLink: {
        text: '编辑此页面',
        pattern: 'https://github.com/surwall/blog/edit/master/docs/:path',
      },
      nav: [
        {
          text: '个人',
          items: [
            { text: 'mac环境配置', link: '/personal/env/mac-setup' },
            { text: 'win环境配置', link: '/personal/env/win-setup' },
          ],
        },
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
          items: [{ text: '环境配置', link: '/android/env/toolchain' }],
        },
        {
          text: 'ios',
          items: [{ text: '环境配置', link: '/ios/env/toolchain' }],
        },
      ],

      sidebar: {
        // 前端
        '/front-end/env': [{ text: '', link: '/front-end/' }],
        '/front-end/js': [
          { text: 'promise详解', link: '/front-end/js/promise' },
        ],
        '/android/env': [{ text: '工具安装', link: '/android/env/toolchain' }],
        '/nav': [
          { text: '前端导航', link: '/nav/front-end' },
          { text: '编程导航', link: '/nav/coding' },
          { text: '通用导航', link: '/nav/generic' },
        ],
      },

      socialLinks: [{ icon: 'github', link: 'https://github.com/surwall' }],
    },
  })
)