const path = require("path");

module.exports = {

    entry: "./src/index.js",
output: {
path: path.resolve(__dirname, "dist"),
filename: "bundle.js"
},

devServer:{
contentBase: path.join(__dirname,"dist"),
port: 9000,
watchContentBase: true
},

module: {
    rules: [{
    test: /\.css$/, //what loaders should be applied
    use: ["style-loader","css-loader"] //what loaders we want to use
    }]
    },

mode: 'development'
}