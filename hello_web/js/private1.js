export class Person{
    constructor() {
        this._name='小明';
        this._age=30;
        this.role='管理员';
    }
    
    toString(){
        return 'I\'m '+this._name+',' + this._age + ' year old';
    }
}

let person = new Person();

console.log(person.toString())

console.log(person._name)
console.log(person._age)

