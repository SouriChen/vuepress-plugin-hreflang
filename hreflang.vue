<template></template>

<script>
/* global BASEURL */
/* global STRIPURL */
/* global LANG */

export default {
  created() {
    if (typeof this.$ssrContext !== "undefined") {
      // md文件头部增加：locales: ['en','ja']
      let params = {
        url: "",
        lang: [],
      };
      if (this.$page.frontmatter.locales) {
        params = {
          url: this.$ssrContext.url,
          lang: this.$page.frontmatter.locales,
        };
      } else {
        if (LANG.length != 0) {
          params = {
            url: this.$page.path,
            lang: LANG,
          };
        }
      }
      this.computeURL(params);
    }
  },
  methods: {
    computeURL(params) {
      let url, path, lang;
      let language = params.lang;
      let langUrl = STRIPURL ? params.url.replace(/\.html$/, "") : params.url;
      let checkLang = langUrl.substring(1, langUrl.indexOf("/", 1));
      if (language.indexOf(checkLang) !== -1) {
        path = `${langUrl.substr(langUrl.indexOf("/", 1))}`;
      } else {
        path = langUrl;
      }

      language.map((hreflang) => {
        if (hreflang !== "en") {
          url = `/${hreflang}${path}`;
        } else {
          url = path;
        }
        this.$ssrContext.userHeadTags += `<link rel='alternate' href='${BASEURL + url}' hreflang='${hreflang}'/>`
      });
    },
  },
};
</script>
