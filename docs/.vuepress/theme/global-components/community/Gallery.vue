<template>
  <div class="text-center mb-10 md:mb-20">
    <div class="gallery-wrapper">
      <div class="gallery-inner">
        <div class="gallery">
          <div
            class="gallery-item text-left image"
            :style="{
              'z-index': ix,
              'background-image': item.image ? 'url(' + item.image + ')' : '',
            }"
            v-for="(item, ix) in items"
            :key="`item-${ix}`"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { usePageFrontmatter } from "@vuepress/client";

export default {
  name: "CommunityGallery",

  data() {
    return {
      items: [],
    };
  },

  methods: {},

  mounted() {
    const frontmatter = usePageFrontmatter().value;
    this.items = frontmatter.featured_images.map((x) => {
      return { image: x };
    });
  },
};
</script>

<style lang="scss" scoped>
.gallery-wrapper {
  position: relative;
  height: 512px;
  .gallery-inner {
    height: 100%;
    width: 100vw;
    position: absolute;
    display: block;
    content: " ";
    left: 50%;
    transform: translateX(-50%);
    z-index: 0;
    overflow: hidden;
  }
  .gallery {
    width: 3800px;
    display: flex;
    margin-left: -10vw;
    animation-name: move;
    animation-duration: 60s;
    animation-iteration-count: infinite;
  }
}
.gallery {
  height: 100%;
}
.gallery-item {
  width: 40vw;
  height: 100%;
  border-radius: 16px;
  background-color: #f6f7fa;
  margin-right: 20px;
  overflow: hidden;
  position: relative;
  background-size: cover;
  &.image {
    color: #fff !important;
    background-size: cover;
    .event-category {
      background-color: #fff;
      color: #000;
    }
    &::before {
      display: block;
      position: absolute;
      content: " ";
      left: 0;
      right: 0;
      height: 50%;
      bottom: 0;
      background: linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%);
    }
  }

  .event-bg-wrapper {
    position: absolute;
    height: 100%;
  }
}
@media (max-width: 768px) {
  .gallery-wrapper {
    height: 300px;
    .gallery {
      margin-left: 10px;
    }
  }
  .gallery-item {
    width: 90vw;
  }
}
@keyframes move {
  0% {
    transform: translateX(0vw);
  }
  50% {
    transform: translateX(-100vw);
  }
  100% {
    transform: translateX(0vw);
  }
}
</style>
