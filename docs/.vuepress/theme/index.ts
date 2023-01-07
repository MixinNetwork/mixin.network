import { path } from '@vuepress/utils'
import { defaultTheme } from '@vuepress/theme-default'
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom'
import type { DefaultThemeOptions } from '@vuepress/theme-default';
import type { Theme } from '@vuepress/core'

export const CustomTheme = (options: DefaultThemeOptions): Theme => {
  return {
    name: 'vuepress-theme-pando',
    extends: defaultTheme(options),

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