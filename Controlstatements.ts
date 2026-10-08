//1. Write an if statement to check age is greater than 18

let Age = 30
if(Age>18){
    console.log("Age is greater then 18");
}

//2. Write an if statement to check number is positive

let num = 10
if(num>0){
    console.log("Its Positive");
}

//3. Write an if else statment to check voting eligibility

let VotingAge = 20
if(VotingAge>=18){
    console.log("Eligible to vote");
}
else{
    console.log("Not eligible to vote");
}

//4. Write an if else statement to check number is even or odd

let number = 7
if(number%2==0){
    console.log("Even number");
}
else{
    console.log("Odd number");
}

//5. Write and if else statement to check pass or fail

let Mark = 35
if(Mark>=35){
    console.log("Passed");
}
else{
    console.log("Failed");
}

//6. Write a nested if example with condition1,sondition2 and condition3

let Age1 = 30
let Constituency = true
let Voterid = true

if(Age1>=18){
    if(Constituency=true){
        if(Voterid = true){
            console.log("Correct candidate and eligible to vote");
        }
    }
}

//7. Write a nested if program to check student grade

let ExamMark = 60

if(ExamMark>=35){
    if(ExamMark >= 90 && ExamMark <= 100){
        console.log("First Grade");
}
else if(ExamMark >=60 && ExamMark <90){
    console.log("Second Grade");
}
else if(ExamMark>35 && ExamMark <60){
    console.log("Third Grade");   
}
}
else{
    console.log("Failed");
    
}

//8. Write a nested if program to check biggest number among three numbers

let a:number=10, b:number=20, c:number=30

if(a>b){
    if(a>c){
        console.log("A is greater number");
    }
    else {
        console.log("B is greater number");
    }
}
    else{
        console.log("C is greater number");
}

//9. Write a switch statement with 3 cases

let Day = 2

switch (Day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;
}

//10. Write a switch statement with 6 cases

let Days = 5

switch (Days) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

     case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

}

//11. Write a switch statement with default case

let day = 6

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

     case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    default:
        console.log("Weekend");
}
        

//12. Write a switch statement to print day name using number

console.log("Already 10th program is same");

//13. Write a switch statement to check selected option

let Api = 4

switch (Api) {
    case 1:
        console.log("Post");
        break;

    case 2:
        console.log("Push");
        break;

    case 3:
        console.log("Delete");
        break;

     default:
        console.log("Error");
}

//14. Write a while loop to print numbers from 1 to 5

console.log("Printing 14th program number 1 to 5");
let i = 1;
while(i<=5){
    console.log(i);
    i++
}
//15. Write a while loop to print numbers from 1 to 10

console.log("Printing 15th program number 1 to 10");
let j = 1;
while(j<=10){
    console.log(j);
    j++
}

//16. Write a while loop to print even numbers from 1 to 10

console.log("Print 16th program even numbers from 1 to 10");
let even = 2;
while(even <= 10){
    console.log(even);
    even+=2;

}

//17. Write a while loop to print odd numbers from 1 to 10

console.log("Print 17th program odd numbers from 1 to 10");

let odd = 1;
while(odd <= 10){
    console.log(odd);
    odd+=2;
}

//18. Write a do while loop to print numbers from 1 to 5
console.log("Printing 18th program do while print numbers from 1 to 5");
let im = 1;
do{
    console.log(im);
    im++;
} while(im<=5);

//19. Write a do while loop to print numbers from 1 to 10.
//20. Write a do while loop that run at least once.
//21. Write a for loop to print numbers from 1 to 10

console.log("Printing 21st program for loop from 1 to 10");
for(let i = 1; i<=10; i++){
    console.log(i);
}

//22. Write a for loop using increment

console.log("Same as 21st program");

//23. Write a for loop using decrement

console.log("Printing 23rd program for loop  using decrement");

for(let i = 5; i>=1; i--){
    console.log(i);
}

//24. Write a for loop to print numbers from 10 to 1
console.log("Same as 23rd program");

//25. Write a for...of loop to print array values

console.log("Printing values using for...of loop");
let arr:number[]=[1,2,3,4,5]
for (let value of arr) {
    console.log(value);
}

//26. Write a for...of loop to print string characters.

console.log("Printing String characters using for...of loop");
let sname:string[]=["Hari"]
for (let ch of sname) {
    console.log(ch);
}

//27. Write a for...in loop to print object keys

console.log("Printing object keys using for...in loop");
let employee = {
    name:"Hari",
    age:30,
    city:"chennai"
}
for(let key in employee){
    console.log(key);
    
}

//28. Write a for...in loop to print array indexes

console.log("Printing array index using for...in loop");
let ar : number[] = [1,2,3,4,5,6]
for(let index in ar){
    console.log(index);  
} 

//29. Write a loop example using break statement

console.log("Loop example using break statement");
for(let i=0;i<=10;i++){
    if(i==3){
        break;
    }
    console.log(i);
}

//30. Write a loop example using continue statement

console.log("Loop example using continue statement");
for(let i=0;i<=5;i++){
    if(i==3){
        continue;
    }
    console.log(i);
}