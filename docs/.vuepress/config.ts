import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { recoTheme } from 'vuepress-theme-reco'
import { themeConfig } from './config/index'
import { getDirname, path } from 'vuepress/utils'

const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  bundler: viteBundler(),
  theme: recoTheme(themeConfig),
  alias: {
    '@images': path.resolve(__dirname, './images')
  },
  head: [['link', { rel: 'icon', href: '/logo.svg' }]],
  title: "一心只想回农村",
  base: '/blog/'
})
