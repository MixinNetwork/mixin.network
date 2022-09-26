<template>
  <div class="text-center py-20">
    <div class="entries">
      <div class="hlight-entry grid gap-4 grid-cols-1 md:grid-cols-2 mb-40">
        <div class="entry-content text-left md:pr-10">
          <div>
            <h2 class="entry-title text-2xl md:text-5xl font-black">
              {{ $t("home.entry.tech.title") }}
            </h2>
            <div class="entry-desc text-lg opacity-60 mb-4">
              {{ $t("home.entry.tech.desc") }}
            </div>
          </div>

          <div class="entry-links grid gap-0">
            <a
              class="entry-link font-black blue--text"
              href="https://github.com/MixinNetwork/mixin"
              target="_blank"
            >
              <img src="/images/icons/code-blue.svg" />
              <span>{{ $t("home.entry.tech.for_developers") }}</span>
            </a>
            <a
              class="entry-link font-black blue--text"
              href="https://developers.mixin.one/docs/mainnet/concepts/how-it-works"
              target="_blank"
            >
              <img src="/images/icons/account-blue.svg" />
              <span>{{ $t("home.entry.tech.for_individuals") }}</span>
            </a>
          </div>
        </div>
        <div class="py-0">
          <img src="/images/home/entry-tech.png" />
        </div>
      </div>

      <div class="hlight-entry grid gap-4 grid-cols-1 md:grid-cols-2">
        <div class="py-0">
          <img src="/images/home/entry-ecosystem.png" />
        </div>
        <div class="entry-content text-left md:pl-10">
          <div>
            <h2 class="entry-title text-2xl md:text-5xl font-black">
              {{ $t("home.entry.ecosystem.title") }}
            </h2>
            <div class="entry-desc text-lg opacity-60 mb-4">
              {{ $t("home.entry.ecosystem.desc") }}
            </div>
          </div>
          <div>
            <img src="/images/home/entry-ecosystem-bg.png" />
          </div>
          <div class="button-wrapper">
            <a href="./dapps" class="button blue font-bold">{{
              $t("home.entry.ecosystem.browse")
            }}</a>
          </div>
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
.hlight-entry {
  .entry-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    .button-wrapper {
      position: absolute;
      bottom: 40px;
      width: 100%;
      .button {
        margin: 0 auto;
        max-width: 200px;
      }
    }
  }

  .entry-title {
    padding-top: 0;
    margin: 0 0 40px 0;
  }

  .entry-link {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 32px 0;
    text-decoration: none !important;
    text-transform: uppercase;
    border-bottom: 1px solid #ebe5e5;

    img {
      width: 20px;
      height: 20px;
      margin-right: 4px;
    }
  }
}
</style>
