const webpack = require('webpack')
const path = require('path')
const inProduction = (process.env.NODE_ENV === 'production')

module.exports = {
  entry: './src/app.jsx',
  output: {
    path: __dirname,
    filename: './build/bundle.js'   
  },
  module: {
    rules: [
      {
       test: /\.s[ac]ss$/,
       use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
       test: /\.css$/,
       use: ['style-loader', 'css-loader']
      },
      {
       test: /\.jsx?$/,
       exclude: /(node_modules|bower_components)/,
       loader: 'babel-loader'
      },
      {
        test: /\.(svg|eot|ttf|woff|woff2)$/,
        use: 'file-loader'
      },
      {
        test: /\.(png|je?pg|gif)$/,
        loaders: [
          {
            loader: 'file-loader',
            options: {
              name: 'img/[name].[chunkhash].[ext]'
            }
          },
          'img-loader'
        ]
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        }),
    ],
  devtool: inProduction ? undefined : 'cheap-module-eval-source-map'
}

if (inProduction) {
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
    	compressor: {
			warnings: false
		}
	})
  )
}
