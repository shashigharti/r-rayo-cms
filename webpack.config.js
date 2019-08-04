var path = require('path');
var HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/App.js",
    mode: 'development',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: './app.js'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
            test: /\.(s*)css$/,
            use: [
              {
                loader: "style-loader" // creates style nodes from JS strings
              },
              {
                loader: "css-loader" // translates CSS into CommonJS
              },
              {
                loader: "sass-loader" // compiles Sass to CSS
              }
            ]
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i, 
          loader: "file-loader?name=/images/[name].[ext]"
        }
      ]
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: "./src/index.html",
        filename: "./index.html"
      })
    ],
    devtool: "cheap-module-eval-source-map",
    externals: {
      // global app config object
      config: JSON.stringify({
          apiUrl: 'http://www.lgprofile.local/'
      })
    }
  };
