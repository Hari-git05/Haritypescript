//1. Create a number array with values 4,5,9,2

let numb = [4,5,9,2]
console.log("Number arrays are : ", numb);

//2. Use map() to find square of all elements in an array

let square = numb.map(num=>num*num)
console.log("Square of ell elements values are : ",square);

//3. Use map() with arrow function to multiply each element by 2

let square1 = numb.map(num=>num*2)
console.log("Multiply of each element by 2 value is : ",square1);

//4. Create a number array with values 1,2,3,4,5,6

let number = [1,2,3,4,5,6]
console.log("Number arrays are : ",number);

//5. Use filter() to fetch even numbers from an array

let even = number.filter(num=>num%2==0)
console.log("Even number of arrays are : ",even);

//6. Print the original array using filter()

console.log("Original array without fileter is : ",number);

//7.Use reduce() to find sum of all numbers in an array

let res = number.reduce((total,num)=>total+num)
console.log("Sum of all array values are : ",res);

//8. Create a number array [4,5,9,2] and use map() to return square of each element

console.log("Same program done in No.2");

//9. Create a number array [1,2,3] and use map() to multiply each element by 2

console.log("Same program done in No.3");

//10. Use map() with normal function to transform array values
//11. Use map() with anonymous function to transform array values
//12. Use map() with arrow function to transform array values


//13. Create an array [10,20,30] and use map() to add 5 to each element

let num1 : number[]=[10,20,30]
let reslt = num1.map(num=>num+5)
console.log("Adding 5 to each element : ",reslt);

//14. Create an array [2,4,6,8] and use map() to divide each element by 2

let num2 : number[]=[2,4,6,8]
let reslt1 = num2.map(num=>num/2)
console.log("Dividing each element by 2 is : ",reslt1);

//15. Create an array [1,2,3,4,5,6] and use filter() to get even numbers

let filt = [1,2,3,4,5,6]
let even1 = filt.filter(num=>num%2==0)
console.log("Even numbers using filters are : ",even1);

//16. Create an array [1,2,3,4,5,6] and use filter() to get odd numbers

let odd = filt.filter(num=>num%2!==0)
console.log("Odd numbers using filters are : ", odd);

//17. Use filter() with normal function to fetch even numbers

let arr = [1,2,3,4,5,6]
function isEven(num:number):boolean{
    return num%2==0
}
let res1 = arr.filter(isEven)
console.log("Fetching even number using normal function in filter: ",res1)



//18. Use filter() with anonymous function to fetch even numbers

let res2 = arr.filter(function(num:number){
return num%2==0
})
console.log("Fetching even numbers using anonymous function in filter : ",res2);

//19. Use filter() with arrow function to fetch even numbers

let res3 = arr.filter(num=>num%2==0)
console.log("Fetching even numbers using arrow function: ",res3);

//20. Create an array[5,10,15,20,25] and filter numbers greater than 15

let arr1 : number[]=[5,10,15,20,25]
let gre = arr1.filter(num=>num>15)
console.log("Filter numbers greater tha 15 : ",gre);

//21. Create an array [3,6,9,12,15] and filter numbers divisible by 3

let gret = arr1.filter(num=>num>3)
console.log("Filter numbers greater than 3 : ",gret);

//22. Create an array [1,2,3,4,5,6] and use reduce() to find sum of all elements

console.log("Already done in 7th program");

//23. Use reduce() with accumulator and currentValue to calculate total

let ar = [1,2,3,4,5,6]
let res4 = ar.reduce((accumulator,currentvalue)=>{
return accumulator+currentvalue
})
console.log("Total of Accumulator and currentvalue is : ",res4);

//24. Create an array[10,20,30,40] and use reduce() to find total value

let arr2 = [10,20,30,40]
let total = arr2.reduce((sum,num)=>sum+num)
console.log("Sum of total numbers using reduce is ",total);

//25. Create an array[2,3,4] and use reduce() to multiply all elements

let total1 = arr2.reduce((sum,num)=>sum*num)
console.log("Multiply of total numbers using reduce is ",total1);

//26. Use reduce() with initial value 0 to calculate sum

let total2 = arr2.reduce((sum,num)=>sum+num,0)
console.log("Sum of total numbers using reduce is ",total2);

//27. Use reduce() to convert [1,2,3,4,5] into a single total value
console.log("Already done");

//28. Create an array [1,3,5,8] and use some() to check if at least one even number exists

let arrr = [1,3,5,8]
let even2 = arrr.some(num=>num%2===0)
console.log("Checking one even number is exists or not : ",even2);

//29. Create an array[1,3,5,7] and use some() to check if any even number exists

let arrr1 = [1,3,5,7]
let even3 = arrr1.some(num=>num%2===0)
console.log("Checking if any even number exists ot not : ",even3);

//30. Create an array[2,4,6,8] and use every() to check if all numbers are even

let arr3 = [2,4,6,8]
let even4 = arr3.every(num=>num%2===0)
console.log("Checking all numbers are even or not : ",even4);

//31. Create an array[2,4,5,8] and use every() to check if all numbers are even

let ar1 = [2,4,5,8]
let even5 = ar1.every(num=>num%2===0)
console.log("Checking all numbers are even or not : ",even5);

//32. Create a string array ["moon","earth","jupitar","mars"] and print all values using for...of

let planets = ["moon","earth","jupiter","mars"]
for (let planet of planets) {
    console.log(planet);
}

//33. Create a string array ["moon","earth","jupitar","mars"] and print all indexes using for...in 

for (let index in planets) {
    console.log(index);
}

//34. Use forEach() with anonymous function to print each element and index from galaxy array

console.log("Printing anonymous function using for each");
let galaxy = ["Milkyway","Andromeda","Triangulum","Whirlpool"]
    galaxy.forEach(function(element,index){
        console.log(index + " : " +element);
    })

//35. Use forEach() with arrow function to print each element and index from galaxy array

console.log("Printing arrow function using for each");
   galaxy.forEach((element,index)=>{
    console.log(index + ": " +element);
   })

//36. Create a function multiple (num:number):number and pass it inside map() to multiply each element by 2

let array1 = [2,4,6,8]

 function multiple(num:number):number{
    return num*2
}

let ress = array1.map(multiple)
console.log(ress);


//37. Create one program using map(),filter(),reduce(),some() and every() with the same number array

let array:number[] = [1,2,3,4,5,6,7,8,9,10]

console.log("All arrays using map: ",(array.filter(num=>num*2)));
console.log("All arrays using filter: ",(array.filter(num=>num%2==0)));
console.log("All arrays using reduce: ",(array.reduce((sum,num)=>sum+num)));
console.log("All arrays using some: ",(array.some(num=>num%2===0)));
console.log("All arrays using every: ",(array.every(num=>num%2==0)));

