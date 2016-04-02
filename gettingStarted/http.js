'use strict'
//通过require将http库包含到程序中
var http = require('http');
//创建新的HTTP服务器
var server = http.createServer();
//通过request事件来响应request请求
server.on('request',function(req, res){
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.end('Hell World\n');	
});
server.listen('80');
console.log('Server running!');

