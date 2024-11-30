//1.导入{}中的变量
import { flag,sum } from "./aaa.js";
if (flag) {
    console.log('小明是天才，哈哈哈');
}

//直接导入export定义的变量
import {num1,height} from "./aaa.js";

console.log(num1);
console.log(height);

//导入export定义的function
import {mul,Person} from "./aaa.js";
console.log(mul(10,13));

const person = new Person();
person.run();

//可以将default导出的任意命名后导入
import myFunc from "./aaa.js";
console.log(myFunc);
myFunc('你好啊！');

//统一全部导入
import * as aaa from "./aaa.js";
console.log(aaa.flag);
console.log(aaa.name);
console.log(aaa.height);