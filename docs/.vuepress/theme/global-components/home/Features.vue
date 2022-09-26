<template>
  <div class="text-center py-8">
    <h2 class="text-2xl md:text-5xl font-black">
      {{ $t("home.features.title") }}
    </h2>
    <div
      class="
        features
        grid
        gap-4
        grid-cols-1
        md:grid-cols-5
        text-left
        mt-10
        md:mt-20
      "
    >
      <div class="feature md:col-span-2 pt-8">
        <div>
          <h3 class="feature-title text-lg font-bold px-8">
            {{ $t("home.features.feat_1.title") }}
          </h3>
          <div class="feature-desc text-sm opacity-60 px-8 mb-4">
            {{ $t("home.features.feat_1.desc") }}
          </div>
          <div class="feature-image-wrapper">
            <img
              src="/images/home/feat-tps.png"
              :alt="$t('home.features.feat_1.title')"
            />
          </div>
        </div>
      </div>
      <div class="feature grid place-content-between md:col-span-3 pt-8">
        <div>
          <h3 class="feature-title text-lg font-bold px-8">
            {{ $t("home.features.feat_2.title") }}
          </h3>
          <div class="feature-desc text-sm opacity-60 px-8 mb-4">
            {{ $t("home.features.feat_2.desc") }}
          </div>
        </div>
        <div class="feature-image-wrapper">
          <img
            src="/images/home/feat-nofee.png"
            :alt="$t('home.features.feat_2.title')"
          />
        </div>
      </div>
      <div class="feature grid place-content-between md:col-span-3 pt-8">
        <div>
          <h3 class="feature-title text-lg font-bold px-8">
            {{ $t("home.features.feat_3.title") }}
          </h3>
          <div class="feature-desc text-sm opacity-60 px-8 mb-4">
            {{ $t("home.features.feat_3.desc") }}
          </div>
        </div>
        <div class="feature-image-wrapper">
          <img
            src="/images/home/feat-dapps.png"
            :alt="$t('home.features.feat_3.title')"
          />
        </div>
      </div>
      <div class="feature grid place-content-between md:col-span-2 pt-8">
        <div>
          <h3 class="feature-title text-lg font-bold px-8">
            {{ $t("home.features.feat_4.title") }}
          </h3>
          <div class="feature-desc text-sm opacity-60 px-8 mb-4">
            {{ $t("home.features.feat_4.desc") }}
          </div>
        </div>
        <div class="feature-image-wrapper">
          <img
            src="/images/home/feat-dev.png"
            :alt="$t('home.features.feat_4.title')"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import i18n from "../../utils/i18n";

export default {
  name: "HomeFeatures",

  methods: {
    $t: i18n.$t,
  },
};
</script>

<style lang="scss" scoped>
.feature {
  border-radius: 32px;
  background-color: #f6f7fa;

  .feature-title {
    padding-top: 0;
    margin: 0;
  }
}
</style>
