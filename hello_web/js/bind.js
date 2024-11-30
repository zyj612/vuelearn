function log(...args){
    console.log(this,args)
}


log(1,2)

const bindLog = log.bind("this value",1,2)

bindLog(3,4,5)