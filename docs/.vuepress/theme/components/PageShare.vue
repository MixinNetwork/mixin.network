<template>
  <div class="socials">
    Share to:
    <a class="share-button facebook" href="#" @click="share($event, 'facebook')" title="Share to Facebook">
      <img src="/images/icons/facebook-blue.svg" alt="Share to Facebook" />
    </a>
    <a class="share-button twitter" href="#" @click="share($event, 'twitter')" title="Share to twitter">
      <img src="/images/icons/twitter-blue.svg" alt="Share to twitter" />
    </a>
  </div>
</template>
<script>

export default {
  name: "PageShare",

  props: ["url", "text"],

  methods: {
    share: function (ev, protocol) {
      const f = ((protocol) => {
        const twUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(this.url)}&ref=twitbtn&text=${encodeURIComponent(this.text + " #Pando")}`
        const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(this.url)}&t=${encodeURIComponent(this.text)}`
        const urls = {
          twitter: twUrl,
          facebook: fbUrl,
        }
        var ret = window.open(urls[protocol], '_blank', 'width=550,height=370')
        if (ret == null || typeof(ret) == 'undefined') {
          var a = window.document.createElement("a")
          a.target = '_blank';
          a.href = urls[protocol]
          var e = window.document.createEvent("MouseEvents")
          e.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
          a.dispatchEvent(e)
        }
      })
      f(protocol);
      ev.preventDefault();
      return;
    },
  }
}

</script>
<style lang="scss" scoped>
.socials {
  display: flex;
  flex-direction: row;
  text-align: right;
  align-items: center;
  font-size: 0.8rem;
  padding: 0;
  margin-left: 0rem;
  .share-button {
    padding: 1rem 0.5rem;
    img {
      height: 20px;
      width: 20px;
    }
  }
}
</style>