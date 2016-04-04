//需要ws模块
var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({port: 8080});

wss.on('connection', function connection(ws){
	ws.on('message', function incoming(message){
		var obj = JSON.parse(message);
		console.log('received: %s', obj.data);
	});
	ws.send('something');
});

