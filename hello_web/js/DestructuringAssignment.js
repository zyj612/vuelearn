const person = {personName:'小明',age:18}

const {a,personName,...rest} = person

console.log(personName)

console.log(rest)