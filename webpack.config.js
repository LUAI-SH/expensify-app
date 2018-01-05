const path = require('path');
// "./src/app.js"
// entry -> output
module.exports = {
    entry : "./src/app.js",
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules:[{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.s?css$/, // ? to make s optional
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool:'cheap-module-eval-source-map', //map code
    devServer: {
        contentBase:  path.join(__dirname, 'public'),
        historyApiFallback: true // To handle client-side routing  ------- **
    }

};

// loader 

