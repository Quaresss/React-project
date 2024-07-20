const path = require("path");



module.exports = {
    entry: path.resolve(__dirname, "..", "./src/index.tsx"),
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "..", "public"),
        publicPath: '/'
    },
    devServer: {
        static: {
            directory: path.join(__dirname, "..", "public"),
        },
        port: 3000,
        compress: true,
        historyApiFallback: true
    },
    module: {


        rules: [
            {
                test: /\.(ts|tsx)?$/,
                use: "ts-loader",
                exclude: /node_modules/,

            },
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
            },

        ]

    },
    resolve: {
        alias: {
            '@components': path.resolve(__dirname, "..", './src/components/'),
            '@utils': path.resolve(__dirname, "..", './src/utils/'),
            '@store': path.resolve(__dirname, "..", './src/store/'),

        },

        extensions: [".js", ".jsx", ".ts", ".tsx", ".scss", ".sass", ".css"]
    }

}
