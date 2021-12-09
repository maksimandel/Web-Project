const { resolve } = require('path'); // 1

module.exports = {
    entry: './src/main.js',
    output: {
        path: resolve(__dirname, 'dist'), // 2
        filename: 'main.[contenthash].js'  // 3
    }
};