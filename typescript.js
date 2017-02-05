var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// data types
var num = 5;
var str = "hi";
var bol = true;
var num2 = [3, 3, 33];
var list = [3, 3, 3];
// de structuring array
var _a = ["test", 5], one = _a[0], two = _a[1];
var three = list[0], four = list[1], five = list[2];
console.log(one, two, three, four, five);
// de structuring object
var obj = {
    test: 3,
    runs: 5
};
var test = obj.test; // value of test is 3
var runs = obj.runs; // value of runs is 5
console.log("test", test);
//tuple
var tup;
tup = ["tt", 2];
var tup2;
tup2 = ["hey", 2, 2];
//enum
var cards;
(function (cards) {
    cards[cards["sapdes"] = 0] = "sapdes";
    cards[cards["ace"] = 1] = "ace";
    cards[cards["clubs"] = 2] = "clubs";
    cards[cards["hearts"] = 3] = "hearts";
    cards[cards["diamonds"] = 4] = "diamonds";
})(cards || (cards = {}));
;
var enumTestValue1 = cards.ace; //value will be 1
var enumTestValue2 = cards.hearts; //value will be 3
var enumTestValue3 = cards.diamonds; //value will be 4
console.log("enum values", enumTestValue1, enumTestValue2, enumTestValue3);
// map
var num4 = [1, 2, 3, 4, , 5, 6];
num4.map(function (obj) { return console.log("Map using array", obj); });
// functions in type script
var add = function (x, y) {
    var sum = x + y;
    return "Sum is " + x + y;
};
//optional parameters in typescript 
var optionalParam = function (x, y) {
    return x + " " + y;
};
//rest parameters 
var rest = function () {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    return "" + rest;
};
//must be a string array 
var rest2 = function () {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    return "" + rest;
};
var resRest = rest(["", 1, "", "test"]);
console.log("rest Parameters", resRest);
var res = optionalParam("bushan");
alert(res);
// fat arrow function 
(function () {
    console.log('i am fat arrow ');
});
// this in fat arrow refers to the actual caller value 
setTimeout(function () { return console.log('i am fat arrow'); }, 3000);
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
var Vehicle = (function () {
    function Vehicle(type) {
        this.type = type;
    }
    Vehicle.prototype.testDrive = function () {
        return "Driving.." + this.type;
    };
    return Vehicle;
}());
var bmw = new Vehicle("3 Series");
var val = bmw.testDrive();
console.log(val);
//access specifiers 
// public private protected
// readonly => means constant or final in java
// static variable no need for instance of an object 
var Parent = (function () {
    function Parent(key, x, y, z) {
        this.key = key;
        this.x = x;
        this.y = y;
        this.z = z;
    }
    Parent.prototype.display = function () {
        console.log("I am Parent! ", this.key, this.x, this.y, this.z);
    };
    return Parent;
}());
var child = (function (_super) {
    __extends(child, _super);
    function child() {
        var _this = _super.call(this, "test", 1, "hi", "how") || this;
        console.log(_this.y, _this.z); // can access public and protected methods 
        return _this;
        //console.log(this.key); error variable is private 
    }
    return child;
}(Parent));
var p = new Parent("test", 1, "hi", "how");
console.log(p.y); // public can be used outside the class as well 
//console.log(p.z, p.key); //can not be accessed outside the class 
// abstract class
var Structure = (function () {
    function Structure() {
    }
    Structure.prototype.sayHi = function () {
        console.log("Hi, how are you doing!");
    };
    return Structure;
}());
// extend the abstract calss 
var Home = (function (_super) {
    __extends(Home, _super);
    function Home() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // implementing the abstract methods 
    Home.prototype.display = function () {
        console.log("I am implemented in home");
    };
    Home.sayHello = function () {
        console.log("Hello, i am a static method  ");
    };
    return Home;
}(Structure));
Home.sayHello(); // no instance is requried 
function func(test) {
}
func({ type: "str", location: "str", place: "str" }); //valid 
func({ type: "str", location: "str" }); //valid 
var func1 = function (namwe, location) {
};
var Harry = (function () {
    function Harry(spell, magic) {
        this.spell = spell;
        this.magic = magic;
    }
    Harry.prototype.castSpell = function (name, trick) {
        console.log(name + " :  " + trick);
    };
    return Harry;
}());
var wiz = new Harry("Expecto potramo", true);
wiz.castSpell(wiz.spell, "Makes the object fly");
