//Socket.io的运行建立在HTTP服务器之上
var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

server.listen(80);

app.get('/', function(req, res){
	res.sendfile(__dirname + '/index.html');
});
//socket.io两个核心方法：emit方法用于发送消息，on方法用于监听对方发送的消息
io.sockets.on('connection', function(socket){
	socket.emit('news', {hello: 'world'});
	socket.on('anotherNews', function(data){
		console.log(1);
	});
});

