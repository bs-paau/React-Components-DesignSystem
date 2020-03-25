const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = function({ config }) {
    config.module.rules.push({
        test: /\.story\.jsx?$/,
        loaders: [
            {
                loader: require.resolve('@storybook/source-loader'),
                options: {
                    prettierConfig: {
                        printWidth: 100,
                        tabWidth: 2,
                        bracketSpacing: true,
                        trailingComma: 'es5',
                        singleQuote: true,
                    }
                },
            },
        ],
        enforce: 'pre',
     });

    return config;
};

//       plugins: [
//             new MiniCssExtractPlugin ({
//                 fileName: isDevelopment ? '[name].css' :'[name].[hash].css',
//                 chunkFilename: isDevelopment ? '[id].css' :'[id].[hash].css'
//             })
//         ]
