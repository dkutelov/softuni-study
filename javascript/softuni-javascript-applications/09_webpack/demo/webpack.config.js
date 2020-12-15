const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js', // default, if so no need to include it
    output: {
        filename: 'main.js', // default, if so no need to include it
        path: path.resolve(__dirname, 'dist'), // default, if so no need to include it
    },
    watch: true, // activates watch mode
    devServer: {
        contentBase: './dist',
    },
    plugins: [new MiniCssExtractPlugin()], // executed from first to last
    module: {
        rules: [
            // { //in style tags of the html
            //     test: /\.css$/i,
            //     use: ['style-loader', 'css-loader'], // executes first css-loader and then style-loader
            // },
            {
                // in separate file
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'], // executes first css-loader and then style-loader
            },
            // file loader to move the index.html
        ],
    },
};
