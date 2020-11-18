<template></template>

<script>
/* global BASEURL */
/* global STRIPURL */
/* global LANG */

export default {
  created() {
    if (typeof this.$ssrContext !== "undefined") {
      if (LANG.length != 0) {
        for (let index = 0; index < LANG.length; index++) {
          const hreflang = LANG[index];
          if (this.$page.path.indexOf(hreflang) == 1) {
            this.$ssrContext.userHeadTags += `<link rel='alternate' href='${this.computeURL()}' hreflang='${hreflang}'/>`;
            return;
          } else {
            this.$ssrContext.userHeadTags += `<link rel='alternate' href='${this.computeURL()}' hreflang='en'/>`;
          }
        }
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