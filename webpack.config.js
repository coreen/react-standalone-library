const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
	entry: './src/index.tsx',
	mode: 'production',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
		library: 'mylibrary',
		// Targeting window object for runtime dependency,
		// instead of umd used for compile time dependency
		libraryTarget: 'window'
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.css'],
		alias: {
			'react': path.resolve(__dirname, './node_modules/.bin/react'),
			'react-dom': path.resolve(__dirname, './node_modules/.bin/react-dom')
		}
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'awesome-typescript-loader'
			},
			{
				test: /\.css?$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader'
				]
			}
		]
	},
	externals: {
		'react': 'React',
		'react-dom': 'ReactDOM'
	},
	plugins: [
		// Note the bundle.css file is not uglified
		new MiniCssExtractPlugin({
			filename: 'bundle.css'
		}),
		// Used to minimize the bundle.js size
		new UglifyJsWebpackPlugin(),
		// Uncomment below to see a visual representation of the bundle for possible shrinking
		// new BundleAnalyzerPlugin()
	]
}