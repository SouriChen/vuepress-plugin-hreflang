# vuepress-plugin-hreflang

> hreflang plugin for vuepress

Add  `<link rel='alternate' href='href' hreflang='lang'...>` to your vuepress site.

## Install

```
npm i vuepress-plugin-hreflang -D
```

## Usage
Read [How to use vuepress Plugin](https://v1.vuepress.vuejs.org/plugin/using-a-plugin.html) first, modify your `.vuepress/config.js`.
```js
module.exports = {
  plugins: [
    [
      'vuepress-plugin-hreflang',
      {
        baseURL: 'https://mina.wiki', // base url for your hreflang link, optional, default: ''
        stripExtension: true, // strip '.html' , optional, default: false
        lang:[]
      }
    ]
  ]
}
```

## Refrences

- [add extra tags to <head> per page](https://github.com/vuejs/vuepress/issues/894)
- [globalUIComponents](https://v1.vuepress.vuejs.org/plugin/option-api.html#globaluicomponents)
