const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  output: {
    filename: 'app.bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env', {
                  targets: {
                    node: 'current'
                  }
                }
              ],
              '@babel/preset-react'
            ]
          }
        }
      }
    ]
  }
}
