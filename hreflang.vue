<template></template>

<script>
/* global BASEURL */
/* global STRIPURL */
/* global LANG */

export default {
  created() {
    if (typeof this.$ssrContext !== "undefined") {
        if(LANG.length!=0){
            LANG.map(hreflang=>{
                this.$ssrContext.userHeadTags += `<link rel='alternate' href='${this.computeURL()}' hreflang='${hreflang}'/>`;
            })
        }
    }
  },
  methods: {
    computeURL() {
      let pagePath = STRIPURL
        ? this.$page.path.replace(/\.html$/, "")
        : this.$page.path;
      return BASEURL + pagePath;
    }
  }
};
</script>