<template>
  <main class="page">
    <slot name="top" />

    <div
      class="theme-default-content"
      :class="isArticle ? 'is-article' : 'not-article'"
    >
      <slot name="content-top" />

      <Content />

      <slot name="content-bottom" />
    </div>

    <PageMeta />

    <PageNav />

    <slot name="bottom" />
  </main>
</template>

<script>
import PageMeta from "@vuepress/theme-default/lib/client/components/PageMeta.vue";
import PageNav from "@vuepress/theme-default/lib/client/components/PageNav.vue";
import { usePageFrontmatter } from "@vuepress/client";

export default {
  name: "Page",
  components: { PageNav, PageMeta },

  data() {
    return {
      isArticle: true,
    };
  },

  mounted() {
    const frontmatter = usePageFrontmatter().value;
    this.isArticle = frontmatter.article !== false;
  },
};
</script>
