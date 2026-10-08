//1. Create a number array using[] method

let num:number[] = [10,20,30,40,50,60,70,80]
console.log(num);

//2. Create a number array using Array<number> generic method

let numb:Array<number> = [5,10,15,20,25,30]
console.log(numb);

//3. Create an array with values 12,15,90,34

let arr:number[] = [12,15,90,34]
console.log(arr);

//4. Create a tuple with string and number values
let student:[string,number]=["Hari",45];
console.log(student);

//5. Print the first element of an array using inex 0

let num1:number[] = [10,20,30,40,50,60,70,80]
console.log(num1[0]);

//6. Add an element at the end of an array using push()

let company : string[] = ["Tcs","Capgemini","Wipro","Infosys","Hcl"]
company.push("Google");
console.log(company);

//7. Remove the last element of an array using pop()

let removedelement = company.pop();
console.log(removedelement);
console.log(company);

//8. Add an element at the beginning using unshift()

console.log("Adding element using unshift");
company.unshift("Google")
console.log(company);

//9. Remove the first element using shift()

console.log("Removing element using shift");
let shiftelement = company.shift()
console.log(shiftelement);
console.log(company);

//10. Use slice() to extract a portion from an array

console.log("Below are slice elements");
let slice = company.slice(1,4);
console.log(slice);

//11. Use splice() to delete elements from an array

console.log("Removing element using splice");
company.splice(1,3);
console.log(company);

//12. Use splice() to add elements in an array

console.log("Add elements using splice");
company.splice(1,0,"Capgemini","Wipro","Infosys")
console.log(company);

//13. Use indexOf() to find an element index

let ind = company.indexOf("Wipro")
console.log(ind);

//14. Use indexOf() for an element not found and print the result

let inde = company.indexOf("Google")
console.log(inde);

//15. Use includes() to check whether an element exists in array

let inclu = company.includes("Capgemini")
console.log(inclu);
