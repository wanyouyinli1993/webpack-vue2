const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
      app: './src/index.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    module: {
    	rules:[
    		{
    			test:/\.vue$/,
    			loader:'vue-loader'
    		},
    		{
    			test:/\.css$/,
    			use:[
    			    'style-loader',
    				'css-loader'
    			]
    		},
    		{
    			test:/\.(gif|jpg|jpeg|png|svg)$/,
    			use:[
    			  {
    			  	loader:'url-loader',
    			  	options:{
    			  		limits:1024,
    			  		name:'[name].[ext]'
    			  	}
    			  }
    			
    			]
    		},
    		{ test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/, loader: "file-loader" },
    		// {
    		// 	test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
    		// 	loader:'url-loader',
    		// 	optins:{
    		// 		limit:10000,
    		// 		name:utils.assetsPath('font/[name].[hash:7].[ext]')
    		// 	}
    		// },
    		{
			    test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
			    loader: 'file-loader'
			}
    	]
    },
    plugins: [new HtmlWebpackPlugin({
    	title:'home',
    	//filename: './src/dist/index-[hash].html',
        //template:'./src/tpl.js',
    	inject: 'body',
        hash: true,
    })],
    devServer: {
    port: 9999,
    open: true
    },
    resolve: {
    extensions: ['.js', '.vue'],
    alias: {
        'vue$': './node_modules/vue/dist/vue.common.js'
       }
    }
  }

