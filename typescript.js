// data types
var num = 5;
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
//same as above
var rest1 = function () {
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
