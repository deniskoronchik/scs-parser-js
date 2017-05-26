var webpack = require("webpack");

var PROD = parseInt(process.env.BUILD_MIN || '0');

module.exports = {
    entry: "./scs-parser.js",
    output: {
        filename: PROD ? "scs-parser.min.js" : "scs-parser.js",
        path: __dirname + "/build",
        libraryTarget: 'umd'
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        extensions: [".js"]
    },

    plugins: PROD ? [
        new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } })
    ] : [],
    
    module: {
        rules: [
        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
    },
};