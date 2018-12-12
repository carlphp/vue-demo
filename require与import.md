## require 时代的模块


> ES6 标准发布之后，module 成为标准，使用 export 导出模块， Import 导入模块


### node 的 module 遵循CommonJS规范


	var path = require('path');
	
	path.resolve('__dirname', '/dist/');

require 同步模式，等到模块加载进来才能操作，服务器所有模块存在本地，即使同步还是很快。浏览器网络问题可能要等很长时间。所以浏览器不能采用 sync 模式，只能采用 async 模式，这就是AMD诞生的背景。

### AMD(Asynchronous Module Definition)异步模块定义,提前执行加载

模块加载不影响后面语句运行，所有的模块都定义在回调函数中，等加载完成后，回调函数才会运行。

	require(['math'], function(math){
		math.add(2, 3);
	});
	
	//math.js
	define(function(){
		var add = function(x, y){
			return x+y;
		};
		return {
			add: add
		};
	});

 requirejs 解决了两个问题

1. js 异步加载，避免网页假死，失去响应
2. 模块之间的依赖性，不会像以前，jquery 之类的必须按照严格的顺序加载，不然后面的插件无法使用

### CMD ,延迟执行加载

	define(function(require, exports) {
	
	  // 获取模块 a 的接口
	  var a = require('./a');
	
	  // 调用模块 a 的方法
	  a.doSomething();
	
	});

## 区别

加载方式|规范|命令|特点
----|----|----|----
运行时加载|CommonJS/AMD|require|社区方案，提供了服务器/浏览器的模块加载方案。非语言层面的标准。只能在运行时确定模块的依赖关系及输入/输出的变量，无法进行静态优化。
编译时加载|ES6|import|语言规格层面支持模块功能。支持编译时静态分析，便于JS引入宏和类型检验。动态绑定。

## ES6 模块

> [ES6 模块](http://baidu.com) 的设计思想是尽量的静态化，使得编译时就能确定模块的依赖关系，以及输入和输出的变量。CommonJS 和 AMD 模块，都只能在运行时确定这些东西


对比CommonJS, CommonJS模块就是对象，

	let { stat, exists, readFile } = require('fs');
	
	// 等同于
	let _fs = require('fs');
	let stat = _fs.stat;
	let exists = _fs.exists;
	let readfile = _fs.readfile;
上面是指加载fs的所有方法，再从方法上读取用到的三个方法，只有运行时才能得到对象

ES6 模块不是对象，而是通过 **export**显示制定输出的代码，在通过**import**输入












