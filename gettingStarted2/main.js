'use strict';
var http = require('http');
var url = require('url');
var router = require('./module/router');

var server = http.createServer();
server.on('request',function(req, res){
	if(req.url != '/favicon.ico'){
		let pathname = url.parse(req.url).pathname;
		pathname = pathname.match(/\w+/)[0];
		try{
			router[pathname](req, res); 	
		}catch(e){
			res.writeHead(200, {'Content-Type':'text/html'});
			res.write('not found 404!');
			res.end();
		};
	}else{
		res.end();
	};   
}).listen('80');

console.log('Server running!');