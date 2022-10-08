<template>
  <div class="site-slogan text-center py-8">
    <h1 class="text-2xl md:text-5xl font-black">
      <div class="mb-2">
        <div v-for="(line, ix) in prefixArray" :key="`slogan-${ix}`">
          {{ line }}
        </div>
      </div>
      <a v-if="url" class="em-link" :href="url" :title="suffix">
        <em class="blue--text font-black">
          {{ suffix }}
          <img class="icon" v-if="icon" :src="icon" :alt="suffix" />
        </em>
      </a>
      <em v-else class="blue--text font-black">
        {{ suffix }}
        <img class="icon" v-if="icon" :src="icon" :alt="suffix" />
      </em>
    </h1>
  </div>
</template>

<script>
export default {
  name: "CommSlogan",

  props: ["prefix", "suffix", "icon", "url"],

  data() {
    let prefixArray = [];
    if (this.prefix.constructor === Array) {
      prefixArray = this.prefix;
    } else if (this.prefix.constructor === String) {
      prefixArray.push(this.prefix);
    }
    return {
      prefixArray,
    };
  },
};
</script>

<style lang="scss" scoped>
.site-slogan {
  line-height: 10em;
  .em-link {
    text-decoration: none;
  }
  em {
    font-style: normal;
    .icon {
      display: inline;
      vertical-align: inherit;
      // transform: scale(0.9);
      width: 30px;
    }
  }
}
</style>
