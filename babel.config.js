// Only used by Jest
module.exports = {
  presets: [
    [
      "@babel/preset-env",
      { useBuiltIns: "entry", corejs: "2", targets: { node: "current" } },
    ],
    "@babel/preset-typescript",
    "vue",
  ],
  plugins: ["@vue/babel-plugin-jsx", "babel-plugin-transform-scss"],
};
