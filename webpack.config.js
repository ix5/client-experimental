const path = require('path');

module.exports = [
    {
        name: "dev",
        entry: {
            embed: path.resolve(__dirname, 'src', 'embed.js'),
        },
        /* https://webpack.js.org/configuration/mode/
         * Available modes: development, production, none
         */
        mode: 'development',
        /* https://webpack.js.org/configuration/devtool/ */
        devtool: 'source-map',
        /* Instruct webpack to emit ES5-compatible syntax for not-so-recent (pre-2017) browsers
         * Note: Both 'web' and 'es5' are needed!
         * https://webpack.js.org/configuration/target/ */
        target: ['web', 'es5'],
        /* https://webpack.js.org/configuration/resolve/#resolvemodules */
        resolve: {
            modules: [
                path.resolve(__dirname, 'src'),
                'node_modules',
            ],
        },
        /* https://webpack.js.org/guides/asset-modules/ */
        module: {
          rules: [
            {
             /* Read raw file contents when `require`-ing .svg files */
             test: /\.svg/,
             type: 'asset/source'
            },
          ],
        },
        /* https://webpack.js.org/concepts/output/ */
        output: {
            filename: '[name].dev.js',
            path: path.resolve(__dirname),
        },
    },
];
