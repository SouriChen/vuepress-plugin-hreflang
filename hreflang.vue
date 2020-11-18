<template></template>

<script>
/* global BASEURL */
/* global STRIPURL */
/* global LANG */

export default {
  created() {
    if (typeof this.$ssrContext !== "undefined") {
      if (LANG.length != 0) {
        let lang;
        LANG.map((hreflang) => {
          lang = this.$page.path.indexOf(hreflang) != -1 ? hreflang : "en";
        });
        this.$ssrContext.userHeadTags += `<link rel='alternate' href='${this.computeURL()}' hreflang='${lang}'/>`;
      }
    }
  },
  methods: {
    computeURL() {
      let pagePath = STRIPURL
        ? this.$page.path.replace(/\.html$/, "")
        : this.$page.path;
      return BASEURL + pagePath;
    },
  },
};
</script>
