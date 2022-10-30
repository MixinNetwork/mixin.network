<template>
  <div class="site-footer" :class="cls">
    <div class="inner grid grid-cols-4 md:grid-cols-5 text-center md:text-left">
      <div
        class="
          footer-logo
          col-span-4
          md:col-span-1
          pb-10
          flex
          align-start
          justify-center
        "
      >
        <img
          src="/images/logo-wo-text.svg"
          class="footer-logo-img"
          alt="mixin logo without text"
        />
      </div>
      <div class="footer-column col-span-2 md:col-span-1">
        <div class="footer-column-title mb-4 font-bold">
          {{ $t("footer.about") }}
        </div>
        <div class="footer-column-item">
          <a href="/pages/team"> {{ $t("footer.team") }} </a>
        </div>
        <div class="footer-column-item">
          <a href="mailto:contact@mixin.one">
            {{ $t("footer.get_in_touch") }}
          </a>
        </div>
      </div>
      <div class="footer-column col-span-2 md:col-span-1">
        <div class="footer-column-title mb-4 font-bold">
          {{ $t("footer.general") }}
        </div>
        <div class="footer-column-item">
          <a href="/blog"> {{ $t("footer.blog") }} </a>
        </div>
        <div class="footer-column-item">
          <a href="/news">{{ $t("footer.news") }}</a>
        </div>
        <div class="footer-column-item">
          <a :href="`${langBase}essays`">{{ $t("footer.essays") }}</a>
        </div>
        <div class="footer-column-item">
          <a href="/pages/careers">{{ $t("footer.careers") }}</a>
        </div>
        <div class="footer-column-item">
          <a href="https://github.com/MixinNetwork/audits">{{
            $t("footer.audits")
          }}</a>
        </div>
      </div>
      <div class="footer-column col-span-2 md:col-span-1">
        <div class="footer-column-title mb-4 font-bold">
          {{ $t("footer.use_mixin") }}
        </div>
        <div class="footer-column-item">
          <a href="/messenger">{{ $t("footer.mm") }}</a>
        </div>
        <div class="footer-column-item">
          <a href="/dapps">{{ $t("footer.ecosystem") }}</a>
        </div>
        <div class="footer-column-item">
          <a href="/pages/xin">{{ $t("footer.xin") }}</a>
        </div>
      </div>
      <div class="footer-column col-span-2 md:col-span-1">
        <div class="footer-column-title mb-4 font-bold">
          {{ $t("footer.developers") }}
        </div>
        <div class="footer-column-item">
          <a href="https://developers.mixin.one" target="_blank">{{
            $t("footer.dev_docs")
          }}</a>
        </div>
        <div class="footer-column-item">
          <a href="https://mvm.dev" target="_blank">
            {{ $t("footer.mvm") }}
          </a>
        </div>
        <div class="footer-column-item">
          <a href="https://github.com/MixinNetwork" target="_blank">{{
            $t("footer.open_source")
          }}</a>
        </div>
        <div class="footer-column-item">
          <a
            href="https://mixin.one/assets/Mixin-Draft-2018-07-01.pdf"
            target="_blank"
            >{{ $t("footer.whitepaper") }}</a
          >
        </div>
      </div>
    </div>
    <div class="copyright text-center text-xs opacity-60">
      <p>
        Designed & Powered by
        <a
          href="https://pando.im"
          target="_blank"
          title="Pando Official Website"
          >Pando</a
        >
      </p>
    </div>
  </div>
</template>

<script>
import i18n from "../utils/i18n";

export default {
  name: "Footer",

  computed: {
    cls() {
      if (
        this.$route.path.indexOf("/dapps") !== -1 ||
        this.$route.path.indexOf("/network") !== -1
      ) {
        return "white";
      }
      return "";
    },

    langBase() {
      return i18n.getLangBase();
    },
  },

  methods: {
    $t: i18n.$t,
  },
};
</script>

<style lang="scss" scoped>
.site-footer {
  background: #f6f7fa;
  padding: 60px 0 40px 0;
  &.white {
    background-color: white;
  }
}
.inner {
  max-width: var(--content-width);
  margin: 0 auto;
}
.footer-logo-img {
  // width: 32px;
  height: 24px;
}
.footer-column {
  margin-bottom: 32px;
}
.footer-column-item {
  margin-bottom: 12px;
  font-size: 13px;
  opacity: 0.6;
}
</style>
