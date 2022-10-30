<template>
  <div class="featured-wrapper text-center pb-20">
    <div class="bg"></div>
    <div class="featured-content">
      <div class="spacer"></div>
      <div class="inner">
        <h2 class="text-base md:text-lg font-bold">
          {{ $t("dev.featured.title") }}
        </h2>
        <div class="buttons flex flex-row">
          <a
            href="https://developers.mixin.one"
            class="button blue block basis-1/2 mr-2"
            target="_blank"
          >
            {{ $t("dev.featured.document") }}</a
          >
          <a
            href="https://developers.mixin.one/docs/api-overview"
            class="button primary-alt basis-1/2 ml-2"
            target="_blank"
            >{{ $t("dev.featured.references") }}</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import i18n from "../../utils/i18n";

export default {
  name: "DevFeaturedContent",

  data() {
    return {};
  },

  computed: {},

  methods: {
    $t: i18n.$t,
  },

  mounted() {},
};
</script>

<style lang="scss" scoped>
.featured-wrapper {
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
.featured-content {
  border-radius: 32px;
  height: 248px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  text-decoration: none !important;
  justify-content: center;
  background-color: #333;
  .spacer {
    position: absolute;
    height: 100%;
    width: 100%;
    background: #333 url("/images/dev/featured-bg.png") right center no-repeat;
    background-size: cover;
  }
  .inner {
    color: #fff;
    position: relative;
    text-align: left;
    padding: 32px 40px;
    max-width: 50%;
    h2 {
      margin: 0 0 20px 0;
      padding: 0;
    }
    .button {
      font-weight: bold;
      max-width: 100px;
    }
  }
}
@media (max-width: 768px) {
  .featured-content {
    height: 365px;
    overflow: hidden;
    justify-content: flex-start;
    .spacer {
      position: relative;
      background: #333 url("/images/dev/featured-bg.png") right center no-repeat;
      background-size: 300%;
      height: 60%;
    }
    .inner {
      max-width: 100%;
      background-color: #333;
      padding: 16px 20px;
      height: 40%;
      .button {
        height: 44px;
        min-width: auto;
        max-width: 100%;
        font-size: 14px;
      }
    }
  }
}
</style>
