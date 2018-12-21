module.exports = {
  plugins: [
    require("postcss-import")({}),
    require("postcss-custom-media")({}),
    require("postcss-custom-properties")({
      warnings: true
    })
  ]
};
