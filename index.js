module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    'eslint-config-prettier',
    './rules/index.js',
    './rules/imports.js',
  ].map(require.resolve),
}
