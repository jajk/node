'use strict'

var through = require('through-gulp');

function versionFun(data){
	return data.replace(/{{something}}/, ' Monkey 2 Dorie ');
}

function modify(){
	var stream = through(function(file, encoding, callback){
		if(file.isNull()){
		    console.log('file is null!');
		    this.push(file);
			return callback();	
		}
		if(file.isStream()){
		    console.log('file is stream!');
			this.emit('error');
			return callback();	
		}
		var content = versionFun(file.contents.toString('utf-8'));
		file.contents = new Buffer(content, 'utf-8');
		this.push(file);
		callback();
	}, function(callback){
		console.log('处理完毕!');
		callback();
	});
	return stream;
}

module.exports = modify;