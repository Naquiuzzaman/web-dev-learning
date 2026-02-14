//-----------------------------------------------------
//  Chapter 11: Objects and Object-Oriented Programming
//-----------------------------------------------------

// Objects
const student = {
    fullName: "Naquiuzzaman",
    marks: 98.78,
    grade: "A+",
    printMarks: function() {
        console.log ("marks =", this.marks);
    },
}; 
// aceesesing object prototype in new object 
const employee = {
    calcTax() {
        console.log("tax rate is 10%");      
    }
};

const KaranArjun = {
    salary: 50000,
};

// setting employee as prototype of KaranArjun
KaranArjun.__proto__ = employee;


//--------------
// Classes in Js
//--------------

class ToyotaCar {
    constructor(brand, mileage){
    console.log("creating new object");
    this.brand = brand;
    this.mileage = mileage;
    }

    start(){
        console.log("Car started");
    }

    stop(){
        xonsole.log("car stopped");
    }

    setBrand(brand){
        this.brand = brand;
    }    
}

let fortuner = new ToyotaCar("Toyota", 15);
let lexus = new ToyotaCar("Lexus", 20);
console.log(fortuner);
console.log(lexus);


//-------------------
// Inheritance in Js
//-------------------

class person{
    constructor(){
        this.species = "homo sapiens";
    }

    eat(){
        console.log("eating");
    }

    sleep(){
        console.log("sleping");
    }

    work(){
        console.log("do nothing");
    }
}

class Engineer extends person{
    work (){
        console.log("solve problems, build something");
    }
}

class Doctor{
    work(){
        console.log("treat patients");
    }
}

let Marhaba = new Engineer();

//------------- 
//Super keyword
//-------------

class person{
    constructor(){
        this.species = "homo sapiens";
    }
    work(){
        console.log("do nothing");
    }
}

class Engineer extends person{
    constructor(branch){
        super(); // calling parent constructor
    }
    work (){
        console.log("solve problems, build something");
    }
let EngObj= new Engineer("Computer Science");