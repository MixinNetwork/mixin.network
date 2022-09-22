export const data = JSON.parse("{\"key\":\"v-4f6e7dda\",\"path\":\"/blog/2022/hello/\",\"title\":\"Hello!\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Hello!\",\"description\":null,\"sidebar\":false},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"Hello!\",\"slug\":\"hello\",\"children\":[]}],\"git\":{\"updatedTime\":1659677625000,\"contributors\":[{\"name\":\"Lyric\",\"email\":\"5h3ll3x@gmail.com\",\"commits\":1}]},\"filePathRelative\":\"blog/2022/hello/README.md\"}")

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
