const path = require("path");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HTMLPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const isDev = process.env.NODE_ENV === 'development';
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const baseConfig = require('./webpack.config.base')
const merge = require('webpack-merge')

let config
const devServer ={
    port:'8000',
    host:'0.0.0.0',
    overlay:{
        errors:true,
    },
    hot : true,
}

const defultPlugins = [
    // make sure to include the plugin for the magic
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
        'process.env':{
            NODE_ENV: isDev ? '"development"':'"production"'
        }
    }),
    new HTMLPlugin()
]

if(isDev){
    config = merge(baseConfig,{
        devtool: '#cheap-module-eval-source-map',
        module:{
            rules:[
                {
                    test:/\.styl/,
                    use:[
                        'style-loader',
                        'css-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: true,
                            }
                        },
                        'stylus-loader'
                    ]
                }
            ]
        },
        devServer,
        plugins: defultPlugins.concat([
            new webpack.HotModuleReplacementPlugin()
            //new webpack.NoEmitOnErrorsPlugin()
        ])
    })

}else {
    config = merge(baseConfig,{
        entry:{
            app:path.join(__dirname,'../client/index.js')
            //vendor:['vuw']
        },
        output: {
            filename: '[name].[chunkhash:8].js'
        },
        module: {
            rules:[
                {
                    test:/\.styl/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                // you can specify a publicPath here
                                // by default it uses publicPath in webpackOptions.output
                                publicPath: './',
                                hmr: process.env.NODE_ENV === 'development',
                            },
                        },
                        'css-loader',
                        {
                            loader: 'postcss-loader',
                            options: { sourceMap: true }
                        },
                        'stylus-loader'
                    ]
                }
            ],
        },

        optimization: {
            splitChunks:{
                chunks: 'all'
            },
            runtimeChunk : true
        },
        plugins: defultPlugins.concat([
            new MiniCssExtractPlugin('styles.[contentHash:8].css')
        ])
    })

}


module.exports = config
