<template>
  <div class="collections-wrapper text-center pb-8">
    <div class="bg"></div>
    <div
      class="collections grid gap-4 grid-cols-1 md:grid-cols-2 text-left mt-10"
    >
      <a
        class="collection pt-8"
        v-for="(item, ix) in collections"
        :key="`collection-${ix}`"
        :class="collectionCls(item, ix)"
        :style="{
          'z-index': ix,
          'background-image': item.image ? 'url(' + item.image + ')' : '',
        }"
        :title="item.title"
        :href="item.url"
      >
        <div class="collection-dapps">
          <div class="dapp-icons">
            <img
              class=""
              :src="path"
              v-for="(path, iy) in dappIcons(item.dapps)"
              :key="`icon-${iy}`"
              :alt="path"
            />
          </div>
        </div>
        <div class="collection-category text-sm font-bold px-8 mb-2">
          <span class="collection-category-inner">
            {{ item.category }}
          </span>
        </div>
        <h3 class="collection-title text-xl font-bold px-8">
          {{ item.title }}
        </h3>
      </a>
    </div>
  </div>
</template>

<script>
import { usePageFrontmatter } from "@vuepress/client";
import dapps from "../../../public/dapps/index";

export default {
  name: "DappsCollections",

  data() {
    return {
      collections: [],
    };
  },

  computed: {
    dapps: () => {
      return dapps;
    },
  },

  methods: {
    collectionCls(item, ix) {
      const ret = [];
      if (item.image) {
        ret.push("image");
      }
      const cls = ["first", "second", "thrid", "fourth"];
      ret.push(cls[ix % 2]);
      return ret.join(" ");
    },
    dappIcons(ids) {
      const ret = [];
      if (this.dapps) {
        for (const key in this.dapps) {
          if (Object.hasOwnProperty.call(this.dapps, key)) {
            const dapp = this.dapps[key];
            if (-1 !== ids.indexOf(dapp.id)) {
              ret.push(`/dapps/${dapp.id}/icon.png`);
            }
          }
        }
      }
      return ret;
    },
  },

  mounted() {
    const frontmatter = usePageFrontmatter().value;
    this.collections = frontmatter.collections;
  },
};
</script>

<style lang="scss" scoped>
.collections-wrapper {
  position: relative;
  .bg {
    bottom: 0;
    top: 100px;
    width: 100vw;
    position: absolute;
    display: block;
    content: " ";
    left: 50%;
    transform: translateX(-50%);
    z-index: 0;
    overflow: hidden;
    background: #f6f7fa;
  }
}
.collection {
  border-radius: 32px;
  background-color: #333;
  height: 248px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  background-size: cover;
  text-decoration: none !important;
  &.first {
    background-image: url("/images/dapps/collections-bg-1.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  &.second {
    background-image: url("/images/dapps/collections-bg-2.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .collection-dapps {
    flex: 1;
    padding: 0 32px 0px 32px;
    .dapp-icons {
      display: flex;
      flex-direction: row-reverse;
      align-items: flex-end;
      justify-content: flex-end;
      padding-left: 8px;
      img {
        margin-left: -8px;
        width: 48px;
        height: 48px;
      }
    }
  }

  .collection-category {
    .collection-category-inner {
      background-color: white;
      color: black;
      padding: 4px 8px;
      border-radius: 5px;
    }
  }
  .collection-title {
    padding: 0 32px 24px 32px;
    color: white;
    margin: 0;
  }
}
</style>
