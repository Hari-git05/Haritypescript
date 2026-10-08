//1. Create a function sample() with two number parameters

function sample(a:number,b:number){
console.log(a+b);
}
sample(10,20)

//2. Create a function sample() with one callback parameter

function Sample(){
console.log("Hello Sample");
}

function greet(callback : any){
callback();
}
greet(Sample);

//3. Create a function sample() with callback1:any parameter

function Samplecall1(){
console.log("Hello Sample with callback 1");
}

function greet1(callback : any){
callback();
}
greet(Samplecall1);


//4. Create a function sample() with callback1:any and callback2:any 

function Greet(callback1 : any, callback2 : any){
    callback1();
    callback2();
}
Greet(Sample,Samplecall1);

//5. Create a callback function named abc()

function abc(callback : any){
    callback();
}

//6. Create another callback function named def()

function def(callback : any){
    callback();
}

//7. Pass abc function as argument to sample()

function sample1(){
console.log("Passing abc1 function as arguement to sample1");
}

function abc1(callback : any ){
    callback();
}
abc1(sample1);

//8. Pass def function as argument to sample() 

function sample2(){
console.log("Passing def1 function as arguement to sample2");
}

function def2(callback : any ){
    callback();
}
abc1(sample2);

//9. Call sample() with 10 and 20 as number arguments.

function sample3(a:number,b:number):void{
console.log(a+b);
}

function acv(callback : (a:number,b:number) => void ){
    callback(10,20);
}
acv(sample3);

//10. Call sample(10,20,abc,def)

function samplee(a:number,b:number,callback1:any,callback2:any){
    console.log("Numbers are : ", a,b);
    callback1();
    callback2();
}
samplee(10,20,abc,def)

//11. Write a callback function that prints a message.
//12. Write a main function that executes callback later
//13. Write an example to control execution order using callback
//14. Write an example to reuse the same callback function
//15. Write one complete callback function program