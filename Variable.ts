//1. Create a variable using let and store your age

let Empage = 30;
console.log(Empage);

//2. Create a variable using const and store your name

const Empname = "Hari";
console.log(Empname);

//3.Declare a variable count without value, then assign 10 to it.

let EmpHeight;
EmpHeight = 5.8;

//4. Write a Typescript variable with number type annotation

let age:number = 20;
console.log(age);

//5. Write a Typescript variable with string type annotation

const empname:string = "Hari";
console.log(empname);

//6. Create a let variable and reassign its value

let age1 = 30;
age1 = 32;


//7. Create a const variable and try to ressign its value

//const namee = "Hari";
//namee = "Prasath";

//8. Write an example for variable declaration

let Empdesignation;

//9. Write an example for variable initialization

let Empdesig = "Tester"

//10. Create a var variable and redeclare it with another value.

var a = 10;
var a = 20;

//11. Try to redclare a let variable in the same scope

let b = 20;
//let b = 30;

//12. Write a block scope example using let inside if block

if(true)
{
   let place = "Chennai";
   console.log(place);
   
}

//13. Write a function scope example using var inside a function

function Car()
{
    if(true)
    {
        var mycar = "Defender";
        //console.log(mycar);
        
    }

    console.log(mycar);
    
}
Car();


//14. Write an example showing var hoisting returns undefined

console.log(a);
//let a = 10;

//15. Write an example showing let or const gives TDZ error before declaration.