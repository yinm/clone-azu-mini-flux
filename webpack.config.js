module.exports = {
  mode: 'development',

  entry: './src/App.js',

  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/react'
              ]
            }
          }
        ]
      }
    ]
  }
}
