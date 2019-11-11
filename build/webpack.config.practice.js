const path = require("path");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HTMLPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const baseConfig = require('./webpack.config.base')
const merge = require('webpack-merge')
const isDev = process.env.NODE_ENV === 'development';


const devServer ={
  port:'8100',
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
      NODE_ENV:  '"development"'
    }
  }),
  new HTMLPlugin({
    template: path.join(__dirname,'template.html')
  })
]

const config = merge(baseConfig,{
  entry: path.join(__dirname,"../practice/index.js"),
  devtool: '#cheap-module-eval-source-map',
  module:{
    rules:[
      {
        test:/\.styl(us)?$/,
        use:[
          'vue-style-loader',
          'css-loader',
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'stylus-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  devServer,
  //import Vue from 'vue'
  resolve: {
    alias: {
      'vue': path.join(__dirname,'../node_modules/vue/dist/vue.esm.js')
    }
  },
  plugins: defultPlugins.concat([
    new webpack.HotModuleReplacementPlugin()
    //new webpack.NoEmitOnErrorsPlugin()
  ])
})


module.exports = config
