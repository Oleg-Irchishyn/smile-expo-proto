const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const CriticalCssPlugin = require('./critical-css-plugin');
const fs = require('fs');


const DEV_MODE = process.env.NODE_ENV !== 'production';

const CSS_CHUNK_NAME = DEV_MODE ? '[name].chunk.css'
    : '[id][contenthash].chunk.css';

const JS_CHUNK_NAME = DEV_MODE ? '[name].chunk.js'
    : '[id][contenthash].chunk.js';

function generateHtmlPlugins(templateDir) {
    const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir));
    return templateFiles.map(item => {
        const parts = item.split('.');
        const name = parts[0];
        const extension = parts[1];
        return new HtmlWebpackPlugin({
            filename: `${name}.html`,
            template: path.resolve(__dirname, `${templateDir}/${name}.${extension}`),
            inject: false,
        })
    })
}

const htmlPlugins = generateHtmlPlugins('./src/html/views');

module.exports = {
    entry: {
        'common': ['@babel/polyfill', './src/js/index.js', './src/scss/style.scss'],
        'main-page': ['@babel/polyfill', './src/js/main.js'],
        'our-events': ['@babel/polyfill', './src/js/our-events.js'],
        'contacts': ['@babel/polyfill', './src/js/contacts.js'],
        'registration': ['@babel/polyfill', './src/js/registration.js'],
        'faq': ['@babel/polyfill', './src/js/faq.js'],
        'media': ['@babel/polyfill', './src/js/media.js'],
        'feedback': ['@babel/polyfill', './src/js/feedback.js'],
        'our-team': ['@babel/polyfill', './src/js/our-team.js'],
        'news': ['@babel/polyfill', './src/js/news.js'],
        'single-news': ['@babel/polyfill', './src/js/single-news.js'],
        'about-company': ['@babel/polyfill', './src/js/about-company.js'],
        'our-partners': ['@babel/polyfill', './src/js/our-partners.js'],
        'canvas': [
          '@babel/polyfill', './src/js/canvas.js'],
      },
    output: {
        filename: 'js/[name]/bundle.js',
        chunkFilename: `js/[name]/chunks/${JS_CHUNK_NAME}`,
        path: path.resolve(__dirname, 'web'),
        publicPath: "/"
    },
    resolve: {
        alias: {
            Components: path.resolve(__dirname, 'src/js/components/'),
        }
    },
    devtool: DEV_MODE ? "source-map" : '',
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'web'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [[
                            '@babel/preset-env',
                            {
                                targets: {
                                    chrome: "58",
                                    ie: "10"
                                }
                            }
                        ]],
                        plugins: ['@babel/plugin-syntax-dynamic-import']
                    }
                }
            },
            {
                test: /\.((c|sa|sc)ss)$/,
                include: path.resolve(__dirname, 'src/scss'),
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: DEV_MODE,
                        },
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: DEV_MODE,
                            url: false
                        },
                    },
                    {
                        loader: "postcss-loader",
                        options: { sourceMap: DEV_MODE }
                    },
                    {
                        loader: 'resolve-url-loader',
                        options: { sourceMap: DEV_MODE },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        }
                    },
                ]
            },
            {
                test: /\.(png|jpg|jpe?g|gif|svg|webp|ico)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'images/[name]-[hash].[ext]',
                            publicPath: '/'
                        },
                    },
                ],
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'fonts/[name]-[hash].[ext]',
                            publicPath: '/'

                        },
                    }
                ]
            },

            {
                test: /\.html$/,
                include: path.resolve(__dirname, './src/html/includes'),
                use: ['raw-loader']
            },
        ]
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
                extractComments: 'all',
                sourceMap: DEV_MODE
            })
        ],
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanStaleWebpackAssets: false,
            cleanOnceBeforeBuildPatterns: ['js/*', 'css/*', 'images/*'],
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
        }),
        new CopyPlugin([
            {
                from: "src/images", to: "images"
            },
            {
                from: "src/fonts", to: "fonts"
            }

        ]),
        new MiniCssExtractPlugin({
            filename: 'css/bundle.css',
            chunkFilename: 'css/chunks/' + CSS_CHUNK_NAME,
        }),
        new CriticalCssPlugin({ url: 'https://oleg-irchishyn.github.io/smile-expo-proto/web/' }),
    ].concat(htmlPlugins)
};
