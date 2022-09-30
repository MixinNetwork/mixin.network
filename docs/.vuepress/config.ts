// const { defaultTheme } = require('vuepress')
const { CustomTheme } = require('./theme')
const { themeDataPlugin } = require('@vuepress/plugin-theme-data')
import { sitemapPlugin } from "vuepress-plugin-sitemap2";
const { googleAnalyticsPlugin } = require('@vuepress/plugin-google-analytics');
const { genLocales } = require("./config/locales");


module.exports = {
  title: "Mixin Network",

  head: [
    ['script', {src: '/scripts/tailwindcss.js' }],
    ['meta', {name: 'color-scheme', content: 'light only'}],
    ['link', { type: 'image/icon', rel: 'icon', href: '/favicon.ico' }],
  ],
  locales: {
    '/': {
      lang: 'en-US',
    },
    '/zh/': {
      lang: 'zh-TW',
    },
    '/ja/': {
      lang: 'ja-JP',
    },
  },

  theme: CustomTheme({

  }),

  plugins: [
    googleAnalyticsPlugin({
      id: 'G-FS1WRK9J9S',
    }),
    sitemapPlugin({
      hostname: 'mixin.network'
    }),
    themeDataPlugin({

      logo: "/images/logo.svg",

      colorModeSwitch: true,

      colorMode: 'light',

      themeData: {

        locales: genLocales(),

        social: [
          {
            name: 'twitter',
            url: 'https://twitter.com/mixin_network'
          },
          {
            name: 'reddit',
            url: 'https://www.reddit.com/r/mixin/'
          },
          {
            name: 'github',
            url: 'https://github.com/MixinNetwork'
          },
          {
            name: 'stackoverflow',
            url: 'https://stackoverflow.com/questions/tagged/mixin'
          },
        ]
      },
    }),
  ]
}