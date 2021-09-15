const htmlWebpackPlugin = require('html-webpack-plugin');
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
                use:[
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                ]
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