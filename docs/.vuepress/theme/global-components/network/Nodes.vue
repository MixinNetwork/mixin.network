<template>
  <div class="nodes-wrapper text-center">
    <div class="bg"></div>
    <h2 class="nodes-sec-title text-2xl md:text-4xl font-bold mb-20">
      {{ $t("network.nodes.title") }}
    </h2>
    <div class="nodes-content">
      <div class="node create mb-5">
        <div class="node-inner">
          <h3 class="node-title text-xl font-bold">
            {{ $t("network.nodes.create.title") }}
          </h3>
          <div class="desc text-sm">
            {{ $t("network.nodes.create.desc") }}
          </div>
        </div>
        <a
          href="https://developers.mixin.one/docs/mainnet/guide/full-node-join"
          target="_blank"
        >
          <button class="button blue default font-bold">
            {{ $t("network.nodes.create.btn") }}
          </button>
        </a>
      </div>

      <div class="node join">
        <div class="node-inner">
          <h3 class="node-title text-xl font-bold mb-4">
            {{ $t("network.nodes.join.title") }}
          </h3>
          <div class="approaches">
            <a class="approach" href="https://big.one/tw/mixin">
              <div class="approach-num">1</div>
              <div class="approach-content">
                <h4 class="approach-title">
                  {{ $t("network.nodes.join.way_1.title") }} -
                  <em class="blue--text">{{
                    $t("network.nodes.join.way_1.em")
                  }}</em>
                </h4>
                <div class="approach-desc text-sm opacity-50">
                  {{ $t("network.nodes.join.way_1.desc") }}
                </div>
              </div>
            </a>
            <!-- <a class="approach" href="#">
              <div class="approach-num">2</div>
              <div class="approach-content">
                <h4 class="approach-title">
                  {{ $t("network.nodes.join.way_2.title") }} -
                  <em class="blue--text">{{
                    $t("network.nodes.join.way_2.em")
                  }}</em>
                </h4>
                <div class="approach-desc text-sm opacity-50">
                  {{ $t("network.nodes.join.way_2.desc") }}
                </div>
              </div>
            </a>
            <a class="approach" href="#">
              <div class="approach-num">3</div>
              <div class="approach-content">
                <h4 class="approach-title">
                  {{ $t("network.nodes.join.way_3.title") }} -
                  <em class="blue--text">{{
                    $t("network.nodes.join.way_3.em")
                  }}</em>
                </h4>
                <div class="approach-desc text-sm opacity-50">
                  {{ $t("network.nodes.join.way_3.desc") }}
                </div>
              </div>
            </a> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import i18n from "../../utils/i18n";

export default {
  name: "NetworkNodes",

  methods: {
    $t: i18n.$t,
  },

  mounted() {},
};
</script>

<style lang="scss" scoped>
.nodes-wrapper {
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
  .nodes-sec-title {
    position: relative;
  }
  .nodes-content {
    position: relative;
    padding: 32px 0;
  }
  .node {
    border-radius: 32px;
    text-align: left;
    padding: 32px;
    &.create {
      background: #181f30;
      color: white;
      display: flex;
      .node-inner {
        flex: 1;
      }
    }
    &.join {
      background: #ffffff;
      color: #000;
      display: flex;
      flex-direction: column;
      .node-title {
        margin: 0 0 40px 0;
      }
      .approach {
        text-decoration: none;
        margin-bottom: 30px;
        display: flex;
        .approach-num {
          padding-right: 30px;
          opacity: 0.4;
        }
        .approach-title {
          margin: 0 0 10px 0;
          padding: 0;
          em {
            font-style: normal;
          }
        }
      }
    }
    .node-title {
      margin: 0;
      padding: 0;
    }
  }
}

@media (max-width: 768px) {
  .nodes-wrapper {
    .node {
      &.create {
        flex-direction: column;
        .node-inner {
          margin-bottom: 16px;
        }
      }
    }
  }
}
</style>
