import type { NavLink } from './components/type'

type NavData = {
  title: string
  items: NavLink[]
}

export const NAV_DATA: NavData[] = [
  {
    title: '图书下载',
    items: [
      {
        icon: 'https://libgen.is/favicon.ico',
        title: 'Library Genesis',
        desc: 'Library Genesis',
        link: 'https://libgen.is/',
      },
      {
        icon: 'https://tinypng.com/images/apple-touch-icon.png',
        title: 'TinyPNG',
        desc: '在线图片压缩工具',
        link: 'https://tinypng.com',
      },
      {
        icon: 'https://javascript.info/img/favicon/apple-touch-icon-precomposed.png',
        title: 'modern javascript',
        link: 'https://javascript.info/',
      },
    ],
  },
]
