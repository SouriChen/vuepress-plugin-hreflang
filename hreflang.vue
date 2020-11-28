<template></template>

<script>
/* global BASEURL */
/* global STRIPURL */
/* global LANG */

export default {
  created() {
    if (typeof this.$ssrContext !== 'undefined') {
        // md文件头部增加：locales: ['en','ja']
      if (this.$page.frontmatter.locales) {
        this.computeURL(this.$ssrContext.url)
      } else {
        if (LANG.length != 0) {
          this.computeURL(this.$page.path)
        }
      }
    }
  },
  methods: {
    computeURL(params) {
      let url, path, lang
      let language = LANG
      let langUrl = STRIPURL ? params.replace(/\.html$/, '') : params
      let checkLang = langUrl.substring(1, langUrl.indexOf('/', 1))
      if (language.indexOf(checkLang) !== -1) {
        path = `${langUrl.substr(langUrl.indexOf('/', 1))}`
      } else {
        path = langUrl
      }

      language.map((hreflang) => {
        if (hreflang !== 'en') {
          url = `/${hreflang}${path}`
        } else {
          url = path
        }
        this.$ssrContext.userHeadTags += `<link rel='alternate' href='${BASEURL + url}' hreflang='${hreflang}'/>`
      })
    },
  },
}
</script>
