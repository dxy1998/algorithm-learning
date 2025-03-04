import { defineConfig } from 'vitepress'
import { fileURLToPath } from 'node:url'
import sidebar from './sidebar.json'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Learning Algorithm',
  base: process.env.NODE_ENV === 'production' ? '/algorithm-learning/' : '/',
  description: '学习算法',
  cleanUrls: true,
  lang: 'zh-Hans',
  srcDir: fileURLToPath(new URL('../../src', import.meta.url)),
  themeConfig: {
    sidebar,
  },
  rewrites: {
    '/': '/simple/insertionSort',
  },
  lastUpdated: true,
  vite: {
    server: {
      open: true,
    },
  },
})
