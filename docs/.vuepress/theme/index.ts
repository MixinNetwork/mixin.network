const { path } = require('@vuepress/utils')
const { defaultTheme } = require('@vuepress/theme-default')
const { mediumZoomPlugin } = require('@vuepress/plugin-medium-zoom')
import type { DefaultThemeOptions } from '@vuepress/theme-default';
import type { Theme } from '@vuepress/core'
const { themeDataPlugin } = require('@vuepress/plugin-theme-data')



export const CustomTheme = (options: DefaultThemeOptions): Theme => {
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
      })
    ],
  }
}

// module.exports = CustomTheme;