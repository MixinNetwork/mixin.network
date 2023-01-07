<template>
  <ParentLayout>
    <template #page>
      <div class="page">
        <div class="page-top">
          <h1 class="page-title">Blog</h1>
          <div class="page-description">Work in progress</div>
        </div>
        <div class="page-content">
          <ArticleList :items="latestBlogItems" is-timeline />
          <div class="p-4 pt-20">
            <a href="/blog/archive.html" class="button mist font-bold view-all-button">View All</a>
          </div>
        </div>
      </div>
      <site-footer />
    </template>
  </ParentLayout>
</template>
<script>
import { useBlogType } from "vuepress-plugin-blog2/client";
import ArticleList from "../global-components/article/ArticleList.vue";
import ParentLayout from "@vuepress/theme-default/lib/client/layouts/Layout.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Blog",
  components: { ParentLayout, ArticleList, "site-footer": Footer },
  data() {
    return {
      blog: useBlogType("blog")
    }
  },

  computed: {
    latestBlogItems() {
      // only return the latest 20 items
      console.log(this.blog.items)
      return this.blog.items.slice(0, 20);
    }
  }
};
</script>

<style lang="scss" scoped>
@use "@vuepress/theme-default/styles/mixins";
.page {
  margin-bottom: 4rem;
}

.page-top {
  @include mixins.content_wrapper;
  margin-bottom: 1rem;
  padding: 2rem 0;
  border-bottom: 1px solid #eaecef;
}

.page-title {
  padding: 0;
  text-align: left;
  font-weight: bold;
  font-size: 2.5rem;
  margin-bottom: 1rem;
}
.page-description {
  opacity: 0.6;
  font-size: 1.2rem;
}

.page-content {
  @include mixins.content_wrapper;
  margin: 0 auto !important;
  padding: 0;
  text-align: left;
}

.view-all-button {
  max-width: 180px;
  margin: 0 auto;
}
</style>