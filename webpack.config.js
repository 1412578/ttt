var path = require("path");
const glob = require('glob');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const PurifyCSSPlugin = require('purifycss-webpack');
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
    }),
    new PurifyCSSPlugin({
      // Give paths to parse for rules. These should be absolute!
      paths: glob.sync(path.join(__dirname, 'views/layout.hbs')),
    })
  	],
	module: {
		rules: [
			{
				test: /\.s?css$/,
				use: ["style-loader", "css-loader", "sass-loader"]
			}
		]
	}
}