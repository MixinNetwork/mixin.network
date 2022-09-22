// const { defaultTheme } = require('vuepress')
const { CustomTheme } = require('./theme')
const { themeDataPlugin } = require('@vuepress/plugin-theme-data')
import { sitemapPlugin } from "vuepress-plugin-sitemap2";

const {enUS, zhTW} = require("./theme/lang");

module.exports = {
  title: "Mixin.network",

  head: [
    ['script', {src: '/scripts/tailwindcss.js' }],
    ['meta', {name: 'color-scheme', content: 'light only'}]
  ],
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/': {
      lang: 'en-US',
      title: 'Mixin.network',
      description: 'What\'s Mixin? A blockchain with Lightning Fast, zero transaction fees, popular dApps, develop friendly APIs & SDKs.',
    },
    '/zh/': {
      lang: 'zh-TW',
      title: 'Mixin.network',
      description: '什麼是 Mixin？ 具有閃電般快速、零交易費用、流行的 dApp、開發人員友好的 API 和 SDK 的區塊鏈。',
    },
  },

  theme: CustomTheme({

  }),

  plugins: [
    sitemapPlugin({
      hostname: 'mixin.network'
    }),
    themeDataPlugin({

      logo: "/images/logo.svg",

      colorModeSwitch: true,

      colorMode: 'light',

      themeData: {

        locales: {
          '/': {
            selectLanguageName: 'English',

            selectLanguageText: 'English',

            logo: "/images/logo.svg",

            messages: enUS,

            navbar: [
              { text: 'Ecosystem', link: '/dapps' },
              { text: 'Developers', link: '/developers' },
              { text: 'Network', link: '/network' },
              { text: 'Messenger', link: '/messenger' },
              { text: 'Community', link: '/community' },
              { text: 'Blog', link: '/blog' },
            ],
          },
          '/zh/': {
            selectLanguageName: '中文',

            selectLanguageText: '中文',

            logo: "/images/logo.svg",

            messages: zhTW,

            navbar: [
              { text: '生態系統', link: '/zh/dapps' },
              { text: '開發者', link: '/zh/developers' },
              { text: 'Network', link: '/zh/network' },
              { text: 'Messenger', link: '/zh/messenger' },
              { text: '社區', link: '/zh/community' },
              { text: '部落格', link: '/blog' },
            ],
          },
        },
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