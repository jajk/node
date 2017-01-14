'use strict';
var fs = require('fs');
var operationFile = {
    readFileSync: function(path, callback){//同步读取文件
		let data = fs.readFileSync(path, 'utf-8');
		syncOperation(callback, data, '同步读取文件完毕');
	},
	readFileAsync: function(path, callback){//异步读取文件
	    fs.readFile(path, function(err, data){
			asyncOperation(err, callback, data, '异步读取文件成功');
		});	
	},
	writeFileSync: function(path, data, callback){//同步写入文件
	    fs.writeFileSync(path, data);
		syncOperation(callback, null, '同步写入文件完毕');		
	},
	writeFile: function(path, data, callback){//异步写入文件
		fs.writeFile(path, data, function(err){
			asyncOperation(err, callback, null, '异步写入文件完毕');
		});
	},
	readImg: function(path, callback){//异步读取图片
		fs.readFile(path, 'binary', function(err, file){
			asyncOperation(err, callback, file, '异步读取图片完毕');
		});
	}	
};
function syncOperation(callback, data, msg='操作成功'){
    if(typeof callback === 'function'){
		callback(data);
	}else{
		console.log(msg);
	}	
}
function asyncOperation(err, callback, data, msg='操作成功'){
    if(err){
		console.log(err);
	}else if(typeof callback === 'function'){
		callback(data);
	}else{
		console.log(msg);
	}	
}
module.exports = operationFile;