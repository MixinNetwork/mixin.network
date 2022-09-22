<template>
  <div class="hero text-center mb-8 md:mb-16">
    <div class="hero-bg py-8"></div>
    <div class="hero-screenshot py-8"></div>
  </div>
</template>

<script>
export default {
  name: "MessengerHero",
};
</script>

<style lang="scss" scoped>
.hero {
  min-height: 926px;
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
    background: transparent url("/images/messenger/hero-bg.svg") center center
      no-repeat;
    background-size: cover;
  }
  .hero-screenshot {
    height: 100%;
    width: 90vw;
    max-width: 1280px;
    position: absolute;
    display: block;
    content: " ";
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    z-index: 0;
    background: transparent url("/images/messenger/hero-screenshot.png") center
      bottom no-repeat;
    background-size: contain;
  }
}

@media (max-width: 768px) {
  .hero {
    min-height: 220px;
  }
}
</style>
