<template>
  <div class="hero text-center mb-8 md:mb-16">
    <div class="hero-bg py-8"></div>
    <div class="hero-content">
      <h1 class="hero-title text-2xl md:text-5xl font-black">
        {{ $t("network.title") }}
      </h1>
      <div class="hero-data grid gap-4 grid-cols-1 md:grid-cols-3">
        <div class="hero-data-item">
          <i class="hero-data-icon icon-wallet-purple"></i>
          <em>{{ assets }}</em>
          <span>{{ $t("network.stat.asset") }}</span>
        </div>
        <div class="hero-data-item">
          <i class="hero-data-icon icon-arrows-blue"></i>
          <em>{{ tx }}</em>
          <span>{{ $t("network.stat.tx") }}</span>
        </div>
        <div class="hero-data-item">
          <i class="hero-data-icon icon-lightning-orange"></i>
          <em>{{ tps }}</em>
          <span>{{ $t("network.stat.tps") }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../../service/api";
import i18n from "../../utils/i18n";

export default {
  name: "NetworkHero",

  data() {
    return {
      assets: "-",
      tx: "-",
      tps: "-",
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
.hero {
  min-height: 500px;
  position: relative;
  .hero-bg {
    height: 100%;
    width: 100vw;
    position: absolute;
    display: block;
    content: " ";
    left: 50%;
    transform: translateX(-50%);
    z-index: 0;
    background: linear-gradient(
      180deg,
      #181f30 0%,
      #171f36 55.13%,
      #0a246a 100%
    );
  }
  .hero-content {
    min-height: 500px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .hero-title {
      color: white;
      margin-bottom: 80px;
      line-height: 1.4;
    }
    .hero-data {
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.16);
      border-radius: 32px;
      padding: 32px 0;
      width: 100%;
    }
    .hero-data-item {
      color: white;
      font-weight: bold;
      display: flex;
      justify-content: center;
      em {
        font-style: normal;
        margin-right: 4px;
      }
      span {
        opacity: 0.6;
      }
      .hero-data-icon {
        width: 20px;
        height: 20px;
        display: block;
        margin: 2px 4px 2px 0;
        margin-right: 4px;
      }
    }
  }
}

@media (max-width: 768px) {
  .hero {
    min-height: 400px;
    .hero-content {
      min-height: 400px;
      .hero-title {
        margin-bottom: 40px;
      }
    }
  }
}
</style>
