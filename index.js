const { path } = require('@vuepress/shared-utils')

module.exports = options => ({
    define () {
        return {
            BASEURL: options.baseURL || '',
            STRIPURL: options.stripExtension || false,
            LANG: options.lang || [],
        }
    },
    enhanceAppFiles () {
        return [path.resolve(__dirname, 'enhanceAppFile.js')]
    },
    globalUIComponents: ['hreflang']
})
