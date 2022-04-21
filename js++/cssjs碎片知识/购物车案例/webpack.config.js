const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,

        exclude: path.resolve(__dirname, "node_modules"),
        use: {
          loader: "babel-loader",
          options: {
            //  plugins:[
            //    '@babel/plugin-transform-arrow-functions',
            //    "@babel/plugin-transform-block-scoping"
            //  ] //这是使用插件
            // presets: ["@babel/preset-env"]//这是直接使用预设  默认会用browserslistrc去匹配浏览器用哪些语法
            presets: [
              [
                "@babel/preset-env",
                {
                  useBuiltIns: "entry",
                  corejs: 3.8,
                },
              ],
            ],
            plugins: [["@babel/plugin-proposal-decorators", { legacy: true }]],
          },
        },
      },
      {
        test: /\.tpl$/,
        loader: "ejs-loader",
        options: {
          esModule: false,
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
      filename: "index.html",
      template: path.resolve(__dirname, "src/index.html"),
      title: "商品列表",
      chunksSortMode: "manual",
      excludeChunks: ["node_modules"],
      chunks: ["index"],
      hash: true,
    }),
  ],
};
