const proxy = [
  {
    context: '/api',
    target: 'http://localhost:7777',
    pathRewrite: { '^/api': '' }
  }
];
module.exports = proxy;
