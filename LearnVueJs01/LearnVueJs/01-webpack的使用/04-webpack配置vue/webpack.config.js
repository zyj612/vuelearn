//entry表示需编译的文件，output表示产出文件
const path = require('path');
const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader')
module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        //动态获取路径
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        //配置url路径(默认是dist路径时可以不配置)
        publicPath: 'dist/'
    },
    module: {
        rules: [
            {
                //匹配
                test: /\.css$/,
                //css-loade只负责加载不负责解析
                //webpack使用多个loader时，是从右往左读的
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            },
            //webpack5不再支持url-loader，如果要使用需要添加esModule: false和type: 'javascript/auto'
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8000,
                            esModule: false
                        }
                    }
                ],
                type: 'javascript/auto'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    resolve: {
        extensions:['.js','.css','.vue'],
        alias: {
          'vue$': "vue/dist/vue.esm.js"//指定runtime-compiler编译版本
        }
    },
    plugins: [
        // 请确保引入这个插件来施展魔法
        new VueLoaderPlugin(),new webpack.BannerPlugin('最终版权归zyj所有')
      ]
}