<template>
  <div class="entries-wrapper text-center">
    <div class="bg"></div>
    <h2 class="entries-sec-title text-2xl md:text-4xl font-bold mb-20">
      {{ $t("dev.entries.title") }}
    </h2>
    <div class="entries-content">
      <div class="entries grid gap-4 grid-cols-1 md:grid-cols-3">
        <a
          class="entry"
          target="_blank"
          v-for="entry in entries"
          :key="entry.name"
          :title="entry.text"
          :href="entry.url"
        >
          <div class="entry-icon flex place-center mb-2">
            <img
              :src="`/images/dev/entry-${entry.name}.svg`"
              :alt="entry.text"
            />
          </div>
          <div class="entry-content">
            <div class="entry-name text-base font-bold">
              {{ entry.text }}
            </div>
            <div class="entry-text text-xs opacity-60">
              {{ entry.desc }}
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
  name: "DevEntries",

  computed: {
    entries() {
      return [
        {
          name: "starter-kit",
          text: "Starter Kit",
          desc: "Get up and running with libraries, keys, and integration tools.",
          url: "https://developers.mixin.one/docs/introduction",
        },
        {
          name: "dapp",
          text: "Build dApps",
          desc: "Build native dApps on Mixin Network.",
          url: "https://developers.mixin.one/docs/dapp/getting-started/create-dapp",
        },
        {
          name: "mtg",
          text: "MTG",
          desc: "Mixin Trusted Group is a framework to build dApps with multisig technology.",
          url: "https://developers.mixin.one/docs/mainnet/mtg/overview",
        },
        {
          name: "mvm",
          text: "MVM",
          desc: "Mixin Virtual Machine is an EVM compatible VM which is built on MTG. You can run existing contracts code on it smoothly.",
          url: "https://developers.mixin.one/docs/mainnet/mtg/overview",
        },
        {
          name: "node",
          text: "Node RPC",
          desc: "Interact with Mixin Network Mainnet's nodes.",
          url: "https://developers.mixin.one/docs/mainnet-rpc",
        },
        {
          name: "api",
          text: "APIs",
          desc: "Easy RESTful APIs for developers to build dApps or Messenger bots.",
          url: "https://developers.mixin.one/docs/api/guide",
        },
        {
          name: "sdk",
          text: "SDKs",
          desc: "Choose the SDK for your familiar language.",
          url: "https://developers.mixin.one/docs/resources/sdk",
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
.entries-wrapper {
  position: relative;
  .bg {
    bottom: 0;
    top: 0px;
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
  .entries-sec-title {
    position: relative;
  }
  .entries-content {
    position: relative;
    padding: 32px 0;
  }
  .entries {
    .entry {
      background-color: white;
      border-radius: 32px;
      padding: 24px;
      text-decoration: none;
      .entry-icon {
        width: 40px;
        height: 40px;
        img {
          width: 40px;
          height: 40px;
        }
      }
      .entry-content {
        flex-grow: 1;
        text-align: left;
      }
    }
  }
}
</style>
