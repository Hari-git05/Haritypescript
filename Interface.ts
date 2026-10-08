//1. Creata a simple interface named Student

interface Student {

}

//2. Create an interface with regular properties

interface student {
    id : number
    name : string
    rollno? : number
    readonly email : string
}

let stu : Student = {
    id : 100,
    name : "Hari",
    email : "Hari@gmail.com"
}

console.log(stu);

//3. Create an interface with optional property using ?

console.log("Already done in program 2");

//4. Create an interfac with readonly property

console.log("Already done in program 2");

//5. Create an interface with one abstract method signature
interface stud{
    display():void
}

//6. Create an object based on an interface
console.log("Already done");

//7. Create an interface named Employee with name and salary

interface Employee{
    id : number
    name : string
}

let emp : Employee = {
    id : 1000,
    name : "Hari"
}

console.log(stu);
console.log(emp.id);
console.log(emp.name);


//8. Create an interface with method signature getDetails()

interface employ{
    getDetails():void
}

class Emplye{
    getDetails(){
        console.log("Employee details");
    }
}

let em = new Emplye
em.getDetails()

//9. Create one interface and extend it in another interface

interface school {
    id : number
}

interface college extends school{
    course : string
}

let stud : college = {
    id : 993,
    course : "computer"
}

console.log(stud);

//10. Write an example for interface extends interface
console.log("Already done");

//11. Write and example for class extends class

class A {
    dev(){
    console.log("Class A")
    }
}

class B extends A{
    qa(){
        console.log("Class B");
    }
}

//12. Write an example for class implements interface
console.log("Done in 15th program");

//13. Create a class that implements Student interface
console.log("Done in 15th program");

//14. Try to modify readonly property and note the result
console.log("Done in 15th program");

//15. Write one complete program using interface, properties and method signature

interface Student {
    id : number
    readonly name : string
    email : string
}

class Employee implements Student {
    id = 123
    name = "prasath"
    email = "Hari@gmail.com"

    getDetails(){
        console.log("Id is : ",this.id);
        console.log("Name is : ",this.name);
        console.log("Email is : ",this.email);
    }
}

let empl = new Employee
empl.getDetails()

//name = "Hari"


