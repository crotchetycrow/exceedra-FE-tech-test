module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-preset-env'),
    require('postcss-css-variables') ({stage: 2}),
    require('cssnano'),
  ]
}