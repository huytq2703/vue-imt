const path = require('path');

module.exports = {
	publicPath: process.env.NODE_ENV === 'production' ? '/sakai-vue' : '/',

	configureWebpack: {
    resolve: {
      alias: {
        '@axios': path.resolve(__dirname, './src/libs/axios.js'),
      },
    },
    output: {
      filename: '[name].[hash].bundle.js',
    },
  },
};