'use strict';
var url = require('url');
var querystring = require('querystring');

module.exports = {
	fromGet: function(req, res, callback){
	    var data = url.parse(req.url, true).query;
		callback(data);		
	},
	fromPost: function(req, res, callback){
		var data = '';
		req.on('data', function(chunk){
			data += chunk;
		});
		req.on('end', function(){
			data = querystring.parse(data);
			callback(data);
		});
	}
};