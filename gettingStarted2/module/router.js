'use strict';
var operationFile = require('./operationFile');
var getQuery = require('./getQuery');
var router = {
	login: function(req, res){
		operationFile.readFileSync('./resource/login.html', function(data){
			res.writeHead(200, {'Content-Type':'text/html'});
			res.write(data);
			res.end();
		});
	},
	home: function(req, res){
	    operationFile.readFileSync('./resource/home.html', function(data){
			getQuery.fromPost(req, res, function(query){
				let name = query.name || 'hello';
				data = data.replace(/\{\w*\}/g, name);
				operationFile.writeFile('./resource/record.txt', name+'到此一游');
				res.writeHead(200, {'Content-Type':'text/html'});
				res.write(data);
				res.end();
			});
		});
	},
	getPic: function(req, res){
	    operationFile.readImg('./resource/newYear.png', function(data){
			res.writeHead(200, {'Content-Type':'image/jpeg'});
			res.write(data, 'binary');
			res.end();
		});
	}
};

module.exports = router;
