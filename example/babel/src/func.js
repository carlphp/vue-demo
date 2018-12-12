//具有一个参数的简单函数
let s = a => a;

let res = s('hello es6');

console.log(res);


// //没有参数需要加上小括号
let log = () => {
    alert('no param') 
}

log();


let add = (a, b) => a + b;

console.log(add(2, 1));
