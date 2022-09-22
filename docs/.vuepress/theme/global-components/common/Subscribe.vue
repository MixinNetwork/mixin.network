<template>
  <div class="site-subscribe text-center py-8">
    <h2 class="text-2xl md:text-4xl font-black">
      <div class="mb-8">
        <div v-for="(line, ix) in textArray" :key="`slogan-${ix}`">
          {{ line }}
        </div>
      </div>
      <div class="entry-wrapper">
        <div class="entry-inner">
          <input type="text" placeholder="Type your Email" />
          <span class="icon icon-arrow-blue" />
        </div>
      </div>
    </h2>
  </div>
</template>

<script>
export default {
  name: "CommSubscribe",

  props: ["text"],

  data() {
    let textArray = [];
    if (this.text.constructor === Array) {
      textArray = this.text;
    } else if (this.text.constructor === String) {
      textArray.push(this.text);
    }
    return {
      textArray,
    };
  },
};
</script>

<style lang="scss" scoped>
.site-subscribe {
  line-height: 10em;
}
.entry-wrapper {
  .entry-inner {
    display: flex;
    max-width: 400px;
    margin: 0 auto;
    border-bottom: 1px solid #ced1da;
    align-items: center;
    justify-content: space-evenly;
    padding-bottom: 16px;
    input {
      flex: 1;
      max-width: 80%;
      outline: none;
      text-align: center;
    }
    .icon {
      flex-basis: 32px;
      width: 32px;
      height: 32px;
      display: block;
      background-repeat: no-repeat;
    }
  }
}
</style>
