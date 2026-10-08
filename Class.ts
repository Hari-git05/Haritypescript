//1. Create a simple class with properties

class Studentt{
    name:string
    age:number

    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
}

let s1 = new Studentt("Prasath",25)
console.log(s1.name);
console.log(s1.age);


//2. Create a class with constructor

class Student{
    name:string;
    age:number;

    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
}

let stu = new Student("Hari",30)
console.log(stu.name);
console.log(stu.age);

//3. Assign values to class properties using constructor
console.log("Same done in Program 2");

//4. Create an object for a class
console.log("Same done in Program 2");

//5. Create a class with one method

class Employee{
    name:string;
    age:number;

    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }

    displaydetails(){
        console.log(`Employee name is : ${this.name} and Employee age is : ${this.age}`);
    }
}

let emp = new Employee("Hari",30)
emp.displaydetails();

//6. Call a method using object

console.log("Already done in 5th program");

//7. Create a readonly property inside a class

class employee{
    readonly name:string;
            age:number;
            email?:string;

    constructor(name : string, age : number, email?: string){
        this.name=name; 
        this.age=age;
        this.email=email;
    }

    displaydetails(){
        console.log(`Employee name is : ${this.name} and Employee age is : ${this.age}`);
    }
}

let empp = new employee("Hari",30,"Hari@gmail.com")
let empp2 = new employee("prasath", 25);
empp.displaydetails();
empp2.displaydetails();

//8. Try to modify readonly property and note the result

empp.name = "Prasath"

//9. Create an optional property using ? symbol

console.log("Already done in 7th program");

//10. Create a static variables inside a class

class student{
    static stuName = "Hari"
}

//11. Access static variable using class name

 console.log(student.stuName);

//12. Create a static method inside a class

class studentt{
    static stuName = "Hari"

    static getDetails(){
        console.log("Get the student details");
    }
}

//13. Access static method using class name

studentt.getDetails()

//14. Write a constructor overloading example using multiple signature and single implementation

class Employeone{

name : string;
age : number;

constructor(name : string)
constructor(name : string , age : number)

constructor(name : string , age? : number){
this.name = name;
this.age= age ?? 18;
}

displayinfo(){
    console.log("Emplyee name is : ", this.name)
    console.log("Employee age is : ", this.age);
}
}

let empone = new Employeone("Hari",32)
empone.displayinfo()

let empone1 = new Employeone("Prasath")
empone1.displayinfo()

//15. Use nullish coalescing operator ?? to assign default age value

console.log("Already done in 14th program");
