<template>
  <div class="text-center pt-8 pb-8 md:pb-20">
    <h2 class="tutorials-sec-title text-2xl md:text-4xl font-bold mb-20">
      {{ $t("dev.tutorial") }}
    </h2>
    <div class="tutorials grid gap-0 grid-cols-1 md:grid-cols-2">
      <a
        class="tutorial flex items-center text-left mx-0 md:mx-4"
        v-for="(tut, ix) in tutorials"
        :key="`tut-${ix}`"
        :href="tut.url"
      >
        <div class="tutorial-icon mr-4">
          <span class="icon-doc-blue"></span>
        </div>
        <h3 class="tutorial-title text-base font-bold">
          {{ tut.title }}
        </h3>
      </a>
    </div>
  </div>
</template>

<script>
import { usePageFrontmatter } from "@vuepress/client";
import i18n from "../../utils/i18n";

export default {
  name: "DevTutorials",

  data() {
    return {
      tutorials: [],
    };
  },

  methods: {
    $t: i18n.$t,
  },

  mounted() {
    const frontmatter = usePageFrontmatter().value;
    this.tutorials = frontmatter.tutorials;
  },
};
</script>

<style lang="scss" scoped>
.tutorials-sec-title {
  line-height: 1.3;
  margin-bottom: 40px !important;
}
.tutorial {
  padding: 20px;
  border-bottom: 1px solid #e8e9ed;
  text-decoration: none !important;
}
.tutorial-icon {
  span {
    width: 22px;
    height: 22px;
    display: block;
  }
}
.tutorial-title {
  padding: 0;
  margin: 0;
}
</style>
