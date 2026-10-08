//1. Create two variables a=10 and b=5

let aa:number = 5
let bb:number = 10

//2. Add a and b using + operator

console.log("Addition of : ", aa+bb);

//3. Subtracr b from a using - operator

console.log("Subtraction of : ", aa-bb);

//4. Multiply a and b using * operator

console.log("Multiplication of ",aa*bb);

//5. Divide a by b using / operator

console.log("Divisible of : ", aa/bb);

//6. Find reminder using % operator

console.log("Reminder of : ", aa%bb);

//7. Use ++ operator with a variable

let x:number = 10;
x++
console.log(x);

//8. Use -- operator with a variable
x--
console.log(x);

//9. Assign value 10 to a variable using = operator

let num:number=10;
console.log(num);

//10. Use += operator and print the result

num+= 5;
console.log(num);

//11. Use -= operator and print the result

num-=3
console.log(num);

//12. Use *= operator and print the result
num*=5;
console.log(num);

//13. Compare two values using == operator

let xx:number = 5;
let yy:number = '5';

console.log(xx==yy);

//14. Compare two values using === operator

console.log(xx===yy);

//15. Write a ternary operator example to check voter age

let personage = 20;
let votingage = personage>=18 ? "Eligible for vote" : "Not eligible for vote"