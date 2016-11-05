var path = require('path');
var precss = require('precss');
var autoprefixer = require('autoprefixer');

module.exports = {
    entry: {
        app: [path.join(__dirname, 'src', 'javascript', 'index.js')]
    },
    output: {
        path: path.join(__dirname, 'www'),
        filename: 'terminal.js',
        publicPath: '/'
    },
    module: {
        loaders: [
            {
                test: /.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react'],
                    plugins: ['transform-runtime']
                }
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'postcss', 'sass']
            }
        ]
    },
    postcss: function () {
        return [precss, autoprefixer]
    },
    devtool: 'source-map'
};
