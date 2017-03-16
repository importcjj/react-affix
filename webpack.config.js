var path = require('path');

module.exports = {
    entry: path.join(__dirname, 'example', 'src', 'index.js'),
    output: {
        path: path.join(__dirname, './example/dist'),
        filename: 'index.js',
        publicPath: '/',
    },
    module: {
        loaders: [{
          test: /\.js$/,
          loader: 'babel',
          include: [
            path.join(__dirname, 'example')
          ]
        }]
  },
}
