var debug = process.env.NODE_ENV !== "production";

var webpack = require('webpack');
var path = require('path');
var srcPath = path.join(__dirname, 'src');

module.exports = {
    context: path.join(__dirname, "src"),
    devtool: debug ? "inline-sourcemap" : null,
    entry: "./js/index.js",
    resolve: {
        root: srcPath ,
        extensions: ['', '.js'],
        modulesDirectories: ['node_modules', 'src/js']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
            },
            { test: /\.css$/, loader: "style-loader!css-loader" },
        ]
    },
    output: {
        path: path.join(__dirname, "src"),
        filename: "main.min.js"
    },
    plugins: debug ? [
        new webpack.ProvidePlugin({
            React: "react",
        })
    ] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    ],
};
