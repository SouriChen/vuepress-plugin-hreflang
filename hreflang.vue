<template></template>

<script>
/* global BASEURL */
/* global STRIPURL */
/* global LANG */

export default {
  created() {
    if (typeof this.$ssrContext !== "undefined") {
      if (LANG.length != 0) {
        this.computeURL()
      }
    }
  },
  methods: {
    computeURL() {
        let lang;
        let langUrl = STRIPURL
          ? this.$page.path.replace(/\.html$/, "")
          : this.$page.path;
        let url, path;

        let checkLang = langUrl.substring(1, langUrl.indexOf("/", 1));
        if (LANG.indexOf(checkLang) !== -1) {
          path = `${langUrl.substr(langUrl.indexOf("/", 1))}`;
        } else {
          path = langUrl;
        }

        LANG.map((hreflang) => {
          if (hreflang !== "en") {
            url = `/${hreflang}${path}`;
          } else {
            url = path;
          }

          this.$ssrContext.userHeadTags += `<link rel='alternate' href='${
            BASEURL + url
          }' hreflang='${hreflang}'/>`;
        });
    },
  },
};
</script>
