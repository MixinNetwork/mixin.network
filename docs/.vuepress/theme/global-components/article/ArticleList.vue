<template>
  <div class="articles-wrapper grid gap-10 grid-cols-1 md:grid-cols-3">
    <div v-if="!items.length">Nothing.</div>

    <article
      v-for="{ info, path } in items"
      class="article"
      @click="$router.push(path)"
    >

      <div class="article-date">
        {{ new Date(info.date).toLocaleDateString() }}
      </div>
      <div class="article-cover" :style="getCoverStyle(info)"></div>
      <h2 class="article-title">
        {{ info.title }}
      </h2>
      <div class="article-meta">
        <div v-if="info.author" class="author">By {{ info.author }}</div>
        <div v-if="info.tag.length" class="tag">Tag: {{ info.tag.join(", ") }}</div>
      </div>
    </article>
  </div>
</template>

<script  >
export default {
  name: "ArticleList",
  props: ["items"],

  methods: {
    getCoverStyle(info) {
      return {
        backgroundImage: `url(${info.cover})`
      }
    }
  }

}
</script>

<style lang="scss">
.articles-wrapper {
  text-align: center;
}
.article {
  position: relative;
  width: 100%;
  text-align: left;
  &:hover {
    cursor: pointer;
  }
  .article-date {
    font-size: 0.8rem;
    font-weight: bold;
    opacity: 0.5;
    margin-bottom: 0.5rem;
  }
  .article-cover {
    margin-bottom: 0.5rem;
    background-size: cover;
    background-position: center;
    height: 160px;
    border-radius: 8px;
  }
  .article-title {
    position: relative;
    display: inline-block;
    font-size: 1.6rem;
    font-weight: bold;
    a {
      color: inherit;
    }
  }
  .article-meta {
    font-size: 0.8rem;
    padding: 4px 0;
    opacity: 0.6;
  }
  .excerpt {
    h1 {
      display: none;
    }
    h2 {
      font-size: 1.2em;
    }
    h3 {
      font-size: 1.15em;
    }
  }
}
</style>