const { resolve, join } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

const appDirectory = resolve(__dirname, './');
const resolveApp = relativePath => resolve(appDirectory, relativePath);

module.exports = {
    target: "web",
    entry: "./src/index.tsx",
    output: {
        path: join(__dirname, "dist"),
        filename: "main.js",
        publicPath: '/'
    },
    mode: process.env.NODE_ENV || "development",
    resolve: {
        extensions: ["", ".tsx", ".ts", ".js", ".jsx", ".json", ".css"],
        alias: {
            '~': resolveApp('./src')
        },
        plugins: [
            new TsconfigPathsPlugin({
                extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
            })
        ]
    },
    devServer: { contentBase: join(__dirname, "./src") },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: ["ts-loader"],
            },
            {
                test: /\.(css|scss)$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
                use: ["file-loader"],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: join(__dirname, "src", "index.html"),
        })
    ],
    watchOptions: {
        aggregateTimeout: 200,
        ignored: "**/node_modules",
    },
    devServer: {
        static: {
            directory: join(__dirname, "public"),
        },
        compress: true,
        port: 9000,
        historyApiFallback: true,
    }
};