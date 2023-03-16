const path = require('path')

module.exports = {
    entry: './src/javascript/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            // Add individual asset loaders here
        ]
    }
    
};