const path = require('path');

module.exports = {
  entry: 'script.js',  // your entry point file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
};