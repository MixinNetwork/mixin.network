<template>
  <div>
    <div class="list-wrapper pt-10">
      <div class="bg"></div>
      <div class="list-control">
        <input
          type="text"
          class="entry solo"
          placeholder="Search dApps Name"
          v-model="searchValue"
        />
        <div class="spacer" />
        <a
          href="https://github.com/MixinNetwork/mixin.network/blob/main/guide/dapps.md"
          class="button blue"
        >
          <i class="button-icon icon-plus-white"> </i>
          <span class="button-label"> {{ $t("dapps.submit") }} </span>
        </a>
      </div>
      <div class="list-content">
        <div class="dapps grid gap-4 grid-cols-1 md:grid-cols-3">
          <div
            class="dapp flex justify-center items-center"
            v-for="(dapp, ix) in dapps"
            :key="`dapp-${ix}`"
            @click="openDialog(dapp)"
          >
            <div class="dapp-icon flex place-center">
              <img :src="`/dapps/${dapp.id}/icon.png`" :alt="dapp.id" />
            </div>
            <div class="dapp-content">
              <div class="flex items-center mb-2">
                <div class="dapp-name text-base font-bold">
                  {{ TName(dapp) }}
                </div>
                <div class="dapp-category text-xs ml-1 font-bold">
                  {{ T(dapp, "category") }}
                </div>
              </div>
              <div class="dapp-text text-xs opacity-60">
                {{ TText(dapp) }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="dialog" class="dapp-dialog-mask"></div>
    <div v-if="dialog && currentDapp" class="dapp-dialog">
      <div class="dapp-dialog-top flex items-center place-content-between">
        <div class="dapp-icon flex place-left">
          <img
            :src="`/dapps/${currentDapp.id}/icon.png`"
            :alt="currentDapp.id"
          />
        </div>
        <a class="close" @click="dialog = false">
          <img src="/images/icons/close-grey.svg" />
        </a>
      </div>
      <div class="dapp-dialog-body p-5">
        <div class="dapp-name text-lg font-bold align-left mb-2">
          {{ TName(currentDapp) }}
        </div>
        <div class="dapp-text text-sm greyscale_3--text">
          <a :href="currentDapp.intro_url">
            {{ TText(currentDapp) }}
            <img class="icon" src="/images/icons/link-blue.svg" />
          </a>
        </div>
        <div class="button-wrapper py-4">
          <button
            class="button primary block font-bold"
            @click="launch(currentDapp)"
          >
            {{ $t("dapps.launch") }}
          </button>
        </div>
      </div>
      <div class="dapp-dialog-attrs grid gap-0 grid-cols-2">
        <div
          class="dapp-attr p-4"
          v-for="(attr, ix) in attrs"
          :key="`attr-${ix}`"
          :class="
            ix === attrs.length - 1 && attrs.length % 2 ? 'col-span-2' : ''
          "
        >
          <div
            class="
              dapp-attr-label
              text-xs
              uppercase
              greyscale_3--text
              font-medium
              opacity-60
              mb-1
            "
          >
            {{ attr.label }}
          </div>
          <div class="dapp-attr-value flex">
            <a
              v-if="attr.url"
              :href="attr.url"
              class="inner text-sm capitalize"
            >
              {{ attr.value }}
            </a>
            <div v-else class="inner text-sm capitalize">
              {{ attr.value }}
            </div>
            <img
              class="icon"
              v-if="attr.url"
              src="/images/icons/link-blue.svg"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dapps from "../../../public/dapps/index";
import i18n from "../../utils/i18n";

export default {
  name: "DappsList",

  data() {
    return {
      lang: "en",
      searchValue: "",
      dialog: false,
      currentDapp: null,
    };
  },

  computed: {
    dapps: function () {
      const query = this.searchValue.toUpperCase().trim();
      if (query.length === 0) {
        return dapps;
      }
      let ret = [];
      for (const key in dapps) {
        if (Object.hasOwnProperty.call(dapps, key)) {
          const dapp = dapps[key];
          for (const lc in dapp.name) {
            if (Object.hasOwnProperty.call(dapp.name, lc)) {
              const val = dapp.name[lc];
              const _dapp = Object.assign({ lc_name: val }, dapp);
              if (-1 !== val.toUpperCase().indexOf(query)) {
                ret.push(_dapp);
                break;
              }
            }
          }
        }
      }
      return ret;
    },

    attrs() {
      if (this.currentDapp) {
        let ret = [
          {
            label: i18n.$t("dapps.developer"),
            value: this.currentDapp.developer.name,
            url: this.currentDapp.developer.url,
          },
          {
            label: i18n.$t("dapps.category"),
            value: this.currentDapp.category,
          },
          {
            label: i18n.$t("dapps.languages"),
            value: this.currentDapp.languages
              .map((x) => x.toUpperCase())
              .join(","),
          },
        ];
        if (this.currentDapp.mixin_id) {
          ret.push({
            label: i18n.$t("dapps.mixin_id"),
            value: this.currentDapp.mixin_id,
          });
        }
        if (this.currentDapp.mvm) {
          ret.push({
            label: i18n.$t("dapps.mvm_contract"),
            value: this.currentDapp.mvm.contract_url,
            url: this.currentDapp.mvm.contract_url,
          });
        }
        if (this.currentDapp.mtg) {
          ret.push({
            label: i18n.$t("dapps.mtg_info"),
            value: `${this.currentDapp.mtg.threshold}/${this.currentDapp.mtg.members.length}`,
          });
        }
        return ret;
      }
      return [];
    },
  },

  methods: {
    $t: i18n.$t,

    T(dapp, field) {
      if (Object.hasOwnProperty.call(dapp, field)) {
        const fieldValue = dapp[field];
        if (Object.hasOwnProperty.call(fieldValue, this.lang)) {
          return fieldValue[this.lang];
        }
        if (Object.hasOwnProperty.call(fieldValue, "en")) {
          return fieldValue["en"];
        }
        return fieldValue.toString();
      }
      return "";
    },

    TName(dapp) {
      return dapp.lc_name;
    },

    TText(dapp) {
      if (dapp.lc_text.contructor === Array) {
        return dapp.lc_text.join("\n");
      }
      return dapp.lc_text.toString();
    },

    openDialog(dapp) {
      this.currentDapp = dapp;
      this.dialog = true;
    },

    launch(dapp) {
      window.location.href = dapp.launch_url;
    },
  },

  mounted() {
    this.lang = navigator.language.slice(0, 2);
  },
};
</script>

<style lang="scss" scoped>
.list-wrapper {
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
  .list-control {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .button {
    }
  }
  .list-content {
    position: relative;
    padding: 32px 0;
  }
  .dapps {
    .dapp {
      background-color: white;
      border-radius: 32px;
      padding: 24px;
      .dapp-icon {
        flex-basis: 48px;
        width: 48px;
        height: 48px;
        img {
          width: 48px;
          height: 48px;
        }
      }
      .dapp-category {
        padding: 2px 4px;
        border-radius: 4px;
        background-color: rgba(0, 0, 0, 0.5);
        color: #fff;
        text-transform: capitalize;
      }
      .dapp-content {
        flex-basis: 48px;
        padding-left: 24px;
        flex-grow: 1;
        text-align: left;
      }
    }
  }
}
.dapp-dialog-mask {
  top: 0px;
  width: 100vw;
  position: fixed;
  display: block;
  bottom: 0;
  left: 0;
  z-index: 100;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.6);
}
.dapp-dialog {
  top: 64px;
  width: 90vw;
  max-width: 500px;
  max-height: 80vh;
  position: fixed;
  display: block;
  content: " ";
  left: 50%;
  transform: translateX(-50%);
  z-index: 101;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.08);
  border-radius: 32px;
  .dapp-dialog-top {
    padding: 16px 20px 0 16px;
    .dapp-icon {
      flex-basis: 48px;
      width: 48px;
      height: 48px;
      img {
        width: 48px;
        height: 48px;
      }
    }
    .close {
      width: 32px;
      height: 32px;
      display: block;
    }
  }
  .dapp-dialog-body {
    .dapp-text {
      img {
        width: auto;
        display: inline-block;
      }
    }
  }
  .dapp-dialog-attrs {
    padding-bottom: 8px;
    .dapp-attr {
      border-top: 1px solid #e5e8f1;
    }
    .dapp-attr-value {
      .inner {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .icon {
        width: 18px;
      }
    }
  }
}

@media (max-width: 768px) {
  .list-wrapper {
    .list-control {
      .entry {
        max-width: 80%;
      }
      .button {
        content: " ";
        min-width: 60px;
        max-width: 60px;
        height: 60px;
        .button-label {
          display: none;
        }
      }
    }
  }
}
</style>
