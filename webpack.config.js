const HtmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

const resourcesPath = `${__dirname}/src`;

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: `${resourcesPath}/index.html`,
  filename: 'index.html',
  inject: 'body',
  favicon: `${resourcesPath}/assets/img/favicon.png`
});

const miniCssExtractPluginConfig = new miniCssExtractPlugin({
  filename: "[name].css",
  chunkFilename: "[id].css"
});

module.exports = {
  entry: [
    './src/index.js',
  ],
  output: {
    path: `${__dirname}/dist`,
    filename: 'index_bundle.js',
  },
  module: {
    rules: [
      {
        test: /.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options:
          {
            presets: ['@babel/preset-react']
          }
        }
      },
      {
        test: /.js$/,
        exclude: /node_modules/,
        use:
        {
          loader: 'babel-loader',
          options:
          {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
          },
          // {
          //   loader: 'sass-loader',
          // },
        ],
      },
      {
        test: /\.(gif|png|jpe?g|svg|woff|woff2|eot|ttf)(\?[a-z0-9=.]+)?$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "[name]-[hash:5].[ext]",
              limit: 10000,
              outputPath: "img/"
            }
          },
          {
            loader: "image-webpack-loader",
            options: {
              svgo: {
                plugins: [
                  {
                    removeViewBox: false
                  }
                ]
              }
            }
          }
        ]
      },
    ]
  },
  devServer: {
    historyApiFallback: true,
    inline: true,
    port: 3000,
  },
  resolve: {
    alias: {
      "@": path.resolve(`${resourcesPath}`),
      "@assets": path.resolve(`${resourcesPath}/assets`),
      "@components": path.resolve(`${resourcesPath}/components`),
      "@views": path.resolve(`${resourcesPath}/views`)
    },
    extensions: [".js", ".scss", ".css"]
  },
  plugins: [HTMLWebpackPluginConfig, miniCssExtractPluginConfig],
};


