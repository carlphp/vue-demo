## babel 是什么

Babel是一个广泛使用的转码器，可以将ES6代码转为ES5代码，从而在现有环境执行。

### 配置文件 .babelrc  用来设置转码规则和插件

	{
	  "presets": [],
	  "plugins": []
	}

presets 字段设置转码规则，现有提供以下规则


	// ES2015 转码规则
	
	npm install --save-dev babel-preset-es2015
	
	// ES7 四个阶段的转码规则，选装一个,没用到ES7可以不用装
	
	npm install --save-dev babel-preset-stage-0
	npm install --save-dev babel-preset-stage-1
	npm install --save-dev babel-preset-stage-2
	npm install --save-dev babel-preset-stage-3

然后将这些规则加入到 .babelrc 中

	{
	  "presets": [
	  	"es2015",
	    //"stage-0"
	  ],
	  "plugins": []
	}
### 使用 babel-cli 进行转码，使用 dev 安装

	npm install --save-dev babel-cli

### 简化版 package.json

	{
	  "devDependencies": {
	    "babel-cli": "^6.26.0",
	    "babel-preset-es2015": "^6.24.1"
	  },
	  "scripts": {
	  	"build": "babel src -d dist"
	  }
	}

运行 npm run build


### 使用 babel-polyfill 转码新的 api, 比如 *Maps, Iterator,Promise ...*

	npm install --save-dev babel-polyfill

