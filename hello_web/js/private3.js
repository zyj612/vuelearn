const nameSymbol = Symbol('name')
const ageSymbol = Symbol('age')


class Person{
    constructor(){
        this[nameSymbol] = '小明'
        this[ageSymbol] = 18
    }

    toString(){
        return 'I\'m ' + this[nameSymbol]+',' +this[ageSymbol]+'year old' 
    }

    // 暴露name属性
    get name(){
        return this[nameSymbol]
    }
}

let person = new Person()

console.log(Object.keys(person))

console.log(person.name)
console.log(person.age)

console.log(person.toString())

//通过特殊方式获取Symbol属性
let [p1 , p2] = Object.getOwnPropertySymbols(person)

console.log(person[p1])
console.log(person[p2])