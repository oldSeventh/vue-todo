const path = require("path");
const isDev = process.env.NODE_ENV === 'development';
const createVueLoaderOptions = require('./vue-loader.config')

const config= {
    target:'web',
    entry: path.join(__dirname, '../client/index.js'),
    output: {
        filename: "bundle.[hash:8].js",
        path: path.join(__dirname,'../dist'),
        chunkFilename: '[name].bundle.[hash:8].js',
        // publicPath: "dist/"
    },
    module: {
        rules: [
            // {
            //     test:/\.(vue|js|jsx)$/,
            //     loader: 'eslint-loader',
            //     exclude: /node_modules/,
            //     enforce: "pre"
            // },
            {
                test:/\.vue$/,
                loader: 'vue-loader',
                options: createVueLoaderOptions(isDev)
            },{
                test:/\.jsx$/,
                loader: "babel-loader"
            },{
                test:/\.js$/,
                use: [
                  {
                    loader: "babel-loader",
                    options: {
                      presets: ['env']
                    }
                  },
                  "eslint-loader"
                ],
                exclude: __dirname + 'node_modules',
                include: __dirname + 'src'
            }
            ,{
                test: /\.(gif|jpg|jpeg|png|svg)$/,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            limit:1024,
                            name:'resources/[path][name].[hash:8].[ext]'
                        }
                    }

                ]

            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            // 开启 CSS Modules
                            modules: true
                        }
                    }
                ]
            },
        ]
    }
}





module.exports = config
