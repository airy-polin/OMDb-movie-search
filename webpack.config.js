const path = require('path');

require("@babel/core").transformSync("code", {
  plugins: ["@babel/plugin-transform-runtime"],
});

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'myBundle.js',
    path: path.resolve(__dirname, './public'),
  },
  devServer: {
    port: 3000,
    static: path.resolve(__dirname, 'public'),
    hot: true,
    open: true,
    historyApiFallback: true,
    headers: {
      'Content-Type': 'text/html; charset=UTF-8',
      'Access-Control-Allow-Origin': '*',
   }
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$|jsx/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react',
              ]
            },
          }
        ]
      },
      {
        test: /\.s?[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|jp2|webp)$/,
        loader: 'file-loader',
        include: [
            path.resolve(__dirname, 'node_modules'),
            path.resolve(__dirname, 'path/to/imported/file/dir'),
        ],
        options: {
          name: '[name].[ext]',
        },
      },
    ],
  },
  resolve: {
    alias: {
      App: path.resolve(__dirname, 'src'),
    },
    extensions: ['*', '.ts', '.tsx', '.js', '.jsx'],
  }
}
