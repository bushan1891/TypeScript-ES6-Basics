
// data types
let num: number = 5;
let str:string ="hi";
let bol: boolean = true;
let num2: Array<number> = [3, 3, 33];
let list: number[] = [3, 3, 3];

// de structuring array

let [one, two] = ["test", 5];
let [three, four, five] = list;
console.log(one, two, three, four, five);

// de structuring object
let obj = {
    test: 3,
    runs: 5
}

let {test} = obj; // value of test is 3
let {runs} = obj; // value of runs is 5

console.log("test", test);

//tuple
let tup: [string, number];
tup = ["tt", 2];
let tup2: [string, number, number];
tup2 = ["hey", 2, 2];

//enum
enum cards { sapdes, ace, clubs, hearts, diamonds };
let enumTestValue1 = cards.ace; //value will be 1
let enumTestValue2 = cards.hearts; //value will be 3
let enumTestValue3 = cards.diamonds; //value will be 4

console.log("enum values", enumTestValue1, enumTestValue2, enumTestValue3);


// map
let num4: number[] = [1, 2, 3, 4, , 5, 6];
num4.map((obj) => console.log("Map using array", obj));


// functions in type script
let add = function (x: number, y: number): string {
    let sum: number = x + y;
    return "Sum is " + x + y;
}


//optional parameters in typescript 
let optionalParam = function (x: string, y?: string): string {
    return `${x} ${y}`;
}

//rest parameters 
let rest = function (...rest: any[]) {
    return `${rest}`;
}

//must be a string array 
let rest2 = function (...rest: string[]) {
    return `${rest}`;
}

let resRest = rest(["", 1, "", "test"]);
console.log("rest Parameters", resRest);

let res: string = optionalParam("bushan");
alert(res);

// fat arrow function 
() => {
    console.log('i am fat arrow ');
}

// this in fat arrow refers to the actual caller value 
setTimeout(() => console.log('i am fat arrow'), 3000);


// class in es5 vs class in typescript/es6

// es5 

// function Animal(name,breed) {
//     this.name=name;
//     this.breed=breed;

//     this.pet=function() {
//         console.log('petting..' + this.name);
//     }

// }

// Animal.prototype.walk=function(){
//     console.log('Walking with..' + this.name);
// }


// let dog = new Animal("chotu","labridor");
// dog.pet();
// dog.walk();

class Vehicle{
    type: string;

    constructor(type:string) {
        this.type = type;
    }

    testDrive():string {
        return "Driving.." + this.type;
    }

}


let bmw = new Vehicle("3 Series");
let val = bmw.testDrive();
console.log(val);


//access specifiers 
// public private protected
// readonly => means constant or final in java
// static variable no need for instance of an object 


class Parent {
    private key: string;
    private x: number;
    public y: string;
    protected z:string;

    constructor(key:string, x:number, y:string, z:string) {
        this.key = key;
        this.x = x;
        this.y = y;
        this.z = z;
    }

    display(): void{
        console.log("I am Parent! ", this.key, this.x, this.y, this.z);
   } 

}

class child extends Parent{
    constructor() {
        super("test", 1, "hi", "how");
        console.log(this.y, this.z); // can access public and protected methods 
        //console.log(this.key); error variable is private 
    }
}

let p: Parent = new Parent("test", 1, "hi", "how");
console.log(p.y); // public can be used outside the class as well 
//console.log(p.z, p.key); //can not be accessed outside the class 


// abstract class
abstract class Structure{
    sayHi():void {
        console.log("Hi, how are you doing!");
    }
    abstract display(): void;
}

// extend the abstract calss 

class Home extends Structure{
    // implementing the abstract methods 
    display() {
        console.log("I am implemented in home");
    }

    static sayHello():void {
        console.log("Hello, i am a static method  "); 
    }
}

Home.sayHello(); // no instance is requried 



//Interfaces 

interface Industry{
    type: string;
    location: string;
    place?: string;
}

function func(test:Industry) {
    
}

func({ type: "str", location: "str", place: "str" }); //valid 
func({ type: "str", location: "str" }); //valid 
//func({type:"str"}); //invalid 

//interface
interface Company{
    (name:string,location:string):void;
}

let func1:Company = function (namwe:string,location:string) {
    
}

// interface can have variables and they need not be final like in java  

interface Wizardz {
    spell: string;
    magic: boolean;
    castSpell(name: string, trick: string):void;
}

class Harry implements Wizardz{
    spell: string;
    magic: boolean;

    constructor(spell: string, magic: boolean) {
        this.spell=spell;
        this.magic = magic;
    }

    castSpell(name:string,trick:string): void{
        console.log(name +" :  " + trick);
    }

}

let wiz = new Harry("Expecto potramo", true);
wiz.castSpell(wiz.spell, "Makes the object fly");







