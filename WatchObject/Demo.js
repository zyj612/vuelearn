import Observer from "./Observer.js"
import Watcher from "./Watcher.js";

let data = {
  name:"A",
  age:18
}

//将data对象转换成了getter/setter的形式来追踪变化。
new Observer(data);

//通过通知者监控具体的数据引用依赖
new Watcher(data,'name',function(newVal,oldVal){
   console.log("新值："+newVal);
   console.log("旧值："+oldVal);
});


console.log("data的name值："+data.name);


data.name="B";

//console.log("data的name值："+data.name);

//console.log("data的name值："+data.name);
