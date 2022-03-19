module.exports = {
  entry: {
    bundle: './src/universal/app.jsx'
  },
  output: {
    filename: '[name].js',
    path: `${__dirname}/build/static/js`
  },
  module: {
      rules: [
          {
            test: /\.m?jsx?$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  '@babel/preset-env',
                  '@babel/preset-react'
                ]
              }
            }
          }
        ]
  },
  devtool: 'inline-cheap-source-map',
  optimization: {
    runtimeChunk: 'single'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
