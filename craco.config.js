const CracoLessPlugin = require('craco-less');
const webpack = require('webpack');
const { whenDev, whenProd, whenTest } = require('@craco/craco');

module.exports = {
  webpack: {
    plugins: [
      ...whenProd(
        () => [
          new webpack.DefinePlugin({
            'process.env.BASE_API_URL': JSON.stringify(
              'https://prod.typicode.com/',
            ),
          }),
        ],
        [],
      ),
      ...whenTest(
        () => [
          new webpack.DefinePlugin({
            'process.env.BASE_API_URL': JSON.stringify(
              'https://stage.typicode.com/',
            ),
          }),
        ],
        [],
      ),
      ...whenDev(
        () => [
          new webpack.DefinePlugin({
            'process.env.BASE_API_URL': JSON.stringify(
              'https://jsonplaceholder.typicode.com/',
            ),
          }),
        ],
        [],
      ),
    ],
  },
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
              '@layout-sider-background': '#fff',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
