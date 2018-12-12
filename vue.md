## 1 vue 实例

1.1 创建一个VUE实例

1.2 vue 数据，方法 (实例属性 vm.$data)

1.3 实例的声明周期钩子

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

<select v-model="selected">

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

但是在组件中，因为可能在多处调用同一组件，为了不让多处的组件共享同一data对象，只能返回函数。

解释: data为对象的话会报错，为了理解这种机制，我们假设data为一个对象，那么这同一个对象有可能被很多实例共享，一个实例改变其它也会跟着变，这明显是不对的。而通过data函数，每新建一个实例，都会调用data来return一组新的原始数据。


