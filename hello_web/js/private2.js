import {Person} from './private1.js'

let person = new Person();

const handler = {
    get(target,prop){
        if(prop.startsWith('_')){
            return
        }
        if(typeof target[prop] == 'function'){
            return target[prop].bind(target)
        }
            return target[prop]
        
    },
    set(target,prop,value){
        if(prop.startsWith('_')){
            return
        }else{
            target[prop]=value
        }
    },
    ownkeys(target,prop){
        Object.keys(target).filter(key => {return !key.startsWith('_')})
    }
}

let personProxy = new Proxy(person,handler);

console.log(personProxy.toString())

console.log(personProxy._name)
console.log(personProxy._age)
