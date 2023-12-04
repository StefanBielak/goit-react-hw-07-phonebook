const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://mockapi.io/clone/656df9fcbcc5618d3c2457df',
      changeOrigin: true,
    })
  );
};