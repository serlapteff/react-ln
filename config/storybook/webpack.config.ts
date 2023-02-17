import type webpack from 'webpack'
import { type BuildPaths } from '../build/types/config'
import path from 'path'
import { buildStyleLoaders } from '../build/loaders/buildStyleLoaders'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export default ({ config }: { config: webpack.Configuration }): webpack.Configuration => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '../../src')
    }
    config?.resolve?.modules?.push(paths.src)
    config?.resolve?.extensions?.push('.ts', '.tsx')

    // @ts-expect-error игнор пока что
    config?.module?.rules = config?.module?.rules?.map((rule: RuleSetRule) => {
        if (String(rule.test).toString().includes('svg')) {
            return { ...rule, exclude: /\.svg$/i }
        }
        return rule
    })

    config?.module?.rules?.push({
        test: /\.svg$/,
        use: ['@svgr/webpack']
    })

    // @ts-expect-error проигнорим пока что
    config?.module?.rules?.push(buildStyleLoaders(true))
    config?.plugins?.push(
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        })
    )

    return config
}
