'use strict'

var through2 = require('through2');

function versionFun(data){
	return data.replace(/{{something}}/, ' Monkey 2 Dorie ');
}

function modify(){
	return through2.obj(function(file, encoding, cb){
		//如果文件为空，不做任何操作，转入下一个操作，即下一个pipe
		if(file.isNull()){
			console.log('isNull');
		    this.push(file);
			return cb();
		}
		//插件不支持对stream直接操作，抛出异常
		if(file.isStream()){
			console.log('isStream');
			this.emit('error');
			return cb();
		}
		//内容转换，处理好后，再转成Buffer形式
		var content = versionFun(file.contents.toString());
		file.contents = new Buffer(content);
		//下面这两句基本是标配，可参考through2的API
		this.push(file);
		cb();
	});
}

module.exports = modify;