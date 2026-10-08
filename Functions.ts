//1. Write a named function with no parameter and no return type
function greet(){
    console.log("Hello Typescript");
}
greet();

//2. Write a named function with parameters and no return type
function display(name:string,age:number){
console.log("Name is : ", name);
console.log("Age is : ", age);
}
display("Hari",32)

//3. Write a named function with parameters and number return type

function add(a:number,b:number):number{
return a+b;
}
console.log(10,20);

//4. Write a function multiply() that returns multiplication of two numbers

function multiply(a:number,b:number):number{
return a*b;
}
console.log(10,5);

//5. Write a function sum() that prints additional two numbers

function sum(a:number,b:number){
console.log("Sum is : ",a+b);
}
sum(10,20);

//6. Write a named function using rest parameter

function empName(...name:string[]){
console.log("Eployee names are : ", name);
}
empName("Hari","Prasath","Suresh","Yuvraj")

//7. Write a function add() using rest parameter to add multiple numbers.

function addd(...nums:number[]):number{
let total = 0;
for(let n of nums){
 total+=n;
}
return total;
}
console.log(addd(5,10,15,20));

//8. Write a function with optional parameter

function employee(name:string,age?:number){
    console.log("Name is : ", name);
    console.log("Age is  : ", age);
}
employee("Hari",32);
employee("Prasath");

//9. Write a display() function with empId, empName and optional empAge 

function displayemp(empId:number,empName:string,empAge?:number){
console.log("Emp id is   : ", empId);
console.log("Emp name is : ", empName);
console.log("Emp age is  : ", empAge);
}
displayemp(100,"Hari",32)
displayemp(101,"Prasath")

//10. Write a function with default parameter

function welcome(name:string = "Hari"){
    console.log("Welcome to the function Mr : ", name);
}
welcome();
welcome("prasath");

//11. Write an anonymous function and call it

let announce = function(){
    console.log("Welcome everyone");
}
announce();

//12. Write an anonymous function with string return type.

let getamount = function(amount:string):string{
return amount;
}
console.log(getamount("Thousand ruppes"));

//13. Write an anonymous function using rest parameter.

let names = function(...name:string[]){
for(let n of name){
    console.log(n);
}
}
console.log(names("Hari","Prasath"));

//14. Write an arrow function with no parameter and no return type.

let greetings = (): void =>{
console.log("Hellow world");
}
greetings();

//15. Write an arrow function with parameters and number return type.

let Division = (a:number,b:number):number=>{
    return a/b;
}
console.log(Division(10,5));
