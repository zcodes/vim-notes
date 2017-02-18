/*
 * 预览文档修改
 *
 * 运行: node servier.js
 */
var liveServer = require('live-server');
var params = {
  port: '8000',
  host: '127.0.0.1',
  root: '.',
  open: false,
  ignore: '',
  wait: 1000,
  mount: [['/vim-notes/', './']],
  logLevel: 2,
  middleware: [function(req, res, next) { next(); }]
};

liveServer.start(params);
