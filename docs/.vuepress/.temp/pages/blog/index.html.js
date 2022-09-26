export const data = JSON.parse("{\"key\":\"v-145ac574\",\"path\":\"/blog/\",\"title\":\"Blog\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Blog\",\"description\":null,\"editLink\":false,\"sidebar\":false,\"lastUpdated\":false,\"contributors\":false},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"2022\",\"slug\":\"_2022\",\"children\":[]},{\"level\":2,\"title\":\"2021\",\"slug\":\"_2021\",\"children\":[]}],\"git\":{\"updatedTime\":1663844518000,\"contributors\":[{\"name\":\"Lyric\",\"email\":\"5h3ll3x@gmail.com\",\"commits\":1}]},\"filePathRelative\":\"blog/README.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
