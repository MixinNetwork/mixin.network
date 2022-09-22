<template>
  <ParentLayout>
    <template #page-bottom>
      <site-footer> </site-footer>
    </template>
  </ParentLayout>
</template>

<script>
import ParentLayout from "@vuepress/theme-default/lib/client/layouts/Layout.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Layout",
  components: { ParentLayout, "site-footer": Footer },
};
</script>

<style lang="css">
.site-name {
  display: none;
}
.my-footer {
  text-align: center;
}
</style>
