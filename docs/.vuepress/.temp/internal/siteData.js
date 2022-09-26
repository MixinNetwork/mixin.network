export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"en-US\",\"title\":\"Mixin.network\",\"description\":\"\",\"head\":[[\"script\",{\"src\":\"/scripts/tailwindcss.js\"}],[\"meta\",{\"name\":\"color-scheme\",\"content\":\"light only\"}],[\"link\",{\"type\":\"image/icon\",\"rel\":\"icon\",\"href\":\"/favicon.ico\"}]],\"locales\":{\"/\":{\"lang\":\"en-US\"},\"/zh/\":{\"lang\":\"zh-TW\"},\"/ja/\":{\"lang\":\"ja-JP\"}}}")

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
