export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"en-US\",\"title\":\"Mixin.network\",\"description\":\"\",\"head\":[[\"script\",{\"src\":\"/scripts/tailwindcss.js\"}],[\"meta\",{\"name\":\"color-scheme\",\"content\":\"light only\"}],[\"link\",{\"type\":\"image/icon\",\"rel\":\"icon\",\"href\":\"/favicon.ico\"}]],\"locales\":{\"/\":{\"lang\":\"en-US\",\"title\":\"Mixin.network\",\"description\":\"What's Mixin? A blockchain with Lightning Fast, zero transaction fees, popular dApps, develop friendly APIs & SDKs.\"},\"/zh/\":{\"lang\":\"zh-TW\",\"title\":\"Mixin.network\",\"description\":\"什麼是 Mixin？ 具有閃電般快速、零交易費用、流行的 dApp、開發人員友好的 API 和 SDK 的區塊鏈。\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
