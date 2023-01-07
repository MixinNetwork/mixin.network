<template>
  <div class="archive">
    <div class="archive-top">
      <h1 class="archive-title">Archives of {{ title }}</h1>
    </div>
    <div class="archive-content">
      <div v-for="group, ix in groups" :key="`group-${ix}`">
        <h2 class="archive-subtitle">{{ group.year }}</h2>
        <div class="items">
          <a v-for="item, iy in group.items" :key="`item-${iy}`" :href="item.path" class="item-link">
            <div class="item-title">{{ item.info.title }}</div>
            <div class="item-date">{{ displayDate(item.info.date) }}</div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Archive",
};
</script>

<script setup lang="ts">
import { computed } from "@vue/reactivity";
import { useBlogType } from "vuepress-plugin-blog2/client";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  source: {
    type: String,
    required: true,
  },
});

const news = useBlogType(props.source);

const groups = computed(() => {
  // group items by year
  const groups: any = {}
  news.value.items.forEach((item:any) => {
    const year = new Date(item.info.date).getFullYear()
    if (!groups[year]) {
      groups[year] = {
        year,
        items: []
      }
    }
    groups[year].items.push(item)
  })
  // sort groups by year
  const sortedGroups:Array<any> = Object.values(groups).sort((a:any, b:any) => b.year - a.year)
  return sortedGroups
});

function displayDate (date) {
  return new Date(date).toLocaleDateString()
}

</script>

<style lang="scss" scoped>
@use "@vuepress/theme-default/styles/mixins";
.archive {
  margin-bottom: 4rem;
}

.archive-top {
  @include mixins.content_wrapper;
  margin-bottom: 1rem;
  padding: 2rem 0;
  border-bottom: 1px solid #eaecef;
}

.archive-title {
  margin-top: 0 !important;
  padding: 0;
  text-align: left;
  font-weight: bold;
  font-size: 2.5rem;
  margin-bottom: 1rem;
}
.archive-description {
  opacity: 0.6;
  font-size: 1.2rem;
}

.archive-content {
  @include mixins.content_wrapper;
  margin: 0 auto !important;
  padding: 0 !important;
  text-align: left;
}
.archive-subtitle {
  font-size: 1.4rem;
  padding-top: 10px;
  margin: 0 !important;
}

.items {
  margin-bottom: 2rem;
}

.item-link {
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  padding: 4px 8px;
  margin-left: -8px;
  margin-right: -8px;
  text-decoration: none !important;
  &:hover {
    background-color: #f5f5f5;
    border-radius: 2px;
  }
  .item-date {
    opacity: 0.4;
  }
}
</style>