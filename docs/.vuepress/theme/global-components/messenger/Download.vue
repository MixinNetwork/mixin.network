<template>
  <div id="download" class="text-center py-8">
    <h2 class="text-2xl md:text-5xl font-black">
      {{ $t("messenger.downloads.title") }}
    </h2>
    <div
      class="downloads grid gap-4 grid-cols-1 md:grid-cols-2 text-center mt-10"
    >
      <div
        class="
          download
          grid grid-cols-1
          md:grid-cols-2
          place-content-between
          items-center
          mobile
        "
      >
        <div class="download-image-wrapper flex align-center justify-center">
          <img
            src="/images/messenger/download-mobile.svg"
            title="Download Mobile App"
            alt="Download Mobile App"
          />
        </div>
        <div class="download-content grid gap-4 grid-cols-1">
          <h3 class="download-title text-lg md:text-2xl font-bold white--text">
            {{ $t("messenger.downloads.mobile") }}
          </h3>
          <div>
            <a target="_blank" :href="downloads.ios" class="button primary-alt">
              <i class="button-icon icon-apple-black"></i>
              <span class="button-label">{{
                $t("messenger.downloads.ios")
              }}</span>
            </a>
          </div>
          <div>
            <a
              target="_blank"
              :href="downloads.android"
              class="button primary-alt"
            >
              <i class="button-icon icon-android-black"></i>
              <span class="button-label">{{
                $t("messenger.downloads.android")
              }}</span>
            </a>
          </div>
        </div>
      </div>

      <div
        class="
          download
          p-8
          grid grid-cols-1
          md:grid-cols-2
          place-content-between
          desktop
        "
      >
        <div class="download-image-wrapper flex align-center justify-center">
          <img
            src="/images/messenger/download-desktop.svg"
            title="Download Desktop App"
            alt="Download Desktop App"
          />
        </div>

        <div class="download-content grid gap-4 grid-cols-1">
          <h3 class="download-title text-lg md:text-2xl font-bold white--text">
            {{ $t("messenger.downloads.desktop") }}
          </h3>
          <div>
            <a target="_blank" :href="downloads.windows" class="button primary">
              <i class="button-icon icon-windows-white"></i>
              <span class="button-label">{{
                $t("messenger.downloads.windows")
              }}</span>
            </a>
          </div>
          <div>
            <a target="_blank" :href="downloads.macos" class="button primary">
              <i class="button-icon icon-apple-white"></i>
              <span class="button-label">{{
                $t("messenger.downloads.macos")
              }}</span>
            </a>
          </div>
          <div>
            <a target="_blank" :href="downloads.linux" class="button primary">
              <i class="button-icon icon-linux-white"></i>
              <span class="button-label">{{
                $t("messenger.downloads.linux")
              }}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { usePageFrontmatter } from "@vuepress/client";
import i18n from "../../utils/i18n";

export default {
  name: "MessengerDownload",

  data() {
    return {
      downloads: {},
    };
  },

  mounted() {
    const frontmatter = usePageFrontmatter().value;
    this.downloads = frontmatter.downloads;
  },

  methods: {
    $t: i18n.$t,
  },
};
</script>

<style lang="scss" scoped>
.download {
  border-radius: 32px;
  background-color: #67686b;
  position: relative;

  padding: 24px 0;

  &.desktop {
    background-color: #1e8efe;
    .download-image-wrapper {
      overflow: hidden;
      img {
        transform: translateX(-30%);
      }
    }
  }
  &.mobile {
    background-color: #171e31;
  }
  .download-content {
    padding: 32px 64px 32px 0;
  }
  .download-title {
    padding-top: 0;
    margin: 0 0 0 0;
    text-align: center;
  }
}
@media (max-width: 768px) {
  .download {
    padding: 24px 16px;
    &.desktop {
      .download-image-wrapper {
        overflow: hidden;
        img {
          transform: translateX(0%);
        }
      }
    }
    .download-content {
      padding: 32px 32px 0 32px;
      .button {
        max-width: 120px;
        margin: 0 auto;
      }
    }
  }
}
</style>
