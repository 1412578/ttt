var path = require("path");
const glob = require('glob');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const PurifyCSSPlugin = require('purifycss-webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const isProduction = process.env.NODE_ENV === "production";
module.exports = {
	mode: isProduction ? "production" : "development",
	entry: {
		layout: "./views/layout.js"
	},
	output: {
		path: path.resolve(__dirname, "assets/dist"),
		filename: "[name].bundle.js"
	},
	plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].bundle.css"
    }),
    // use purifycss only in production
    isProduction ? new PurifyCSSPlugin({
      paths: glob.sync(path.join(__dirname, 'views/layout.hbs')),
	  minimize: true
    }) : null
  	].filter(Boolean),
	module: {
		rules: [
			{
				test: /\.s?[ac]ss$/,
				use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
			}
		]
	}
}