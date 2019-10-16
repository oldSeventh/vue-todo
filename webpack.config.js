const path = require("path");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HTMLPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const isDev = process.env.NODE_ENV === 'development';

const config= {
    target:'web',
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        filename: "bundle.js",
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
                test:/\.vue$/,
                loader: 'vue-loader'
            },{

                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },{
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

            },{
                test:/\.styl/,
                use:[
                    'style-loader',
                    'css-loader',
                    'stylus-loader'
                ]
            }
        ]
    }
}


if(isDev){
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
}


module.exports = config
