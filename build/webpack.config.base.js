const path = require("path");

const webpack = require('webpack');

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





module.exports = config
