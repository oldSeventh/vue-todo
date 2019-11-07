const path = require("path");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HTMLPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const isDev = process.env.NODE_ENV === 'development';
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const config= {
    target:'web',
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        filename: "bundle.[hash:8].js",
        path: path.join(__dirname,'dist')
    },
    plugins: [
        // make sure to include the plugin for the magic
        new VueLoaderPlugin(),
        new webpack.DefinePlugin({
            'process.env':{
                NODE_ENV: isDev ? '"development"':'"production"'
            }
        }),
        new HTMLPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            // 开启 CSS Modules
                            modules: true,
                            // 自定义生成的类名
                            localIdentName: '[local]_[hash:base64:8]'
                        }
                    }
                ]
            },
            {
                test:/\.vue$/,
                loader: 'vue-loader'
            },{
                test:/\jsx$/,
                loader: "babel-loader"
            }
            ,{
                test: /\.(gif|jpg|jpeg|png|svg)$/,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            limit:1024,
                            name:'[name].[ext]'
                        }
                    }
                ]
            }
        ]
    }
}


if(isDev){
    config.module.rules.push({
        test:/\.styl(us)?$/,
        use:[
            'vue-style-loader',
            {
                loader:'css-loader',
                options: {
                    // 开启 CSS Modules
                    modules: true,
                    // 自定义生成的类名
                    localIdentName: '[local]_[hash:base64:8]'
                }
            },
            'stylus-loader'
        ]
    })
    config.devServer = {
        port:'8000',
        host:'0.0.0.0',
        overlay:{
            errors:true,
        },
        hot : true,
    }
    config.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    )
    config.devtool = '#cheap-module-eval-source-map'
}else {
    config.output.filename = '[name].[chunkhash:8].js';
    config.module.rules.push({
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
                options: {
                    sourceMap: true
                }
            },
            'stylus-loader'
        ]
    });
    config.plugins.push(
        new MiniCssExtractPlugin('styles.[contentHash:8].css')
    );
}


module.exports = config
