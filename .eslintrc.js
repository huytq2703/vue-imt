module.exports = {
  root: true,

  env: {
    node: true,
  },
  extends: [
    // add more generic rulesets here, such as:
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
  ],
  rules: {
    'no-empty-pattern': 'error',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    semi: "error",
    'linebreak-style': 0,
    camelcase: ['error', {"properties": "always"}],
    'arrow-parens': ['error', 'as-needed'],
    'vue/multiline-html-element-content-newline': 'error',
  }
};
