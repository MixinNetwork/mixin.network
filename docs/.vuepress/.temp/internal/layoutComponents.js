import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("/home/lyric/Codework/mixin-fan/mixin.network/node_modules/@vuepress/theme-default/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("/home/lyric/Codework/mixin-fan/mixin.network/docs/.vuepress/theme/layouts/Layout.vue")),
}
