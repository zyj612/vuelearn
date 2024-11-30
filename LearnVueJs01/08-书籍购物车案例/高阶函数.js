//filter//map/reduce
//filter回调函数必须返回boolean值
//返回true会自动加入到新数组中，如果返回false就舍去
// let newNums1 = nums.filter(function (n) {
//     return n < 20;
// });
// console.log(newNums1);
// //map函数是将现有元素做逻辑处理
// let newNums2 = newNums1.map(function (n) {
//     return n * 2;
// });
// console.log(newNums2);
// //reduce函数
// //参数1上一次返回的值，参数2是当前值
// let newNums3 = newNums2.reduce(function (preValue, n) {
//     return preValue+n;
// }, 0);
// console.log(newNums3);

let total = nums.filter(function(n){
    return n<100
}).map(function(n){
    return n*2;
}).reduce(function(preValue,n){
    return preValue+n;
},0);
console.log(total);