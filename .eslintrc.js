module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier'],
  plugins: [],
  // add your custom rules here
  // add your custom rules here
  rules: {
    'nuxt/no-cjs-in-config': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/html-self-closing': 'off',
    'vue/no-v-html': 'off',
    'vue/attribute-hyphenation': 'off',
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger':
      process.env.VUE_APP_NODE_ENV === 'production' ? 'error' : 'off',
    'space-before-function-paren': 0,
    semi: ['error', 'always'],
    indent: 0,
    'no-console': 'off',
  },
}
