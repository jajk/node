'use strict';

//直接在参数里赋值，属于ES6的规范，如y='world'
function log(x) {
	var y = arguments.length <= 1 || arguments[1] === undefined ? 'world' : arguments[1];

	console.log(x, y);
};
log('hello');