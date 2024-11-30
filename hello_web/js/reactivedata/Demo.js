let student={name:'小明',age:18}

defineReactive(student,"age");

student.age=19

console.log("学生姓名："+student.age)
