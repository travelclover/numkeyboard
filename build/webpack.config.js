const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin') // 一个管理插件，用来每次构建前清理/dist文件夹
const HtmlWebpackPlugin = require('html-webpack-plugin') // 处理html的插件

module.exports = {
    entry: path.resolve(__dirname, '../src/main.js'),//已多次提及的唯一入口文件
    output: {
        path: path.resolve(__dirname, '../dist'), // 打包后文件存放的地方
        filename: 'numKeyboard.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            }
        ]
    },
    plugins: [
        //new CleanWebpackPlugin(['dist']), // 清理/dist文件夹的插件
        /*new HtmlWebpackPlugin({ // 处理html的插件
            title: 'ddragTest',
            filename: 'test.html', // 文件名称
            template: './test/test.html', // 模板文件路径
            inject: true, // 是否注入到html， true | body | head | false
            hash: true, // 给所有js和css文件添加hash字符串
            minify: {
                removeComments: false // 删除HTML中的注释
            }
        })*/

        // 压缩 js (同样可以压缩 css)
        new webpack.optimize.UglifyJsPlugin()
    ],
    //devtool: 'inline-source-map' // 使用source-map方便调试找错
}