const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
  app.use(
    '/quote',
    createProxyMiddleware({
      target: 'https://finance.yahoo.com/quote',
      changeOrigin: true,
    })
  );
};