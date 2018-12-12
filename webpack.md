# webapck


## 什么是webpack

> WebPack可以看做是模块打包机：它做的事情是，分析你的项目结构，找到JavaScript模块以及其它的一些浏览器不能直接运行的拓展语言（Scss，TypeScript等），并将其打包为合适的格式以供浏览器使用。


- 模块化，让我们可以把复杂的程序细化为小的文件;

- 类似于TypeScript这种在JavaScript基础上拓展的开发语言：使我们能够实现目前版本的JavaScript不能直接使用的特性，并且之后还能能装换为JavaScript文件使浏览器可以识别；

- scss，less等CSS预处理器


![webpack](/img/what-is-webpack.png)


在webpack看来一切都是模块！这就是它不可不说的优点，包括你的JavaScript代码，也包括CSS和fonts以及图片等等等，只有通过合适的loaders，它们都可以被当做模块被处理。

## 本地安装 webpack webapck-cli

1. 初始化 package.json

`npm init -y`

2. 本地安装 webpack webpack-cli

`cnpm install --save-dev webpack webpack-cli`

3 安装 loader

`cnpm install --save-dev css-loader style-loader file-loader lodash`

4 npm run build

5 以下为 webpack.config.js 配置

	const path = require('path');
	
	module.exports = {
		entry: './src/index.js',
		output: {
			filename: 'bundle.js',
			path: path.resolve(__dirname, 'dist'),
		},
		module: {
			rules: [
				{
					test: /\.css$/,
					use: [
						'style-loader',
						'css-loader'
					]
				}
			]
		}
	
	}



