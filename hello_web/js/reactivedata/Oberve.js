import Dep from 'Dep.js'

//定义响应式是数据
function defineReactive(data,key,val=data[key]){
    let dep = new Dep();
    Object.defineProperty(data,key,{
      enumerable:true,
      //writable:true,
      get:function(){
        console.log("读取触发get函数")
        dep.gather();
        return val;
      },
      set:function(newVal){
        console.log("更新触发set函数")
        if(val===newVal){
            return
        }
        val=newVal
      }
    })
}

