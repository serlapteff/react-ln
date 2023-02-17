import type webpack from 'webpack'
import { type BuildOptions } from './types/config'
import ReactRefreshTypeScript from 'react-refresh-typescript'
import { buildStyleLoaders } from './loaders/buildStyleLoaders'

export function buildLoaders (options: BuildOptions): webpack.RuleSetRule[] {
    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack']
    }
    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff|wpff2)$/i,
        use: [
            {
                loader: 'file-loader'
            }
        ]
    }
    const babelLoader = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env']
                // plugins: [
                //     [
                //         'i18next-extract',
                //         {
                //             locales: ['ru', 'en'],
                //             keyAsDefaultValue: true
                //         }
                //     ]
                // ]
            }
        }
    }

    const styleLoaders = buildStyleLoaders(options)

    const typescriptLoaders = {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
            {
                loader: 'ts-loader',
                options: {
                    getCustomTransformers: () => ({
                        before: [options.isDev && ReactRefreshTypeScript()].filter(Boolean)
                    }),
                    transpileOnly: options.isDev
                }
            }
        ]
    }

    return [
        fileLoader,
        svgLoader,
        babelLoader,
        typescriptLoaders,
        styleLoaders
    ]
}
