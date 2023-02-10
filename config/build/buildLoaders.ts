import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";
import ReactRefreshTypeScript from 'react-refresh-typescript'

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    }
    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff|wpff2)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    }

    const styleLoaders = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            options.isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: /\.module/,
                        localIdentName: options.isDev ?
                            '[path][name]__[local]--[hash:base64:5]'
                            : '[hash:base64:8]'
                    }
                }
            },
            // Compiles Sass to CSS
            "sass-loader",
        ],
    }

    const typescriptLoaders = {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
            {
                loader: 'ts-loader',
                options: {
                    getCustomTransformers: () => ({
                        before: [options.isDev && ReactRefreshTypeScript()].filter(Boolean),
                    }),
                    transpileOnly: options.isDev,
                },
            },
        ],
    }


    return [
        typescriptLoaders,
        styleLoaders,
        svgLoader,
        fileLoader
    ]
}
