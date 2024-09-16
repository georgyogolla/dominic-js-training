const manager = {
    name: "manager",
    role: "manager",
    salary: 50000,
    department: "sales",
    employees: [
        {name: "employee1", role: "employee", salary: 30000},
    ]
}

const intern = {
    name: "intern",
    role: "intern",
    salary: 20000,
    department: "sales",
}

const student = {
    name: "student",
    role: "student",
    salary: 10000,
    department: "sales",
}

// use thiskeyword to access current object's properties
function sayHi(){
    console.log(`This is the value of this`, this);
    
    console.log(`Hello my name is ${this.name}`);
    
}

manager.sayHi = sayHi;
intern.sayHi = sayHi;
student.sayHi = sayHi;

const managerName = manager.sayHi();
const internName = intern.sayHi();
const studentName = student.sayHi();
console.log(managerName);
console.log(internName);
console.log(studentName);
