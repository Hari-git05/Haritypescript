//1. Create a parent class named Car

class Car {

}

//2. Create a child class named BMW that extends Car

class BMW extends Car{

}

//3. Create a child class named Benz that extends Car

class Benz extends Car{

}

//4. Write an example using extends keyword

class Carr{
    model : string = "SUV"
}
class BMWW extends Carr{
    price : number = 100000 
}
let bm = new BMWW
console.log(bm.price);
console.log(bm.model);

//5. Create a parent class with one property
console.log("Already done");

//6. Create a child class that inherits parent class property
console.log("Already done in 4th program");

//7. Create a parent class with one method

class car{
    Basefeatures(){
        console.log("Base features has configured");
    }
}

//8. Access parent class method from child class

class upgrade extends car {
    Updatefeatures(){
        console.log("Updated features are added");
    }
}

let upg = new upgrade
upg.Basefeatures()

//9. Use super() to call parent class constructor

class Base {
    constructor(){
        console.log("Parent Constructor");
    }
    reverse(){
        console.log("Reverse Camera updated");
    }
    gear(){
        console.log("Manual gear");
    }
}
class Mid extends Base {
    constructor(){
        super()
        console.log("Child Constructor");
    }
    Threesixty(){
        console.log("360 Camera updated");   
    }
    gear(){
        console.log("Automatic gear");
    }
}

let md = new Mid
md.reverse()
md.Threesixty()
md.gear()

//10. Use super keyword to call parent class method
console.log("Already done in 9th program");

//11. Write an example for method overriding
console.log("Already done in 9th program");

//12. Create a public property and access it anywhere
//13. Create a private property and access it inside child class
//14. Create a protected property and access it inside child class
//15. Write one complete inheritance program using parent class and child class
