# [VUE](https://cn.vuejs.org/)

## MVVM

> vue.js 是数据驱动的web框架， MVVM = model、view和 viewmodel

- Model:指的是数据部分，对应到前端就是javascript对象

- View:指的是视图部分，对应前端就是dom

- Viewmodel:就是连接视图与数据的中间件


![mvvm](../img/mvvm.png)


数据(Model)和视图(View)是不能直接通讯的，而是需要通过ViewModel来实现双方的通讯。当数据变化的时候，viewModel能够监听到这种变化，并及时的通知view做出修改。同样的，当页面有事件触发时，viewMOdel也能够监听到事件，并通知model进行响应。Viewmodel就相当于一个观察者，监控着双方的动作，并及时通知对方进行相应的操作。

## VUE 内在实现

![mvvm](../img/vue.png)

1. vuejs在实例化的过程中，会对遍历传给实例化对象选项中的data 选项，遍历其所有属性并使用 Object.defineProperty 把这些属性全部转为 getter/setter。

2. 同时每一个实例对象都有一个watcher实例对象，他会在模板编译的过程中,用getter去访问data的属性，watcher此时就会把用到的data属性记为依赖，这样就建立了视图与数据之间的联系。

3. 当之后我们渲染视图的数据依赖发生改变（即数据的setter被调用）的时候，watcher会对比前后两个的数值是否发生变化，然后确定是否通知视图进行重新渲染。

这就是VUE的数据驱动

[实现vue2.0响应式的基本思路](http://www.cnblogs.com/caizhenbo/p/6710174.html)


## 1 vue 实例

1.1 创建一个VUE实例

1.2 vue 数据，方法 (实例属性 vm.$data)

1.3 实例的声明周期钩子

![mvvm](../img/lifecycle.png)

## 2 模板语法

2.1 文本

`<span>Message: {{ msg }}</span>`

2.2 原始html

`<span v-html="rawHtml"></span>`

2.3 特性

`<button v-bind:disabled="isDisabled">switchs</button>`

2.4 表达式

`{{ msg.split('').reverse().join('') }}`

## 3 计算属性和侦听器

3.1 计算属性 computed

    <p>reverse msg: {{ reversedMsg }}</p>

    computed: {
        reversedMsg: function() {
            return this.msg.split('').reverse().join('');
        }
    }

3.2 侦听属性 watch

TBD

## 4 class 与 style 绑定
[less4]

## 条件渲染
[less5]

v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件很少改变，则使用 v-if 较好。

`<div v-if="is_ok">is this if content</div>`

## 列表渲染
[less6]

数组的 v-for

    <p v-for="user in users">{{ user.name }} : {{ user.sex }}</p>

    data: {
        users: [
            {
                name: 'xiao hong',
                sex: 'female',
            },
            {
                name: 'xiao huang',
                sex: 'male', 
            }
        ]
    },

对象的 v-for

    <li v-for="(val, key) in teacher">{{ key }} : {{ val }}</li>

        teacher: {
            name: 'xx',
            sex: 'oo',
            tel: '110'
        },

## 事件处理


    <button v-on:click="clickMe">click Me</button>

    methods: {
        clickMe: function(e) {
            this.count++;
        }
    }


## 表单输入绑定
[less8.html]


## 组件
[less9.html]

当我们定义这个 <button-counter> 组件时，你可能会发现它的 data 并不是像这样直接提供一个对象：

    data: {
      count: 0
    }

取而代之的是，一个组件的 data 选项必须是一个函数，因此每个实例可以维护一份被返回对象的独立的拷贝：

    data: function () {
      return {
        count: 0
      }
    }

- 但是在组件中，因为可能在多处调用同一组件，为了不让多处的组件共享同一data对象，只能返回函数。

- 解释: data为对象的话会报错，为了理解这种机制，我们假设data为一个对象，那么这同一个对象有可能被很多实例共享，一个实例改变其它也会跟着变，这明显是不对的。而通过data函数，每新建一个实例，都会调用data来return一组新的原始数据。


