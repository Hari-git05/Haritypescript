//1. Create a variable age with number data type

let age : number = 30;
console.log(age);


//2. Create a variable price with number data type and store decimal value.

let price:number = 50.50;
console.log(price);


//3. Create a variable name with string data type

let sname:string = "Hari"
console.log(sname);

//4. Create a greeting using template string

let greeting:string = `Hello, ${sname}! Welcome`;
console.log(greeting);

//5. Create a boolean variable inTester and assign true

let inTester:boolean = true;
console.log(inTester);

//6. Create a boolean variable isAdmin and assign false

let isAdmin:boolean = false;
console.log(isAdmin);

//7. Create an any variable and assign number, string, and boolean values

let value:number=50
let gname:string="Hari"
let bolen:boolean=true

console.log(value);
console.log(gname);
console.log(bolen);

//8. Create an unknown variable with string value

let data:unknown = "hello world"
console.log(data);

//9. Check unknown variable type before using toUpperCase()

if (typeof data === "string"){
    console.log(data.toUpperCase());
}

//10. Write a function greet() with void return type
function greet(){
    console.log("Hello Typescript");   
}
greet();

//11. Create a null variable and assign null

let emptyvalue:null = null;
console.log(emptyvalue);

//12. Creata a undefined variable and assign undefined.

let notassigned:undefined = undefined;
console.log(notassigned);

//13. Write one example for type annotation
let city:string = "Chennai"
console.log(city);

//14. Write one example for type inference

let country = "India"
console.log(country);

//15. Create a union type variable that accepts more than one data type

let id:number | string
console.log(100);
console.log("emp101");

