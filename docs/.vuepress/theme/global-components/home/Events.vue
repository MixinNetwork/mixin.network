<template>
  <div class="text-center pt-8 pb-8 md:pb-20">
    <h2 class="event-sec-title text-2xl md:text-5xl font-black mb-20">
      {{ $t("home.events.title_1") }}<br />
      <a class="font-black blue--text" href="/news">{{
        $t("home.events.title_2")
      }}</a>
    </h2>
    <div class="events-wrapper mt-10 md:mt-20">
      <div class="events-inner">
        <div class="events" :style="eventsStyle">
          <div
            class="event text-left"
            :class="evCls(ev, ix)"
            :style="{
              'z-index': ix,
              'background-image': ev.image ? 'url(' + ev.image + ')' : '',
            }"
            v-for="(ev, ix) in events"
            :key="`ev-${ix}`"
          >
            <div class="event-content">
              <div class="event-date text-sm font-bold">{{ ev.date }}</div>
              <div class="event-category-wrapper text-xs font-bold white--text">
                <span class="event-category">{{ ev.category }}</span>
              </div>
              <h3 class="event-title text-base font-bold">
                {{ ev.title }}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { usePageFrontmatter } from "@vuepress/client";
import i18n from "../../utils/i18n";

export default {
  name: "HomeEvents",

  data() {
    return {
      events: [],
    };
  },

  computed: {
    eventsStyle() {
      let style = { width: "100vw" };
      if (this.events?.length) {
        style.width = `${this.events.length * 300}px`;
        if (document.body.clientWidth > this.events.length * 300) {
          style.animationName = "none";
        }
      }
      return style;
    },
  },

  methods: {
    $t: i18n.$t,

    evCls(ev, ix) {
      const ret = [];
      if (ev.image) {
        ret.push("image");
      }
      const cls = ["first", "second", "thrid", "fourth"];
      ret.push(cls[ix % 4]);
      return ret.join(" ");
    },
  },

  mounted() {
    const frontmatter = usePageFrontmatter().value;
    this.events = frontmatter.events;
  },
};
</script>

<style lang="scss" scoped>
.event-sec-title {
  line-height: 1.3;
  margin-bottom: 40px !important;
}
.events-wrapper {
  position: relative;
  height: 400px;
  .events-inner {
    height: 100%;
    width: 100vw;
    position: absolute;
    display: block;
    content: " ";
    left: 50%;
    transform: translateX(-50%);
    z-index: 0;
    overflow: hidden;
  }
  .events {
    width: 3800px;
    display: flex;
    padding-left: 48px;
    // animation-name: move;
    // animation-duration: 120s;
    // animation-iteration-count: infinite;
  }
}

.event {
  width: 300px;
  min-height: 280px;
  border-radius: 32px;
  background-color: #f6f7fa;
  margin-left: -40px;
  overflow: hidden;
  position: relative;
  background-size: cover;
  &.first {
    transform: translateY(80px);
    background: radial-gradient(
        24.87% 72.57% at 0% 12.63%,
        #bd78f7 0%,
        rgba(189, 120, 247, 0) 100%
      ),
      #d7c9fd;
    color: #5938b1;
    .event-category {
      color: #d7c9fd;
      background-color: #5938b1;
    }
  }
  &.second {
    background: radial-gradient(
        25.79% 66.61% at 0% 73.18%,
        #25ede1 0%,
        rgba(29, 231, 218, 0) 100%
      ),
      #b8e3ff;
    color: #02456c;
    .event-category {
      color: #9fd5f9;
      background-color: #02456c;
    }
  }
  &.thrid {
    transform: translateY(80px);
    background: radial-gradient(
        24.87% 72.57% at 0% 12.63%,
        #fcc381 0%,
        rgba(253, 192, 121, 0) 100%
      ),
      #f8e0b3;
    color: #825a04;
    .event-category {
      color: #fbdda1;
      background-color: #825a04;
    }
  }
  &.fourth {
    background: radial-gradient(
        23.55% 57.93% at 0% 82.11%,
        #ffab5e 0%,
        rgba(247, 193, 88, 0) 100%
      ),
      #ffabb5;
    color: #84083c;
    .event-category {
      color: #fc99a5;
      background-color: #84083c;
    }
  }
  &.image {
    color: #fff !important;
    background-size: cover;
    .event-category {
      background-color: #fff;
      color: #000;
    }
    &::before {
      display: block;
      position: absolute;
      content: " ";
      left: 0;
      right: 0;
      height: 50%;
      bottom: 0;
      background: linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%);
    }
  }

  .event-content {
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
  }
  .event-date {
    flex: 1;
    padding: 32px 32px 0 32px;
    color: white;
  }
  .event-category-wrapper {
    padding: 0 32px 8px 32px;
  }
  .event-category {
    text-transform: uppercase;
    padding: 4px 8px;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.6);
  }
  .event-title {
    margin: 0;
    padding: 0 32px 24px 32px;
  }
  .event-bg-wrapper {
    position: absolute;
    height: 100%;
  }
}
@keyframes move {
  0% {
    transform: translateX(0vw);
  }
  50% {
    transform: translateX(-70%);
  }
  100% {
    transform: translateX(0vw);
  }
}
</style>
