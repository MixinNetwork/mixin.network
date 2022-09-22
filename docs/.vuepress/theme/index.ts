const { path } = require('@vuepress/utils')
const { defaultTheme } = require('@vuepress/theme-default')
const { mediumZoomPlugin } = require('@vuepress/plugin-medium-zoom')
import type { DefaultThemeOptions } from '@vuepress/theme-default';
import type { Theme } from '@vuepress/core'
const { themeDataPlugin } = require('@vuepress/plugin-theme-data')



export const CustomTheme = (options: DefaultThemeOptions): Theme => {
  console.log(options, options);
  return {
    name: 'vuepress-theme-pando',
    extends: defaultTheme(options),
    layouts: {
      Layout: path.resolve(__dirname, 'layouts/Layout.vue'),
    },

    alias: {
      '@theme/Page.vue': path.resolve(__dirname, './components/Page.vue'),
    },

    plugins: [
      mediumZoomPlugin({
        // disable default image zoom
        selector: '.zoom-image'
      }),
      // themeDataPlugin({

      //   logo: "/images/logo.svg",

      //   colorModeSwitch: true,

      //   colorMode: 'light',

      //   themeData: {

      //     locales: {
      //       '/': {
      //         selectLanguageName: 'English',

      //         selectLanguageText: 'English',

      //         logo: "/images/logo.svg",

      //         messages: en,

      //         navbar: [
      //           { text: 'Ecosystem', link: '/dapps' },
      //           { text: 'Developers', link: '/developers' },
      //           { text: 'Network', link: '/guide' },
      //           { text: 'Messenger', link: '/messenger' },
      //           { text: 'Community', link: '/community' },
      //           { text: 'Blog', link: '/blog' },
      //         ],
      //       },
      //       '/zh/': {
      //         selectLanguageName: '中文',

      //         selectLanguageText: '中文',

      //         logo: "/images/logo.svg",

      //         messages: zh,

      //         navbar: [
      //           { text: '生態系統', link: '/zh/dapps' },
      //           { text: '開發者', link: '/zh/developers' },
      //           { text: 'Network', link: '/zh/guide' },
      //           { text: 'Messenger', link: '/zh/messenger' },
      //           { text: '社區', link: '/zh/community' },
      //           { text: '部落格', link: '/zh/blog' },
      //         ],
      //       },
      //     },
      //   },
      // }),
    ],
  }
}

// module.exports = CustomTheme;