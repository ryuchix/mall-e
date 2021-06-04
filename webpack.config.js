const path = require('path');

module.exports = {
    entry: './src/assets/js/site.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'assets/js'),
    },
};