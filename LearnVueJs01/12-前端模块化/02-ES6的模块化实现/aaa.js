
var obj = {}
var name = '小明';
var age = 18;

function sum(num1, num2) {
    return num1 + num2;
}

var flag = true;
if (flag) {
    console.log(sum(10, 20));
}

//导出方式1
export {
    flag ,sum
}

//导出方式2
export var num1 = 1000;
export var height = 188;

//导出函数
export function mul(num1,num2){
    return num1+num2;
}


export class Person{
    run(){
        console.log('我在奔跑。。。');
    }
}

// const address = '北京市';
// export default address;

export default function(argument){
    console.log(argument);
}
