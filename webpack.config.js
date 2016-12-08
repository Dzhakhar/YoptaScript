var webpack = require("webpack");
var path = require("path");
var BUILD_DIR = path.resolve(__dirname, 'src/dist/');
var APP_DIR = path.resolve(__dirname, 'src/lib');

var config = {
    entry: {
        yoptascript: [APP_DIR + "/yoptascript.js"]
    },
    output: {
        path: BUILD_DIR,
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.js?/,
                include: APP_DIR,
                loader: 'babel'
            }
        ]
    }
};

module.exports = config;
