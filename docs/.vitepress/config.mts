import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/happy-research/',
  title: 'Happy Research',
  description: 'Happy Research',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '目录', link: '/content' },
    ],

    sidebar: [
      {
        text: '章节详情',
        items: [
          { text: '目录', link: '/content' },
          { text: '章节 1', link: '/chapters/1' },
          { text: '章节 2', link: '/chapters/2' },
        ],
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/qiuhuachuan' }],
  },
});
