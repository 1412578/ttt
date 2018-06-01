var path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
	mode: "development",
	entry: {
		layout: "./views/layout.js"
	},
	output: {
		path: path.resolve(__dirname, "public"),
		filename: "[name].bundle.js",
		publicPath: '/'
	},
	plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].bundle.css"
    })
  	],
	module: {
		rules: [
			{
				test: /\.s?css$/,
				use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
			}
		]
	}
}