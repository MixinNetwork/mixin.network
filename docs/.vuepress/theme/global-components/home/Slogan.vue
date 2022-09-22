<template>
  <div class="site-slogan text-center pt-0 md:pt-20 pb-20 md:pb-32">
    <h1 class="text-3xl md:text-5xl font-black">
      <div class="mb-4 grid grid-cols-1 md:grid-cols-2 place-content-center">
        <span class="text-center md:text-right">
          {{ prefixArray[0] }}
        </span>
        <span class="text-center md:text-left md:ml-4">
          {{ prefixArray[1] }}
        </span>
      </div>
      <div
        v-for="(item, ix) in suffixArray"
        :key="`em-${ix}`"
        class="em-wrapper"
      >
        <Transition name="fade">
          <em v-if="item.show" class="blue--text" :class="emCls(item)">{{
            item.label
          }}</em>
        </Transition>
      </div>
    </h1>
  </div>
</template>

<script>
import i18n from "../../utils/i18n";

export default {
  name: "HomeSlogan",

  computed: {},

  data() {
    return {
      prefixArray: [i18n.$t("slogan.prefix.1"), i18n.$t("slogan.prefix.2")],
      sloganIndex: 0,
      suffixArray: [],
      supportedSuffixArray: [{ label: i18n.$t("slogan.prefix.1"), show: true }],
    };
  },

  methods: {
    $t: i18n.$t,

    emCls(item) {
      return item.show ? "fade" : "";
    },

    switchSlogan() {
      this.suffixArray[this.sloganIndex].show = false;
      this.sloganIndex += 1;
      if (this.sloganIndex > 3) {
        this.sloganIndex = 0;
      }
      this.suffixArray[this.sloganIndex].show = true;

      setTimeout(() => {
        this.switchSlogan();
      }, 3000);
    },
  },

  mounted() {
    this.supportedSuffixArray = [
      { label: this.$t("slogan.suffix.1"), show: false },
      { label: this.$t("slogan.suffix.2"), show: false },
      { label: this.$t("slogan.suffix.3"), show: false },
      { label: this.$t("slogan.suffix.4"), show: false },
    ];
    this.prefixArray = [this.$t("slogan.prefix.1"), this.$t("slogan.prefix.2")];

    this.suffixArray = this.supportedSuffixArray;
    this.switchSlogan();
  },
};
</script>

<style lang="scss" scoped>
.site-slogan {
  line-height: 10em;
  .em-wrapper {
    position: absolute;
    text-align: center;
    width: 100%;
    left: 0;
    right: 0;
  }
  em {
    font-style: normal;
    display: inline-block;
  }
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(80px);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 1s cubic-bezier(0.55, 0, 0.1, 1);
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: translateY(0px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-80px);
}
</style>
