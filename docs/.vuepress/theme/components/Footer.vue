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
        <div class="footer-column-title mb-4 font-bold">About Us</div>
        <div class="footer-column-item">
          <a href="/pages/team">Team</a>
        </div>
        <div class="footer-column-item">
          <a href="mailto:contact@mixin.one">Get in Touch</a>
        </div>
      </div>
      <div class="footer-column col-span-2 md:col-span-1">
        <div class="footer-column-title mb-4 font-bold">General</div>
        <div class="footer-column-item">
          <a href="/blog">Blog</a>
        </div>
        <div class="footer-column-item">
          <a href="/pages/careers">Careers</a>
        </div>
        <div class="footer-column-item">
          <a href="/news">News & Events</a>
        </div>
      </div>
      <div class="footer-column col-span-2 md:col-span-1">
        <div class="footer-column-title mb-4 font-bold">Use Mixin</div>
        <div class="footer-column-item">
          <a href="/messenger">Mixin Messenger</a>
        </div>
        <div class="footer-column-item">
          <a href="/dapps">Ecosystem</a>
        </div>
        <div class="footer-column-item">
          <a href="https://mvm.dev" target="_blank">Mixin Virtual Mechine</a>
        </div>
        <div class="footer-column-item">
          <a href="/pages/xin">XIN Token</a>
        </div>
      </div>
      <div class="footer-column col-span-2 md:col-span-1">
        <div class="footer-column-title mb-4 font-bold">Developers</div>
        <div class="footer-column-item">
          <a href="https://developers.mixin.one" target="_blank"
            >Documents</a
          >
        </div>
        <div class="footer-column-item">
          <a href="https://github.com/MixinNetwork" target="_blank">Github</a>
        </div>
        <div class="footer-column-item">
          <a
            href="https://mixin.one/assets/Mixin-Draft-2018-07-01.pdf"
            target="_blank"
            >Whitepaper</a
          >
        </div>
      </div>
    </div>
    <div class="copyright text-center text-xs opacity-60">
      <p>
        Designed & Powered by
        <a href="https://pando.im" target="_blank">Pando</a>
      </p>
    </div>
  </div>
</template>

<script>
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
