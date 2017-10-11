var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js')
var ora = require('ora') // 一个很好看的 loading 插件
var chalk = require('chalk')
var rm = require('rimraf')
var path = require('path')

// 使用 ora 打印出 loading + log
var spinner = ora('building for production...')
// 开始 loading 动画
spinner.start();

// 拼接编译输出文件路径
rm(path.join(path.resolve(__dirname, '../dist')), err => {
    if (err) throw err
    // 开始 webpack 的编译
    webpack(webpackConfig, function (err, stats) {
        // 编译成功的回调函数
        spinner.stop()
        if (err) throw err
        process.stdout.write(stats.toString({
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false
        }) + '\n\n')

        console.log(chalk.cyan('  Build complete.\n'))
    })
})