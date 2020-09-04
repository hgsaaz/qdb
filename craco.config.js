const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            '@body-background': '#fff',
                            '@primary-color': '#0394fc',
                            '@text-color': '#001529',
                            '@layout-sider-background': '#fff'
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};