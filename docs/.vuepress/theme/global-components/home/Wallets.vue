<template>
  <div class="text-center py-10">
    <h2 class="section-title text-2xl md:text-5xl font-black">
      {{ $t("home.wallet.title") }}
    </h2>
    <div class="wallets grid gap-4 grid-cols-1 md:grid-cols-3 my-10 md:my-20">
      <a
        :href="wallet.url"
        :title="wallet.label"
        v-for="wallet in wallets"
        :key="wallet.name"
        target="_blank"
        class="wallet"
      >
        <div class="flex items-center">
          <img :src="wallet.icon" :alt="wallet.label" class="icon mr-4" />
          <span
            :href="wallet.url"
            :title="wallet.label"
            class="text-xl font-bold"
          >
            {{ wallet.label }}
          </span>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import i18n from "../../utils/i18n";
export default {
  name: "MainDev",

  data() {
    return {
      wallets: [
        {
          name: "metamask",
          icon: "/images/wallets/metamask.png",
          label: i18n.$t("wallet.metamask"),
          url: "https://metamask.io/",
        },
        {
          name: "wallet_connect",
          icon: "/images/wallets/wallet_connect.png",
          label: i18n.$t("wallet.wallet_connect"),
          url: "https://walletconnect.com/",
        },
        {
          name: "messenger",
          icon: "/images/wallets/mm.png",
          label: i18n.$t("wallet.mm"),
          url: "https://mixin.network/messenger",
        },
        {
          name: "fennec",
          icon: "/images/wallets/fennec.png",
          label: i18n.$t("wallet.fennec"),
          url: "https://pando.im/wallet",
        },
      ],
    };
  },

  methods: {
    $t: i18n.$t,
  },
};
</script>

<style lang="scss" scoped>
.wallet {
  padding: 32px;
  background: #f6f7fa;
  border-radius: 32px;
  text-decoration: none !important;

  .icon {
    width: 52px;
    height: 52px;
  }
}
</style>
