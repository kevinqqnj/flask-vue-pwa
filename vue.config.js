// Inside vue.config.js
let CopyWebpackPlugin = require('copy-webpack-plugin')
module.exports = {
    configureWebpack: {
        plugins: [
            new CopyWebpackPlugin([{
                from: __dirname + '/src/pages/common',
                to: __dirname + '/dist/pages',
            },{
                from: __dirname + '/src/pages/templates',
                to: __dirname + '/templates/pages',
            }]),
        ]
    },
    pwa: {
        name: 'Flask Vue PWA',
        themeColor: '#4DBA87',
        msTileColor: '#000000',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'black',

        // configure the workbox plugin
        workboxPluginMode: 'InjectManifest',
        workboxOptions: {
            // swSrc is required in InjectManifest mode.
            swSrc: 'src/service-worker.js',
            // ...other Workbox options...
        }
    }
}
