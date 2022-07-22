const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry:{
        main:'./src/index.js',
        functionOne: './src/randomNumber.js'
    },
    output:{
        path: path.resolve(__dirname,'dist'),
        filename: '[name].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Snake Game',
            filename: 'index.html',
            template: 'src/template.html'
        })
    ]
}