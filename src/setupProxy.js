const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://mockapi.io/clone/656dfcf7bcc5618d3c245cca',
      changeOrigin: true,
    })
  );
};