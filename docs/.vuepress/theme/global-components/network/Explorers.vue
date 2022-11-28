<template>
  <div class="explorers-wrapper text-center mb-20">
    <h2 class="explorers-sec-title text-2xl md:text-4xl font-bold mb-20">
      {{ $t("network.explorers.title") }}
    </h2>
    <div class="explorers-content">
      <div class="explorers grid gap-4 grid-cols-1 md:grid-cols-3">
        <a
          class="explorer"
          target="_blank"
          v-for="explorer in explorers"
          :key="explorer.name"
          :title="explorer.text"
          :href="explorer.url"
          :class="explorer.color"
        >
          <div class="explorer-icon flex place-center mb-2">
            <img :src="explorer.icon" :alt="explorer.text" />
          </div>
          <div class="explorer-content">
            <div class="explorer-name text-base font-black mb-1">
              {{ explorer.text }}
            </div>
            <div class="explorer-text text-sm opacity-60">
              {{ explorer.desc }}
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import i18n from "../../utils/i18n";

export default {
  name: "NetworkExplorers",

  computed: {
    explorers() {
      return [
        {
          name: "viewblock",
          text: i18n.$t("network.explorers.viewblock.title"),
          desc: i18n.$t("network.explorers.viewblock.desc"),
          url: "https://viewblock.io/mixin",
          icon: "/images/network/explorer-viewblock.png",
          color: "deep-blue",
        },
        {
          name: "mvm",
          text: i18n.$t("network.explorers.mvm.title"),
          desc: i18n.$t("network.explorers.mvm.desc"),
          url: "https://scan.mvm.dev",
          icon: "/images/network/explorer-mvm.svg",
          color: "purple",
        },
        {
          name: "nodes",
          text: i18n.$t("network.explorers.node.title"),
          desc: i18n.$t("network.explorers.node.desc"),
          url: "https://nodes.mixin.network/#/",
          icon: "/images/network/explorer-space.svg",
          color: "red",
        },
        {
          name: "snapshots",
          text: i18n.$t("network.explorers.snapshots.title"),
          desc: i18n.$t("network.explorers.snapshots.desc"),
          url: "https://mixin.one/snapshots",
          icon: "/images/network/explorer-snapshots.svg",
          color: "blue",
        },
        {
          name: "blockchair",
          text: i18n.$t("network.explorers.blockchair.title"),
          desc: i18n.$t("network.explorers.blockchair.desc"),
          url: "https://blockchair.com/mixin",
          icon: "/images/network/explorer-blockchair.png",
          color: "brozen",
        },
      ];
    },
  },

  methods: {
    $t: i18n.$t,
  },

  mounted() {},
};
</script>

<style lang="scss" scoped>
.explorers-wrapper {
  position: relative;
  .explorers-sec-title {
    position: relative;
  }
  .explorers-content {
    position: relative;
    padding: 32px 0;
  }
  .explorers {
    .explorer {
      background-color: #f6f7fa;
      border-radius: 32px;
      padding: 24px;
      text-decoration: none;
      &.blue {
        background: linear-gradient(103.36deg, #06a5fe 7.93%, #0687fe 95.51%);
        color: white;
      }
      &.red {
        background: linear-gradient(102.26deg, #f14f8a 6.11%, #fb5b5b 98.11%);
        color: white;
      }
      &.brozen {
        background: linear-gradient(102.26deg, #d1a162 6.11%, #9e704b 98.11%);
        color: white;
      }
      &.purple {
        background: linear-gradient(101.56deg, #5959d8 2.72%, #8756ee 96.04%);
        color: white;
      }
      &.deep-blue {
        background: linear-gradient(101.56deg, #374b72 2.72%, #223355 96.04%);
        color: white;
      }
      .explorer-icon {
        width: 40px;
        height: 40px;
        img {
          width: 40px;
          height: 40px;
        }
      }
      .explorer-content {
        flex-grow: 1;
        text-align: left;
      }
    }
  }
}
</style>
