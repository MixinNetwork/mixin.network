export const data = JSON.parse("{\"key\":\"v-53ea1df8\",\"path\":\"/blog/2022/hello.html\",\"title\":\"Hello!\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Hello!\",\"description\":null,\"editLink\":false,\"sidebar\":false,\"lastUpdated\":false,\"contributors\":false},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"Hello!\",\"slug\":\"hello\",\"children\":[]}],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"blog/2022/hello.md\"}")

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
