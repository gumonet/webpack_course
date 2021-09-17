const htmlWebpackPlugin = require('html-webpack-plugin');
const { loader } = require('mini-css-extract-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    module:{
        rules:[
            {
                test: /\.js$/i, //Que archivos vas a utilizar?
                exclude: /node_modules/, //Archivos a excluir
                use:{
                    loader: "babel-loader",
                }
            },
            {
                test: /\.html$/i, //Que archivos vas a utilizar?
                use:[
                    {
                        loader: "html-loader",
                        options: {
                            minimize:true,
                        }
                    }
                ]
            },
            {
                test: /\.css$/i, //Que archivos vas a utilizar?
                /*use:[
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                ]*/
                //Fix url files on css rules
                use:[
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: './'
                        }
                    },
                    "css-loader",
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg|webp)$/i, //Que archivos vas a utilizar?
                use:[ "file-loader?name=assets/[name].[ext]" ]
            },
            {
                test: /\.(woff)$/i, //Que archivos vas a utilizar?
                use:[ "file-loader?name=assets/[name].[ext]" ]
            }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            template:'./src/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin
    ]
}