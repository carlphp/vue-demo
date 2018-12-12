const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			},
			// {
			// 	test: /\.(png|svg|jpg|gif)$/,
			// 	use: [
			// 		'file-loader'
			// 	]
			// }
			{
				test: /\.(png|jpg)$/,
				loader: 'url-loader',
				options: {
					// limit: 10000,
					name: '[name].[hash:7].jpg',
					publicPath: path.resolve(__dirname, 'dist')
				}
			}
		]
	}

}