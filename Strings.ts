//1. Create a string using double quotes

let str = "Hello Typescript"
console.log(str);

//2. Create a string using single quotes

let str1 = 'Learn programming typescript'
console.log(str1);

//3. Create a string using backtick

let str2 = `Automation`
console.log(str2);

//4. Create a string using backtick and print variable value inside it

console.log(`${str2}`);

//5. Find the length of a string

console.log(str.length);

//6. Convert a string to uppercase using toUpperCase()

console.log(str.toUpperCase());

//7. Convert a string to lowercase using toLowerCase()

console.log(str.toLowerCase());

//8. Get a character from a specific index using charAt()

console.log(str.charAt(3));

//9. Find the first position of a character using indexOf()

console.log(str.indexOf('l'));

//10. Use indexOf() for a character not found and print the result

console.log(str.indexOf('z'));

//11. Check whether a string starts with a given value using startsWith()

console.log(str.startsWith('Hel'));

//12. Check whether a string ends with a given value using endsWith()

console.log(str.endsWith('script'));

//13. Extract characters using substring()

console.log(str1.substring(6,17));

//14. Use substring(0,4) for the string "Automation"

console.log(str2.substring(0,4));

//15. Write example using replace(),split(),trim() and concat()

let string = "  I got a job and working in Google  "

//replace:
console.log(string.replace("I","We"));

//split:
console.log(string.split(" "));

//trim()
console.log(string.trim());

//concat
console.log(str.concat(str1));





