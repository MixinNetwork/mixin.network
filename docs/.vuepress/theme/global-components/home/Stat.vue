<template>
  <div class="stat text-center mb-16">
    <div class="stat-bg py-8"></div>
    <div class="stat-earth"></div>
    <div class="stat-data grid gap-4 grid-cols-2 md:grid-cols-5 flex items-end">
      <div class="stat-data-item lvl1 lvl1-1">
        <h4 class="stat-data-item-title text-sm">
          {{ $t("home.stat.stat_1") }}
        </h4>
        <div class="stat-data-item-value text-xl md:text-2xl">{{ assets }}</div>
      </div>
      <div class="stat-data-item lvl2 lvl2-1">
        <h4 class="stat-data-item-title text-sm">
          {{ $t("home.stat.stat_2") }}
        </h4>
        <div class="stat-data-item-value text-xl md:text-2xl">{{ tps }}</div>
      </div>
      <div class="stat-data-item lvl3">
        <h4 class="stat-data-item-title text-sm">
          {{ $t("home.stat.stat_3") }}
        </h4>
        <div class="stat-data-item-value text-xl md:text-2xl">{{ tx }}</div>
      </div>
      <div class="stat-data-item lvl2 lvl2-2">
        <h4 class="stat-data-item-title text-sm">
          {{ $t("home.stat.stat_4") }}
        </h4>
        <div class="stat-data-item-value text-xl md:text-2xl">
          {{ chains }}
        </div>
      </div>
      <div class="stat-data-item lvl1 lvl1-2">
        <h4 class="stat-data-item-title text-sm">
          {{ $t("home.stat.stat_5") }}
        </h4>
        <div class="stat-data-item-value text-xl md:text-2xl">
          {{ network_chk }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import i18n from "../../utils/i18n";
import api from "../../service/api";

export default {
  name: "HomeStat",

  data() {
    return {
      assets: "-",
      chains: "-",
      tx: "-",
      tps: "-",
      network_chk: "-",
    };
  },

  methods: {
    $t: i18n.$t,

    format(n) {
      return new Intl.NumberFormat().format(n);
    },

    async refresh() {
      const resp = await api.readNetworkStat();
      const { data } = await resp.json();
      this.assets = this.format(data.assets_count);
      this.tx = this.format(data.snapshots_count);
      this.tps = this.format(data.peak_throughput);
      this.network_chk = this.format(data.network_checkpoint);
      this.chains = this.format(data.chains.length);
    },

    autoRefresh() {
      this.refresh();
      setTimeout(() => {
        this.autoRefresh();
      }, 3000);
    },
  },

  mounted() {
    this.autoRefresh();
  },
};
</script>

<style lang="scss" scoped>
.stat {
  min-height: 490px;
  position: relative;
  .stat-bg {
    height: 100%;
    width: 100vw;
    position: absolute;
    display: block;
    content: " ";
    left: 50%;
    transform: translateX(-50%);
    z-index: 0;
    background: transparent url("/images/home/stat-bg.svg") center center
      no-repeat;
    background-size: cover;
  }
  .stat-earth {
    height: 100%;
    width: 90vw;
    max-width: 526px;
    position: absolute;
    display: block;
    content: " ";
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    z-index: 0;
    background: transparent url("/images/home/stat-earth-with-ring.svg") center
      bottom no-repeat;
    background-size: contain;
  }
  .stat-data {
    position: absolute;
    color: white;
    width: 820px;
    margin: 0 auto;
    height: 80%;
    left: 50%;
    bottom: 20%;
    transform: translateX(-50%);
    .stat-data-item {
      font-weight: 600;
      &.lvl2 {
        padding-bottom: 140px;
        transform: translateX(-60%);
      }
      &.lvl2-2 {
        padding-bottom: 140px;
        transform: translateX(60%);
      }
      &.lvl3 {
        padding-bottom: 240px;
      }
    }
    .stat-data-item-title {
      margin: 0 0 8px 0;
      padding: 0;
    }
  }
}

@media (max-width: 768px) {
  .stat {
    .stat-earth {
      background: transparent
        url("/images/home/stat-earth-with-ring-mobile.svg") center bottom
        no-repeat;
      width: 100vw;
    }
    .stat-data {
      width: 100%;
      top: 32px;
      bottom: auto;
      height: auto;
      // transform: translateX(0%);
      .stat-data-item {
        display: flex;
        flex-direction: column-reverse;
        padding-bottom: 0 !important;
        transform: translateX(0%) !important;
        margin-bottom: 16px;
        .stat-data-item-title {
          margin-top: 8px;
          margin-bottom: 0;
        }
      }
    }
  }
}
</style>
