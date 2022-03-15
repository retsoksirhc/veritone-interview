module.exports = {
  entry: './src/universal/app.jsx',
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/build/static/js`
  },
  module: {
      rules: [
          {
            test: /\.m?jsx?$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
                plugins: ['@babel/plugin-transform-react-jsx']
              }
            }
          }
        ]
  }
};
