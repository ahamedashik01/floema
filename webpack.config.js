const path = require('path')
const webpack = require('webpack')

const CopywebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const IS_DEVELOPMENT = process.env.NODE_ENV === 'dev'

const dirApp = path.join(__dirname, 'app')
const dirAssests = path.join(__dirname, 'assests')
const dirStyles = path.join(__dirname, 'style')
const dirNode = 'node_modules'
console.log(dirApp)

module.exports = {
    entry: [
        path.join(dirApp, 'index.js'),
        path.join(dirStyles, 'index.scss')
    ],
    resolve: {
        module: [
            dirApp,
            dirAssests,
            dirStyles,
            dirNode
        ]
    },
    plugins: [
        new CleanWebpackPlugin()
    ]
}