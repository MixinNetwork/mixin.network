<template>
  <div class="text-left py-8">
    <h1 class="text-2xl md:text-4xl font-black">
      <div class="mb-2 opacity-60">
        {{ prefix }}
      </div>
      <div class="">
        {{ suffix }}
      </div>
    </h1>

    <div class="socials">
      <a
        target="_blank"
        class="social"
        v-for="(item, ix) in socialItems"
        :key="`social-${ix}`"
        :class="item.name"
        :title="item.label"
        :href="item.url"
      >
        <span class="social-icon"> </span>
        <span class="social-label">{{ item.label }}</span>
      </a>
    </div>
    <div class="featured_images"></div>
  </div>
</template>

<script>
import { useThemeData } from "@vuepress/plugin-theme-data/client";
import { usePageFrontmatter } from "@vuepress/client";

export default {
  name: "CommunitySlogan",

  props: ["prefix", "suffix"],

  data() {
    return {
      socialItems: [],
    };
  },

  computed: {
    socialItems() {
      const data = useThemeData().value;
      return data.social.map((x) => {
        x.label = "";
        switch (x.name) {
          case "twitter":
            x.label = "Twitter";
            break;
          case "facebook":
            x.label = "facebook";
            break;
          case "telegram":
            x.label = "Telegram";
            break;
          case "mixin":
            x.label = "Mixin";
            break;
          case "discord":
            x.label = "Discord";
            break;
          case "youtube":
            x.label = "Youtube";
            break;
          case "stackoverflow":
            x.label = "Stack Overflow";
            break;
          case "github":
            x.label = "Github";
            break;
          case "reddit":
            x.label = "Reddit";
            break;
        }
        return x;
      });
    },
  },

  mounted() {
    const frontmatter = usePageFrontmatter().value;
    this.images = frontmatter["featured_images"].map((x) => {
      return x;
    });
  },
};
</script>

<style lang="scss" scoped>
.socials {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  .social {
    border-radius: 8px;
    padding: 6px 12px;
    font-weight: bold;
    font-size: 14px;
    display: flex;
    align-items: center;
    text-decoration: none;
    margin-right: 10px;
    margin-bottom: 10px;
    .social-icon {
      width: 20px;
      height: 20px;
      display: block;
    }
    .social-label {
      margin-left: 4px;
      display: block;
      height: 20px;
    }
    &.twitter {
      background: #1d9cf8;
      color: white;
      .social-icon {
        background: transparent url("/images/icons/icon-twitter-white.svg")
          center no-repeat;
      }
    }
    &.discord {
      background: #834df4;
      color: white;
      .social-icon {
        background: transparent url("/images/icons/icon-discord-white.svg")
          center no-repeat;
      }
    }
    &.mixin {
      background: #3d74e1;
      color: white;
      .social-icon {
        background: transparent url("/images/icons/icon-mixin-white.svg") center
          no-repeat;
      }
    }
    &.youtube {
      background: #ff0000;
      color: white;
      .social-icon {
        background: transparent url("/images/icons/icon-youtube-white.svg")
          center no-repeat;
      }
    }
    &.stackoverflow {
      background: #f2f4f8;
      color: #000;
      .social-icon {
        background: transparent url("/images/icons/icon-stackoverflow-red.svg")
          center no-repeat;
      }
    }
    &.reddit {
      background: #f2f4f8;
      color: #000;
      .social-icon {
        background: transparent url("/images/icons/icon-reddit-red.svg") center
          no-repeat;
      }
    }
    &.github {
      background: #f2f4f8;
      color: #000;
      .social-icon {
        background: transparent url("/images/icons/icon-github-purple.svg")
          center no-repeat;
      }
    }
  }
}
</style>
