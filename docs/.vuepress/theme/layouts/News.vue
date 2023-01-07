<template>
  <ParentLayout>
    <template #page>
      <div class="page">
        <div class="page-top">
          <h1 class="page-title">News</h1>
          <div class="page-description">The latest product news and announcements from Mixin Team</div>
        </div>
        <div class="page-content">
          <ArticleList :items="latestNewsItems" is-timeline />
          <div class="p-4 pt-20">
            <a href="/news/archive.html" class="button mist font-bold view-all-button">View All</a>
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
  name: "News",
  components: { ParentLayout, ArticleList, "site-footer": Footer },
  data() {
    return {
      news: useBlogType("news")
    }
  },

  computed: {
    latestNewsItems() {
      // only return the latest 20 news items
      return this.news.items.slice(0, 20);
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