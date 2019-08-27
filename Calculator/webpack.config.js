const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry : path.resolve(__dirname, 'js/main'),
    output: {
        filename: 'dist/bundle.js',
        path: path.resolve(__dirname)
    }
}